import * as $ from 'jquery';

import { parseRevEl } from './parser';
import { compare } from './compare';

async function main(): Promise<void> {
  console.log('start bgm-wiki-rev-diff UserScript');
  await initUI();
}

async function initUI(): Promise<void> {
  $('#columnInSubjectA').prepend('<div id="show-trim21-cn"></dev>');
  const revs = $('#pagehistory li').map(function (e) {
    return parseRevEl($(this)).id;
  });

  $('#pagehistory li').each(function (index) {
    const el = $(this);
    try {
      const rev = parseRevEl(el);
      el.prepend(
        `<input type="checkbox" class="rev-trim21-cn" name="rev" label="select to compare" value="${rev.id}">`
      );

      el.prepend(
        `(<a href="#" data-rev="${rev.id}" data-previous="${
          revs[index + 1]
        }" class="l compare-previous-trim21-cn">show diff</a>) `
      );
    } catch (e) {}
  });

  $('.compare-previous-trim21-cn').on('click', function () {
    const el = $(this);
    compare(el.data('rev').toString(), el.data('previous').toString());
  });

  $('#columnInSubjectA span.text').append(
    '<a href="#" id="compare-trim21-cn" tar class="l"> > 比较选中的版本</a>'
  );
  $('#compare-trim21-cn').on('click', function () {
    const selectedRevs = getSelectedVersion();
    compare(selectedRevs[0], selectedRevs[1]);
  });
  $('head').append(
    '<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/diff2html/bundles/css/diff2html.min.css" />'
  );
}

function getSelectedVersion(): string[] {
  const selectedVersion: string[] = [];
  const selectedRev = $('.rev-trim21-cn:checked');
  if (selectedRev.length < 2) {
    window.alert('请选中两个版本进行比较');
  }
  if (selectedRev.length > 2) {
    window.alert('只能比较两个版本');
  }
  selectedRev.each(function () {
    const val = $(this).val() as string;
    selectedVersion.push(val);
  });
  selectedVersion.sort((a, b) => parseInt(b) - parseInt(a));
  return selectedVersion;
}

main().catch(console.error);
