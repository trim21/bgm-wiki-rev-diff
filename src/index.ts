import * as $ from 'jquery';

import { parseRevEl } from './parser';
import { compare } from './compare';

async function main(): Promise<void> {
  console.log('start bgm-wiki-rev-diff UserScript');
  await initUI();
}

const style = `
<style>
#show-trim21-cn .d2h-code-line {
  width: calc(100% - 8em);
  padding-right: 0;
}

#show-trim21-cn .d2h-code-line-ctn {
  width: calc(100% - 8em);
}

#columnInSubjectA .rev-trim21-cn {
  margin: 0 0.2em;
}

ul#pagehistory > li > * {
  vertical-align: middle;
}
</style>
`;

async function initUI(): Promise<void> {
  $('#columnInSubjectA > hr.board').after(
    style + '<div id="show-trim21-cn"></div>',
  );

  const s = $('#pagehistory li');

  const revs = Array.from(s).map(function (e) {
    return parseRevEl($(e))?.id;
  });

  s.each(function (index) {
    const el = $(this);
    const id = revs[index];
    if (!id) {
      el.prepend('<span style="padding-right: 1.4em"> 无法用于比较 </span>');
      return;
    }
    el.prepend(
      `<input type="radio" class="rev-trim21-cn" name="rev-right" label="select to compare" value="${id}">`,
    );
    el.prepend(
      `<input type="radio" class="rev-trim21-cn" name="rev-left" label="select to compare" value="${id}">`,
    );

    const previous = revs[index + 1] ?? revs[index + 2] ?? '';
    el.prepend(
      `(<a href="#" data-rev="${id}" data-previous="${previous}" class="l compare-previous-trim21-cn">显示修改</a>) `,
    );
  });

  const typeRevert: Record<string, string> = {
    'rev-left': 'rev-right',
    'rev-right': 'rev-left',
  };
  $('input[type="radio"]').on('change', function (e) {
    const name = e.target.getAttribute('name');
    if (!name) {
      return;
    }
    const selectName = typeRevert[name];
    const rev = e.target.getAttribute('value');
    if (rev) {
      $(`input[name="${selectName}"][value="${rev}"]`).css(
        'visibility',
        'hidden',
      );
      $(`input[name="${selectName}"][value!="${rev}"]`).css(
        'visibility',
        'visible',
      );
    }
  });

  $('.compare-previous-trim21-cn').on('click', function () {
    const el = $(this);
    const left = String(el.data('rev'));
    const right = String(el.data('previous'));

    $('input[name="rev-left"]').attr('checked', null);
    $(`input[name="rev-left"][value="${left}"]`)
      .attr('checked', 'true')
      .trigger('change');

    $('input[name="rev-right"]').attr('checked', null);
    $(`input[name="rev-right"][value="${right}"]`)
      .attr('checked', 'true')
      .trigger('change');

    compare(left, right);
  });

  $('#columnInSubjectA span.text').append(
    '<a href="#" id="compare-trim21-cn" class="l"> > 比较选中的版本</a>',
  );
  $('#compare-trim21-cn').on('click', function () {
    const selectedRevs = getSelectedVersion();
    compare(selectedRevs[0], selectedRevs[1]);
  });
  $('head').append(
    '<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/diff2html/bundles/css/diff2html.min.css" />',
  );
}

function getSelectedVersion(): string[] {
  const selectedVersion: string[] = [];
  const selectedRev = $('.rev-trim21-cn:checked');
  if (selectedRev.length < 2) {
    window.alert('请选中两个版本进行比较');
    throw new Error();
  }
  selectedRev.each(function () {
    const val = $(this).val() as string;
    selectedVersion.push(val);
  });
  selectedVersion.sort((a, b) => parseInt(b) - parseInt(a));
  return selectedVersion;
}

main().catch(console.error);
