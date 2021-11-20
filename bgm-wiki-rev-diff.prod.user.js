// ==UserScript==
// @name         bgm-wiki-rev-diff
// @name:zh      显示条目信息版本差异
// @namespace    https://trim21.me/
// @version      0.2.0
// @author       Trim21 <i@trim21.me>
// @source       https://github.com/Trim21/bgm-wiki-rev-diff
// @supportURL   https://github.com/Trim21/bgm-wiki-rev-diff/issues
// @license      MIT
// @match        https://bgm.tv/subject/*/edit*
// @match        https://bangumi.tv/subject/*/edit*
// @match        https://chii.in/subject/*/edit*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/diff2html@3.4.13/bundles/js/diff2html.min.js
// @require      https://cdn.jsdelivr.net/npm/diff@5.0.0/dist/diff.min.js
// @require      https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// @resource     diff2html https://cdn.jsdelivr.net/npm/diff2html@3.4.13/bundles/css/diff2html.min.css
// @grant        GM.getResourceUrl
// @grant        GM.registerMenuCommand
// @grant        GM.setValue
// @grant        GM.getValue
// @run-at       document-end
// ==/UserScript==


/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: external "$"
const external_$_namespaceObject = $;
;// CONCATENATED MODULE: external "_"
const external_namespaceObject = _;
;// CONCATENATED MODULE: ./src/parser.ts

function parseRevDetails(html) {
  var _jq$find$val, _jq$find$val2, _jq$find$val3;

  const jq = external_$_namespaceObject(html);
  const rawInfo = ((_jq$find$val = jq.find('#subject_infobox').val()) === null || _jq$find$val === void 0 ? void 0 : _jq$find$val.toString()) ?? '';
  const title = ((_jq$find$val2 = jq.find('input[name="subject_title"]').val()) === null || _jq$find$val2 === void 0 ? void 0 : _jq$find$val2.toString()) ?? '';
  const description = ((_jq$find$val3 = jq.find('textarea#subject_summary').val()) === null || _jq$find$val3 === void 0 ? void 0 : _jq$find$val3.toString()) ?? '';
  return {
    title,
    rawInfo,
    description
  };
}
function parseRevEl(el) {
  const date = el.find('a:not(.compare-previous-trim21-cn)').first().html();
  const revEL = el.find('a.l:contains("恢复")');
  const revCommentEl = el.find('span.comment');
  let comment = '';

  if (revCommentEl.length > 0) {
    comment = revCommentEl.html();
    comment = comment.substring(1, comment.length - 1);
  }

  const revHref = revEL.attr('href');

  if (!revHref) {
    // this is a merge commit, can't know what's really info
    return undefined;
  }

  const revID = revHref.split('/').pop();

  if (!revID) {
    throw new Error(`can't parse rev id from ${revHref}`);
  }

  return {
    id: revID,
    comment,
    date,
    url: revHref
  };
}

function getRevs() {
  const revs = [];
  external_$_namespaceObject('#pagehistory li').each(function () {
    const rev = parseRevEl(external_$_namespaceObject(this));

    if (rev) {
      revs.push(rev);
    }
  });
  return revs;
}

function getRevInfo(revID) {
  for (const rev of getRevs()) {
    if (rev.id === revID) {
      return rev;
    }
  }
}
;// CONCATENATED MODULE: external "Diff"
const external_Diff_namespaceObject = Diff;
;// CONCATENATED MODULE: ./src/differ.ts

function diff(revOld, revNew) {
  return [titleDiff(revOld, revNew), infoDiff(revOld, revNew), descriptionDiff(revOld, revNew)].join('\n');
}

function titleDiff(rev1, rev2) {
  if (rev1.details.title === rev2.details.title) {
    return '';
  }

  return external_Diff_namespaceObject.createPatch('条目名', rev1.details.title, rev2.details.title, rev1.rev.date, rev2.rev.date, {
    context: 100
  });
}

function infoDiff(rev1, rev2) {
  if (rev1.details.rawInfo === rev2.details.rawInfo) {
    return '';
  }

  return external_Diff_namespaceObject.createPatch('相关信息', rev1.details.rawInfo, rev2.details.rawInfo, rev1.rev.date, rev2.rev.date, {
    context: 100
  });
}

function descriptionDiff(rev1, rev2) {
  if (rev1.details.description === rev2.details.description) {
    return '';
  }

  return external_Diff_namespaceObject.createPatch('简介', rev1.details.description, rev2.details.description, rev1.rev.date, rev2.rev.date, {
    context: 100
  });
}
;// CONCATENATED MODULE: external "Diff2Html"
const external_Diff2Html_namespaceObject = Diff2Html;
;// CONCATENATED MODULE: ./src/config.ts
const configKey = 'view-mode';
;// CONCATENATED MODULE: ./src/ui.ts



async function render(diff) {
  let outputFormat = await GM.getValue(configKey);

  if (!outputFormat) {
    outputFormat = 'line-by-line';
  }

  return external_Diff2Html_namespaceObject.html(diff, {
    outputFormat: outputFormat
  });
}
function show(html) {
  external_$_namespaceObject('#show-trim21-cn').html(html);
}
function clear() {
  external_$_namespaceObject('#show-trim21-cn').html('');
}
;// CONCATENATED MODULE: ./src/model.ts
class Commit {
  constructor(rev, detail) {
    this.rev = rev;
    this.details = detail;
  }

}
;// CONCATENATED MODULE: ./src/compare.ts




function compare(revID1, revID2) {
  clear();
  show('<h2>loading versions...</h2>');
  const rev1 = getRevInfo(revID1);
  const rev2 = getRevInfo(revID2);

  if (!rev1) {
    throw new Error(`error finding ${revID1}`);
  }

  const ps = [fetchRev(rev1), fetchRev(rev2)];
  Promise.all(ps).then(async values => {
    const d = diff(values[1], values[0]);
    return await render(d);
  }).then(rendered => {
    return show(rendered);
  }).catch(e => {
    console.log(e);
    show('<h2 style="color:red">loading versions error</h2>');
  }).finally(() => {
    var _document$getElementB;

    (_document$getElementB = document.getElementById('show-trim21-cn')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.scrollIntoView({
      behavior: 'smooth'
    });
  });
}
const _cache = {};

async function fetchRev(rev) {
  if (!rev) {
    return new Commit({
      id: '0',
      comment: '',
      date: '',
      url: ''
    }, {
      title: '',
      rawInfo: '',
      description: ''
    });
  }

  if (!_cache[rev.id]) {
    const res = await fetch(rev.url);
    _cache[rev.id] = new Commit(rev, parseRevDetails(await res.text()));
  }

  return _cache[rev.id];
}
;// CONCATENATED MODULE: ./src/index.ts






async function main() {
  console.log('start bgm-wiki-rev-diff UserScript');
  await initUI();
}

const style = `
<style>
#show-trim21-cn .d2h-code-line, #show-trim21-cn .d2h-code-side-line {
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

async function initUI() {
  GM.registerMenuCommand('切换diff视图', function () {
    void (async () => {
      let outputFormat = await GM.getValue(configKey);

      if (!outputFormat || outputFormat === 'side-by-side') {
        outputFormat = 'line-by-line';
      } else {
        outputFormat = 'side-by-side';
      }

      await GM.setValue(configKey, outputFormat);
    })();
  });
  external_$_namespaceObject('#headerSubject').after(style + '<div id="show-trim21-cn"></div>');
  const diff2htmlStyle = await GM.getResourceUrl('diff2html');
  external_$_namespaceObject('head').append(`<link rel='stylesheet' type='text/css' href='${diff2htmlStyle}' />`);
  const s = external_$_namespaceObject('#pagehistory li');
  const revs = Array.from(s).map(function (e) {
    var _parseRevEl;

    return (_parseRevEl = parseRevEl(external_$_namespaceObject(e))) === null || _parseRevEl === void 0 ? void 0 : _parseRevEl.id;
  });
  s.each(function (index) {
    const el = external_$_namespaceObject(this);
    const id = revs[index];

    if (!id) {
      el.prepend('<span style="padding-right: 1.4em"> 无法参与比较 </span>');
      return;
    }

    el.prepend(`<input type='radio' class='rev-trim21-cn' name='rev-right' label='select to compare' value='${id}'>`);
    el.prepend(`<input type='radio' class='rev-trim21-cn' name='rev-left' label='select to compare' value='${id}'>`);
    const previous = external_namespaceObject.find(revs, Boolean, index + 1) ?? '';
    el.prepend(`(<a href='#' data-rev='${id}' data-previous='${previous}' class='l compare-previous-trim21-cn'>显示修改</a>) `);
  });
  const typeRevert = {
    'rev-left': 'rev-right',
    'rev-right': 'rev-left'
  };
  external_$_namespaceObject('input[type="radio"]').on('change', function (e) {
    const name = e.target.getAttribute('name');

    if (!name) {
      return;
    }

    const selectName = typeRevert[name];
    const rev = e.target.getAttribute('value');

    if (rev) {
      external_$_namespaceObject(`input[name="${selectName}"][value="${rev}"]`).css('visibility', 'hidden');
      external_$_namespaceObject(`input[name="${selectName}"][value!="${rev}"]`).css('visibility', 'visible');
    }
  });
  external_$_namespaceObject('.compare-previous-trim21-cn').on('click', function () {
    const el = external_$_namespaceObject(this);
    const left = String(el.data('rev'));
    const right = String(el.data('previous'));
    compare(left, right);
    external_$_namespaceObject(`input[name="rev-left"][value="${left}"]`).prop('checked', true);
    external_$_namespaceObject(`input[name="rev-left"][value!="${left}"]`).prop('checked', null);
    external_$_namespaceObject(`input[name="rev-right"][value="${left}"]`).css('visibility', 'hidden');
    external_$_namespaceObject(`input[name="rev-right"][value!="${left}"]`).css('visibility', 'visible');
    external_$_namespaceObject('input[name="rev-left"]').css('visibility', 'visible');
    external_$_namespaceObject('input[name="rev-right"]').prop('checked', null);

    if (right) {
      external_$_namespaceObject(`input[name="rev-right"][value="${right}"]`).prop('checked', true);
      external_$_namespaceObject(`input[name="rev-left"][value="${right}"]`).css('visibility', 'hidden');
    }
  });
  external_$_namespaceObject('#columnInSubjectA span.text').append('<a href="#" id="compare-trim21-cn" class="l"> > 比较选中的版本</a>');
  external_$_namespaceObject('#compare-trim21-cn').on('click', function () {
    const selectedRevs = getSelectedVersion();
    compare(selectedRevs[0], selectedRevs[1]);
  });
}

function getSelectedVersion() {
  const selectedVersion = [];
  const selectedRev = external_$_namespaceObject('.rev-trim21-cn:checked');

  if (selectedRev.length < 2) {
    window.alert('请选中两个版本进行比较');
    throw new Error();
  }

  selectedRev.each(function () {
    const val = external_$_namespaceObject(this).val();
    selectedVersion.push(val);
  });
  selectedVersion.sort((a, b) => parseInt(b) - parseInt(a));
  return selectedVersion;
}

main().catch(console.error);
/******/ })()
;