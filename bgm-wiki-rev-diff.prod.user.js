// ==UserScript==
// @name         bgm-wiki-rev-diff
// @name:zh      显示条目信息版本差异
// @namespace    https://trim21.me/
// @version      0.1.5
// @author       Trim21 <i@trim21.me>
// @source       https://github.com/Trim21/bgm-wiki-rev-diff
// @supportURL   https://github.com/Trim21/bgm-wiki-rev-diff/issues
// @license      MIT
// @match        https://bgm.tv/subject/*/edit*
// @match        https://bangumi.tv/subject/*/edit*
// @match        https://chii.in/subject/*/edit*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/diff2html@3.4.11/bundles/js/diff2html.min.js
// @require      https://cdn.jsdelivr.net/npm/diff@5.0.0/dist/diff.min.js
// @connect      bgm.tv
// @connect      bangumi.tv
// @run-at       document-end
// ==/UserScript==


/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/compare.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.compare = void 0;
const parser_1 = __webpack_require__("./src/parser.ts");
const differ_1 = __webpack_require__("./src/differ.ts");
const ui_1 = __webpack_require__("./src/ui.ts");
const model_1 = __webpack_require__("./src/model.ts");
function compare(revID1, revID2) {
    (0, ui_1.clear)();
    (0, ui_1.show)('<h2>loading versions...</h2>');
    const rev1 = (0, parser_1.getRevInfo)(revID1);
    const rev2 = (0, parser_1.getRevInfo)(revID2);
    if (!rev1) {
        throw new Error(`error finding ${revID1}`);
    }
    const ps = [fetchRev(rev1), fetchRev(rev2)];
    Promise.all(ps)
        .then((values) => {
        const d = (0, differ_1.diff)(values[1], values[0]);
        const rendered = (0, ui_1.render)(d);
        return (0, ui_1.show)(rendered);
    })
        .catch((e) => {
        console.log(e);
        (0, ui_1.show)('<h2 style="color:red">loading versions error</h2>');
    })
        .finally(() => {
        var _a;
        (_a = document.getElementById('show-trim21-cn')) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
            behavior: 'smooth',
        });
    });
}
exports.compare = compare;
const _cache = {};
function fetchRev(rev) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!rev) {
            return new model_1.Commit({
                id: '0',
                comment: '',
                date: '',
                url: '',
            }, {
                title: '',
                rawInfo: '',
                description: '',
            });
        }
        if (!_cache[rev.id]) {
            const res = yield fetch(rev.url);
            _cache[rev.id] = new model_1.Commit(rev, (0, parser_1.parseRevDetails)(yield res.text()));
        }
        return _cache[rev.id];
    });
}


/***/ }),

/***/ "./src/differ.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.diff = void 0;
const Diff = __webpack_require__("diff");
function diff(revOld, revNew) {
    return [
        titleDiff(revOld, revNew),
        infoDiff(revOld, revNew),
        descriptionDiff(revOld, revNew),
    ].join('\n');
}
exports.diff = diff;
function titleDiff(rev1, rev2) {
    if (rev1.details.title === rev2.details.title) {
        return '';
    }
    return Diff.createPatch('条目名', rev1.details.title, rev2.details.title, rev1.rev.date, rev2.rev.date);
}
function infoDiff(rev1, rev2) {
    if (rev1.details.rawInfo === rev2.details.rawInfo) {
        return '';
    }
    return Diff.createPatch('相关信息', rev1.details.rawInfo, rev2.details.rawInfo, rev1.rev.date, rev2.rev.date);
}
function descriptionDiff(rev1, rev2) {
    if (rev1.details.description === rev2.details.description) {
        return '';
    }
    return Diff.createPatch('简介', rev1.details.description, rev2.details.description, rev1.rev.date, rev2.rev.date);
}


/***/ }),

/***/ "./src/index.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const $ = __webpack_require__("jquery");
const parser_1 = __webpack_require__("./src/parser.ts");
const compare_1 = __webpack_require__("./src/compare.ts");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('start bgm-wiki-rev-diff UserScript');
        yield initUI();
    });
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
function initUI() {
    return __awaiter(this, void 0, void 0, function* () {
        $('#columnInSubjectA > hr.board').after(style + '<div id="show-trim21-cn"></div>');
        const s = $('#pagehistory li');
        const revs = Array.from(s).map(function (e) {
            var _a;
            return (_a = (0, parser_1.parseRevEl)($(e))) === null || _a === void 0 ? void 0 : _a.id;
        });
        s.each(function (index) {
            var _a, _b;
            const el = $(this);
            const id = revs[index];
            if (!id) {
                el.prepend('<span style="padding-right: 1.4em"> 无法用于比较 </span>');
                return;
            }
            el.prepend(`<input type="radio" class="rev-trim21-cn" name="rev-right" label="select to compare" value="${id}">`);
            el.prepend(`<input type="radio" class="rev-trim21-cn" name="rev-left" label="select to compare" value="${id}">`);
            const previous = (_b = (_a = revs[index + 1]) !== null && _a !== void 0 ? _a : revs[index + 2]) !== null && _b !== void 0 ? _b : '';
            el.prepend(`(<a href="#" data-rev="${id}" data-previous="${previous}" class="l compare-previous-trim21-cn">显示修改</a>) `);
        });
        const typeRevert = {
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
                $(`input[name="${selectName}"][value="${rev}"]`).css('visibility', 'hidden');
                $(`input[name="${selectName}"][value!="${rev}"]`).css('visibility', 'visible');
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
            (0, compare_1.compare)(left, right);
        });
        $('#columnInSubjectA span.text').append('<a href="#" id="compare-trim21-cn" class="l"> > 比较选中的版本</a>');
        $('#compare-trim21-cn').on('click', function () {
            const selectedRevs = getSelectedVersion();
            (0, compare_1.compare)(selectedRevs[0], selectedRevs[1]);
        });
        $('head').append('<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/diff2html/bundles/css/diff2html.min.css" />');
    });
}
function getSelectedVersion() {
    const selectedVersion = [];
    const selectedRev = $('.rev-trim21-cn:checked');
    if (selectedRev.length < 2) {
        window.alert('请选中两个版本进行比较');
        throw new Error();
    }
    selectedRev.each(function () {
        const val = $(this).val();
        selectedVersion.push(val);
    });
    selectedVersion.sort((a, b) => parseInt(b) - parseInt(a));
    return selectedVersion;
}
main().catch(console.error);


/***/ }),

/***/ "./src/model.ts":
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Commit = void 0;
class Commit {
    constructor(rev, detail) {
        this.rev = rev;
        this.details = detail;
    }
}
exports.Commit = Commit;


/***/ }),

/***/ "./src/parser.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRevInfo = exports.parseRevEl = exports.parseRevDetails = void 0;
const $ = __webpack_require__("jquery");
function parseRevDetails(html) {
    var _a, _b, _c, _d, _e, _f;
    const jq = $(html);
    const rawInfo = (_b = (_a = jq.find('#subject_infobox').val()) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '';
    const title = (_d = (_c = jq.find('input[name="subject_title"]').val()) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : '';
    const description = (_f = (_e = jq.find('textarea#subject_summary').val()) === null || _e === void 0 ? void 0 : _e.toString()) !== null && _f !== void 0 ? _f : '';
    return {
        title,
        rawInfo,
        description,
    };
}
exports.parseRevDetails = parseRevDetails;
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
        url: revHref,
    };
}
exports.parseRevEl = parseRevEl;
function getRevs() {
    const revs = [];
    $('#pagehistory li').each(function () {
        const rev = parseRevEl($(this));
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
exports.getRevInfo = getRevInfo;


/***/ }),

/***/ "./src/ui.ts":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.clear = exports.show = exports.render = void 0;
const Diff2Html = __webpack_require__("diff2html");
const $ = __webpack_require__("jquery");
function render(diff) {
    return Diff2Html.html(diff);
}
exports.render = render;
function show(html) {
    $('#show-trim21-cn').html(html);
}
exports.show = show;
function clear() {
    $('#show-trim21-cn').html('');
}
exports.clear = clear;


/***/ }),

/***/ "jquery":
/***/ (function(module) {

module.exports = $;

/***/ }),

/***/ "diff":
/***/ (function(module) {

module.exports = Diff;

/***/ }),

/***/ "diff2html":
/***/ (function(module) {

module.exports = Diff2Html;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;