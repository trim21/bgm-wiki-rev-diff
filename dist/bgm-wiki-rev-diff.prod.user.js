// ==UserScript==
// @name        bgm-wiki-rev-diff
// @namespace   https://trim21.me/
// @version     0.0.2
// @author      Trim21 <i@trim21.me>
// @source      https://github.com/Trim21/bgm-wiki-rev-diff
// @license     MIT
// @match       https://bgm.tv/subject/*/edit
// @match       https://bangumi.tv/subject/*/edit
// @require     https://cdn.jsdelivr.net/npm/jquery@^3.5.0/dist/jquery.min.js
// @require     file://C:\Users\Trim21\proj\bgm-wiki-rev-diff\dist\bgm-wiki-rev-diff.prod.user.js
// @grant       GM_xmlhttpRequest
// @connect     bgm.tv
// @run-at      document-end
// ==/UserScript==

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "e6Wu");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/6Qv":
/*!*********************************************************!*\
  !*** ./node_modules/diff2html/lib-esm/hoganjs-utils.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hogan_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hogan.js */ "Ruv9");
/* harmony import */ var hogan_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hogan_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _diff2html_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diff2html-templates */ "dlrn");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var HoganJsUtils = (function () {
    function HoganJsUtils(_a) {
        var _b = _a.compiledTemplates, compiledTemplates = _b === void 0 ? {} : _b, _c = _a.rawTemplates, rawTemplates = _c === void 0 ? {} : _c;
        var compiledRawTemplates = Object.entries(rawTemplates).reduce(function (previousTemplates, _a) {
            var _b;
            var name = _a[0], templateString = _a[1];
            var compiledTemplate = hogan_js__WEBPACK_IMPORTED_MODULE_0__["compile"](templateString, { asString: false });
            return __assign(__assign({}, previousTemplates), (_b = {}, _b[name] = compiledTemplate, _b));
        }, {});
        this.preCompiledTemplates = __assign(__assign(__assign({}, _diff2html_templates__WEBPACK_IMPORTED_MODULE_1__["defaultTemplates"]), compiledTemplates), compiledRawTemplates);
    }
    HoganJsUtils.compile = function (templateString) {
        return hogan_js__WEBPACK_IMPORTED_MODULE_0__["compile"](templateString, { asString: false });
    };
    HoganJsUtils.prototype.render = function (namespace, view, params, partials, indent) {
        var templateKey = this.templateKey(namespace, view);
        try {
            var template = this.preCompiledTemplates[templateKey];
            return template.render(params, partials, indent);
        }
        catch (e) {
            throw new Error("Could not find template to render '" + templateKey + "'");
        }
    };
    HoganJsUtils.prototype.template = function (namespace, view) {
        return this.preCompiledTemplates[this.templateKey(namespace, view)];
    };
    HoganJsUtils.prototype.templateKey = function (namespace, view) {
        return namespace + "-" + view;
    };
    return HoganJsUtils;
}());
/* harmony default export */ __webpack_exports__["default"] = (HoganJsUtils);
//# sourceMappingURL=hoganjs-utils.js.map

/***/ }),

/***/ "1gqn":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "7Mwc":
/*!***************************************!*\
  !*** ./node_modules/difflib/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/difflib */ "qVjC");


/***/ }),

/***/ "8oxB":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "9lTW":
/*!***************************************!*\
  !*** ./node_modules/assert/assert.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var objectAssign = __webpack_require__(/*! object-assign */ "MgzW");

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:
// NB: The URL to the CommonJS spec is kept just for tradition.
//     node-assert has evolved a lot since then, both in API and behavior.

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(/*! util/ */ "MCLT");
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

// Expose a strict only variant of assert
function strict(value, message) {
  if (!value) fail(value, true, message, '==', strict);
}
assert.strict = objectAssign(strict, assert, {
  equal: assert.strictEqual,
  deepEqual: assert.deepStrictEqual,
  notEqual: assert.notStrictEqual,
  notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "yLpj")))

/***/ }),

/***/ "DZQh":
/*!**************************************************************!*\
  !*** ./node_modules/diff2html/lib-esm/file-list-renderer.js ***!
  \**************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _render_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-utils */ "qNJW");

var baseTemplatesPath = 'file-summary';
var iconsBaseTemplatesPath = 'icon';
function render(diffFiles, hoganUtils) {
    var files = diffFiles
        .map(function (file) {
        return hoganUtils.render(baseTemplatesPath, 'line', {
            fileHtmlId: _render_utils__WEBPACK_IMPORTED_MODULE_0__["getHtmlId"](file),
            oldName: file.oldName,
            newName: file.newName,
            fileName: _render_utils__WEBPACK_IMPORTED_MODULE_0__["filenameDiff"](file),
            deletedLines: '-' + file.deletedLines,
            addedLines: '+' + file.addedLines,
        }, {
            fileIcon: hoganUtils.template(iconsBaseTemplatesPath, _render_utils__WEBPACK_IMPORTED_MODULE_0__["getFileIcon"](file)),
        });
    })
        .join('\n');
    return hoganUtils.render(baseTemplatesPath, 'wrapper', {
        filesNumber: diffFiles.length,
        files: files,
    });
}
//# sourceMappingURL=file-list-renderer.js.map

/***/ }),

/***/ "Ekho":
/*!***************************************!*\
  !*** ./node_modules/heap/lib/heap.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Generated by CoffeeScript 1.8.0
(function() {
  var Heap, defaultCmp, floor, heapify, heappop, heappush, heappushpop, heapreplace, insort, min, nlargest, nsmallest, updateItem, _siftdown, _siftup;

  floor = Math.floor, min = Math.min;


  /*
  Default comparison function to be used
   */

  defaultCmp = function(x, y) {
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  };


  /*
  Insert item x in list a, and keep it sorted assuming a is sorted.
  
  If x is already in a, insert it to the right of the rightmost x.
  
  Optional args lo (default 0) and hi (default a.length) bound the slice
  of a to be searched.
   */

  insort = function(a, x, lo, hi, cmp) {
    var mid;
    if (lo == null) {
      lo = 0;
    }
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (lo < 0) {
      throw new Error('lo must be non-negative');
    }
    if (hi == null) {
      hi = a.length;
    }
    while (lo < hi) {
      mid = floor((lo + hi) / 2);
      if (cmp(x, a[mid]) < 0) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    return ([].splice.apply(a, [lo, lo - lo].concat(x)), x);
  };


  /*
  Push item onto heap, maintaining the heap invariant.
   */

  heappush = function(array, item, cmp) {
    if (cmp == null) {
      cmp = defaultCmp;
    }
    array.push(item);
    return _siftdown(array, 0, array.length - 1, cmp);
  };


  /*
  Pop the smallest item off the heap, maintaining the heap invariant.
   */

  heappop = function(array, cmp) {
    var lastelt, returnitem;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    lastelt = array.pop();
    if (array.length) {
      returnitem = array[0];
      array[0] = lastelt;
      _siftup(array, 0, cmp);
    } else {
      returnitem = lastelt;
    }
    return returnitem;
  };


  /*
  Pop and return the current smallest value, and add the new item.
  
  This is more efficient than heappop() followed by heappush(), and can be
  more appropriate when using a fixed size heap. Note that the value
  returned may be larger than item! That constrains reasonable use of
  this routine unless written as part of a conditional replacement:
      if item > array[0]
        item = heapreplace(array, item)
   */

  heapreplace = function(array, item, cmp) {
    var returnitem;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    returnitem = array[0];
    array[0] = item;
    _siftup(array, 0, cmp);
    return returnitem;
  };


  /*
  Fast version of a heappush followed by a heappop.
   */

  heappushpop = function(array, item, cmp) {
    var _ref;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (array.length && cmp(array[0], item) < 0) {
      _ref = [array[0], item], item = _ref[0], array[0] = _ref[1];
      _siftup(array, 0, cmp);
    }
    return item;
  };


  /*
  Transform list into a heap, in-place, in O(array.length) time.
   */

  heapify = function(array, cmp) {
    var i, _i, _j, _len, _ref, _ref1, _results, _results1;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    _ref1 = (function() {
      _results1 = [];
      for (var _j = 0, _ref = floor(array.length / 2); 0 <= _ref ? _j < _ref : _j > _ref; 0 <= _ref ? _j++ : _j--){ _results1.push(_j); }
      return _results1;
    }).apply(this).reverse();
    _results = [];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      i = _ref1[_i];
      _results.push(_siftup(array, i, cmp));
    }
    return _results;
  };


  /*
  Update the position of the given item in the heap.
  This function should be called every time the item is being modified.
   */

  updateItem = function(array, item, cmp) {
    var pos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    pos = array.indexOf(item);
    if (pos === -1) {
      return;
    }
    _siftdown(array, 0, pos, cmp);
    return _siftup(array, pos, cmp);
  };


  /*
  Find the n largest elements in a dataset.
   */

  nlargest = function(array, n, cmp) {
    var elem, result, _i, _len, _ref;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    result = array.slice(0, n);
    if (!result.length) {
      return result;
    }
    heapify(result, cmp);
    _ref = array.slice(n);
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      elem = _ref[_i];
      heappushpop(result, elem, cmp);
    }
    return result.sort(cmp).reverse();
  };


  /*
  Find the n smallest elements in a dataset.
   */

  nsmallest = function(array, n, cmp) {
    var elem, i, los, result, _i, _j, _len, _ref, _ref1, _results;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (n * 10 <= array.length) {
      result = array.slice(0, n).sort(cmp);
      if (!result.length) {
        return result;
      }
      los = result[result.length - 1];
      _ref = array.slice(n);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        elem = _ref[_i];
        if (cmp(elem, los) < 0) {
          insort(result, elem, 0, null, cmp);
          result.pop();
          los = result[result.length - 1];
        }
      }
      return result;
    }
    heapify(array, cmp);
    _results = [];
    for (i = _j = 0, _ref1 = min(n, array.length); 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
      _results.push(heappop(array, cmp));
    }
    return _results;
  };

  _siftdown = function(array, startpos, pos, cmp) {
    var newitem, parent, parentpos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    newitem = array[pos];
    while (pos > startpos) {
      parentpos = (pos - 1) >> 1;
      parent = array[parentpos];
      if (cmp(newitem, parent) < 0) {
        array[pos] = parent;
        pos = parentpos;
        continue;
      }
      break;
    }
    return array[pos] = newitem;
  };

  _siftup = function(array, pos, cmp) {
    var childpos, endpos, newitem, rightpos, startpos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    endpos = array.length;
    startpos = pos;
    newitem = array[pos];
    childpos = 2 * pos + 1;
    while (childpos < endpos) {
      rightpos = childpos + 1;
      if (rightpos < endpos && !(cmp(array[childpos], array[rightpos]) < 0)) {
        childpos = rightpos;
      }
      array[pos] = array[childpos];
      pos = childpos;
      childpos = 2 * pos + 1;
    }
    array[pos] = newitem;
    return _siftdown(array, startpos, pos, cmp);
  };

  Heap = (function() {
    Heap.push = heappush;

    Heap.pop = heappop;

    Heap.replace = heapreplace;

    Heap.pushpop = heappushpop;

    Heap.heapify = heapify;

    Heap.updateItem = updateItem;

    Heap.nlargest = nlargest;

    Heap.nsmallest = nsmallest;

    function Heap(cmp) {
      this.cmp = cmp != null ? cmp : defaultCmp;
      this.nodes = [];
    }

    Heap.prototype.push = function(x) {
      return heappush(this.nodes, x, this.cmp);
    };

    Heap.prototype.pop = function() {
      return heappop(this.nodes, this.cmp);
    };

    Heap.prototype.peek = function() {
      return this.nodes[0];
    };

    Heap.prototype.contains = function(x) {
      return this.nodes.indexOf(x) !== -1;
    };

    Heap.prototype.replace = function(x) {
      return heapreplace(this.nodes, x, this.cmp);
    };

    Heap.prototype.pushpop = function(x) {
      return heappushpop(this.nodes, x, this.cmp);
    };

    Heap.prototype.heapify = function() {
      return heapify(this.nodes, this.cmp);
    };

    Heap.prototype.updateItem = function(x) {
      return updateItem(this.nodes, x, this.cmp);
    };

    Heap.prototype.clear = function() {
      return this.nodes = [];
    };

    Heap.prototype.empty = function() {
      return this.nodes.length === 0;
    };

    Heap.prototype.size = function() {
      return this.nodes.length;
    };

    Heap.prototype.clone = function() {
      var heap;
      heap = new Heap();
      heap.nodes = this.nodes.slice(0);
      return heap;
    };

    Heap.prototype.toArray = function() {
      return this.nodes.slice(0);
    };

    Heap.prototype.insert = Heap.prototype.push;

    Heap.prototype.top = Heap.prototype.peek;

    Heap.prototype.front = Heap.prototype.peek;

    Heap.prototype.has = Heap.prototype.contains;

    Heap.prototype.copy = Heap.prototype.clone;

    return Heap;

  })();

  (function(root, factory) {
    if (true) {
      return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
  })(this, function() {
    return Heap;
  });

}).call(this);


/***/ }),

/***/ "F1pL":
/*!************************************!*\
  !*** ./node_modules/heap/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/heap */ "Ekho");


/***/ }),

/***/ "KKCa":
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "MCLT":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "1gqn");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "KKCa");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "8oxB")))

/***/ }),

/***/ "MgzW":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "PKsF":
/*!***********************************************!*\
  !*** ./node_modules/hogan.js/lib/compiler.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(function (Hogan) {
  // Setup regex  assignments
  // remove whitespace according to Mustache spec
  var rIsWhitespace = /\S/,
      rQuot = /\"/g,
      rNewline =  /\n/g,
      rCr = /\r/g,
      rSlash = /\\/g,
      rLineSep = /\u2028/,
      rParagraphSep = /\u2029/;

  Hogan.tags = {
    '#': 1, '^': 2, '<': 3, '$': 4,
    '/': 5, '!': 6, '>': 7, '=': 8, '_v': 9,
    '{': 10, '&': 11, '_t': 12
  };

  Hogan.scan = function scan(text, delimiters) {
    var len = text.length,
        IN_TEXT = 0,
        IN_TAG_TYPE = 1,
        IN_TAG = 2,
        state = IN_TEXT,
        tagType = null,
        tag = null,
        buf = '',
        tokens = [],
        seenTag = false,
        i = 0,
        lineStart = 0,
        otag = '{{',
        ctag = '}}';

    function addBuf() {
      if (buf.length > 0) {
        tokens.push({tag: '_t', text: new String(buf)});
        buf = '';
      }
    }

    function lineIsWhitespace() {
      var isAllWhitespace = true;
      for (var j = lineStart; j < tokens.length; j++) {
        isAllWhitespace =
          (Hogan.tags[tokens[j].tag] < Hogan.tags['_v']) ||
          (tokens[j].tag == '_t' && tokens[j].text.match(rIsWhitespace) === null);
        if (!isAllWhitespace) {
          return false;
        }
      }

      return isAllWhitespace;
    }

    function filterLine(haveSeenTag, noNewLine) {
      addBuf();

      if (haveSeenTag && lineIsWhitespace()) {
        for (var j = lineStart, next; j < tokens.length; j++) {
          if (tokens[j].text) {
            if ((next = tokens[j+1]) && next.tag == '>') {
              // set indent to token value
              next.indent = tokens[j].text.toString()
            }
            tokens.splice(j, 1);
          }
        }
      } else if (!noNewLine) {
        tokens.push({tag:'\n'});
      }

      seenTag = false;
      lineStart = tokens.length;
    }

    function changeDelimiters(text, index) {
      var close = '=' + ctag,
          closeIndex = text.indexOf(close, index),
          delimiters = trim(
            text.substring(text.indexOf('=', index) + 1, closeIndex)
          ).split(' ');

      otag = delimiters[0];
      ctag = delimiters[delimiters.length - 1];

      return closeIndex + close.length - 1;
    }

    if (delimiters) {
      delimiters = delimiters.split(' ');
      otag = delimiters[0];
      ctag = delimiters[1];
    }

    for (i = 0; i < len; i++) {
      if (state == IN_TEXT) {
        if (tagChange(otag, text, i)) {
          --i;
          addBuf();
          state = IN_TAG_TYPE;
        } else {
          if (text.charAt(i) == '\n') {
            filterLine(seenTag);
          } else {
            buf += text.charAt(i);
          }
        }
      } else if (state == IN_TAG_TYPE) {
        i += otag.length - 1;
        tag = Hogan.tags[text.charAt(i + 1)];
        tagType = tag ? text.charAt(i + 1) : '_v';
        if (tagType == '=') {
          i = changeDelimiters(text, i);
          state = IN_TEXT;
        } else {
          if (tag) {
            i++;
          }
          state = IN_TAG;
        }
        seenTag = i;
      } else {
        if (tagChange(ctag, text, i)) {
          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
                       i: (tagType == '/') ? seenTag - otag.length : i + ctag.length});
          buf = '';
          i += ctag.length - 1;
          state = IN_TEXT;
          if (tagType == '{') {
            if (ctag == '}}') {
              i++;
            } else {
              cleanTripleStache(tokens[tokens.length - 1]);
            }
          }
        } else {
          buf += text.charAt(i);
        }
      }
    }

    filterLine(seenTag, true);

    return tokens;
  }

  function cleanTripleStache(token) {
    if (token.n.substr(token.n.length - 1) === '}') {
      token.n = token.n.substring(0, token.n.length - 1);
    }
  }

  function trim(s) {
    if (s.trim) {
      return s.trim();
    }

    return s.replace(/^\s*|\s*$/g, '');
  }

  function tagChange(tag, text, index) {
    if (text.charAt(index) != tag.charAt(0)) {
      return false;
    }

    for (var i = 1, l = tag.length; i < l; i++) {
      if (text.charAt(index + i) != tag.charAt(i)) {
        return false;
      }
    }

    return true;
  }

  // the tags allowed inside super templates
  var allowedInSuper = {'_t': true, '\n': true, '$': true, '/': true};

  function buildTree(tokens, kind, stack, customTags) {
    var instructions = [],
        opener = null,
        tail = null,
        token = null;

    tail = stack[stack.length - 1];

    while (tokens.length > 0) {
      token = tokens.shift();

      if (tail && tail.tag == '<' && !(token.tag in allowedInSuper)) {
        throw new Error('Illegal content in < super tag.');
      }

      if (Hogan.tags[token.tag] <= Hogan.tags['$'] || isOpener(token, customTags)) {
        stack.push(token);
        token.nodes = buildTree(tokens, token.tag, stack, customTags);
      } else if (token.tag == '/') {
        if (stack.length === 0) {
          throw new Error('Closing tag without opener: /' + token.n);
        }
        opener = stack.pop();
        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
        }
        opener.end = token.i;
        return instructions;
      } else if (token.tag == '\n') {
        token.last = (tokens.length == 0) || (tokens[0].tag == '\n');
      }

      instructions.push(token);
    }

    if (stack.length > 0) {
      throw new Error('missing closing tag: ' + stack.pop().n);
    }

    return instructions;
  }

  function isOpener(token, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].o == token.n) {
        token.tag = '#';
        return true;
      }
    }
  }

  function isCloser(close, open, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].c == close && tags[i].o == open) {
        return true;
      }
    }
  }

  function stringifySubstitutions(obj) {
    var items = [];
    for (var key in obj) {
      items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + '}');
    }
    return "{ " + items.join(",") + " }";
  }

  function stringifyPartials(codeObj) {
    var partials = [];
    for (var key in codeObj.partials) {
      partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + "}");
    }
    return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
  }

  Hogan.stringify = function(codeObj, text, options) {
    return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) +  "}";
  }

  var serialNo = 0;
  Hogan.generate = function(tree, text, options) {
    serialNo = 0;
    var context = { code: '', subs: {}, partials: {} };
    Hogan.walk(tree, context);

    if (options.asString) {
      return this.stringify(context, text, options);
    }

    return this.makeTemplate(context, text, options);
  }

  Hogan.wrapMain = function(code) {
    return 'var t=this;t.b(i=i||"");' + code + 'return t.fl();';
  }

  Hogan.template = Hogan.Template;

  Hogan.makeTemplate = function(codeObj, text, options) {
    var template = this.makePartials(codeObj);
    template.code = new Function('c', 'p', 'i', this.wrapMain(codeObj.code));
    return new this.template(template, text, this, options);
  }

  Hogan.makePartials = function(codeObj) {
    var key, template = {subs: {}, partials: codeObj.partials, name: codeObj.name};
    for (key in template.partials) {
      template.partials[key] = this.makePartials(template.partials[key]);
    }
    for (key in codeObj.subs) {
      template.subs[key] = new Function('c', 'p', 't', 'i', codeObj.subs[key]);
    }
    return template;
  }

  function esc(s) {
    return s.replace(rSlash, '\\\\')
            .replace(rQuot, '\\\"')
            .replace(rNewline, '\\n')
            .replace(rCr, '\\r')
            .replace(rLineSep, '\\u2028')
            .replace(rParagraphSep, '\\u2029');
  }

  function chooseMethod(s) {
    return (~s.indexOf('.')) ? 'd' : 'f';
  }

  function createPartial(node, context) {
    var prefix = "<" + (context.prefix || "");
    var sym = prefix + node.n + serialNo++;
    context.partials[sym] = {name: node.n, partials: {}};
    context.code += 't.b(t.rp("' +  esc(sym) + '",c,p,"' + (node.indent || '') + '"));';
    return sym;
  }

  Hogan.codegen = {
    '#': function(node, context) {
      context.code += 'if(t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' +
                      'c,p,0,' + node.i + ',' + node.end + ',"' + node.otag + " " + node.ctag + '")){' +
                      't.rs(c,p,' + 'function(c,p,t){';
      Hogan.walk(node.nodes, context);
      context.code += '});c.pop();}';
    },

    '^': function(node, context) {
      context.code += 'if(!t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
      Hogan.walk(node.nodes, context);
      context.code += '};';
    },

    '>': createPartial,
    '<': function(node, context) {
      var ctx = {partials: {}, code: '', subs: {}, inPartial: true};
      Hogan.walk(node.nodes, ctx);
      var template = context.partials[createPartial(node, context)];
      template.subs = ctx.subs;
      template.partials = ctx.partials;
    },

    '$': function(node, context) {
      var ctx = {subs: {}, code: '', partials: context.partials, prefix: node.n};
      Hogan.walk(node.nodes, ctx);
      context.subs[node.n] = ctx.code;
      if (!context.inPartial) {
        context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
      }
    },

    '\n': function(node, context) {
      context.code += write('"\\n"' + (node.last ? '' : ' + i'));
    },

    '_v': function(node, context) {
      context.code += 't.b(t.v(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
    },

    '_t': function(node, context) {
      context.code += write('"' + esc(node.text) + '"');
    },

    '{': tripleStache,

    '&': tripleStache
  }

  function tripleStache(node, context) {
    context.code += 't.b(t.t(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
  }

  function write(s) {
    return 't.b(' + s + ');';
  }

  Hogan.walk = function(nodelist, context) {
    var func;
    for (var i = 0, l = nodelist.length; i < l; i++) {
      func = Hogan.codegen[nodelist[i].tag];
      func && func(nodelist[i], context);
    }
    return context;
  }

  Hogan.parse = function(tokens, text, options) {
    options = options || {};
    return buildTree(tokens, '', [], options.sectionTags || []);
  }

  Hogan.cache = {};

  Hogan.cacheKey = function(text, options) {
    return [text, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join('||');
  }

  Hogan.compile = function(text, options) {
    options = options || {};
    var key = Hogan.cacheKey(text, options);
    var template = this.cache[key];

    if (template) {
      var partials = template.partials;
      for (var name in partials) {
        delete partials[name].instance;
      }
      return template;
    }

    template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
    return this.cache[key] = template;
  }
})( true ? exports : undefined);


/***/ }),

/***/ "RQrS":
/*!*************************************************!*\
  !*** ./node_modules/diff2html/lib-esm/utils.js ***!
  \*************************************************/
/*! exports provided: escapeForRegExp, unifyPath, hashCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeForRegExp", function() { return escapeForRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unifyPath", function() { return unifyPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashCode", function() { return hashCode; });
var specials = [
    '-',
    '[',
    ']',
    '/',
    '{',
    '}',
    '(',
    ')',
    '*',
    '+',
    '?',
    '.',
    '\\',
    '^',
    '$',
    '|',
];
var regex = RegExp('[' + specials.join('\\') + ']', 'g');
function escapeForRegExp(str) {
    return str.replace(regex, '\\$&');
}
function unifyPath(path) {
    return path ? path.replace(/\\/g, '/') : path;
}
function hashCode(text) {
    var i, chr, len;
    var hash = 0;
    for (i = 0, len = text.length; i < len; i++) {
        chr = text.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    return hash;
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "Ruv9":
/*!********************************************!*\
  !*** ./node_modules/hogan.js/lib/hogan.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

// This file is for use with Node.js. See dist/ for browser files.

var Hogan = __webpack_require__(/*! ./compiler */ "PKsF");
Hogan.Template = __webpack_require__(/*! ./template */ "cK6b").Template;
Hogan.template = Hogan.Template;
module.exports = Hogan;


/***/ }),

/***/ "X1my":
/*!*************************************************!*\
  !*** ./node_modules/diff2html/lib-esm/types.js ***!
  \*************************************************/
/*! exports provided: LineType, OutputFormatType, LineMatchingType, DiffStyleType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineType", function() { return LineType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputFormatType", function() { return OutputFormatType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineMatchingType", function() { return LineMatchingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffStyleType", function() { return DiffStyleType; });
var LineType;
(function (LineType) {
    LineType["INSERT"] = "insert";
    LineType["DELETE"] = "delete";
    LineType["CONTEXT"] = "context";
})(LineType || (LineType = {}));
var OutputFormatType = {
    LINE_BY_LINE: 'line-by-line',
    SIDE_BY_SIDE: 'side-by-side',
};
var LineMatchingType = {
    LINES: 'lines',
    WORDS: 'words',
    NONE: 'none',
};
var DiffStyleType = {
    WORD: 'word',
    CHAR: 'char',
};
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "cK6b":
/*!***********************************************!*\
  !*** ./node_modules/hogan.js/lib/template.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

var Hogan = {};

(function (Hogan) {
  Hogan.Template = function (codeObj, text, compiler, options) {
    codeObj = codeObj || {};
    this.r = codeObj.code || this.r;
    this.c = compiler;
    this.options = options || {};
    this.text = text || '';
    this.partials = codeObj.partials || {};
    this.subs = codeObj.subs || {};
    this.buf = '';
  }

  Hogan.Template.prototype = {
    // render: replaced by generated code.
    r: function (context, partials, indent) { return ''; },

    // variable escaping
    v: hoganEscape,

    // triple stache
    t: coerceToString,

    render: function render(context, partials, indent) {
      return this.ri([context], partials || {}, indent);
    },

    // render internal -- a hook for overrides that catches partials too
    ri: function (context, partials, indent) {
      return this.r(context, partials, indent);
    },

    // ensurePartial
    ep: function(symbol, partials) {
      var partial = this.partials[symbol];

      // check to see that if we've instantiated this partial before
      var template = partials[partial.name];
      if (partial.instance && partial.base == template) {
        return partial.instance;
      }

      if (typeof template == 'string') {
        if (!this.c) {
          throw new Error("No compiler available.");
        }
        template = this.c.compile(template, this.options);
      }

      if (!template) {
        return null;
      }

      // We use this to check whether the partials dictionary has changed
      this.partials[symbol].base = template;

      if (partial.subs) {
        // Make sure we consider parent template now
        if (!partials.stackText) partials.stackText = {};
        for (key in partial.subs) {
          if (!partials.stackText[key]) {
            partials.stackText[key] = (this.activeSub !== undefined && partials.stackText[this.activeSub]) ? partials.stackText[this.activeSub] : this.text;
          }
        }
        template = createSpecializedPartial(template, partial.subs, partial.partials,
          this.stackSubs, this.stackPartials, partials.stackText);
      }
      this.partials[symbol].instance = template;

      return template;
    },

    // tries to find a partial in the current scope and render it
    rp: function(symbol, context, partials, indent) {
      var partial = this.ep(symbol, partials);
      if (!partial) {
        return '';
      }

      return partial.ri(context, partials, indent);
    },

    // render a section
    rs: function(context, partials, section) {
      var tail = context[context.length - 1];

      if (!isArray(tail)) {
        section(context, partials, this);
        return;
      }

      for (var i = 0; i < tail.length; i++) {
        context.push(tail[i]);
        section(context, partials, this);
        context.pop();
      }
    },

    // maybe start a section
    s: function(val, ctx, partials, inverted, start, end, tags) {
      var pass;

      if (isArray(val) && val.length === 0) {
        return false;
      }

      if (typeof val == 'function') {
        val = this.ms(val, ctx, partials, inverted, start, end, tags);
      }

      pass = !!val;

      if (!inverted && pass && ctx) {
        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
      }

      return pass;
    },

    // find values with dotted names
    d: function(key, ctx, partials, returnFound) {
      var found,
          names = key.split('.'),
          val = this.f(names[0], ctx, partials, returnFound),
          doModelGet = this.options.modelGet,
          cx = null;

      if (key === '.' && isArray(ctx[ctx.length - 2])) {
        val = ctx[ctx.length - 1];
      } else {
        for (var i = 1; i < names.length; i++) {
          found = findInScope(names[i], val, doModelGet);
          if (found !== undefined) {
            cx = val;
            val = found;
          } else {
            val = '';
          }
        }
      }

      if (returnFound && !val) {
        return false;
      }

      if (!returnFound && typeof val == 'function') {
        ctx.push(cx);
        val = this.mv(val, ctx, partials);
        ctx.pop();
      }

      return val;
    },

    // find values with normal names
    f: function(key, ctx, partials, returnFound) {
      var val = false,
          v = null,
          found = false,
          doModelGet = this.options.modelGet;

      for (var i = ctx.length - 1; i >= 0; i--) {
        v = ctx[i];
        val = findInScope(key, v, doModelGet);
        if (val !== undefined) {
          found = true;
          break;
        }
      }

      if (!found) {
        return (returnFound) ? false : "";
      }

      if (!returnFound && typeof val == 'function') {
        val = this.mv(val, ctx, partials);
      }

      return val;
    },

    // higher order templates
    ls: function(func, cx, partials, text, tags) {
      var oldTags = this.options.delimiters;

      this.options.delimiters = tags;
      this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
      this.options.delimiters = oldTags;

      return false;
    },

    // compile text
    ct: function(text, cx, partials) {
      if (this.options.disableLambda) {
        throw new Error('Lambda features disabled.');
      }
      return this.c.compile(text, this.options).render(cx, partials);
    },

    // template result buffering
    b: function(s) { this.buf += s; },

    fl: function() { var r = this.buf; this.buf = ''; return r; },

    // method replace section
    ms: function(func, ctx, partials, inverted, start, end, tags) {
      var textSource,
          cx = ctx[ctx.length - 1],
          result = func.call(cx);

      if (typeof result == 'function') {
        if (inverted) {
          return true;
        } else {
          textSource = (this.activeSub && this.subsText && this.subsText[this.activeSub]) ? this.subsText[this.activeSub] : this.text;
          return this.ls(result, cx, partials, textSource.substring(start, end), tags);
        }
      }

      return result;
    },

    // method replace variable
    mv: function(func, ctx, partials) {
      var cx = ctx[ctx.length - 1];
      var result = func.call(cx);

      if (typeof result == 'function') {
        return this.ct(coerceToString(result.call(cx)), cx, partials);
      }

      return result;
    },

    sub: function(name, context, partials, indent) {
      var f = this.subs[name];
      if (f) {
        this.activeSub = name;
        f(context, partials, this, indent);
        this.activeSub = false;
      }
    }

  };

  //Find a key in an object
  function findInScope(key, scope, doModelGet) {
    var val;

    if (scope && typeof scope == 'object') {

      if (scope[key] !== undefined) {
        val = scope[key];

      // try lookup with get for backbone or similar model data
      } else if (doModelGet && scope.get && typeof scope.get == 'function') {
        val = scope.get(key);
      }
    }

    return val;
  }

  function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
    function PartialTemplate() {};
    PartialTemplate.prototype = instance;
    function Substitutions() {};
    Substitutions.prototype = instance.subs;
    var key;
    var partial = new PartialTemplate();
    partial.subs = new Substitutions();
    partial.subsText = {};  //hehe. substext.
    partial.buf = '';

    stackSubs = stackSubs || {};
    partial.stackSubs = stackSubs;
    partial.subsText = stackText;
    for (key in subs) {
      if (!stackSubs[key]) stackSubs[key] = subs[key];
    }
    for (key in stackSubs) {
      partial.subs[key] = stackSubs[key];
    }

    stackPartials = stackPartials || {};
    partial.stackPartials = stackPartials;
    for (key in partials) {
      if (!stackPartials[key]) stackPartials[key] = partials[key];
    }
    for (key in stackPartials) {
      partial.partials[key] = stackPartials[key];
    }

    return partial;
  }

  var rAmp = /&/g,
      rLt = /</g,
      rGt = />/g,
      rApos = /\'/g,
      rQuot = /\"/g,
      hChars = /[&<>\"\']/;

  function coerceToString(val) {
    return String((val === null || val === undefined) ? '' : val);
  }

  function hoganEscape(str) {
    str = coerceToString(str);
    return hChars.test(str) ?
      str
        .replace(rAmp, '&amp;')
        .replace(rLt, '&lt;')
        .replace(rGt, '&gt;')
        .replace(rApos, '&#39;')
        .replace(rQuot, '&quot;') :
      str;
  }

  var isArray = Array.isArray || function(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
  };

})( true ? exports : undefined);


/***/ }),

/***/ "dlrn":
/*!***************************************************************!*\
  !*** ./node_modules/diff2html/lib-esm/diff2html-templates.js ***!
  \***************************************************************/
/*! exports provided: defaultTemplates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTemplates", function() { return defaultTemplates; });
/* harmony import */ var hogan_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hogan.js */ "Ruv9");
/* harmony import */ var hogan_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hogan_js__WEBPACK_IMPORTED_MODULE_0__);

var defaultTemplates = {};
defaultTemplates["file-summary-line"] = new hogan_js__WEBPACK_IMPORTED_MODULE_0__["Template"]({ code: function (c, p, i) { var t = this; t.b(i = i || ""); t.b("<li class=\"d2h-file-list-line\">"); t.b("\n" + i); t.b("    <span class=\"d2h-file-name-wrapper\">"); t.b("\n" + i); t.b(t.rp("<fileIcon0", c, p, "      ")); t.b("      <a href=\"#"); t.b(t.v(t.f("fileHtmlId", c, p, 0))); t.b("\" class=\"d2h-file-name\">"); t.b(t.v(t.f("fileName", c, p, 0))); t.b("</a>"); t.b("\n" + i); t.b("      <span class=\"d2h-file-stats\">"); t.b("\n" + i); t.b("          <span class=\"d2h-lines-added\">"); t.b(t.v(t.f("addedLines", c, p, 0))); t.b("</span>"); t.b("\n" + i); t.b("          <span class=\"d2h-lines-deleted\">"); t.b(t.v(t.f("deletedLines", c, p, 0))); t.b("</span>"); t.b("\n" + i); t.b("      </span>"); t.b("\n" + i); t.b("    </span>"); t.b("\n" + i); t.b("</li>"); return t.fl(); }, partials: { "<fileIcon0": { name: "fileIcon", partials: {}, subs: {} } }, subs: {} });
defaultTemplates["file-summary-wrapper"] = new hogan_js__WEBPACK_IMPORTED_MODULE_0__["Template"]({ code: function (c, p, i) { var t = this; t.b(i = i || ""); t.b("<div class=\"d2h-file-list-wrapper\">"); t.b("\n" + i); t.b("    <div class=\"d2h-file-list-header\">"); t.b("\n" + i); t.b("        <span class=\"d2h-file-list-title\">Files changed ("); t.b(t.v(t.f("filesNumber", c, p, 0))); t.b(")</span>"); t.b("\n" + i); t.b("        <a class=\"d2h-file-switch d2h-hide\">hide</a>"); t.b("\n" + i); t.b("        <a class=\"d2h-file-switch d2h-show\">show</a>"); t.b("\n" + i); t.b("    </div>"); t.b("\n" + i); t.b("    <ol class=\"d2h-file-list\">"); t.b("\n" + i); t.b("    "); t.b(t.t(t.f("files", c, p, 0))); t.b("\n" + i); t.b("    </ol>"); t.b("\n" + i); t.b("</div>"); return t.fl(); }, partials: {}, subs: {} });
defaultTemplates["generic-block-header"] = new hogan_js__WEBPACK_IMPORTED_MODULE_0__["Template"]({ code: function (c, p, i) { var t = this; t.b(i = i || ""); t.b("<tr>"); t.b("\n" + i); t.b("    <td class=\""); t.b(t.v(t.f("lineClass", c, p, 0))); t.b(" "); t.b(t.v(t.d("CSSLineClass.INFO", c, p, 0))); t.b("\"></td>"); t.b("\n" + i); t.b("    <td class=\""); t.b(t.v(t.d("CSSLineClass.INFO", c, p, 0))); t.b("\">"); t.b("\n" + i); t.b("        <div class=\""); t.b(t.v(t.f("contentClass", c, p, 0))); t.b(" "); t.b(t.v(t.d("CSSLineClass.INFO", c, p, 0))); t.b("\">"); t.b(t.t(t.f("blockHeader", c, p, 0))); t.b("</div>"); t.b("\n" + i); t.b("    </td>"); t.b("\n" + i); t.b("</tr>"); return t.fl(); }, partials: {}, subs: {} });
defaultTemplates["generic-empty-diff"] = new hogan_js__WEBPACK_IMPORTED_MODULE_0__["Template"]({ code: function (c, p, i) { var t = this; t.b(i = i || ""); t.b("<tr>"); t.b("\n" + i); t.b("    <td class=\""); t.b(t.v(t.d("CSSLineClass.INFO", c, p, 0))); t.b("\">"); t.b("\n" + i); t.b("        <div class=\""); t.b(t.v(t.f("contentClass", c, p, 0))); t.b(" "); t.b(t.v(t.d("CSSLineClass.INFO", c, p, 0))); t.b("\">"); t.b("\n" + i); t.b("            File without changes"); t.b("\n" + i); t.b("        </div>"); t.b("\n" + i); t.b("    </td>"); t.b("\n" + i); t.b("</tr>"); return t.fl(); }, partials: {}, subs: {} });
defaultTemplates["generic-file-path"] = new hogan_js__WEBPACK_IMPORTED_MODULE_0__["Template"]({ code: function (c, p, i) { var t = this; t.b(i = i || ""); t.b("<span class=\"d2h-file-name-wrapper\">"); t.b("\n" + i); t.b(t.rp("<fileIcon0", c, p, "    ")); t.b("    <span class=\"d2h-file-name\">"); t.b(t.v(t.f("fileDiffName", c, p, 0))); t.b("</span>"); t.b("\n" + i); t.b(t.rp("<fileTag1", c, p, "    ")); t.b("</span>"); return t.fl(); }, partials: { "<fileIcon0": { name: "fileIcon", partials: {}, subs: {} }, "<fileTag1": { name: "fileTag", partials: {}, subs: {} } }, subs: {} });
defaultTemplates["generic-line"] = new hogan_js__WEBPACK_IMPORTED_MODULE_0__["Template"]({ code: function (c, p, i) { var t = this; t.b(i = i || ""); t.b("<tr>"); t.b("\n" + i); t.b("    <td class=\""); t.b(t.v(t.f("lineClass", c, p, 0))); t.b(" "); t.b(t.v(t.f("type", c, p, 0))); t.b("\">"); t.b("\n" + i); t.b("      "); t.b(t.t(t.f("lineNumber", c, p, 0))); t.b("\n" + i); t.b("    </td>"); t.b("\n" + i); t.b("    <td class=\""); t.b(t.v(t.f("type", c, p, 0))); t.b("\">"); t.b("\n" + i); t.b("        <div class=\""); t.b(t.v(t.f("contentClass", c, p, 0))); t.b(" "); t.b(t.v(t.f("type", c, p, 0))); t.b("\">"); t.b("\n" + i); if (t.s(t.f("prefix", c, p, 1), c, p, 0, 171, 247, "{{ }}")) {
        t.rs(c, p, function (c, p, t) { t.b("            <span class=\"d2h-code-line-prefix\">"); t.b(t.t(t.f("prefix", c, p, 0))); t.b("</span>"); t.b("\n" + i); });
        c.pop();
    } if (!t.s(t.f("prefix", c, p, 1), c, p, 1, 0, 0, "")) {
        t.b("            <span class=\"d2h-code-line-prefix\">&nbsp;</span>");
        t.b("\n" + i);
    } ; if (t.s(t.f("content", c, p, 1), c, p, 0, 380, 454, "{{ }}")) {
        t.rs(c, p, function (c, p, t) { t.b("            <span class=\"d2h-code-line-ctn\">"); t.b(t.t(t.f("content", c, p, 0))); t.b("</span>"); t.b("\n" + i); });
        c.pop();
    } if (!t.s(t.f("content", c, p, 1), c, p, 1, 0, 0, "")) {
        t.b("            <span class=\"d2h-code-line-ctn\"><br></span>");
        t.b("\n" + i);
    } ; t.b("        </div>"); t.b("\n" + i); t.b("    </td>"); t.b("\n" + i); t.b("</tr>"); return t.fl(); }, partials: {}, subs: {} });
defaultTemplates["generic-wrapper"] = new hogan_js__WEBPACK_IMPORTED_MODULE_0__["Template"]({ code: function (c, p, i) { var t = this; t.b(i = i || ""); t.b("<div class=\"d2h-wrapper\">"); t.b("\n" + i); t.b("    "); t.b(t.t(t.f("content", c, p, 0))); t.b("\n" + i); t.b("</div>"); return t.fl(); }, partials: {}, subs: {} });
defaultTemplates["icon-file-added"] = new hogan_js__WEBPACK_IMPORTED_MODULE_0__["Template"]({ code: function (c, p, i) { var t = this; t.b(i = i || ""); t.b("<svg aria-hidden=\"true\" class=\"d2h-icon d2h-added\" height=\"16\" title=\"added\" version=\"1.1\" viewBox=\"0 0 14 16\""); t.b("\n" + i); t.b("     width=\"14\">"); t.b("\n" + i); t.b("    <path d=\"M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM6 9H3V7h3V4h2v3h3v2H8v3H6V9z\"></path>"); t.b("\n" + i); t.b("</svg>"); return t.fl(); }, partials: {}, subs: {} });
defaultTemplates["icon-file-changed"] = new hogan_js__WEBPACK_IMPORTED_MODULE_0__["Template"]({ code: function (c, p, i) { var t = this; t.b(i = i || ""); t.b("<svg aria-hidden=\"true\" class=\"d2h-icon d2h-changed\" height=\"16\" title=\"modified\" version=\"1.1\""); t.b("\n" + i); t.b("     viewBox=\"0 0 14 16\" width=\"14\">"); t.b("\n" + i); t.b("    <path d=\"M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM4 8c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z\"></path>"); t.b("\n" + i); t.b("</svg>"); return t.fl(); }, partials: {}, subs: {} });
defaultTemplates["icon-file-deleted"] = new hogan_js__WEBPACK_IMPORTED_MODULE_0__["Template"]({ code: function (c, p, i) { var t = this; t.b(i = i || ""); t.b("<svg aria-hidden=\"true\" class=\"d2h-icon d2h-deleted\" height=\"16\" title=\"removed\" version=\"1.1\""); t.b("\n" + i); t.b("     viewBox=\"0 0 14 16\" width=\"14\">"); t.b("\n" + i); t.b("    <path d=\"M13 1H1C0.45 1 0 1.45 0 2v12c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1z m0 13H1V2h12v12zM11 9H3V7h8v2z\"></path>"); t.b("\n" + i); t.b("</svg>"); return t.fl(); }, partials: {}, subs: {} });
defaultTemplates["icon-file-renamed"] = new hogan_js__WEBPACK_IMPORTED_MODULE_0__["Template"]({ code: function (c, p, i) { var t = this; t.b(i = i || ""); t.b("<svg aria-hidden=\"true\" class=\"d2h-icon d2h-moved\" height=\"16\" title=\"renamed\" version=\"1.1\""); t.b("\n" + i); t.b("     viewBox=\"0 0 14 16\" width=\"14\">"); t.b("\n" + i); t.b("    <path d=\"M6 9H3V7h3V4l5 4-5 4V9z m8-7v12c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h12c0.55 0 1 0.45 1 1z m-1 0H1v12h12V2z\"></path>"); t.b("\n" + i); t.b("</svg>"); return t.fl(); }, partials: {}, subs: {} });
defaultTemplates["icon-file"] = new hogan_js__WEBPACK_IMPORTED_MODULE_0__["Template"]({ code: function (c, p, i) { var t = this; t.b(i = i || ""); t.b("<svg aria-hidden=\"true\" class=\"d2h-icon\" height=\"16\" version=\"1.1\" viewBox=\"0 0 12 16\" width=\"12\">"); t.b("\n" + i); t.b("    <path d=\"M6 5H2v-1h4v1zM2 8h7v-1H2v1z m0 2h7v-1H2v1z m0 2h7v-1H2v1z m10-7.5v9.5c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h7.5l3.5 3.5z m-1 0.5L8 2H1v12h10V5z\"></path>"); t.b("\n" + i); t.b("</svg>"); return t.fl(); }, partials: {}, subs: {} });
defaultTemplates["line-by-line-file-diff"] = new hogan_js__WEBPACK_IMPORTED_MODULE_0__["Template"]({ code: function (c, p, i) { var t = this; t.b(i = i || ""); t.b("<div id=\""); t.b(t.v(t.f("fileHtmlId", c, p, 0))); t.b("\" class=\"d2h-file-wrapper\" data-lang=\""); t.b(t.v(t.d("file.language", c, p, 0))); t.b("\">"); t.b("\n" + i); t.b("    <div class=\"d2h-file-header\">"); t.b("\n" + i); t.b("    "); t.b(t.t(t.f("filePath", c, p, 0))); t.b("\n" + i); t.b("    </div>"); t.b("\n" + i); t.b("    <div class=\"d2h-file-diff\">"); t.b("\n" + i); t.b("        <div class=\"d2h-code-wrapper\">"); t.b("\n" + i); t.b("            <table class=\"d2h-diff-table\">"); t.b("\n" + i); t.b("                <tbody class=\"d2h-diff-tbody\">"); t.b("\n" + i); t.b("                "); t.b(t.t(t.f("diffs", c, p, 0))); t.b("\n" + i); t.b("                </tbody>"); t.b("\n" + i); t.b("            </table>"); t.b("\n" + i); t.b("        </div>"); t.b("\n" + i); t.b("    </div>"); t.b("\n" + i); t.b("</div>"); return t.fl(); }, partials: {}, subs: {} });
defaultTemplates["line-by-line-numbers"] = new hogan_js__WEBPACK_IMPORTED_MODULE_0__["Template"]({ code: function (c, p, i) { var t = this; t.b(i = i || ""); t.b("<div class=\"line-num1\">"); t.b(t.v(t.f("oldNumber", c, p, 0))); t.b("</div>"); t.b("\n" + i); t.b("<div class=\"line-num2\">"); t.b(t.v(t.f("newNumber", c, p, 0))); t.b("</div>"); return t.fl(); }, partials: {}, subs: {} });
defaultTemplates["side-by-side-file-diff"] = new hogan_js__WEBPACK_IMPORTED_MODULE_0__["Template"]({ code: function (c, p, i) { var t = this; t.b(i = i || ""); t.b("<div id=\""); t.b(t.v(t.f("fileHtmlId", c, p, 0))); t.b("\" class=\"d2h-file-wrapper\" data-lang=\""); t.b(t.v(t.d("file.language", c, p, 0))); t.b("\">"); t.b("\n" + i); t.b("    <div class=\"d2h-file-header\">"); t.b("\n" + i); t.b("      "); t.b(t.t(t.f("filePath", c, p, 0))); t.b("\n" + i); t.b("    </div>"); t.b("\n" + i); t.b("    <div class=\"d2h-files-diff\">"); t.b("\n" + i); t.b("        <div class=\"d2h-file-side-diff\">"); t.b("\n" + i); t.b("            <div class=\"d2h-code-wrapper\">"); t.b("\n" + i); t.b("                <table class=\"d2h-diff-table\">"); t.b("\n" + i); t.b("                    <tbody class=\"d2h-diff-tbody\">"); t.b("\n" + i); t.b("                    "); t.b(t.t(t.d("diffs.left", c, p, 0))); t.b("\n" + i); t.b("                    </tbody>"); t.b("\n" + i); t.b("                </table>"); t.b("\n" + i); t.b("            </div>"); t.b("\n" + i); t.b("        </div>"); t.b("\n" + i); t.b("        <div class=\"d2h-file-side-diff\">"); t.b("\n" + i); t.b("            <div class=\"d2h-code-wrapper\">"); t.b("\n" + i); t.b("                <table class=\"d2h-diff-table\">"); t.b("\n" + i); t.b("                    <tbody class=\"d2h-diff-tbody\">"); t.b("\n" + i); t.b("                    "); t.b(t.t(t.d("diffs.right", c, p, 0))); t.b("\n" + i); t.b("                    </tbody>"); t.b("\n" + i); t.b("                </table>"); t.b("\n" + i); t.b("            </div>"); t.b("\n" + i); t.b("        </div>"); t.b("\n" + i); t.b("    </div>"); t.b("\n" + i); t.b("</div>"); return t.fl(); }, partials: {}, subs: {} });
defaultTemplates["tag-file-added"] = new hogan_js__WEBPACK_IMPORTED_MODULE_0__["Template"]({ code: function (c, p, i) { var t = this; t.b(i = i || ""); t.b("<span class=\"d2h-tag d2h-added d2h-added-tag\">ADDED</span>"); return t.fl(); }, partials: {}, subs: {} });
defaultTemplates["tag-file-changed"] = new hogan_js__WEBPACK_IMPORTED_MODULE_0__["Template"]({ code: function (c, p, i) { var t = this; t.b(i = i || ""); t.b("<span class=\"d2h-tag d2h-changed d2h-changed-tag\">CHANGED</span>"); return t.fl(); }, partials: {}, subs: {} });
defaultTemplates["tag-file-deleted"] = new hogan_js__WEBPACK_IMPORTED_MODULE_0__["Template"]({ code: function (c, p, i) { var t = this; t.b(i = i || ""); t.b("<span class=\"d2h-tag d2h-deleted d2h-deleted-tag\">DELETED</span>"); return t.fl(); }, partials: {}, subs: {} });
defaultTemplates["tag-file-renamed"] = new hogan_js__WEBPACK_IMPORTED_MODULE_0__["Template"]({ code: function (c, p, i) { var t = this; t.b(i = i || ""); t.b("<span class=\"d2h-tag d2h-moved d2h-moved-tag\">RENAMED</span>"); return t.fl(); }, partials: {}, subs: {} });
//# sourceMappingURL=diff2html-templates.js.map

/***/ }),

/***/ "e6Wu":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var difflib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! difflib */ "7Mwc");
/* harmony import */ var difflib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(difflib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var diff2html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diff2html */ "rn2K");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "xeH2");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "mUSF");





function main () {
  console.log('start bgm wiki rev diff UserScript')
  initUI()
}

function initUI () {
  jquery__WEBPACK_IMPORTED_MODULE_2__('#pagehistory li').each(function () {
    const el = jquery__WEBPACK_IMPORTED_MODULE_2__(this)
    const rev = parseRevEl(el)
    el.prepend(`<input type="checkbox" class="rev-trim21-cn" name="rev" label="select to compare" value="${rev.id}">`)
  })
  jquery__WEBPACK_IMPORTED_MODULE_2__('#columnInSubjectA span.text').append('<a href="#;" id="compare-trim21-cn" tar class="l"> > 比较选中的版本</a>')
  jquery__WEBPACK_IMPORTED_MODULE_2__('#compare-trim21-cn').click(function () {
    const selectedRevs = getSelectedVersion()
    compare(selectedRevs)
  })
}

function getSelectedVersion () {
  const selectedVersion = []
  const selectedRev = jquery__WEBPACK_IMPORTED_MODULE_2__('.rev-trim21-cn:checked')
  if (selectedRev.length < 2) {
    window.alert('请选中两个版本进行比较')
  }
  if (selectedRev.length > 2) {
    window.alert('只能比较两个版本')
  }
  selectedRev.each(function () {
    const el = jquery__WEBPACK_IMPORTED_MODULE_2__(this)
    selectedVersion.push(el.val())
  })
  selectedVersion.reverse()
  return selectedVersion
}

function compare (revs) {
  console.log('compare')
  jquery__WEBPACK_IMPORTED_MODULE_2__('head').append('<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/diff2html/bundles/css/diff2html.min.css" />')
  const rev1 = getRevInfo(revs[0])
  const rev2 = getRevInfo(revs[1])
  const p1 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["request"])(rev1.url)
  const p2 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["request"])(rev2.url)
  Promise.all([p1, p2]).then(values => {
    const contents = []
    for (const page of values) {
      const jq = jquery__WEBPACK_IMPORTED_MODULE_2__(page.responseText)
      contents.push(jq.find('#subject_infobox').val())
    }
    const d = difflib__WEBPACK_IMPORTED_MODULE_0__["unifiedDiff"](contents[0].split('\n'), contents[1].split('\n'), {
      fromfile: rev1.comment,
      tofile: rev2.comment,
      fromfiledate: rev1.date,
      tofiledate: rev2.date,
      lineterm: ''
    })
    const rendered = render(d.join('\n'), {})
    show(rendered)
  })
}

function getRevs () {
  const revs = []
  jquery__WEBPACK_IMPORTED_MODULE_2__('#pagehistory li').each(function () {
    const el = jquery__WEBPACK_IMPORTED_MODULE_2__(this)
    revs.push(parseRevEl(el))
  })
  return revs
}

function parseRevEl (el) {
  const date = el.find('a').first().html()
  const revEL = el.find('a.l:contains("恢复")')
  const revCommentEl = el.find('span.comment')
  let comment = ''
  if (revCommentEl.length) {
    comment = revCommentEl.html()
    comment = comment.substring(1, comment.length - 1)
  }
  const revHref = revEL.attr('href')
  const revID = revHref.split('/').pop()
  return {
    id: revID,
    comment,
    date,
    url: revHref,
  }
}

function getRevInfo (revID) {
  for (const rev of getRevs()) {
    if (rev.id === revID) {
      console.log(revID, rev)
      return rev
    }
  }
}

function render (diff) {
  return diff2html__WEBPACK_IMPORTED_MODULE_1__["html"](diff)
}

function show (html) {
  const el = jquery__WEBPACK_IMPORTED_MODULE_2__('#show-trim21-cn')
  if (el.length) {
    el.html(html)
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_2__('#columnInSubjectA').prepend('<div id=show-trim21-cn></dev>')
    show(html)
  }
}

main()


/***/ }),

/***/ "mUSF":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
function request (url) {
  return new Promise((resolve, reject) => {
    window.GM_xmlhttpRequest({
      url,
      onload: function ({ response, responseText, }) {
        resolve({ response, responseText })
      }
    })
  })
}




/***/ }),

/***/ "q+jk":
/*!***************************************************!*\
  !*** ./node_modules/diff2html/lib-esm/rematch.js ***!
  \***************************************************/
/*! exports provided: levenshtein, newDistanceFn, newMatcherFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levenshtein", function() { return levenshtein; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newDistanceFn", function() { return newDistanceFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newMatcherFn", function() { return newMatcherFn; });
function levenshtein(a, b) {
    if (a.length === 0) {
        return b.length;
    }
    if (b.length === 0) {
        return a.length;
    }
    var matrix = [];
    var i;
    for (i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    var j;
    for (j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }
    for (i = 1; i <= b.length; i++) {
        for (j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            }
            else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
            }
        }
    }
    return matrix[b.length][a.length];
}
function newDistanceFn(str) {
    return function (x, y) {
        var xValue = str(x).trim();
        var yValue = str(y).trim();
        var lev = levenshtein(xValue, yValue);
        return lev / (xValue.length + yValue.length);
    };
}
function newMatcherFn(distance) {
    function findBestMatch(a, b, cache) {
        if (cache === void 0) { cache = new Map(); }
        var bestMatchDist = Infinity;
        var bestMatch;
        for (var i = 0; i < a.length; ++i) {
            for (var j = 0; j < b.length; ++j) {
                var cacheKey = JSON.stringify([a[i], b[j]]);
                var md = void 0;
                if (!(cache.has(cacheKey) && (md = cache.get(cacheKey)))) {
                    md = distance(a[i], b[j]);
                    cache.set(cacheKey, md);
                }
                if (md < bestMatchDist) {
                    bestMatchDist = md;
                    bestMatch = { indexA: i, indexB: j, score: bestMatchDist };
                }
            }
        }
        return bestMatch;
    }
    function group(a, b, level, cache) {
        if (level === void 0) { level = 0; }
        if (cache === void 0) { cache = new Map(); }
        var bm = findBestMatch(a, b, cache);
        if (!bm || a.length + b.length < 3) {
            return [[a, b]];
        }
        var a1 = a.slice(0, bm.indexA);
        var b1 = b.slice(0, bm.indexB);
        var aMatch = [a[bm.indexA]];
        var bMatch = [b[bm.indexB]];
        var tailA = bm.indexA + 1;
        var tailB = bm.indexB + 1;
        var a2 = a.slice(tailA);
        var b2 = b.slice(tailB);
        var group1 = group(a1, b1, level + 1, cache);
        var groupMatch = group(aMatch, bMatch, level + 1, cache);
        var group2 = group(a2, b2, level + 1, cache);
        var result = groupMatch;
        if (bm.indexA > 0 || bm.indexB > 0) {
            result = group1.concat(result);
        }
        if (a.length > tailA || b.length > tailB) {
            result = result.concat(group2);
        }
        return result;
    }
    return group;
}
//# sourceMappingURL=rematch.js.map

/***/ }),

/***/ "qNJW":
/*!********************************************************!*\
  !*** ./node_modules/diff2html/lib-esm/render-utils.js ***!
  \********************************************************/
/*! exports provided: CSSLineClass, defaultRenderConfig, toCSSClass, escapeForHtml, deconstructLine, filenameDiff, getHtmlId, getFileIcon, diffHighlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSLineClass", function() { return CSSLineClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRenderConfig", function() { return defaultRenderConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCSSClass", function() { return toCSSClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeForHtml", function() { return escapeForHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deconstructLine", function() { return deconstructLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filenameDiff", function() { return filenameDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHtmlId", function() { return getHtmlId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileIcon", function() { return getFileIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffHighlight", function() { return diffHighlight; });
/* harmony import */ var diff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diff */ "v2jn");
/* harmony import */ var diff__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diff__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "RQrS");
/* harmony import */ var _rematch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rematch */ "q+jk");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "X1my");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var CSSLineClass = {
    INSERTS: 'd2h-ins',
    DELETES: 'd2h-del',
    CONTEXT: 'd2h-cntx',
    INFO: 'd2h-info',
    INSERT_CHANGES: 'd2h-ins d2h-change',
    DELETE_CHANGES: 'd2h-del d2h-change',
};
var defaultRenderConfig = {
    matching: _types__WEBPACK_IMPORTED_MODULE_3__["LineMatchingType"].NONE,
    matchWordsThreshold: 0.25,
    maxLineLengthHighlight: 10000,
    diffStyle: _types__WEBPACK_IMPORTED_MODULE_3__["DiffStyleType"].WORD,
};
var separator = '/';
var distance = _rematch__WEBPACK_IMPORTED_MODULE_2__["newDistanceFn"](function (change) { return change.value; });
var matcher = _rematch__WEBPACK_IMPORTED_MODULE_2__["newMatcherFn"](distance);
function isDevNullName(name) {
    return name.indexOf('dev/null') !== -1;
}
function removeInsElements(line) {
    return line.replace(/(<ins[^>]*>((.|\n)*?)<\/ins>)/g, '');
}
function removeDelElements(line) {
    return line.replace(/(<del[^>]*>((.|\n)*?)<\/del>)/g, '');
}
function toCSSClass(lineType) {
    switch (lineType) {
        case _types__WEBPACK_IMPORTED_MODULE_3__["LineType"].CONTEXT:
            return CSSLineClass.CONTEXT;
        case _types__WEBPACK_IMPORTED_MODULE_3__["LineType"].INSERT:
            return CSSLineClass.INSERTS;
        case _types__WEBPACK_IMPORTED_MODULE_3__["LineType"].DELETE:
            return CSSLineClass.DELETES;
    }
}
function prefixLength(isCombined) {
    return isCombined ? 2 : 1;
}
function escapeForHtml(str) {
    return str
        .slice(0)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
}
function deconstructLine(line, isCombined, escape) {
    if (escape === void 0) { escape = true; }
    var indexToSplit = prefixLength(isCombined);
    return {
        prefix: line.substring(0, indexToSplit),
        content: escape ? escapeForHtml(line.substring(indexToSplit)) : line.substring(indexToSplit),
    };
}
function filenameDiff(file) {
    var oldFilename = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["unifyPath"])(file.oldName);
    var newFilename = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["unifyPath"])(file.newName);
    if (oldFilename !== newFilename && !isDevNullName(oldFilename) && !isDevNullName(newFilename)) {
        var prefixPaths = [];
        var suffixPaths = [];
        var oldFilenameParts = oldFilename.split(separator);
        var newFilenameParts = newFilename.split(separator);
        var oldFilenamePartsSize = oldFilenameParts.length;
        var newFilenamePartsSize = newFilenameParts.length;
        var i = 0;
        var j = oldFilenamePartsSize - 1;
        var k = newFilenamePartsSize - 1;
        while (i < j && i < k) {
            if (oldFilenameParts[i] === newFilenameParts[i]) {
                prefixPaths.push(newFilenameParts[i]);
                i += 1;
            }
            else {
                break;
            }
        }
        while (j > i && k > i) {
            if (oldFilenameParts[j] === newFilenameParts[k]) {
                suffixPaths.unshift(newFilenameParts[k]);
                j -= 1;
                k -= 1;
            }
            else {
                break;
            }
        }
        var finalPrefix = prefixPaths.join(separator);
        var finalSuffix = suffixPaths.join(separator);
        var oldRemainingPath = oldFilenameParts.slice(i, j + 1).join(separator);
        var newRemainingPath = newFilenameParts.slice(i, k + 1).join(separator);
        if (finalPrefix.length && finalSuffix.length) {
            return (finalPrefix + separator + '{' + oldRemainingPath + ' → ' + newRemainingPath + '}' + separator + finalSuffix);
        }
        else if (finalPrefix.length) {
            return finalPrefix + separator + '{' + oldRemainingPath + ' → ' + newRemainingPath + '}';
        }
        else if (finalSuffix.length) {
            return '{' + oldRemainingPath + ' → ' + newRemainingPath + '}' + separator + finalSuffix;
        }
        return oldFilename + ' → ' + newFilename;
    }
    else if (!isDevNullName(newFilename)) {
        return newFilename;
    }
    else {
        return oldFilename;
    }
}
function getHtmlId(file) {
    return "d2h-" + Object(_utils__WEBPACK_IMPORTED_MODULE_1__["hashCode"])(filenameDiff(file))
        .toString()
        .slice(-6);
}
function getFileIcon(file) {
    var templateName = 'file-changed';
    if (file.isRename) {
        templateName = 'file-renamed';
    }
    else if (file.isCopy) {
        templateName = 'file-renamed';
    }
    else if (file.isNew) {
        templateName = 'file-added';
    }
    else if (file.isDeleted) {
        templateName = 'file-deleted';
    }
    else if (file.newName !== file.oldName) {
        templateName = 'file-renamed';
    }
    return templateName;
}
function diffHighlight(diffLine1, diffLine2, isCombined, config) {
    if (config === void 0) { config = {}; }
    var _a = __assign(__assign({}, defaultRenderConfig), config), matching = _a.matching, maxLineLengthHighlight = _a.maxLineLengthHighlight, matchWordsThreshold = _a.matchWordsThreshold, diffStyle = _a.diffStyle;
    var line1 = deconstructLine(diffLine1, isCombined, false);
    var line2 = deconstructLine(diffLine2, isCombined, false);
    if (line1.content.length > maxLineLengthHighlight || line2.content.length > maxLineLengthHighlight) {
        return {
            oldLine: {
                prefix: line1.prefix,
                content: line1.content,
            },
            newLine: {
                prefix: line2.prefix,
                content: line2.content,
            },
        };
    }
    var diff = diffStyle === 'char'
        ? diff__WEBPACK_IMPORTED_MODULE_0__["diffChars"](line1.content, line2.content)
        : diff__WEBPACK_IMPORTED_MODULE_0__["diffWordsWithSpace"](line1.content, line2.content);
    var changedWords = [];
    if (diffStyle === 'word' && matching === 'words') {
        var removed = diff.filter(function (element) { return element.removed; });
        var added = diff.filter(function (element) { return element.added; });
        var chunks = matcher(added, removed);
        chunks.forEach(function (chunk) {
            if (chunk[0].length === 1 && chunk[1].length === 1) {
                var dist = distance(chunk[0][0], chunk[1][0]);
                if (dist < matchWordsThreshold) {
                    changedWords.push(chunk[0][0]);
                    changedWords.push(chunk[1][0]);
                }
            }
        });
    }
    var highlightedLine = diff.reduce(function (highlightedLine, part) {
        var elemType = part.added ? 'ins' : part.removed ? 'del' : null;
        var addClass = changedWords.indexOf(part) > -1 ? ' class="d2h-change"' : '';
        var escapedValue = escapeForHtml(part.value);
        return elemType !== null
            ? highlightedLine + "<" + elemType + addClass + ">" + escapedValue + "</" + elemType + ">"
            : "" + highlightedLine + escapedValue;
    }, '');
    return {
        oldLine: {
            prefix: line1.prefix,
            content: removeInsElements(highlightedLine),
        },
        newLine: {
            prefix: line2.prefix,
            content: removeDelElements(highlightedLine),
        },
    };
}
//# sourceMappingURL=render-utils.js.map

/***/ }),

/***/ "qVJG":
/*!*****************************************************************!*\
  !*** ./node_modules/diff2html/lib-esm/side-by-side-renderer.js ***!
  \*****************************************************************/
/*! exports provided: defaultSideBySideRendererConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSideBySideRendererConfig", function() { return defaultSideBySideRendererConfig; });
/* harmony import */ var _rematch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rematch */ "q+jk");
/* harmony import */ var _render_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-utils */ "qNJW");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "X1my");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var defaultSideBySideRendererConfig = __assign(__assign({}, _render_utils__WEBPACK_IMPORTED_MODULE_1__["defaultRenderConfig"]), { renderNothingWhenEmpty: false, matchingMaxComparisons: 2500, maxLineSizeInBlockForComparison: 200 });
var genericTemplatesPath = 'generic';
var baseTemplatesPath = 'side-by-side';
var iconsBaseTemplatesPath = 'icon';
var tagsBaseTemplatesPath = 'tag';
var SideBySideRenderer = (function () {
    function SideBySideRenderer(hoganUtils, config) {
        if (config === void 0) { config = {}; }
        this.hoganUtils = hoganUtils;
        this.config = __assign(__assign({}, defaultSideBySideRendererConfig), config);
    }
    SideBySideRenderer.prototype.render = function (diffFiles) {
        var _this = this;
        var diffsHtml = diffFiles
            .map(function (file) {
            var diffs;
            if (file.blocks.length) {
                diffs = _this.generateFileHtml(file);
            }
            else {
                diffs = _this.generateEmptyDiff();
            }
            return _this.makeFileDiffHtml(file, diffs);
        })
            .join('\n');
        return this.hoganUtils.render(genericTemplatesPath, 'wrapper', { content: diffsHtml });
    };
    SideBySideRenderer.prototype.makeFileDiffHtml = function (file, diffs) {
        if (this.config.renderNothingWhenEmpty && Array.isArray(file.blocks) && file.blocks.length === 0)
            return '';
        var fileDiffTemplate = this.hoganUtils.template(baseTemplatesPath, 'file-diff');
        var filePathTemplate = this.hoganUtils.template(genericTemplatesPath, 'file-path');
        var fileIconTemplate = this.hoganUtils.template(iconsBaseTemplatesPath, 'file');
        var fileTagTemplate = this.hoganUtils.template(tagsBaseTemplatesPath, _render_utils__WEBPACK_IMPORTED_MODULE_1__["getFileIcon"](file));
        return fileDiffTemplate.render({
            file: file,
            fileHtmlId: _render_utils__WEBPACK_IMPORTED_MODULE_1__["getHtmlId"](file),
            diffs: diffs,
            filePath: filePathTemplate.render({
                fileDiffName: _render_utils__WEBPACK_IMPORTED_MODULE_1__["filenameDiff"](file),
            }, {
                fileIcon: fileIconTemplate,
                fileTag: fileTagTemplate,
            }),
        });
    };
    SideBySideRenderer.prototype.generateEmptyDiff = function () {
        return {
            right: '',
            left: this.hoganUtils.render(genericTemplatesPath, 'empty-diff', {
                contentClass: 'd2h-code-side-line',
                CSSLineClass: _render_utils__WEBPACK_IMPORTED_MODULE_1__["CSSLineClass"],
            }),
        };
    };
    SideBySideRenderer.prototype.generateFileHtml = function (file) {
        var _this = this;
        var matcher = _rematch__WEBPACK_IMPORTED_MODULE_0__["newMatcherFn"](_rematch__WEBPACK_IMPORTED_MODULE_0__["newDistanceFn"](function (e) { return _render_utils__WEBPACK_IMPORTED_MODULE_1__["deconstructLine"](e.content, file.isCombined).content; }));
        return file.blocks
            .map(function (block) {
            var fileHtml = {
                left: _this.makeHeaderHtml(block.header),
                right: _this.makeHeaderHtml(''),
            };
            _this.applyLineGroupping(block).forEach(function (_a) {
                var contextLines = _a[0], oldLines = _a[1], newLines = _a[2];
                if (oldLines.length && newLines.length && !contextLines.length) {
                    _this.applyRematchMatching(oldLines, newLines, matcher).map(function (_a) {
                        var oldLines = _a[0], newLines = _a[1];
                        var _b = _this.processChangedLines(file.isCombined, oldLines, newLines), left = _b.left, right = _b.right;
                        fileHtml.left += left;
                        fileHtml.right += right;
                    });
                }
                else if (contextLines.length) {
                    contextLines.forEach(function (line) {
                        var _a = _render_utils__WEBPACK_IMPORTED_MODULE_1__["deconstructLine"](line.content, file.isCombined), prefix = _a.prefix, content = _a.content;
                        var _b = _this.generateLineHtml({
                            type: _render_utils__WEBPACK_IMPORTED_MODULE_1__["CSSLineClass"].CONTEXT,
                            prefix: prefix,
                            content: content,
                            number: line.oldNumber,
                        }, {
                            type: _render_utils__WEBPACK_IMPORTED_MODULE_1__["CSSLineClass"].CONTEXT,
                            prefix: prefix,
                            content: content,
                            number: line.newNumber,
                        }), left = _b.left, right = _b.right;
                        fileHtml.left += left;
                        fileHtml.right += right;
                    });
                }
                else if (oldLines.length || newLines.length) {
                    var _b = _this.processChangedLines(file.isCombined, oldLines, newLines), left = _b.left, right = _b.right;
                    fileHtml.left += left;
                    fileHtml.right += right;
                }
                else {
                    console.error('Unknown state reached while processing groups of lines', contextLines, oldLines, newLines);
                }
            });
            return fileHtml;
        })
            .reduce(function (accomulated, html) {
            return { left: accomulated.left + html.left, right: accomulated.right + html.right };
        }, { left: '', right: '' });
    };
    SideBySideRenderer.prototype.applyLineGroupping = function (block) {
        var blockLinesGroups = [];
        var oldLines = [];
        var newLines = [];
        for (var i = 0; i < block.lines.length; i++) {
            var diffLine = block.lines[i];
            if ((diffLine.type !== _types__WEBPACK_IMPORTED_MODULE_2__["LineType"].INSERT && newLines.length) ||
                (diffLine.type === _types__WEBPACK_IMPORTED_MODULE_2__["LineType"].CONTEXT && oldLines.length > 0)) {
                blockLinesGroups.push([[], oldLines, newLines]);
                oldLines = [];
                newLines = [];
            }
            if (diffLine.type === _types__WEBPACK_IMPORTED_MODULE_2__["LineType"].CONTEXT) {
                blockLinesGroups.push([[diffLine], [], []]);
            }
            else if (diffLine.type === _types__WEBPACK_IMPORTED_MODULE_2__["LineType"].INSERT && oldLines.length === 0) {
                blockLinesGroups.push([[], [], [diffLine]]);
            }
            else if (diffLine.type === _types__WEBPACK_IMPORTED_MODULE_2__["LineType"].INSERT && oldLines.length > 0) {
                newLines.push(diffLine);
            }
            else if (diffLine.type === _types__WEBPACK_IMPORTED_MODULE_2__["LineType"].DELETE) {
                oldLines.push(diffLine);
            }
        }
        if (oldLines.length || newLines.length) {
            blockLinesGroups.push([[], oldLines, newLines]);
            oldLines = [];
            newLines = [];
        }
        return blockLinesGroups;
    };
    SideBySideRenderer.prototype.applyRematchMatching = function (oldLines, newLines, matcher) {
        var comparisons = oldLines.length * newLines.length;
        var maxLineSizeInBlock = Math.max.apply(null, [0].concat(oldLines.concat(newLines).map(function (elem) { return elem.content.length; })));
        var doMatching = comparisons < this.config.matchingMaxComparisons &&
            maxLineSizeInBlock < this.config.maxLineSizeInBlockForComparison &&
            (this.config.matching === 'lines' || this.config.matching === 'words');
        return doMatching ? matcher(oldLines, newLines) : [[oldLines, newLines]];
    };
    SideBySideRenderer.prototype.makeHeaderHtml = function (blockHeader) {
        return this.hoganUtils.render(genericTemplatesPath, 'block-header', {
            CSSLineClass: _render_utils__WEBPACK_IMPORTED_MODULE_1__["CSSLineClass"],
            blockHeader: blockHeader,
            lineClass: 'd2h-code-side-linenumber',
            contentClass: 'd2h-code-side-line',
        });
    };
    SideBySideRenderer.prototype.processChangedLines = function (isCombined, oldLines, newLines) {
        var fileHtml = {
            right: '',
            left: '',
        };
        var maxLinesNumber = Math.max(oldLines.length, newLines.length);
        for (var i = 0; i < maxLinesNumber; i++) {
            var oldLine = oldLines[i];
            var newLine = newLines[i];
            var diff = oldLine !== undefined && newLine !== undefined
                ? _render_utils__WEBPACK_IMPORTED_MODULE_1__["diffHighlight"](oldLine.content, newLine.content, isCombined, this.config)
                : undefined;
            var preparedOldLine = oldLine !== undefined && oldLine.oldNumber !== undefined
                ? __assign(__assign({}, (diff !== undefined
                    ? {
                        prefix: diff.oldLine.prefix,
                        content: diff.oldLine.content,
                        type: _render_utils__WEBPACK_IMPORTED_MODULE_1__["CSSLineClass"].DELETE_CHANGES,
                    }
                    : __assign(__assign({}, _render_utils__WEBPACK_IMPORTED_MODULE_1__["deconstructLine"](oldLine.content, isCombined)), { type: _render_utils__WEBPACK_IMPORTED_MODULE_1__["toCSSClass"](oldLine.type) }))), { number: oldLine.oldNumber }) : undefined;
            var preparedNewLine = newLine !== undefined && newLine.newNumber !== undefined
                ? __assign(__assign({}, (diff !== undefined
                    ? {
                        prefix: diff.newLine.prefix,
                        content: diff.newLine.content,
                        type: _render_utils__WEBPACK_IMPORTED_MODULE_1__["CSSLineClass"].INSERT_CHANGES,
                    }
                    : __assign(__assign({}, _render_utils__WEBPACK_IMPORTED_MODULE_1__["deconstructLine"](newLine.content, isCombined)), { type: _render_utils__WEBPACK_IMPORTED_MODULE_1__["toCSSClass"](newLine.type) }))), { number: newLine.newNumber }) : undefined;
            var _a = this.generateLineHtml(preparedOldLine, preparedNewLine), left = _a.left, right = _a.right;
            fileHtml.left += left;
            fileHtml.right += right;
        }
        return fileHtml;
    };
    SideBySideRenderer.prototype.generateLineHtml = function (oldLine, newLine) {
        return {
            left: this.generateSingleHtml(oldLine),
            right: this.generateSingleHtml(newLine),
        };
    };
    SideBySideRenderer.prototype.generateSingleHtml = function (line) {
        var lineClass = 'd2h-code-side-linenumber';
        var contentClass = 'd2h-code-side-line';
        return this.hoganUtils.render(genericTemplatesPath, 'line', {
            type: (line === null || line === void 0 ? void 0 : line.type) || _render_utils__WEBPACK_IMPORTED_MODULE_1__["CSSLineClass"].CONTEXT + " d2h-emptyplaceholder",
            lineClass: line !== undefined ? lineClass : lineClass + " d2h-code-side-emptyplaceholder",
            contentClass: line !== undefined ? contentClass : contentClass + " d2h-code-side-emptyplaceholder",
            prefix: (line === null || line === void 0 ? void 0 : line.prefix) === ' ' ? '&nbsp;' : line === null || line === void 0 ? void 0 : line.prefix,
            content: line === null || line === void 0 ? void 0 : line.content,
            lineNumber: line === null || line === void 0 ? void 0 : line.number,
        });
    };
    return SideBySideRenderer;
}());
/* harmony default export */ __webpack_exports__["default"] = (SideBySideRenderer);
//# sourceMappingURL=side-by-side-renderer.js.map

/***/ }),

/***/ "qVjC":
/*!*********************************************!*\
  !*** ./node_modules/difflib/lib/difflib.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.3.1

/*
Module difflib -- helpers for computing deltas between objects.

Function getCloseMatches(word, possibilities, n=3, cutoff=0.6):
    Use SequenceMatcher to return list of the best "good enough" matches.

Function contextDiff(a, b):
    For two lists of strings, return a delta in context diff format.

Function ndiff(a, b):
    Return a delta: the difference between `a` and `b` (lists of strings).

Function restore(delta, which):
    Return one of the two sequences that generated an ndiff delta.

Function unifiedDiff(a, b):
    For two lists of strings, return a delta in unified diff format.

Class SequenceMatcher:
    A flexible class for comparing pairs of sequences of any type.

Class Differ:
    For producing human-readable deltas from sequences of lines of text.
*/


(function() {
  var Differ, Heap, IS_CHARACTER_JUNK, IS_LINE_JUNK, SequenceMatcher, assert, contextDiff, floor, getCloseMatches, max, min, ndiff, restore, unifiedDiff, _any, _arrayCmp, _calculateRatio, _countLeading, _formatRangeContext, _formatRangeUnified, _has,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  floor = Math.floor, max = Math.max, min = Math.min;

  Heap = __webpack_require__(/*! heap */ "F1pL");

  assert = __webpack_require__(/*! assert */ "9lTW");

  _calculateRatio = function(matches, length) {
    if (length) {
      return 2.0 * matches / length;
    } else {
      return 1.0;
    }
  };

  _arrayCmp = function(a, b) {
    var i, la, lb, _i, _ref, _ref1;
    _ref = [a.length, b.length], la = _ref[0], lb = _ref[1];
    for (i = _i = 0, _ref1 = min(la, lb); 0 <= _ref1 ? _i < _ref1 : _i > _ref1; i = 0 <= _ref1 ? ++_i : --_i) {
      if (a[i] < b[i]) {
        return -1;
      }
      if (a[i] > b[i]) {
        return 1;
      }
    }
    return la - lb;
  };

  _has = function(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  };

  _any = function(items) {
    var item, _i, _len;
    for (_i = 0, _len = items.length; _i < _len; _i++) {
      item = items[_i];
      if (item) {
        return true;
      }
    }
    return false;
  };

  SequenceMatcher = (function() {

    SequenceMatcher.name = 'SequenceMatcher';

    /*
      SequenceMatcher is a flexible class for comparing pairs of sequences of
      any type, so long as the sequence elements are hashable.  The basic
      algorithm predates, and is a little fancier than, an algorithm
      published in the late 1980's by Ratcliff and Obershelp under the
      hyperbolic name "gestalt pattern matching".  The basic idea is to find
      the longest contiguous matching subsequence that contains no "junk"
      elements (R-O doesn't address junk).  The same idea is then applied
      recursively to the pieces of the sequences to the left and to the right
      of the matching subsequence.  This does not yield minimal edit
      sequences, but does tend to yield matches that "look right" to people.
    
      SequenceMatcher tries to compute a "human-friendly diff" between two
      sequences.  Unlike e.g. UNIX(tm) diff, the fundamental notion is the
      longest *contiguous* & junk-free matching subsequence.  That's what
      catches peoples' eyes.  The Windows(tm) windiff has another interesting
      notion, pairing up elements that appear uniquely in each sequence.
      That, and the method here, appear to yield more intuitive difference
      reports than does diff.  This method appears to be the least vulnerable
      to synching up on blocks of "junk lines", though (like blank lines in
      ordinary text files, or maybe "<P>" lines in HTML files).  That may be
      because this is the only method of the 3 that has a *concept* of
      "junk" <wink>.
    
      Example, comparing two strings, and considering blanks to be "junk":
    
      >>> isjunk = (c) -> c is ' '
      >>> s = new SequenceMatcher(isjunk,
                                  'private Thread currentThread;',
                                  'private volatile Thread currentThread;')
    
      .ratio() returns a float in [0, 1], measuring the "similarity" of the
      sequences.  As a rule of thumb, a .ratio() value over 0.6 means the
      sequences are close matches:
    
      >>> s.ratio().toPrecision(3)
      '0.866'
    
      If you're only interested in where the sequences match,
      .getMatchingBlocks() is handy:
    
      >>> for [a, b, size] in s.getMatchingBlocks()
      ...   console.log("a[#{a}] and b[#{b}] match for #{size} elements");
      a[0] and b[0] match for 8 elements
      a[8] and b[17] match for 21 elements
      a[29] and b[38] match for 0 elements
    
      Note that the last tuple returned by .get_matching_blocks() is always a
      dummy, (len(a), len(b), 0), and this is the only case in which the last
      tuple element (number of elements matched) is 0.
    
      If you want to know how to change the first sequence into the second,
      use .get_opcodes():
    
      >>> for [op, a1, a2, b1, b2] in s.getOpcodes()
      ...   console.log "#{op} a[#{a1}:#{a2}] b[#{b1}:#{b2}]"
      equal a[0:8] b[0:8]
      insert a[8:8] b[8:17]
      equal a[8:29] b[17:38]
    
      See the Differ class for a fancy human-friendly file differencer, which
      uses SequenceMatcher both to compare sequences of lines, and to compare
      sequences of characters within similar (near-matching) lines.
    
      See also function getCloseMatches() in this module, which shows how
      simple code building on SequenceMatcher can be used to do useful work.
    
      Timing:  Basic R-O is cubic time worst case and quadratic time expected
      case.  SequenceMatcher is quadratic time for the worst case and has
      expected-case behavior dependent in a complicated way on how many
      elements the sequences have in common; best case time is linear.
    
      Methods:
    
      constructor(isjunk=null, a='', b='')
          Construct a SequenceMatcher.
    
      setSeqs(a, b)
          Set the two sequences to be compared.
    
      setSeq1(a)
          Set the first sequence to be compared.
    
      setSeq2(b)
          Set the second sequence to be compared.
    
      findLongestMatch(alo, ahi, blo, bhi)
          Find longest matching block in a[alo:ahi] and b[blo:bhi].
    
      getMatchingBlocks()
          Return list of triples describing matching subsequences.
    
      getOpcodes()
          Return list of 5-tuples describing how to turn a into b.
    
      ratio()
          Return a measure of the sequences' similarity (float in [0,1]).
    
      quickRatio()
          Return an upper bound on .ratio() relatively quickly.
    
      realQuickRatio()
          Return an upper bound on ratio() very quickly.
    */


    function SequenceMatcher(isjunk, a, b, autojunk) {
      this.isjunk = isjunk;
      if (a == null) {
        a = '';
      }
      if (b == null) {
        b = '';
      }
      this.autojunk = autojunk != null ? autojunk : true;
      /*
          Construct a SequenceMatcher.
      
          Optional arg isjunk is null (the default), or a one-argument
          function that takes a sequence element and returns true iff the
          element is junk.  Null is equivalent to passing "(x) -> 0", i.e.
          no elements are considered to be junk.  For example, pass
              (x) -> x in ' \t'
          if you're comparing lines as sequences of characters, and don't
          want to synch up on blanks or hard tabs.
      
          Optional arg a is the first of two sequences to be compared.  By
          default, an empty string.  The elements of a must be hashable.  See
          also .setSeqs() and .setSeq1().
      
          Optional arg b is the second of two sequences to be compared.  By
          default, an empty string.  The elements of b must be hashable. See
          also .setSeqs() and .setSeq2().
      
          Optional arg autojunk should be set to false to disable the
          "automatic junk heuristic" that treats popular elements as junk
          (see module documentation for more information).
      */

      this.a = this.b = null;
      this.setSeqs(a, b);
    }

    SequenceMatcher.prototype.setSeqs = function(a, b) {
      /* 
      Set the two sequences to be compared. 
      
      >>> s = new SequenceMatcher()
      >>> s.setSeqs('abcd', 'bcde')
      >>> s.ratio()
      0.75
      */
      this.setSeq1(a);
      return this.setSeq2(b);
    };

    SequenceMatcher.prototype.setSeq1 = function(a) {
      /* 
      Set the first sequence to be compared. 
      
      The second sequence to be compared is not changed.
      
      >>> s = new SequenceMatcher(null, 'abcd', 'bcde')
      >>> s.ratio()
      0.75
      >>> s.setSeq1('bcde')
      >>> s.ratio()
      1.0
      
      SequenceMatcher computes and caches detailed information about the
      second sequence, so if you want to compare one sequence S against
      many sequences, use .setSeq2(S) once and call .setSeq1(x)
      repeatedly for each of the other sequences.
      
      See also setSeqs() and setSeq2().
      */
      if (a === this.a) {
        return;
      }
      this.a = a;
      return this.matchingBlocks = this.opcodes = null;
    };

    SequenceMatcher.prototype.setSeq2 = function(b) {
      /*
          Set the second sequence to be compared. 
      
          The first sequence to be compared is not changed.
      
          >>> s = new SequenceMatcher(null, 'abcd', 'bcde')
          >>> s.ratio()
          0.75
          >>> s.setSeq2('abcd')
          >>> s.ratio()
          1.0
      
          SequenceMatcher computes and caches detailed information about the
          second sequence, so if you want to compare one sequence S against
          many sequences, use .setSeq2(S) once and call .setSeq1(x)
          repeatedly for each of the other sequences.
      
          See also setSeqs() and setSeq1().
      */
      if (b === this.b) {
        return;
      }
      this.b = b;
      this.matchingBlocks = this.opcodes = null;
      this.fullbcount = null;
      return this._chainB();
    };

    SequenceMatcher.prototype._chainB = function() {
      var b, b2j, elt, i, idxs, indices, isjunk, junk, n, ntest, popular, _i, _j, _len, _len1, _ref;
      b = this.b;
      this.b2j = b2j = {};
      for (i = _i = 0, _len = b.length; _i < _len; i = ++_i) {
        elt = b[i];
        indices = _has(b2j, elt) ? b2j[elt] : b2j[elt] = [];
        indices.push(i);
      }
      junk = {};
      isjunk = this.isjunk;
      if (isjunk) {
        _ref = Object.keys(b2j);
        for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
          elt = _ref[_j];
          if (isjunk(elt)) {
            junk[elt] = true;
            delete b2j[elt];
          }
        }
      }
      popular = {};
      n = b.length;
      if (this.autojunk && n >= 200) {
        ntest = floor(n / 100) + 1;
        for (elt in b2j) {
          idxs = b2j[elt];
          if (idxs.length > ntest) {
            popular[elt] = true;
            delete b2j[elt];
          }
        }
      }
      this.isbjunk = function(b) {
        return _has(junk, b);
      };
      return this.isbpopular = function(b) {
        return _has(popular, b);
      };
    };

    SequenceMatcher.prototype.findLongestMatch = function(alo, ahi, blo, bhi) {
      /* 
      Find longest matching block in a[alo...ahi] and b[blo...bhi].  
      
      If isjunk is not defined:
      
      Return [i,j,k] such that a[i...i+k] is equal to b[j...j+k], where
          alo <= i <= i+k <= ahi
          blo <= j <= j+k <= bhi
      and for all [i',j',k'] meeting those conditions,
          k >= k'
          i <= i'
          and if i == i', j <= j'
      
      In other words, of all maximal matching blocks, return one that
      starts earliest in a, and of all those maximal matching blocks that
      start earliest in a, return the one that starts earliest in b.
      
      >>> isjunk = (x) -> x is ' '
      >>> s = new SequenceMatcher(isjunk, ' abcd', 'abcd abcd')
      >>> s.findLongestMatch(0, 5, 0, 9)
      [1, 0, 4]
      
      >>> s = new SequenceMatcher(null, 'ab', 'c')
      >>> s.findLongestMatch(0, 2, 0, 1)
      [0, 0, 0]
      */

      var a, b, b2j, besti, bestj, bestsize, i, isbjunk, j, j2len, k, newj2len, _i, _j, _len, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
      _ref = [this.a, this.b, this.b2j, this.isbjunk], a = _ref[0], b = _ref[1], b2j = _ref[2], isbjunk = _ref[3];
      _ref1 = [alo, blo, 0], besti = _ref1[0], bestj = _ref1[1], bestsize = _ref1[2];
      j2len = {};
      for (i = _i = alo; alo <= ahi ? _i < ahi : _i > ahi; i = alo <= ahi ? ++_i : --_i) {
        newj2len = {};
        _ref2 = (_has(b2j, a[i]) ? b2j[a[i]] : []);
        for (_j = 0, _len = _ref2.length; _j < _len; _j++) {
          j = _ref2[_j];
          if (j < blo) {
            continue;
          }
          if (j >= bhi) {
            break;
          }
          k = newj2len[j] = (j2len[j - 1] || 0) + 1;
          if (k > bestsize) {
            _ref3 = [i - k + 1, j - k + 1, k], besti = _ref3[0], bestj = _ref3[1], bestsize = _ref3[2];
          }
        }
        j2len = newj2len;
      }
      while (besti > alo && bestj > blo && !isbjunk(b[bestj - 1]) && a[besti - 1] === b[bestj - 1]) {
        _ref4 = [besti - 1, bestj - 1, bestsize + 1], besti = _ref4[0], bestj = _ref4[1], bestsize = _ref4[2];
      }
      while (besti + bestsize < ahi && bestj + bestsize < bhi && !isbjunk(b[bestj + bestsize]) && a[besti + bestsize] === b[bestj + bestsize]) {
        bestsize++;
      }
      while (besti > alo && bestj > blo && isbjunk(b[bestj - 1]) && a[besti - 1] === b[bestj - 1]) {
        _ref5 = [besti - 1, bestj - 1, bestsize + 1], besti = _ref5[0], bestj = _ref5[1], bestsize = _ref5[2];
      }
      while (besti + bestsize < ahi && bestj + bestsize < bhi && isbjunk(b[bestj + bestsize]) && a[besti + bestsize] === b[bestj + bestsize]) {
        bestsize++;
      }
      return [besti, bestj, bestsize];
    };

    SequenceMatcher.prototype.getMatchingBlocks = function() {
      /*
          Return list of triples describing matching subsequences.
      
          Each triple is of the form [i, j, n], and means that
          a[i...i+n] == b[j...j+n].  The triples are monotonically increasing in
          i and in j.  it's also guaranteed that if
          [i, j, n] and [i', j', n'] are adjacent triples in the list, and
          the second is not the last triple in the list, then i+n != i' or
          j+n != j'.  IOW, adjacent triples never describe adjacent equal
          blocks.
      
          The last triple is a dummy, [a.length, b.length, 0], and is the only
          triple with n==0.
      
          >>> s = new SequenceMatcher(null, 'abxcd', 'abcd')
          >>> s.getMatchingBlocks()
          [[0, 0, 2], [3, 2, 2], [5, 4, 0]]
      */

      var ahi, alo, bhi, blo, i, i1, i2, j, j1, j2, k, k1, k2, la, lb, matchingBlocks, nonAdjacent, queue, x, _i, _len, _ref, _ref1, _ref2, _ref3, _ref4;
      if (this.matchingBlocks) {
        return this.matchingBlocks;
      }
      _ref = [this.a.length, this.b.length], la = _ref[0], lb = _ref[1];
      queue = [[0, la, 0, lb]];
      matchingBlocks = [];
      while (queue.length) {
        _ref1 = queue.pop(), alo = _ref1[0], ahi = _ref1[1], blo = _ref1[2], bhi = _ref1[3];
        _ref2 = x = this.findLongestMatch(alo, ahi, blo, bhi), i = _ref2[0], j = _ref2[1], k = _ref2[2];
        if (k) {
          matchingBlocks.push(x);
          if (alo < i && blo < j) {
            queue.push([alo, i, blo, j]);
          }
          if (i + k < ahi && j + k < bhi) {
            queue.push([i + k, ahi, j + k, bhi]);
          }
        }
      }
      matchingBlocks.sort(_arrayCmp);
      i1 = j1 = k1 = 0;
      nonAdjacent = [];
      for (_i = 0, _len = matchingBlocks.length; _i < _len; _i++) {
        _ref3 = matchingBlocks[_i], i2 = _ref3[0], j2 = _ref3[1], k2 = _ref3[2];
        if (i1 + k1 === i2 && j1 + k1 === j2) {
          k1 += k2;
        } else {
          if (k1) {
            nonAdjacent.push([i1, j1, k1]);
          }
          _ref4 = [i2, j2, k2], i1 = _ref4[0], j1 = _ref4[1], k1 = _ref4[2];
        }
      }
      if (k1) {
        nonAdjacent.push([i1, j1, k1]);
      }
      nonAdjacent.push([la, lb, 0]);
      return this.matchingBlocks = nonAdjacent;
    };

    SequenceMatcher.prototype.getOpcodes = function() {
      /* 
      Return list of 5-tuples describing how to turn a into b.
      
      Each tuple is of the form [tag, i1, i2, j1, j2].  The first tuple
      has i1 == j1 == 0, and remaining tuples have i1 == the i2 from the
      tuple preceding it, and likewise for j1 == the previous j2.
      
      The tags are strings, with these meanings:
      
      'replace':  a[i1...i2] should be replaced by b[j1...j2]
      'delete':   a[i1...i2] should be deleted.
                  Note that j1==j2 in this case.
      'insert':   b[j1...j2] should be inserted at a[i1...i1].
                  Note that i1==i2 in this case.
      'equal':    a[i1...i2] == b[j1...j2]
      
      >>> s = new SequenceMatcher(null, 'qabxcd', 'abycdf')
      >>> s.getOpcodes()
      [ [ 'delete'  , 0 , 1 , 0 , 0 ] ,
        [ 'equal'   , 1 , 3 , 0 , 2 ] ,
        [ 'replace' , 3 , 4 , 2 , 3 ] ,
        [ 'equal'   , 4 , 6 , 3 , 5 ] ,
        [ 'insert'  , 6 , 6 , 5 , 6 ] ]
      */

      var ai, answer, bj, i, j, size, tag, _i, _len, _ref, _ref1, _ref2;
      if (this.opcodes) {
        return this.opcodes;
      }
      i = j = 0;
      this.opcodes = answer = [];
      _ref = this.getMatchingBlocks();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        _ref1 = _ref[_i], ai = _ref1[0], bj = _ref1[1], size = _ref1[2];
        tag = '';
        if (i < ai && j < bj) {
          tag = 'replace';
        } else if (i < ai) {
          tag = 'delete';
        } else if (j < bj) {
          tag = 'insert';
        }
        if (tag) {
          answer.push([tag, i, ai, j, bj]);
        }
        _ref2 = [ai + size, bj + size], i = _ref2[0], j = _ref2[1];
        if (size) {
          answer.push(['equal', ai, i, bj, j]);
        }
      }
      return answer;
    };

    SequenceMatcher.prototype.getGroupedOpcodes = function(n) {
      var codes, group, groups, i1, i2, j1, j2, nn, tag, _i, _len, _ref, _ref1, _ref2, _ref3;
      if (n == null) {
        n = 3;
      }
      /* 
      Isolate change clusters by eliminating ranges with no changes.
      
      Return a list groups with upto n lines of context.
      Each group is in the same format as returned by get_opcodes().
      
      >>> a = [1...40].map(String)
      >>> b = a.slice()
      >>> b[8...8] = 'i'
      >>> b[20] += 'x'
      >>> b[23...28] = []
      >>> b[30] += 'y'
      >>> s = new SequenceMatcher(null, a, b)
      >>> s.getGroupedOpcodes()
      [ [ [ 'equal'  , 5 , 8  , 5 , 8 ],
          [ 'insert' , 8 , 8  , 8 , 9 ],
          [ 'equal'  , 8 , 11 , 9 , 12 ] ],
        [ [ 'equal'   , 16 , 19 , 17 , 20 ],
          [ 'replace' , 19 , 20 , 20 , 21 ],
          [ 'equal'   , 20 , 22 , 21 , 23 ],
          [ 'delete'  , 22 , 27 , 23 , 23 ],
          [ 'equal'   , 27 , 30 , 23 , 26 ] ],
        [ [ 'equal'   , 31 , 34 , 27 , 30 ],
          [ 'replace' , 34 , 35 , 30 , 31 ],
          [ 'equal'   , 35 , 38 , 31 , 34 ] ] ]
      */

      codes = this.getOpcodes();
      if (!codes.length) {
        codes = [['equal', 0, 1, 0, 1]];
      }
      if (codes[0][0] === 'equal') {
        _ref = codes[0], tag = _ref[0], i1 = _ref[1], i2 = _ref[2], j1 = _ref[3], j2 = _ref[4];
        codes[0] = [tag, max(i1, i2 - n), i2, max(j1, j2 - n), j2];
      }
      if (codes[codes.length - 1][0] === 'equal') {
        _ref1 = codes[codes.length - 1], tag = _ref1[0], i1 = _ref1[1], i2 = _ref1[2], j1 = _ref1[3], j2 = _ref1[4];
        codes[codes.length - 1] = [tag, i1, min(i2, i1 + n), j1, min(j2, j1 + n)];
      }
      nn = n + n;
      groups = [];
      group = [];
      for (_i = 0, _len = codes.length; _i < _len; _i++) {
        _ref2 = codes[_i], tag = _ref2[0], i1 = _ref2[1], i2 = _ref2[2], j1 = _ref2[3], j2 = _ref2[4];
        if (tag === 'equal' && i2 - i1 > nn) {
          group.push([tag, i1, min(i2, i1 + n), j1, min(j2, j1 + n)]);
          groups.push(group);
          group = [];
          _ref3 = [max(i1, i2 - n), max(j1, j2 - n)], i1 = _ref3[0], j1 = _ref3[1];
        }
        group.push([tag, i1, i2, j1, j2]);
      }
      if (group.length && !(group.length === 1 && group[0][0] === 'equal')) {
        groups.push(group);
      }
      return groups;
    };

    SequenceMatcher.prototype.ratio = function() {
      /*
          Return a measure of the sequences' similarity (float in [0,1]).
      
          Where T is the total number of elements in both sequences, and
          M is the number of matches, this is 2.0*M / T.
          Note that this is 1 if the sequences are identical, and 0 if
          they have nothing in common.
      
          .ratio() is expensive to compute if you haven't already computed
          .getMatchingBlocks() or .getOpcodes(), in which case you may
          want to try .quickRatio() or .realQuickRatio() first to get an
          upper bound.
          
          >>> s = new SequenceMatcher(null, 'abcd', 'bcde')
          >>> s.ratio()
          0.75
          >>> s.quickRatio()
          0.75
          >>> s.realQuickRatio()
          1.0
      */

      var match, matches, _i, _len, _ref;
      matches = 0;
      _ref = this.getMatchingBlocks();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        match = _ref[_i];
        matches += match[2];
      }
      return _calculateRatio(matches, this.a.length + this.b.length);
    };

    SequenceMatcher.prototype.quickRatio = function() {
      /*
          Return an upper bound on ratio() relatively quickly.
      
          This isn't defined beyond that it is an upper bound on .ratio(), and
          is faster to compute.
      */

      var avail, elt, fullbcount, matches, numb, _i, _j, _len, _len1, _ref, _ref1;
      if (!this.fullbcount) {
        this.fullbcount = fullbcount = {};
        _ref = this.b;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          elt = _ref[_i];
          fullbcount[elt] = (fullbcount[elt] || 0) + 1;
        }
      }
      fullbcount = this.fullbcount;
      avail = {};
      matches = 0;
      _ref1 = this.a;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        elt = _ref1[_j];
        if (_has(avail, elt)) {
          numb = avail[elt];
        } else {
          numb = fullbcount[elt] || 0;
        }
        avail[elt] = numb - 1;
        if (numb > 0) {
          matches++;
        }
      }
      return _calculateRatio(matches, this.a.length + this.b.length);
    };

    SequenceMatcher.prototype.realQuickRatio = function() {
      /*
          Return an upper bound on ratio() very quickly.
      
          This isn't defined beyond that it is an upper bound on .ratio(), and
          is faster to compute than either .ratio() or .quickRatio().
      */

      var la, lb, _ref;
      _ref = [this.a.length, this.b.length], la = _ref[0], lb = _ref[1];
      return _calculateRatio(min(la, lb), la + lb);
    };

    return SequenceMatcher;

  })();

  getCloseMatches = function(word, possibilities, n, cutoff) {
    var result, s, score, x, _i, _j, _len, _len1, _ref, _results;
    if (n == null) {
      n = 3;
    }
    if (cutoff == null) {
      cutoff = 0.6;
    }
    /*
      Use SequenceMatcher to return list of the best "good enough" matches.
    
      word is a sequence for which close matches are desired (typically a
      string).
    
      possibilities is a list of sequences against which to match word
      (typically a list of strings).
    
      Optional arg n (default 3) is the maximum number of close matches to
      return.  n must be > 0.
    
      Optional arg cutoff (default 0.6) is a float in [0, 1].  Possibilities
      that don't score at least that similar to word are ignored.
    
      The best (no more than n) matches among the possibilities are returned
      in a list, sorted by similarity score, most similar first.
    
      >>> getCloseMatches('appel', ['ape', 'apple', 'peach', 'puppy'])
      ['apple', 'ape']
      >>> KEYWORDS = require('coffee-script').RESERVED
      >>> getCloseMatches('wheel', KEYWORDS)
      ['when', 'while']
      >>> getCloseMatches('accost', KEYWORDS)
      ['const']
    */

    if (!(n > 0)) {
      throw new Error("n must be > 0: (" + n + ")");
    }
    if (!((0.0 <= cutoff && cutoff <= 1.0))) {
      throw new Error("cutoff must be in [0.0, 1.0]: (" + cutoff + ")");
    }
    result = [];
    s = new SequenceMatcher();
    s.setSeq2(word);
    for (_i = 0, _len = possibilities.length; _i < _len; _i++) {
      x = possibilities[_i];
      s.setSeq1(x);
      if (s.realQuickRatio() >= cutoff && s.quickRatio() >= cutoff && s.ratio() >= cutoff) {
        result.push([s.ratio(), x]);
      }
    }
    result = Heap.nlargest(result, n, _arrayCmp);
    _results = [];
    for (_j = 0, _len1 = result.length; _j < _len1; _j++) {
      _ref = result[_j], score = _ref[0], x = _ref[1];
      _results.push(x);
    }
    return _results;
  };

  _countLeading = function(line, ch) {
    /*
      Return number of `ch` characters at the start of `line`.
    
      >>> _countLeading('   abc', ' ')
      3
    */

    var i, n, _ref;
    _ref = [0, line.length], i = _ref[0], n = _ref[1];
    while (i < n && line[i] === ch) {
      i++;
    }
    return i;
  };

  Differ = (function() {

    Differ.name = 'Differ';

    /*
      Differ is a class for comparing sequences of lines of text, and
      producing human-readable differences or deltas.  Differ uses
      SequenceMatcher both to compare sequences of lines, and to compare
      sequences of characters within similar (near-matching) lines.
    
      Each line of a Differ delta begins with a two-letter code:
    
          '- '    line unique to sequence 1
          '+ '    line unique to sequence 2
          '  '    line common to both sequences
          '? '    line not present in either input sequence
    
      Lines beginning with '? ' attempt to guide the eye to intraline
      differences, and were not present in either input sequence.  These lines
      can be confusing if the sequences contain tab characters.
    
      Note that Differ makes no claim to produce a *minimal* diff.  To the
      contrary, minimal diffs are often counter-intuitive, because they synch
      up anywhere possible, sometimes accidental matches 100 pages apart.
      Restricting synch points to contiguous matches preserves some notion of
      locality, at the occasional cost of producing a longer diff.
    
      Example: Comparing two texts.
    
      >>> text1 = ['1. Beautiful is better than ugly.\n',
      ...   '2. Explicit is better than implicit.\n',
      ...   '3. Simple is better than complex.\n',
      ...   '4. Complex is better than complicated.\n']
      >>> text1.length
      4
      >>> text2 = ['1. Beautiful is better than ugly.\n',
      ...   '3.   Simple is better than complex.\n',
      ...   '4. Complicated is better than complex.\n',
      ...   '5. Flat is better than nested.\n']
    
      Next we instantiate a Differ object:
    
      >>> d = new Differ()
    
      Note that when instantiating a Differ object we may pass functions to
      filter out line and character 'junk'.
    
      Finally, we compare the two:
    
      >>> result = d.compare(text1, text2)
      [ '  1. Beautiful is better than ugly.\n',
        '- 2. Explicit is better than implicit.\n',
        '- 3. Simple is better than complex.\n',
        '+ 3.   Simple is better than complex.\n',
        '?   ++\n',
        '- 4. Complex is better than complicated.\n',
        '?          ^                     ---- ^\n',
        '+ 4. Complicated is better than complex.\n',
        '?         ++++ ^                      ^\n',
        '+ 5. Flat is better than nested.\n' ]
    
      Methods:
    
      constructor(linejunk=null, charjunk=null)
          Construct a text differencer, with optional filters.
      compare(a, b)
          Compare two sequences of lines; generate the resulting delta.
    */


    function Differ(linejunk, charjunk) {
      this.linejunk = linejunk;
      this.charjunk = charjunk;
      /*
          Construct a text differencer, with optional filters.
      
          The two optional keyword parameters are for filter functions:
      
          - `linejunk`: A function that should accept a single string argument,
            and return true iff the string is junk. The module-level function
            `IS_LINE_JUNK` may be used to filter out lines without visible
            characters, except for at most one splat ('#').  It is recommended
            to leave linejunk null. 
      
          - `charjunk`: A function that should accept a string of length 1. The
            module-level function `IS_CHARACTER_JUNK` may be used to filter out
            whitespace characters (a blank or tab; **note**: bad idea to include
            newline in this!).  Use of IS_CHARACTER_JUNK is recommended.
      */

    }

    Differ.prototype.compare = function(a, b) {
      /*
          Compare two sequences of lines; generate the resulting delta.
      
          Each sequence must contain individual single-line strings ending with
          newlines. Such sequences can be obtained from the `readlines()` method
          of file-like objects.  The delta generated also consists of newline-
          terminated strings, ready to be printed as-is via the writeline()
          method of a file-like object.
      
          Example:
      
          >>> d = new Differ
          >>> d.compare(['one\n', 'two\n', 'three\n'],
          ...           ['ore\n', 'tree\n', 'emu\n'])
          [ '- one\n',
            '?  ^\n',
            '+ ore\n',
            '?  ^\n',
            '- two\n',
            '- three\n',
            '?  -\n',
            '+ tree\n',
            '+ emu\n' ]
      */

      var ahi, alo, bhi, blo, cruncher, g, line, lines, tag, _i, _j, _len, _len1, _ref, _ref1;
      cruncher = new SequenceMatcher(this.linejunk, a, b);
      lines = [];
      _ref = cruncher.getOpcodes();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        _ref1 = _ref[_i], tag = _ref1[0], alo = _ref1[1], ahi = _ref1[2], blo = _ref1[3], bhi = _ref1[4];
        switch (tag) {
          case 'replace':
            g = this._fancyReplace(a, alo, ahi, b, blo, bhi);
            break;
          case 'delete':
            g = this._dump('-', a, alo, ahi);
            break;
          case 'insert':
            g = this._dump('+', b, blo, bhi);
            break;
          case 'equal':
            g = this._dump(' ', a, alo, ahi);
            break;
          default:
            throw new Error("unknow tag (" + tag + ")");
        }
        for (_j = 0, _len1 = g.length; _j < _len1; _j++) {
          line = g[_j];
          lines.push(line);
        }
      }
      return lines;
    };

    Differ.prototype._dump = function(tag, x, lo, hi) {
      /*
          Generate comparison results for a same-tagged range.
      */

      var i, _i, _results;
      _results = [];
      for (i = _i = lo; lo <= hi ? _i < hi : _i > hi; i = lo <= hi ? ++_i : --_i) {
        _results.push("" + tag + " " + x[i]);
      }
      return _results;
    };

    Differ.prototype._plainReplace = function(a, alo, ahi, b, blo, bhi) {
      var first, g, line, lines, second, _i, _j, _len, _len1, _ref;
      assert(alo < ahi && blo < bhi);
      if (bhi - blo < ahi - alo) {
        first = this._dump('+', b, blo, bhi);
        second = this._dump('-', a, alo, ahi);
      } else {
        first = this._dump('-', a, alo, ahi);
        second = this._dump('+', b, blo, bhi);
      }
      lines = [];
      _ref = [first, second];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        g = _ref[_i];
        for (_j = 0, _len1 = g.length; _j < _len1; _j++) {
          line = g[_j];
          lines.push(line);
        }
      }
      return lines;
    };

    Differ.prototype._fancyReplace = function(a, alo, ahi, b, blo, bhi) {
      /*
          When replacing one block of lines with another, search the blocks
          for *similar* lines; the best-matching pair (if any) is used as a
          synch point, and intraline difference marking is done on the
          similar pair. Lots of work, but often worth it.
      
          Example:
          >>> d = new Differ
          >>> d._fancyReplace(['abcDefghiJkl\n'], 0, 1,
          ...                 ['abcdefGhijkl\n'], 0, 1)
          [ '- abcDefghiJkl\n',
            '?    ^  ^  ^\n',
            '+ abcdefGhijkl\n',
            '?    ^  ^  ^\n' ]
      */

      var aelt, ai, ai1, ai2, atags, belt, bestRatio, besti, bestj, bj, bj1, bj2, btags, cruncher, cutoff, eqi, eqj, i, j, la, lb, line, lines, tag, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _m, _n, _o, _ref, _ref1, _ref10, _ref11, _ref12, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
      _ref = [0.74, 0.75], bestRatio = _ref[0], cutoff = _ref[1];
      cruncher = new SequenceMatcher(this.charjunk);
      _ref1 = [null, null], eqi = _ref1[0], eqj = _ref1[1];
      lines = [];
      for (j = _i = blo; blo <= bhi ? _i < bhi : _i > bhi; j = blo <= bhi ? ++_i : --_i) {
        bj = b[j];
        cruncher.setSeq2(bj);
        for (i = _j = alo; alo <= ahi ? _j < ahi : _j > ahi; i = alo <= ahi ? ++_j : --_j) {
          ai = a[i];
          if (ai === bj) {
            if (eqi === null) {
              _ref2 = [i, j], eqi = _ref2[0], eqj = _ref2[1];
            }
            continue;
          }
          cruncher.setSeq1(ai);
          if (cruncher.realQuickRatio() > bestRatio && cruncher.quickRatio() > bestRatio && cruncher.ratio() > bestRatio) {
            _ref3 = [cruncher.ratio(), i, j], bestRatio = _ref3[0], besti = _ref3[1], bestj = _ref3[2];
          }
        }
      }
      if (bestRatio < cutoff) {
        if (eqi === null) {
          _ref4 = this._plainReplace(a, alo, ahi, b, blo, bhi);
          for (_k = 0, _len = _ref4.length; _k < _len; _k++) {
            line = _ref4[_k];
            lines.push(line);
          }
          return lines;
        }
        _ref5 = [eqi, eqj, 1.0], besti = _ref5[0], bestj = _ref5[1], bestRatio = _ref5[2];
      } else {
        eqi = null;
      }
      _ref6 = this._fancyHelper(a, alo, besti, b, blo, bestj);
      for (_l = 0, _len1 = _ref6.length; _l < _len1; _l++) {
        line = _ref6[_l];
        lines.push(line);
      }
      _ref7 = [a[besti], b[bestj]], aelt = _ref7[0], belt = _ref7[1];
      if (eqi === null) {
        atags = btags = '';
        cruncher.setSeqs(aelt, belt);
        _ref8 = cruncher.getOpcodes();
        for (_m = 0, _len2 = _ref8.length; _m < _len2; _m++) {
          _ref9 = _ref8[_m], tag = _ref9[0], ai1 = _ref9[1], ai2 = _ref9[2], bj1 = _ref9[3], bj2 = _ref9[4];
          _ref10 = [ai2 - ai1, bj2 - bj1], la = _ref10[0], lb = _ref10[1];
          switch (tag) {
            case 'replace':
              atags += Array(la + 1).join('^');
              btags += Array(lb + 1).join('^');
              break;
            case 'delete':
              atags += Array(la + 1).join('-');
              break;
            case 'insert':
              btags += Array(lb + 1).join('+');
              break;
            case 'equal':
              atags += Array(la + 1).join(' ');
              btags += Array(lb + 1).join(' ');
              break;
            default:
              throw new Error("unknow tag (" + tag + ")");
          }
        }
        _ref11 = this._qformat(aelt, belt, atags, btags);
        for (_n = 0, _len3 = _ref11.length; _n < _len3; _n++) {
          line = _ref11[_n];
          lines.push(line);
        }
      } else {
        lines.push('  ' + aelt);
      }
      _ref12 = this._fancyHelper(a, besti + 1, ahi, b, bestj + 1, bhi);
      for (_o = 0, _len4 = _ref12.length; _o < _len4; _o++) {
        line = _ref12[_o];
        lines.push(line);
      }
      return lines;
    };

    Differ.prototype._fancyHelper = function(a, alo, ahi, b, blo, bhi) {
      var g;
      g = [];
      if (alo < ahi) {
        if (blo < bhi) {
          g = this._fancyReplace(a, alo, ahi, b, blo, bhi);
        } else {
          g = this._dump('-', a, alo, ahi);
        }
      } else if (blo < bhi) {
        g = this._dump('+', b, blo, bhi);
      }
      return g;
    };

    Differ.prototype._qformat = function(aline, bline, atags, btags) {
      /*
          Format "?" output and deal with leading tabs.
      
          Example:
      
          >>> d = new Differ
          >>> d._qformat('\tabcDefghiJkl\n', '\tabcdefGhijkl\n',
          [ '- \tabcDefghiJkl\n',
            '? \t ^ ^  ^\n',
            '+ \tabcdefGhijkl\n',
            '? \t ^ ^  ^\n' ]
      */

      var common, lines;
      lines = [];
      common = min(_countLeading(aline, '\t'), _countLeading(bline, '\t'));
      common = min(common, _countLeading(atags.slice(0, common), ' '));
      common = min(common, _countLeading(btags.slice(0, common), ' '));
      atags = atags.slice(common).replace(/\s+$/, '');
      btags = btags.slice(common).replace(/\s+$/, '');
      lines.push('- ' + aline);
      if (atags.length) {
        lines.push("? " + (Array(common + 1).join('\t')) + atags + "\n");
      }
      lines.push('+ ' + bline);
      if (btags.length) {
        lines.push("? " + (Array(common + 1).join('\t')) + btags + "\n");
      }
      return lines;
    };

    return Differ;

  })();

  IS_LINE_JUNK = function(line, pat) {
    if (pat == null) {
      pat = /^\s*#?\s*$/;
    }
    /*
      Return 1 for ignorable line: iff `line` is blank or contains a single '#'.
        
      Examples:
    
      >>> IS_LINE_JUNK('\n')
      true
      >>> IS_LINE_JUNK('  #   \n')
      true
      >>> IS_LINE_JUNK('hello\n')
      false
    */

    return pat.test(line);
  };

  IS_CHARACTER_JUNK = function(ch, ws) {
    if (ws == null) {
      ws = ' \t';
    }
    /*
      Return 1 for ignorable character: iff `ch` is a space or tab.
    
      Examples:
      >>> IS_CHARACTER_JUNK(' ').should.be.true
      true
      >>> IS_CHARACTER_JUNK('\t').should.be.true
      true
      >>> IS_CHARACTER_JUNK('\n').should.be.false
      false
      >>> IS_CHARACTER_JUNK('x').should.be.false
      false
    */

    return __indexOf.call(ws, ch) >= 0;
  };

  _formatRangeUnified = function(start, stop) {
    /*
      Convert range to the "ed" format'
    */

    var beginning, length;
    beginning = start + 1;
    length = stop - start;
    if (length === 1) {
      return "" + beginning;
    }
    if (!length) {
      beginning--;
    }
    return "" + beginning + "," + length;
  };

  unifiedDiff = function(a, b, _arg) {
    var file1Range, file2Range, first, fromdate, fromfile, fromfiledate, group, i1, i2, j1, j2, last, line, lines, lineterm, n, started, tag, todate, tofile, tofiledate, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6;
    _ref = _arg != null ? _arg : {}, fromfile = _ref.fromfile, tofile = _ref.tofile, fromfiledate = _ref.fromfiledate, tofiledate = _ref.tofiledate, n = _ref.n, lineterm = _ref.lineterm;
    /*
      Compare two sequences of lines; generate the delta as a unified diff.
    
      Unified diffs are a compact way of showing line changes and a few
      lines of context.  The number of context lines is set by 'n' which
      defaults to three.
    
      By default, the diff control lines (those with ---, +++, or @@) are
      created with a trailing newline.  
    
      For inputs that do not have trailing newlines, set the lineterm
      argument to "" so that the output will be uniformly newline free.
    
      The unidiff format normally has a header for filenames and modification
      times.  Any or all of these may be specified using strings for
      'fromfile', 'tofile', 'fromfiledate', and 'tofiledate'.
      The modification times are normally expressed in the ISO 8601 format.
    
      Example:
    
      >>> unifiedDiff('one two three four'.split(' '),
      ...             'zero one tree four'.split(' '), {
      ...               fromfile: 'Original'
      ...               tofile: 'Current',
      ...               fromfiledate: '2005-01-26 23:30:50',
      ...               tofiledate: '2010-04-02 10:20:52',
      ...               lineterm: ''
      ...             })
      [ '--- Original\t2005-01-26 23:30:50',
        '+++ Current\t2010-04-02 10:20:52',
        '@@ -1,4 +1,4 @@',
        '+zero',
        ' one',
        '-two',
        '-three',
        '+tree',
        ' four' ]
    */

    if (fromfile == null) {
      fromfile = '';
    }
    if (tofile == null) {
      tofile = '';
    }
    if (fromfiledate == null) {
      fromfiledate = '';
    }
    if (tofiledate == null) {
      tofiledate = '';
    }
    if (n == null) {
      n = 3;
    }
    if (lineterm == null) {
      lineterm = '\n';
    }
    lines = [];
    started = false;
    _ref1 = (new SequenceMatcher(null, a, b)).getGroupedOpcodes();
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      group = _ref1[_i];
      if (!started) {
        started = true;
        fromdate = fromfiledate ? "\t" + fromfiledate : '';
        todate = tofiledate ? "\t" + tofiledate : '';
        lines.push("--- " + fromfile + fromdate + lineterm);
        lines.push("+++ " + tofile + todate + lineterm);
      }
      _ref2 = [group[0], group[group.length - 1]], first = _ref2[0], last = _ref2[1];
      file1Range = _formatRangeUnified(first[1], last[2]);
      file2Range = _formatRangeUnified(first[3], last[4]);
      lines.push("@@ -" + file1Range + " +" + file2Range + " @@" + lineterm);
      for (_j = 0, _len1 = group.length; _j < _len1; _j++) {
        _ref3 = group[_j], tag = _ref3[0], i1 = _ref3[1], i2 = _ref3[2], j1 = _ref3[3], j2 = _ref3[4];
        if (tag === 'equal') {
          _ref4 = a.slice(i1, i2);
          for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
            line = _ref4[_k];
            lines.push(' ' + line);
          }
          continue;
        }
        if (tag === 'replace' || tag === 'delete') {
          _ref5 = a.slice(i1, i2);
          for (_l = 0, _len3 = _ref5.length; _l < _len3; _l++) {
            line = _ref5[_l];
            lines.push('-' + line);
          }
        }
        if (tag === 'replace' || tag === 'insert') {
          _ref6 = b.slice(j1, j2);
          for (_m = 0, _len4 = _ref6.length; _m < _len4; _m++) {
            line = _ref6[_m];
            lines.push('+' + line);
          }
        }
      }
    }
    return lines;
  };

  _formatRangeContext = function(start, stop) {
    /*
      Convert range to the "ed" format'
    */

    var beginning, length;
    beginning = start + 1;
    length = stop - start;
    if (!length) {
      beginning--;
    }
    if (length <= 1) {
      return "" + beginning;
    }
    return "" + beginning + "," + (beginning + length - 1);
  };

  contextDiff = function(a, b, _arg) {
    var file1Range, file2Range, first, fromdate, fromfile, fromfiledate, group, i1, i2, j1, j2, last, line, lines, lineterm, n, prefix, started, tag, todate, tofile, tofiledate, _, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6;
    _ref = _arg != null ? _arg : {}, fromfile = _ref.fromfile, tofile = _ref.tofile, fromfiledate = _ref.fromfiledate, tofiledate = _ref.tofiledate, n = _ref.n, lineterm = _ref.lineterm;
    /*
      Compare two sequences of lines; generate the delta as a context diff.
    
      Context diffs are a compact way of showing line changes and a few
      lines of context.  The number of context lines is set by 'n' which
      defaults to three.
    
      By default, the diff control lines (those with *** or ---) are
      created with a trailing newline.  This is helpful so that inputs
      created from file.readlines() result in diffs that are suitable for
      file.writelines() since both the inputs and outputs have trailing
      newlines.
    
      For inputs that do not have trailing newlines, set the lineterm
      argument to "" so that the output will be uniformly newline free.
    
      The context diff format normally has a header for filenames and
      modification times.  Any or all of these may be specified using
      strings for 'fromfile', 'tofile', 'fromfiledate', and 'tofiledate'.
      The modification times are normally expressed in the ISO 8601 format.
      If not specified, the strings default to blanks.
    
      Example:
      >>> a = ['one\n', 'two\n', 'three\n', 'four\n']
      >>> b = ['zero\n', 'one\n', 'tree\n', 'four\n']
      >>> contextDiff(a, b, {fromfile: 'Original', tofile: 'Current'})
      [ '*** Original\n',
        '--- Current\n',
        '***************\n',
        '*** 1,4 ****\n',
        '  one\n',
        '! two\n',
        '! three\n',
        '  four\n',
        '--- 1,4 ----\n',
        '+ zero\n',
        '  one\n',
        '! tree\n',
        '  four\n' ]
    */

    if (fromfile == null) {
      fromfile = '';
    }
    if (tofile == null) {
      tofile = '';
    }
    if (fromfiledate == null) {
      fromfiledate = '';
    }
    if (tofiledate == null) {
      tofiledate = '';
    }
    if (n == null) {
      n = 3;
    }
    if (lineterm == null) {
      lineterm = '\n';
    }
    prefix = {
      insert: '+ ',
      "delete": '- ',
      replace: '! ',
      equal: '  '
    };
    started = false;
    lines = [];
    _ref1 = (new SequenceMatcher(null, a, b)).getGroupedOpcodes();
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      group = _ref1[_i];
      if (!started) {
        started = true;
        fromdate = fromfiledate ? "\t" + fromfiledate : '';
        todate = tofiledate ? "\t" + tofiledate : '';
        lines.push("*** " + fromfile + fromdate + lineterm);
        lines.push("--- " + tofile + todate + lineterm);
        _ref2 = [group[0], group[group.length - 1]], first = _ref2[0], last = _ref2[1];
        lines.push('***************' + lineterm);
        file1Range = _formatRangeContext(first[1], last[2]);
        lines.push("*** " + file1Range + " ****" + lineterm);
        if (_any((function() {
          var _j, _len1, _ref3, _results;
          _results = [];
          for (_j = 0, _len1 = group.length; _j < _len1; _j++) {
            _ref3 = group[_j], tag = _ref3[0], _ = _ref3[1], _ = _ref3[2], _ = _ref3[3], _ = _ref3[4];
            _results.push(tag === 'replace' || tag === 'delete');
          }
          return _results;
        })())) {
          for (_j = 0, _len1 = group.length; _j < _len1; _j++) {
            _ref3 = group[_j], tag = _ref3[0], i1 = _ref3[1], i2 = _ref3[2], _ = _ref3[3], _ = _ref3[4];
            if (tag !== 'insert') {
              _ref4 = a.slice(i1, i2);
              for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
                line = _ref4[_k];
                lines.push(prefix[tag] + line);
              }
            }
          }
        }
        file2Range = _formatRangeContext(first[3], last[4]);
        lines.push("--- " + file2Range + " ----" + lineterm);
        if (_any((function() {
          var _l, _len3, _ref5, _results;
          _results = [];
          for (_l = 0, _len3 = group.length; _l < _len3; _l++) {
            _ref5 = group[_l], tag = _ref5[0], _ = _ref5[1], _ = _ref5[2], _ = _ref5[3], _ = _ref5[4];
            _results.push(tag === 'replace' || tag === 'insert');
          }
          return _results;
        })())) {
          for (_l = 0, _len3 = group.length; _l < _len3; _l++) {
            _ref5 = group[_l], tag = _ref5[0], _ = _ref5[1], _ = _ref5[2], j1 = _ref5[3], j2 = _ref5[4];
            if (tag !== 'delete') {
              _ref6 = b.slice(j1, j2);
              for (_m = 0, _len4 = _ref6.length; _m < _len4; _m++) {
                line = _ref6[_m];
                lines.push(prefix[tag] + line);
              }
            }
          }
        }
      }
    }
    return lines;
  };

  ndiff = function(a, b, linejunk, charjunk) {
    if (charjunk == null) {
      charjunk = IS_CHARACTER_JUNK;
    }
    /*
      Compare `a` and `b` (lists of strings); return a `Differ`-style delta.
    
      Optional keyword parameters `linejunk` and `charjunk` are for filter
      functions (or None):
    
      - linejunk: A function that should accept a single string argument, and
        return true iff the string is junk.  The default is null, and is
        recommended; 
    
      - charjunk: A function that should accept a string of length 1. The
        default is module-level function IS_CHARACTER_JUNK, which filters out
        whitespace characters (a blank or tab; note: bad idea to include newline
        in this!).
    
      Example:
      >>> a = ['one\n', 'two\n', 'three\n']
      >>> b = ['ore\n', 'tree\n', 'emu\n']
      >>> ndiff(a, b)
      [ '- one\n',
        '?  ^\n',
        '+ ore\n',
        '?  ^\n',
        '- two\n',
        '- three\n',
        '?  -\n',
        '+ tree\n',
        '+ emu\n' ]
    */

    return (new Differ(linejunk, charjunk)).compare(a, b);
  };

  restore = function(delta, which) {
    /*
      Generate one of the two sequences that generated a delta.
    
      Given a `delta` produced by `Differ.compare()` or `ndiff()`, extract
      lines originating from file 1 or 2 (parameter `which`), stripping off line
      prefixes.
    
      Examples:
      >>> a = ['one\n', 'two\n', 'three\n']
      >>> b = ['ore\n', 'tree\n', 'emu\n']
      >>> diff = ndiff(a, b)
      >>> restore(diff, 1)
      [ 'one\n',
        'two\n',
        'three\n' ]
      >>> restore(diff, 2)
      [ 'ore\n',
        'tree\n',
        'emu\n' ]
    */

    var line, lines, prefixes, tag, _i, _len, _ref;
    tag = {
      1: '- ',
      2: '+ '
    }[which];
    if (!tag) {
      throw new Error("unknow delta choice (must be 1 or 2): " + which);
    }
    prefixes = ['  ', tag];
    lines = [];
    for (_i = 0, _len = delta.length; _i < _len; _i++) {
      line = delta[_i];
      if (_ref = line.slice(0, 2), __indexOf.call(prefixes, _ref) >= 0) {
        lines.push(line.slice(2));
      }
    }
    return lines;
  };

  exports._arrayCmp = _arrayCmp;

  exports.SequenceMatcher = SequenceMatcher;

  exports.getCloseMatches = getCloseMatches;

  exports._countLeading = _countLeading;

  exports.Differ = Differ;

  exports.IS_LINE_JUNK = IS_LINE_JUNK;

  exports.IS_CHARACTER_JUNK = IS_CHARACTER_JUNK;

  exports._formatRangeUnified = _formatRangeUnified;

  exports.unifiedDiff = unifiedDiff;

  exports._formatRangeContext = _formatRangeContext;

  exports.contextDiff = contextDiff;

  exports.ndiff = ndiff;

  exports.restore = restore;

}).call(this);


/***/ }),

/***/ "rJE5":
/*!*******************************************************!*\
  !*** ./node_modules/diff2html/lib-esm/diff-parser.js ***!
  \*******************************************************/
/*! exports provided: parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "X1my");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "RQrS");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};


function getExtension(filename, language) {
    var filenameParts = filename.split('.');
    return filenameParts.length > 1 ? filenameParts[filenameParts.length - 1] : language;
}
function startsWithAny(str, prefixes) {
    return prefixes.reduce(function (startsWith, prefix) { return startsWith || str.startsWith(prefix); }, false);
}
var baseDiffFilenamePrefixes = ['a/', 'b/', 'i/', 'w/', 'c/', 'o/'];
function getFilename(line, linePrefix, extraPrefix) {
    var prefixes = extraPrefix !== undefined ? __spreadArrays(baseDiffFilenamePrefixes, [extraPrefix]) : baseDiffFilenamePrefixes;
    var FilenameRegExp = linePrefix
        ? new RegExp("^" + Object(_utils__WEBPACK_IMPORTED_MODULE_1__["escapeForRegExp"])(linePrefix) + " \"?(.+?)\"?$")
        : new RegExp('^"?(.+?)"?$');
    var _a = FilenameRegExp.exec(line) || [], _b = _a[1], filename = _b === void 0 ? '' : _b;
    var matchingPrefix = prefixes.find(function (p) { return filename.indexOf(p) === 0; });
    var fnameWithoutPrefix = matchingPrefix ? filename.slice(matchingPrefix.length) : filename;
    return fnameWithoutPrefix.replace(/\s+\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}(?:\.\d+)? [+-]\d{4}.*$/, '');
}
function getSrcFilename(line, srcPrefix) {
    return getFilename(line, '---', srcPrefix);
}
function getDstFilename(line, dstPrefix) {
    return getFilename(line, '+++', dstPrefix);
}
function parse(diffInput, config) {
    if (config === void 0) { config = {}; }
    var files = [];
    var currentFile = null;
    var currentBlock = null;
    var oldLine = null;
    var oldLine2 = null;
    var newLine = null;
    var possibleOldName = null;
    var possibleNewName = null;
    var oldFileNameHeader = '--- ';
    var newFileNameHeader = '+++ ';
    var hunkHeaderPrefix = '@@';
    var oldMode = /^old mode (\d{6})/;
    var newMode = /^new mode (\d{6})/;
    var deletedFileMode = /^deleted file mode (\d{6})/;
    var newFileMode = /^new file mode (\d{6})/;
    var copyFrom = /^copy from "?(.+)"?/;
    var copyTo = /^copy to "?(.+)"?/;
    var renameFrom = /^rename from "?(.+)"?/;
    var renameTo = /^rename to "?(.+)"?/;
    var similarityIndex = /^similarity index (\d+)%/;
    var dissimilarityIndex = /^dissimilarity index (\d+)%/;
    var index = /^index ([\da-z]+)\.\.([\da-z]+)\s*(\d{6})?/;
    var binaryFiles = /^Binary files (.*) and (.*) differ/;
    var binaryDiff = /^GIT binary patch/;
    var combinedIndex = /^index ([\da-z]+),([\da-z]+)\.\.([\da-z]+)/;
    var combinedMode = /^mode (\d{6}),(\d{6})\.\.(\d{6})/;
    var combinedNewFile = /^new file mode (\d{6})/;
    var combinedDeletedFile = /^deleted file mode (\d{6}),(\d{6})/;
    var diffLines = diffInput
        .replace(/\\ No newline at end of file/g, '')
        .replace(/\r\n?/g, '\n')
        .split('\n');
    function saveBlock() {
        if (currentBlock !== null && currentFile !== null) {
            currentFile.blocks.push(currentBlock);
            currentBlock = null;
        }
    }
    function saveFile() {
        if (currentFile !== null) {
            if (!currentFile.oldName && possibleOldName !== null) {
                currentFile.oldName = possibleOldName;
            }
            if (!currentFile.newName && possibleNewName !== null) {
                currentFile.newName = possibleNewName;
            }
            if (currentFile.newName) {
                files.push(currentFile);
                currentFile = null;
            }
        }
        possibleOldName = null;
        possibleNewName = null;
    }
    function startFile() {
        saveBlock();
        saveFile();
        currentFile = {
            blocks: [],
            deletedLines: 0,
            addedLines: 0,
        };
    }
    function startBlock(line) {
        saveBlock();
        var values;
        if (currentFile !== null) {
            if ((values = /^@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@.*/.exec(line))) {
                currentFile.isCombined = false;
                oldLine = parseInt(values[1], 10);
                newLine = parseInt(values[2], 10);
            }
            else if ((values = /^@@@ -(\d+)(?:,\d+)? -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@@.*/.exec(line))) {
                currentFile.isCombined = true;
                oldLine = parseInt(values[1], 10);
                oldLine2 = parseInt(values[2], 10);
                newLine = parseInt(values[3], 10);
            }
            else {
                if (line.startsWith(hunkHeaderPrefix)) {
                    console.error('Failed to parse lines, starting in 0!');
                }
                oldLine = 0;
                newLine = 0;
                currentFile.isCombined = false;
            }
        }
        currentBlock = {
            lines: [],
            oldStartLine: oldLine,
            oldStartLine2: oldLine2,
            newStartLine: newLine,
            header: line,
        };
    }
    function createLine(line) {
        if (currentFile === null || currentBlock === null || oldLine === null || newLine === null)
            return;
        var currentLine = {
            content: line,
        };
        var addedPrefixes = currentFile.isCombined ? ['+ ', ' +', '++'] : ['+'];
        var deletedPrefixes = currentFile.isCombined ? ['- ', ' -', '--'] : ['-'];
        if (startsWithAny(line, addedPrefixes)) {
            currentFile.addedLines++;
            currentLine.type = _types__WEBPACK_IMPORTED_MODULE_0__["LineType"].INSERT;
            currentLine.oldNumber = undefined;
            currentLine.newNumber = newLine++;
        }
        else if (startsWithAny(line, deletedPrefixes)) {
            currentFile.deletedLines++;
            currentLine.type = _types__WEBPACK_IMPORTED_MODULE_0__["LineType"].DELETE;
            currentLine.oldNumber = oldLine++;
            currentLine.newNumber = undefined;
        }
        else {
            currentLine.type = _types__WEBPACK_IMPORTED_MODULE_0__["LineType"].CONTEXT;
            currentLine.oldNumber = oldLine++;
            currentLine.newNumber = newLine++;
        }
        currentBlock.lines.push(currentLine);
    }
    function existHunkHeader(line, lineIdx) {
        var idx = lineIdx;
        while (idx < diffLines.length - 3) {
            if (line.startsWith('diff')) {
                return false;
            }
            if (diffLines[idx].startsWith(oldFileNameHeader) &&
                diffLines[idx + 1].startsWith(newFileNameHeader) &&
                diffLines[idx + 2].startsWith(hunkHeaderPrefix)) {
                return true;
            }
            idx++;
        }
        return false;
    }
    diffLines.forEach(function (line, lineIndex) {
        if (!line || line.startsWith('*')) {
            return;
        }
        var values;
        var prevLine = diffLines[lineIndex - 1];
        var nxtLine = diffLines[lineIndex + 1];
        var afterNxtLine = diffLines[lineIndex + 2];
        if (line.startsWith('diff')) {
            startFile();
            var gitDiffStart = /^diff --git "?(.+)"? "?(.+)"?/;
            if ((values = gitDiffStart.exec(line))) {
                possibleOldName = getFilename(values[1], undefined, config.dstPrefix);
                possibleNewName = getFilename(values[2], undefined, config.srcPrefix);
            }
            if (currentFile === null) {
                throw new Error('Where is my file !!!');
            }
            currentFile.isGitDiff = true;
            return;
        }
        if (!currentFile ||
            (!currentFile.isGitDiff &&
                currentFile &&
                line.startsWith(oldFileNameHeader) &&
                nxtLine.startsWith(newFileNameHeader) &&
                afterNxtLine.startsWith(hunkHeaderPrefix))) {
            startFile();
        }
        if ((line.startsWith(oldFileNameHeader) && nxtLine.startsWith(newFileNameHeader)) ||
            (line.startsWith(newFileNameHeader) && prevLine.startsWith(oldFileNameHeader))) {
            if (currentFile &&
                !currentFile.oldName &&
                line.startsWith('--- ') &&
                (values = getSrcFilename(line, config.srcPrefix))) {
                currentFile.oldName = values;
                currentFile.language = getExtension(currentFile.oldName, currentFile.language);
                return;
            }
            if (currentFile &&
                !currentFile.newName &&
                line.startsWith('+++ ') &&
                (values = getDstFilename(line, config.dstPrefix))) {
                currentFile.newName = values;
                currentFile.language = getExtension(currentFile.newName, currentFile.language);
                return;
            }
        }
        if (currentFile &&
            (line.startsWith(hunkHeaderPrefix) ||
                (currentFile.isGitDiff && currentFile.oldName && currentFile.newName && !currentBlock))) {
            startBlock(line);
            return;
        }
        if (currentBlock && (line.startsWith('+') || line.startsWith('-') || line.startsWith(' '))) {
            createLine(line);
            return;
        }
        var doesNotExistHunkHeader = !existHunkHeader(line, lineIndex);
        if (currentFile === null) {
            throw new Error('Where is my file !!!');
        }
        if ((values = oldMode.exec(line))) {
            currentFile.oldMode = values[1];
        }
        else if ((values = newMode.exec(line))) {
            currentFile.newMode = values[1];
        }
        else if ((values = deletedFileMode.exec(line))) {
            currentFile.deletedFileMode = values[1];
            currentFile.isDeleted = true;
        }
        else if ((values = newFileMode.exec(line))) {
            currentFile.newFileMode = values[1];
            currentFile.isNew = true;
        }
        else if ((values = copyFrom.exec(line))) {
            if (doesNotExistHunkHeader) {
                currentFile.oldName = values[1];
            }
            currentFile.isCopy = true;
        }
        else if ((values = copyTo.exec(line))) {
            if (doesNotExistHunkHeader) {
                currentFile.newName = values[1];
            }
            currentFile.isCopy = true;
        }
        else if ((values = renameFrom.exec(line))) {
            if (doesNotExistHunkHeader) {
                currentFile.oldName = values[1];
            }
            currentFile.isRename = true;
        }
        else if ((values = renameTo.exec(line))) {
            if (doesNotExistHunkHeader) {
                currentFile.newName = values[1];
            }
            currentFile.isRename = true;
        }
        else if ((values = binaryFiles.exec(line))) {
            currentFile.isBinary = true;
            currentFile.oldName = getFilename(values[1], undefined, config.srcPrefix);
            currentFile.newName = getFilename(values[2], undefined, config.dstPrefix);
            startBlock('Binary file');
        }
        else if (binaryDiff.test(line)) {
            currentFile.isBinary = true;
            startBlock(line);
        }
        else if ((values = similarityIndex.exec(line))) {
            currentFile.unchangedPercentage = parseInt(values[1], 10);
        }
        else if ((values = dissimilarityIndex.exec(line))) {
            currentFile.changedPercentage = parseInt(values[1], 10);
        }
        else if ((values = index.exec(line))) {
            currentFile.checksumBefore = values[1];
            currentFile.checksumAfter = values[2];
            values[3] && (currentFile.mode = values[3]);
        }
        else if ((values = combinedIndex.exec(line))) {
            currentFile.checksumBefore = [values[2], values[3]];
            currentFile.checksumAfter = values[1];
        }
        else if ((values = combinedMode.exec(line))) {
            currentFile.oldMode = [values[2], values[3]];
            currentFile.newMode = values[1];
        }
        else if ((values = combinedNewFile.exec(line))) {
            currentFile.newFileMode = values[1];
            currentFile.isNew = true;
        }
        else if ((values = combinedDeletedFile.exec(line))) {
            currentFile.deletedFileMode = values[1];
            currentFile.isDeleted = true;
        }
    });
    saveBlock();
    saveFile();
    return files;
}
//# sourceMappingURL=diff-parser.js.map

/***/ }),

/***/ "rn2K":
/*!*****************************************************!*\
  !*** ./node_modules/diff2html/lib-esm/diff2html.js ***!
  \*****************************************************/
/*! exports provided: defaultDiff2HtmlConfig, parse, html */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDiff2HtmlConfig", function() { return defaultDiff2HtmlConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony import */ var _diff_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diff-parser */ "rJE5");
/* harmony import */ var _file_list_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-list-renderer */ "DZQh");
/* harmony import */ var _line_by_line_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line-by-line-renderer */ "zgr2");
/* harmony import */ var _side_by_side_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-by-side-renderer */ "qVJG");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "X1my");
/* harmony import */ var _hoganjs_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hoganjs-utils */ "/6Qv");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};






var defaultDiff2HtmlConfig = __assign(__assign(__assign({}, _line_by_line_renderer__WEBPACK_IMPORTED_MODULE_2__["defaultLineByLineRendererConfig"]), _side_by_side_renderer__WEBPACK_IMPORTED_MODULE_3__["defaultSideBySideRendererConfig"]), { outputFormat: _types__WEBPACK_IMPORTED_MODULE_4__["OutputFormatType"].LINE_BY_LINE, drawFileList: true });
function parse(diffInput, configuration) {
    if (configuration === void 0) { configuration = {}; }
    return _diff_parser__WEBPACK_IMPORTED_MODULE_0__["parse"](diffInput, __assign(__assign({}, defaultDiff2HtmlConfig), configuration));
}
function html(diffInput, configuration) {
    if (configuration === void 0) { configuration = {}; }
    var config = __assign(__assign({}, defaultDiff2HtmlConfig), configuration);
    var diffJson = typeof diffInput === 'string' ? _diff_parser__WEBPACK_IMPORTED_MODULE_0__["parse"](diffInput, config) : diffInput;
    var hoganUtils = new _hoganjs_utils__WEBPACK_IMPORTED_MODULE_5__["default"](config);
    var fileList = config.drawFileList ? _file_list_renderer__WEBPACK_IMPORTED_MODULE_1__["render"](diffJson, hoganUtils) : '';
    var diffOutput = config.outputFormat === 'side-by-side'
        ? new _side_by_side_renderer__WEBPACK_IMPORTED_MODULE_3__["default"](hoganUtils, config).render(diffJson)
        : new _line_by_line_renderer__WEBPACK_IMPORTED_MODULE_2__["default"](hoganUtils, config).render(diffJson);
    return fileList + diffOutput;
}
//# sourceMappingURL=diff2html.js.map

/***/ }),

/***/ "v2jn":
/*!****************************************!*\
  !*** ./node_modules/diff/dist/diff.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!

 diff v4.0.1

Software License Agreement (BSD License)

Copyright (c) 2009-2015, Kevin Decker <kpdecker@gmail.com>

All rights reserved.

Redistribution and use of this software in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above
  copyright notice, this list of conditions and the
  following disclaimer.

* Redistributions in binary form must reproduce the above
  copyright notice, this list of conditions and the
  following disclaimer in the documentation and/or other
  materials provided with the distribution.

* Neither the name of Kevin Decker nor the names of its
  contributors may be used to endorse or promote products
  derived from this software without specific prior
  written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
@license
*/
(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, function (exports) { 'use strict';

  function Diff() {}
  Diff.prototype = {
    diff: function diff(oldString, newString) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var callback = options.callback;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      this.options = options;
      var self = this;

      function done(value) {
        if (callback) {
          setTimeout(function () {
            callback(undefined, value);
          }, 0);
          return true;
        } else {
          return value;
        }
      } // Allow subclasses to massage the input prior to running


      oldString = this.castInput(oldString);
      newString = this.castInput(newString);
      oldString = this.removeEmpty(this.tokenize(oldString));
      newString = this.removeEmpty(this.tokenize(newString));
      var newLen = newString.length,
          oldLen = oldString.length;
      var editLength = 1;
      var maxEditLength = newLen + oldLen;
      var bestPath = [{
        newPos: -1,
        components: []
      }]; // Seed editLength = 0, i.e. the content starts with the same values

      var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);

      if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
        // Identity per the equality and tokenizer
        return done([{
          value: this.join(newString),
          count: newString.length
        }]);
      } // Main worker method. checks all permutations of a given edit length for acceptance.


      function execEditLength() {
        for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
          var basePath = void 0;

          var addPath = bestPath[diagonalPath - 1],
              removePath = bestPath[diagonalPath + 1],
              _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;

          if (addPath) {
            // No one else is going to attempt to use this value, clear it
            bestPath[diagonalPath - 1] = undefined;
          }

          var canAdd = addPath && addPath.newPos + 1 < newLen,
              canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;

          if (!canAdd && !canRemove) {
            // If this path is a terminal then prune
            bestPath[diagonalPath] = undefined;
            continue;
          } // Select the diagonal that we want to branch from. We select the prior
          // path whose position in the new string is the farthest from the origin
          // and does not pass the bounds of the diff graph


          if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
            basePath = clonePath(removePath);
            self.pushComponent(basePath.components, undefined, true);
          } else {
            basePath = addPath; // No need to clone, we've pulled it from the list

            basePath.newPos++;
            self.pushComponent(basePath.components, true, undefined);
          }

          _oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath); // If we have hit the end of both strings, then we are done

          if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
            return done(buildValues(self, basePath.components, newString, oldString, self.useLongestToken));
          } else {
            // Otherwise track this path as a potential candidate and continue.
            bestPath[diagonalPath] = basePath;
          }
        }

        editLength++;
      } // Performs the length of edit iteration. Is a bit fugly as this has to support the
      // sync and async mode which is never fun. Loops over execEditLength until a value
      // is produced.


      if (callback) {
        (function exec() {
          setTimeout(function () {
            // This should not happen, but we want to be safe.

            /* istanbul ignore next */
            if (editLength > maxEditLength) {
              return callback();
            }

            if (!execEditLength()) {
              exec();
            }
          }, 0);
        })();
      } else {
        while (editLength <= maxEditLength) {
          var ret = execEditLength();

          if (ret) {
            return ret;
          }
        }
      }
    },
    pushComponent: function pushComponent(components, added, removed) {
      var last = components[components.length - 1];

      if (last && last.added === added && last.removed === removed) {
        // We need to clone here as the component clone operation is just
        // as shallow array clone
        components[components.length - 1] = {
          count: last.count + 1,
          added: added,
          removed: removed
        };
      } else {
        components.push({
          count: 1,
          added: added,
          removed: removed
        });
      }
    },
    extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
      var newLen = newString.length,
          oldLen = oldString.length,
          newPos = basePath.newPos,
          oldPos = newPos - diagonalPath,
          commonCount = 0;

      while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
        newPos++;
        oldPos++;
        commonCount++;
      }

      if (commonCount) {
        basePath.components.push({
          count: commonCount
        });
      }

      basePath.newPos = newPos;
      return oldPos;
    },
    equals: function equals(left, right) {
      if (this.options.comparator) {
        return this.options.comparator(left, right);
      } else {
        return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
      }
    },
    removeEmpty: function removeEmpty(array) {
      var ret = [];

      for (var i = 0; i < array.length; i++) {
        if (array[i]) {
          ret.push(array[i]);
        }
      }

      return ret;
    },
    castInput: function castInput(value) {
      return value;
    },
    tokenize: function tokenize(value) {
      return value.split('');
    },
    join: function join(chars) {
      return chars.join('');
    }
  };

  function buildValues(diff, components, newString, oldString, useLongestToken) {
    var componentPos = 0,
        componentLen = components.length,
        newPos = 0,
        oldPos = 0;

    for (; componentPos < componentLen; componentPos++) {
      var component = components[componentPos];

      if (!component.removed) {
        if (!component.added && useLongestToken) {
          var value = newString.slice(newPos, newPos + component.count);
          value = value.map(function (value, i) {
            var oldValue = oldString[oldPos + i];
            return oldValue.length > value.length ? oldValue : value;
          });
          component.value = diff.join(value);
        } else {
          component.value = diff.join(newString.slice(newPos, newPos + component.count));
        }

        newPos += component.count; // Common case

        if (!component.added) {
          oldPos += component.count;
        }
      } else {
        component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
        oldPos += component.count; // Reverse add and remove so removes are output first to match common convention
        // The diffing algorithm is tied to add then remove output and this is the simplest
        // route to get the desired output with minimal overhead.

        if (componentPos && components[componentPos - 1].added) {
          var tmp = components[componentPos - 1];
          components[componentPos - 1] = components[componentPos];
          components[componentPos] = tmp;
        }
      }
    } // Special case handle for when one terminal is ignored (i.e. whitespace).
    // For this case we merge the terminal into the prior string and drop the change.
    // This is only available for string mode.


    var lastComponent = components[componentLen - 1];

    if (componentLen > 1 && typeof lastComponent.value === 'string' && (lastComponent.added || lastComponent.removed) && diff.equals('', lastComponent.value)) {
      components[componentLen - 2].value += lastComponent.value;
      components.pop();
    }

    return components;
  }

  function clonePath(path) {
    return {
      newPos: path.newPos,
      components: path.components.slice(0)
    };
  }

  var characterDiff = new Diff();
  function diffChars(oldStr, newStr, options) {
    return characterDiff.diff(oldStr, newStr, options);
  }

  function generateOptions(options, defaults) {
    if (typeof options === 'function') {
      defaults.callback = options;
    } else if (options) {
      for (var name in options) {
        /* istanbul ignore else */
        if (options.hasOwnProperty(name)) {
          defaults[name] = options[name];
        }
      }
    }

    return defaults;
  }

  //
  // Ranges and exceptions:
  // Latin-1 Supplement, 0080–00FF
  //  - U+00D7  × Multiplication sign
  //  - U+00F7  ÷ Division sign
  // Latin Extended-A, 0100–017F
  // Latin Extended-B, 0180–024F
  // IPA Extensions, 0250–02AF
  // Spacing Modifier Letters, 02B0–02FF
  //  - U+02C7  ˇ &#711;  Caron
  //  - U+02D8  ˘ &#728;  Breve
  //  - U+02D9  ˙ &#729;  Dot Above
  //  - U+02DA  ˚ &#730;  Ring Above
  //  - U+02DB  ˛ &#731;  Ogonek
  //  - U+02DC  ˜ &#732;  Small Tilde
  //  - U+02DD  ˝ &#733;  Double Acute Accent
  // Latin Extended Additional, 1E00–1EFF

  var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
  var reWhitespace = /\S/;
  var wordDiff = new Diff();

  wordDiff.equals = function (left, right) {
    if (this.options.ignoreCase) {
      left = left.toLowerCase();
      right = right.toLowerCase();
    }

    return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
  };

  wordDiff.tokenize = function (value) {
    var tokens = value.split(/(\s+|[()[\]{}'"]|\b)/); // Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.

    for (var i = 0; i < tokens.length - 1; i++) {
      // If we have an empty string in the next field and we have only word chars before and after, merge
      if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
        tokens[i] += tokens[i + 2];
        tokens.splice(i + 1, 2);
        i--;
      }
    }

    return tokens;
  };

  function diffWords(oldStr, newStr, options) {
    options = generateOptions(options, {
      ignoreWhitespace: true
    });
    return wordDiff.diff(oldStr, newStr, options);
  }
  function diffWordsWithSpace(oldStr, newStr, options) {
    return wordDiff.diff(oldStr, newStr, options);
  }

  var lineDiff = new Diff();

  lineDiff.tokenize = function (value) {
    var retLines = [],
        linesAndNewlines = value.split(/(\n|\r\n)/); // Ignore the final empty token that occurs if the string ends with a new line

    if (!linesAndNewlines[linesAndNewlines.length - 1]) {
      linesAndNewlines.pop();
    } // Merge the content and line separators into single tokens


    for (var i = 0; i < linesAndNewlines.length; i++) {
      var line = linesAndNewlines[i];

      if (i % 2 && !this.options.newlineIsToken) {
        retLines[retLines.length - 1] += line;
      } else {
        if (this.options.ignoreWhitespace) {
          line = line.trim();
        }

        retLines.push(line);
      }
    }

    return retLines;
  };

  function diffLines(oldStr, newStr, callback) {
    return lineDiff.diff(oldStr, newStr, callback);
  }
  function diffTrimmedLines(oldStr, newStr, callback) {
    var options = generateOptions(callback, {
      ignoreWhitespace: true
    });
    return lineDiff.diff(oldStr, newStr, options);
  }

  var sentenceDiff = new Diff();

  sentenceDiff.tokenize = function (value) {
    return value.split(/(\S.+?[.!?])(?=\s+|$)/);
  };

  function diffSentences(oldStr, newStr, callback) {
    return sentenceDiff.diff(oldStr, newStr, callback);
  }

  var cssDiff = new Diff();

  cssDiff.tokenize = function (value) {
    return value.split(/([{}:;,]|\s+)/);
  };

  function diffCss(oldStr, newStr, callback) {
    return cssDiff.diff(oldStr, newStr, callback);
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var objectPrototypeToString = Object.prototype.toString;
  var jsonDiff = new Diff(); // Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
  // dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:

  jsonDiff.useLongestToken = true;
  jsonDiff.tokenize = lineDiff.tokenize;

  jsonDiff.castInput = function (value) {
    var _this$options = this.options,
        undefinedReplacement = _this$options.undefinedReplacement,
        _this$options$stringi = _this$options.stringifyReplacer,
        stringifyReplacer = _this$options$stringi === void 0 ? function (k, v) {
      return typeof v === 'undefined' ? undefinedReplacement : v;
    } : _this$options$stringi;
    return typeof value === 'string' ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, '  ');
  };

  jsonDiff.equals = function (left, right) {
    return Diff.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'));
  };

  function diffJson(oldObj, newObj, options) {
    return jsonDiff.diff(oldObj, newObj, options);
  } // This function handles the presence of circular references by bailing out when encountering an
  // object that is already on the "stack" of items being processed. Accepts an optional replacer

  function canonicalize(obj, stack, replacementStack, replacer, key) {
    stack = stack || [];
    replacementStack = replacementStack || [];

    if (replacer) {
      obj = replacer(key, obj);
    }

    var i;

    for (i = 0; i < stack.length; i += 1) {
      if (stack[i] === obj) {
        return replacementStack[i];
      }
    }

    var canonicalizedObj;

    if ('[object Array]' === objectPrototypeToString.call(obj)) {
      stack.push(obj);
      canonicalizedObj = new Array(obj.length);
      replacementStack.push(canonicalizedObj);

      for (i = 0; i < obj.length; i += 1) {
        canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
      }

      stack.pop();
      replacementStack.pop();
      return canonicalizedObj;
    }

    if (obj && obj.toJSON) {
      obj = obj.toJSON();
    }

    if (_typeof(obj) === 'object' && obj !== null) {
      stack.push(obj);
      canonicalizedObj = {};
      replacementStack.push(canonicalizedObj);

      var sortedKeys = [],
          _key;

      for (_key in obj) {
        /* istanbul ignore else */
        if (obj.hasOwnProperty(_key)) {
          sortedKeys.push(_key);
        }
      }

      sortedKeys.sort();

      for (i = 0; i < sortedKeys.length; i += 1) {
        _key = sortedKeys[i];
        canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
      }

      stack.pop();
      replacementStack.pop();
    } else {
      canonicalizedObj = obj;
    }

    return canonicalizedObj;
  }

  var arrayDiff = new Diff();

  arrayDiff.tokenize = function (value) {
    return value.slice();
  };

  arrayDiff.join = arrayDiff.removeEmpty = function (value) {
    return value;
  };

  function diffArrays(oldArr, newArr, callback) {
    return arrayDiff.diff(oldArr, newArr, callback);
  }

  function parsePatch(uniDiff) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var diffstr = uniDiff.split(/\r\n|[\n\v\f\r\x85]/),
        delimiters = uniDiff.match(/\r\n|[\n\v\f\r\x85]/g) || [],
        list = [],
        i = 0;

    function parseIndex() {
      var index = {};
      list.push(index); // Parse diff metadata

      while (i < diffstr.length) {
        var line = diffstr[i]; // File header found, end parsing diff metadata

        if (/^(\-\-\-|\+\+\+|@@)\s/.test(line)) {
          break;
        } // Diff index


        var header = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(line);

        if (header) {
          index.index = header[1];
        }

        i++;
      } // Parse file headers if they are defined. Unified diff requires them, but
      // there's no technical issues to have an isolated hunk without file header


      parseFileHeader(index);
      parseFileHeader(index); // Parse hunks

      index.hunks = [];

      while (i < diffstr.length) {
        var _line = diffstr[i];

        if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(_line)) {
          break;
        } else if (/^@@/.test(_line)) {
          index.hunks.push(parseHunk());
        } else if (_line && options.strict) {
          // Ignore unexpected content unless in strict mode
          throw new Error('Unknown line ' + (i + 1) + ' ' + JSON.stringify(_line));
        } else {
          i++;
        }
      }
    } // Parses the --- and +++ headers, if none are found, no lines
    // are consumed.


    function parseFileHeader(index) {
      var fileHeader = /^(---|\+\+\+)\s+(.*)$/.exec(diffstr[i]);

      if (fileHeader) {
        var keyPrefix = fileHeader[1] === '---' ? 'old' : 'new';
        var data = fileHeader[2].split('\t', 2);
        var fileName = data[0].replace(/\\\\/g, '\\');

        if (/^".*"$/.test(fileName)) {
          fileName = fileName.substr(1, fileName.length - 2);
        }

        index[keyPrefix + 'FileName'] = fileName;
        index[keyPrefix + 'Header'] = (data[1] || '').trim();
        i++;
      }
    } // Parses a hunk
    // This assumes that we are at the start of a hunk.


    function parseHunk() {
      var chunkHeaderIndex = i,
          chunkHeaderLine = diffstr[i++],
          chunkHeader = chunkHeaderLine.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
      var hunk = {
        oldStart: +chunkHeader[1],
        oldLines: +chunkHeader[2] || 1,
        newStart: +chunkHeader[3],
        newLines: +chunkHeader[4] || 1,
        lines: [],
        linedelimiters: []
      };
      var addCount = 0,
          removeCount = 0;

      for (; i < diffstr.length; i++) {
        // Lines starting with '---' could be mistaken for the "remove line" operation
        // But they could be the header for the next file. Therefore prune such cases out.
        if (diffstr[i].indexOf('--- ') === 0 && i + 2 < diffstr.length && diffstr[i + 1].indexOf('+++ ') === 0 && diffstr[i + 2].indexOf('@@') === 0) {
          break;
        }

        var operation = diffstr[i].length == 0 && i != diffstr.length - 1 ? ' ' : diffstr[i][0];

        if (operation === '+' || operation === '-' || operation === ' ' || operation === '\\') {
          hunk.lines.push(diffstr[i]);
          hunk.linedelimiters.push(delimiters[i] || '\n');

          if (operation === '+') {
            addCount++;
          } else if (operation === '-') {
            removeCount++;
          } else if (operation === ' ') {
            addCount++;
            removeCount++;
          }
        } else {
          break;
        }
      } // Handle the empty block count case


      if (!addCount && hunk.newLines === 1) {
        hunk.newLines = 0;
      }

      if (!removeCount && hunk.oldLines === 1) {
        hunk.oldLines = 0;
      } // Perform optional sanity checking


      if (options.strict) {
        if (addCount !== hunk.newLines) {
          throw new Error('Added line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
        }

        if (removeCount !== hunk.oldLines) {
          throw new Error('Removed line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
        }
      }

      return hunk;
    }

    while (i < diffstr.length) {
      parseIndex();
    }

    return list;
  }

  // Iterator that traverses in the range of [min, max], stepping
  // by distance from a given start position. I.e. for [0, 4], with
  // start of 2, this will iterate 2, 3, 1, 4, 0.
  function distanceIterator (start, minLine, maxLine) {
    var wantForward = true,
        backwardExhausted = false,
        forwardExhausted = false,
        localOffset = 1;
    return function iterator() {
      if (wantForward && !forwardExhausted) {
        if (backwardExhausted) {
          localOffset++;
        } else {
          wantForward = false;
        } // Check if trying to fit beyond text length, and if not, check it fits
        // after offset location (or desired location on first iteration)


        if (start + localOffset <= maxLine) {
          return localOffset;
        }

        forwardExhausted = true;
      }

      if (!backwardExhausted) {
        if (!forwardExhausted) {
          wantForward = true;
        } // Check if trying to fit before text beginning, and if not, check it fits
        // before offset location


        if (minLine <= start - localOffset) {
          return -localOffset++;
        }

        backwardExhausted = true;
        return iterator();
      } // We tried to fit hunk before text beginning and beyond text length, then
      // hunk can't fit on the text. Return undefined

    };
  }

  function applyPatch(source, uniDiff) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (typeof uniDiff === 'string') {
      uniDiff = parsePatch(uniDiff);
    }

    if (Array.isArray(uniDiff)) {
      if (uniDiff.length > 1) {
        throw new Error('applyPatch only works with a single input.');
      }

      uniDiff = uniDiff[0];
    } // Apply the diff to the input


    var lines = source.split(/\r\n|[\n\v\f\r\x85]/),
        delimiters = source.match(/\r\n|[\n\v\f\r\x85]/g) || [],
        hunks = uniDiff.hunks,
        compareLine = options.compareLine || function (lineNumber, line, operation, patchContent) {
      return line === patchContent;
    },
        errorCount = 0,
        fuzzFactor = options.fuzzFactor || 0,
        minLine = 0,
        offset = 0,
        removeEOFNL,
        addEOFNL;
    /**
     * Checks if the hunk exactly fits on the provided location
     */


    function hunkFits(hunk, toPos) {
      for (var j = 0; j < hunk.lines.length; j++) {
        var line = hunk.lines[j],
            operation = line.length > 0 ? line[0] : ' ',
            content = line.length > 0 ? line.substr(1) : line;

        if (operation === ' ' || operation === '-') {
          // Context sanity check
          if (!compareLine(toPos + 1, lines[toPos], operation, content)) {
            errorCount++;

            if (errorCount > fuzzFactor) {
              return false;
            }
          }

          toPos++;
        }
      }

      return true;
    } // Search best fit offsets for each hunk based on the previous ones


    for (var i = 0; i < hunks.length; i++) {
      var hunk = hunks[i],
          maxLine = lines.length - hunk.oldLines,
          localOffset = 0,
          toPos = offset + hunk.oldStart - 1;
      var iterator = distanceIterator(toPos, minLine, maxLine);

      for (; localOffset !== undefined; localOffset = iterator()) {
        if (hunkFits(hunk, toPos + localOffset)) {
          hunk.offset = offset += localOffset;
          break;
        }
      }

      if (localOffset === undefined) {
        return false;
      } // Set lower text limit to end of the current hunk, so next ones don't try
      // to fit over already patched text


      minLine = hunk.offset + hunk.oldStart + hunk.oldLines;
    } // Apply patch hunks


    var diffOffset = 0;

    for (var _i = 0; _i < hunks.length; _i++) {
      var _hunk = hunks[_i],
          _toPos = _hunk.oldStart + _hunk.offset + diffOffset - 1;

      diffOffset += _hunk.newLines - _hunk.oldLines;

      if (_toPos < 0) {
        // Creating a new file
        _toPos = 0;
      }

      for (var j = 0; j < _hunk.lines.length; j++) {
        var line = _hunk.lines[j],
            operation = line.length > 0 ? line[0] : ' ',
            content = line.length > 0 ? line.substr(1) : line,
            delimiter = _hunk.linedelimiters[j];

        if (operation === ' ') {
          _toPos++;
        } else if (operation === '-') {
          lines.splice(_toPos, 1);
          delimiters.splice(_toPos, 1);
          /* istanbul ignore else */
        } else if (operation === '+') {
          lines.splice(_toPos, 0, content);
          delimiters.splice(_toPos, 0, delimiter);
          _toPos++;
        } else if (operation === '\\') {
          var previousOperation = _hunk.lines[j - 1] ? _hunk.lines[j - 1][0] : null;

          if (previousOperation === '+') {
            removeEOFNL = true;
          } else if (previousOperation === '-') {
            addEOFNL = true;
          }
        }
      }
    } // Handle EOFNL insertion/removal


    if (removeEOFNL) {
      while (!lines[lines.length - 1]) {
        lines.pop();
        delimiters.pop();
      }
    } else if (addEOFNL) {
      lines.push('');
      delimiters.push('\n');
    }

    for (var _k = 0; _k < lines.length - 1; _k++) {
      lines[_k] = lines[_k] + delimiters[_k];
    }

    return lines.join('');
  } // Wrapper that supports multiple file patches via callbacks.

  function applyPatches(uniDiff, options) {
    if (typeof uniDiff === 'string') {
      uniDiff = parsePatch(uniDiff);
    }

    var currentIndex = 0;

    function processIndex() {
      var index = uniDiff[currentIndex++];

      if (!index) {
        return options.complete();
      }

      options.loadFile(index, function (err, data) {
        if (err) {
          return options.complete(err);
        }

        var updatedContent = applyPatch(data, index, options);
        options.patched(index, updatedContent, function (err) {
          if (err) {
            return options.complete(err);
          }

          processIndex();
        });
      });
    }

    processIndex();
  }

  function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
    if (!options) {
      options = {};
    }

    if (typeof options.context === 'undefined') {
      options.context = 4;
    }

    var diff = diffLines(oldStr, newStr, options);
    diff.push({
      value: '',
      lines: []
    }); // Append an empty value to make cleanup easier

    function contextLines(lines) {
      return lines.map(function (entry) {
        return ' ' + entry;
      });
    }

    var hunks = [];
    var oldRangeStart = 0,
        newRangeStart = 0,
        curRange = [],
        oldLine = 1,
        newLine = 1;

    var _loop = function _loop(i) {
      var current = diff[i],
          lines = current.lines || current.value.replace(/\n$/, '').split('\n');
      current.lines = lines;

      if (current.added || current.removed) {
        var _curRange;

        // If we have previous context, start with that
        if (!oldRangeStart) {
          var prev = diff[i - 1];
          oldRangeStart = oldLine;
          newRangeStart = newLine;

          if (prev) {
            curRange = options.context > 0 ? contextLines(prev.lines.slice(-options.context)) : [];
            oldRangeStart -= curRange.length;
            newRangeStart -= curRange.length;
          }
        } // Output our changes


        (_curRange = curRange).push.apply(_curRange, _toConsumableArray(lines.map(function (entry) {
          return (current.added ? '+' : '-') + entry;
        }))); // Track the updated file position


        if (current.added) {
          newLine += lines.length;
        } else {
          oldLine += lines.length;
        }
      } else {
        // Identical context lines. Track line changes
        if (oldRangeStart) {
          // Close out any changes that have been output (or join overlapping)
          if (lines.length <= options.context * 2 && i < diff.length - 2) {
            var _curRange2;

            // Overlapping
            (_curRange2 = curRange).push.apply(_curRange2, _toConsumableArray(contextLines(lines)));
          } else {
            var _curRange3;

            // end the range and output
            var contextSize = Math.min(lines.length, options.context);

            (_curRange3 = curRange).push.apply(_curRange3, _toConsumableArray(contextLines(lines.slice(0, contextSize))));

            var hunk = {
              oldStart: oldRangeStart,
              oldLines: oldLine - oldRangeStart + contextSize,
              newStart: newRangeStart,
              newLines: newLine - newRangeStart + contextSize,
              lines: curRange
            };

            if (i >= diff.length - 2 && lines.length <= options.context) {
              // EOF is inside this hunk
              var oldEOFNewline = /\n$/.test(oldStr);
              var newEOFNewline = /\n$/.test(newStr);
              var noNlBeforeAdds = lines.length == 0 && curRange.length > hunk.oldLines;

              if (!oldEOFNewline && noNlBeforeAdds) {
                // special case: old has no eol and no trailing context; no-nl can end up before adds
                curRange.splice(hunk.oldLines, 0, '\\ No newline at end of file');
              }

              if (!oldEOFNewline && !noNlBeforeAdds || !newEOFNewline) {
                curRange.push('\\ No newline at end of file');
              }
            }

            hunks.push(hunk);
            oldRangeStart = 0;
            newRangeStart = 0;
            curRange = [];
          }
        }

        oldLine += lines.length;
        newLine += lines.length;
      }
    };

    for (var i = 0; i < diff.length; i++) {
      _loop(i);
    }

    return {
      oldFileName: oldFileName,
      newFileName: newFileName,
      oldHeader: oldHeader,
      newHeader: newHeader,
      hunks: hunks
    };
  }
  function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
    var diff = structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options);
    var ret = [];

    if (oldFileName == newFileName) {
      ret.push('Index: ' + oldFileName);
    }

    ret.push('===================================================================');
    ret.push('--- ' + diff.oldFileName + (typeof diff.oldHeader === 'undefined' ? '' : '\t' + diff.oldHeader));
    ret.push('+++ ' + diff.newFileName + (typeof diff.newHeader === 'undefined' ? '' : '\t' + diff.newHeader));

    for (var i = 0; i < diff.hunks.length; i++) {
      var hunk = diff.hunks[i];
      ret.push('@@ -' + hunk.oldStart + ',' + hunk.oldLines + ' +' + hunk.newStart + ',' + hunk.newLines + ' @@');
      ret.push.apply(ret, hunk.lines);
    }

    return ret.join('\n') + '\n';
  }
  function createPatch(fileName, oldStr, newStr, oldHeader, newHeader, options) {
    return createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader, options);
  }

  function arrayEqual(a, b) {
    if (a.length !== b.length) {
      return false;
    }

    return arrayStartsWith(a, b);
  }
  function arrayStartsWith(array, start) {
    if (start.length > array.length) {
      return false;
    }

    for (var i = 0; i < start.length; i++) {
      if (start[i] !== array[i]) {
        return false;
      }
    }

    return true;
  }

  function calcLineCount(hunk) {
    var _calcOldNewLineCount = calcOldNewLineCount(hunk.lines),
        oldLines = _calcOldNewLineCount.oldLines,
        newLines = _calcOldNewLineCount.newLines;

    if (oldLines !== undefined) {
      hunk.oldLines = oldLines;
    } else {
      delete hunk.oldLines;
    }

    if (newLines !== undefined) {
      hunk.newLines = newLines;
    } else {
      delete hunk.newLines;
    }
  }
  function merge(mine, theirs, base) {
    mine = loadPatch(mine, base);
    theirs = loadPatch(theirs, base);
    var ret = {}; // For index we just let it pass through as it doesn't have any necessary meaning.
    // Leaving sanity checks on this to the API consumer that may know more about the
    // meaning in their own context.

    if (mine.index || theirs.index) {
      ret.index = mine.index || theirs.index;
    }

    if (mine.newFileName || theirs.newFileName) {
      if (!fileNameChanged(mine)) {
        // No header or no change in ours, use theirs (and ours if theirs does not exist)
        ret.oldFileName = theirs.oldFileName || mine.oldFileName;
        ret.newFileName = theirs.newFileName || mine.newFileName;
        ret.oldHeader = theirs.oldHeader || mine.oldHeader;
        ret.newHeader = theirs.newHeader || mine.newHeader;
      } else if (!fileNameChanged(theirs)) {
        // No header or no change in theirs, use ours
        ret.oldFileName = mine.oldFileName;
        ret.newFileName = mine.newFileName;
        ret.oldHeader = mine.oldHeader;
        ret.newHeader = mine.newHeader;
      } else {
        // Both changed... figure it out
        ret.oldFileName = selectField(ret, mine.oldFileName, theirs.oldFileName);
        ret.newFileName = selectField(ret, mine.newFileName, theirs.newFileName);
        ret.oldHeader = selectField(ret, mine.oldHeader, theirs.oldHeader);
        ret.newHeader = selectField(ret, mine.newHeader, theirs.newHeader);
      }
    }

    ret.hunks = [];
    var mineIndex = 0,
        theirsIndex = 0,
        mineOffset = 0,
        theirsOffset = 0;

    while (mineIndex < mine.hunks.length || theirsIndex < theirs.hunks.length) {
      var mineCurrent = mine.hunks[mineIndex] || {
        oldStart: Infinity
      },
          theirsCurrent = theirs.hunks[theirsIndex] || {
        oldStart: Infinity
      };

      if (hunkBefore(mineCurrent, theirsCurrent)) {
        // This patch does not overlap with any of the others, yay.
        ret.hunks.push(cloneHunk(mineCurrent, mineOffset));
        mineIndex++;
        theirsOffset += mineCurrent.newLines - mineCurrent.oldLines;
      } else if (hunkBefore(theirsCurrent, mineCurrent)) {
        // This patch does not overlap with any of the others, yay.
        ret.hunks.push(cloneHunk(theirsCurrent, theirsOffset));
        theirsIndex++;
        mineOffset += theirsCurrent.newLines - theirsCurrent.oldLines;
      } else {
        // Overlap, merge as best we can
        var mergedHunk = {
          oldStart: Math.min(mineCurrent.oldStart, theirsCurrent.oldStart),
          oldLines: 0,
          newStart: Math.min(mineCurrent.newStart + mineOffset, theirsCurrent.oldStart + theirsOffset),
          newLines: 0,
          lines: []
        };
        mergeLines(mergedHunk, mineCurrent.oldStart, mineCurrent.lines, theirsCurrent.oldStart, theirsCurrent.lines);
        theirsIndex++;
        mineIndex++;
        ret.hunks.push(mergedHunk);
      }
    }

    return ret;
  }

  function loadPatch(param, base) {
    if (typeof param === 'string') {
      if (/^@@/m.test(param) || /^Index:/m.test(param)) {
        return parsePatch(param)[0];
      }

      if (!base) {
        throw new Error('Must provide a base reference or pass in a patch');
      }

      return structuredPatch(undefined, undefined, base, param);
    }

    return param;
  }

  function fileNameChanged(patch) {
    return patch.newFileName && patch.newFileName !== patch.oldFileName;
  }

  function selectField(index, mine, theirs) {
    if (mine === theirs) {
      return mine;
    } else {
      index.conflict = true;
      return {
        mine: mine,
        theirs: theirs
      };
    }
  }

  function hunkBefore(test, check) {
    return test.oldStart < check.oldStart && test.oldStart + test.oldLines < check.oldStart;
  }

  function cloneHunk(hunk, offset) {
    return {
      oldStart: hunk.oldStart,
      oldLines: hunk.oldLines,
      newStart: hunk.newStart + offset,
      newLines: hunk.newLines,
      lines: hunk.lines
    };
  }

  function mergeLines(hunk, mineOffset, mineLines, theirOffset, theirLines) {
    // This will generally result in a conflicted hunk, but there are cases where the context
    // is the only overlap where we can successfully merge the content here.
    var mine = {
      offset: mineOffset,
      lines: mineLines,
      index: 0
    },
        their = {
      offset: theirOffset,
      lines: theirLines,
      index: 0
    }; // Handle any leading content

    insertLeading(hunk, mine, their);
    insertLeading(hunk, their, mine); // Now in the overlap content. Scan through and select the best changes from each.

    while (mine.index < mine.lines.length && their.index < their.lines.length) {
      var mineCurrent = mine.lines[mine.index],
          theirCurrent = their.lines[their.index];

      if ((mineCurrent[0] === '-' || mineCurrent[0] === '+') && (theirCurrent[0] === '-' || theirCurrent[0] === '+')) {
        // Both modified ...
        mutualChange(hunk, mine, their);
      } else if (mineCurrent[0] === '+' && theirCurrent[0] === ' ') {
        var _hunk$lines;

        // Mine inserted
        (_hunk$lines = hunk.lines).push.apply(_hunk$lines, _toConsumableArray(collectChange(mine)));
      } else if (theirCurrent[0] === '+' && mineCurrent[0] === ' ') {
        var _hunk$lines2;

        // Theirs inserted
        (_hunk$lines2 = hunk.lines).push.apply(_hunk$lines2, _toConsumableArray(collectChange(their)));
      } else if (mineCurrent[0] === '-' && theirCurrent[0] === ' ') {
        // Mine removed or edited
        removal(hunk, mine, their);
      } else if (theirCurrent[0] === '-' && mineCurrent[0] === ' ') {
        // Their removed or edited
        removal(hunk, their, mine, true);
      } else if (mineCurrent === theirCurrent) {
        // Context identity
        hunk.lines.push(mineCurrent);
        mine.index++;
        their.index++;
      } else {
        // Context mismatch
        conflict(hunk, collectChange(mine), collectChange(their));
      }
    } // Now push anything that may be remaining


    insertTrailing(hunk, mine);
    insertTrailing(hunk, their);
    calcLineCount(hunk);
  }

  function mutualChange(hunk, mine, their) {
    var myChanges = collectChange(mine),
        theirChanges = collectChange(their);

    if (allRemoves(myChanges) && allRemoves(theirChanges)) {
      // Special case for remove changes that are supersets of one another
      if (arrayStartsWith(myChanges, theirChanges) && skipRemoveSuperset(their, myChanges, myChanges.length - theirChanges.length)) {
        var _hunk$lines3;

        (_hunk$lines3 = hunk.lines).push.apply(_hunk$lines3, _toConsumableArray(myChanges));

        return;
      } else if (arrayStartsWith(theirChanges, myChanges) && skipRemoveSuperset(mine, theirChanges, theirChanges.length - myChanges.length)) {
        var _hunk$lines4;

        (_hunk$lines4 = hunk.lines).push.apply(_hunk$lines4, _toConsumableArray(theirChanges));

        return;
      }
    } else if (arrayEqual(myChanges, theirChanges)) {
      var _hunk$lines5;

      (_hunk$lines5 = hunk.lines).push.apply(_hunk$lines5, _toConsumableArray(myChanges));

      return;
    }

    conflict(hunk, myChanges, theirChanges);
  }

  function removal(hunk, mine, their, swap) {
    var myChanges = collectChange(mine),
        theirChanges = collectContext(their, myChanges);

    if (theirChanges.merged) {
      var _hunk$lines6;

      (_hunk$lines6 = hunk.lines).push.apply(_hunk$lines6, _toConsumableArray(theirChanges.merged));
    } else {
      conflict(hunk, swap ? theirChanges : myChanges, swap ? myChanges : theirChanges);
    }
  }

  function conflict(hunk, mine, their) {
    hunk.conflict = true;
    hunk.lines.push({
      conflict: true,
      mine: mine,
      theirs: their
    });
  }

  function insertLeading(hunk, insert, their) {
    while (insert.offset < their.offset && insert.index < insert.lines.length) {
      var line = insert.lines[insert.index++];
      hunk.lines.push(line);
      insert.offset++;
    }
  }

  function insertTrailing(hunk, insert) {
    while (insert.index < insert.lines.length) {
      var line = insert.lines[insert.index++];
      hunk.lines.push(line);
    }
  }

  function collectChange(state) {
    var ret = [],
        operation = state.lines[state.index][0];

    while (state.index < state.lines.length) {
      var line = state.lines[state.index]; // Group additions that are immediately after subtractions and treat them as one "atomic" modify change.

      if (operation === '-' && line[0] === '+') {
        operation = '+';
      }

      if (operation === line[0]) {
        ret.push(line);
        state.index++;
      } else {
        break;
      }
    }

    return ret;
  }

  function collectContext(state, matchChanges) {
    var changes = [],
        merged = [],
        matchIndex = 0,
        contextChanges = false,
        conflicted = false;

    while (matchIndex < matchChanges.length && state.index < state.lines.length) {
      var change = state.lines[state.index],
          match = matchChanges[matchIndex]; // Once we've hit our add, then we are done

      if (match[0] === '+') {
        break;
      }

      contextChanges = contextChanges || change[0] !== ' ';
      merged.push(match);
      matchIndex++; // Consume any additions in the other block as a conflict to attempt
      // to pull in the remaining context after this

      if (change[0] === '+') {
        conflicted = true;

        while (change[0] === '+') {
          changes.push(change);
          change = state.lines[++state.index];
        }
      }

      if (match.substr(1) === change.substr(1)) {
        changes.push(change);
        state.index++;
      } else {
        conflicted = true;
      }
    }

    if ((matchChanges[matchIndex] || '')[0] === '+' && contextChanges) {
      conflicted = true;
    }

    if (conflicted) {
      return changes;
    }

    while (matchIndex < matchChanges.length) {
      merged.push(matchChanges[matchIndex++]);
    }

    return {
      merged: merged,
      changes: changes
    };
  }

  function allRemoves(changes) {
    return changes.reduce(function (prev, change) {
      return prev && change[0] === '-';
    }, true);
  }

  function skipRemoveSuperset(state, removeChanges, delta) {
    for (var i = 0; i < delta; i++) {
      var changeContent = removeChanges[removeChanges.length - delta + i].substr(1);

      if (state.lines[state.index + i] !== ' ' + changeContent) {
        return false;
      }
    }

    state.index += delta;
    return true;
  }

  function calcOldNewLineCount(lines) {
    var oldLines = 0;
    var newLines = 0;
    lines.forEach(function (line) {
      if (typeof line !== 'string') {
        var myCount = calcOldNewLineCount(line.mine);
        var theirCount = calcOldNewLineCount(line.theirs);

        if (oldLines !== undefined) {
          if (myCount.oldLines === theirCount.oldLines) {
            oldLines += myCount.oldLines;
          } else {
            oldLines = undefined;
          }
        }

        if (newLines !== undefined) {
          if (myCount.newLines === theirCount.newLines) {
            newLines += myCount.newLines;
          } else {
            newLines = undefined;
          }
        }
      } else {
        if (newLines !== undefined && (line[0] === '+' || line[0] === ' ')) {
          newLines++;
        }

        if (oldLines !== undefined && (line[0] === '-' || line[0] === ' ')) {
          oldLines++;
        }
      }
    });
    return {
      oldLines: oldLines,
      newLines: newLines
    };
  }

  // See: http://code.google.com/p/google-diff-match-patch/wiki/API
  function convertChangesToDMP(changes) {
    var ret = [],
        change,
        operation;

    for (var i = 0; i < changes.length; i++) {
      change = changes[i];

      if (change.added) {
        operation = 1;
      } else if (change.removed) {
        operation = -1;
      } else {
        operation = 0;
      }

      ret.push([operation, change.value]);
    }

    return ret;
  }

  function convertChangesToXML(changes) {
    var ret = [];

    for (var i = 0; i < changes.length; i++) {
      var change = changes[i];

      if (change.added) {
        ret.push('<ins>');
      } else if (change.removed) {
        ret.push('<del>');
      }

      ret.push(escapeHTML(change.value));

      if (change.added) {
        ret.push('</ins>');
      } else if (change.removed) {
        ret.push('</del>');
      }
    }

    return ret.join('');
  }

  function escapeHTML(s) {
    var n = s;
    n = n.replace(/&/g, '&amp;');
    n = n.replace(/</g, '&lt;');
    n = n.replace(/>/g, '&gt;');
    n = n.replace(/"/g, '&quot;');
    return n;
  }

  /* See LICENSE file for terms of use */

  exports.Diff = Diff;
  exports.diffChars = diffChars;
  exports.diffWords = diffWords;
  exports.diffWordsWithSpace = diffWordsWithSpace;
  exports.diffLines = diffLines;
  exports.diffTrimmedLines = diffTrimmedLines;
  exports.diffSentences = diffSentences;
  exports.diffCss = diffCss;
  exports.diffJson = diffJson;
  exports.diffArrays = diffArrays;
  exports.structuredPatch = structuredPatch;
  exports.createTwoFilesPatch = createTwoFilesPatch;
  exports.createPatch = createPatch;
  exports.applyPatch = applyPatch;
  exports.applyPatches = applyPatches;
  exports.parsePatch = parsePatch;
  exports.merge = merge;
  exports.convertChangesToDMP = convertChangesToDMP;
  exports.convertChangesToXML = convertChangesToXML;
  exports.canonicalize = canonicalize;

  Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "xeH2":
/*!********************!*\
  !*** external "$" ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = $;

/***/ }),

/***/ "yLpj":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "zgr2":
/*!*****************************************************************!*\
  !*** ./node_modules/diff2html/lib-esm/line-by-line-renderer.js ***!
  \*****************************************************************/
/*! exports provided: defaultLineByLineRendererConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLineByLineRendererConfig", function() { return defaultLineByLineRendererConfig; });
/* harmony import */ var _rematch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rematch */ "q+jk");
/* harmony import */ var _render_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-utils */ "qNJW");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "X1my");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var defaultLineByLineRendererConfig = __assign(__assign({}, _render_utils__WEBPACK_IMPORTED_MODULE_1__["defaultRenderConfig"]), { renderNothingWhenEmpty: false, matchingMaxComparisons: 2500, maxLineSizeInBlockForComparison: 200 });
var genericTemplatesPath = 'generic';
var baseTemplatesPath = 'line-by-line';
var iconsBaseTemplatesPath = 'icon';
var tagsBaseTemplatesPath = 'tag';
var LineByLineRenderer = (function () {
    function LineByLineRenderer(hoganUtils, config) {
        if (config === void 0) { config = {}; }
        this.hoganUtils = hoganUtils;
        this.config = __assign(__assign({}, defaultLineByLineRendererConfig), config);
    }
    LineByLineRenderer.prototype.render = function (diffFiles) {
        var _this = this;
        var diffsHtml = diffFiles
            .map(function (file) {
            var diffs;
            if (file.blocks.length) {
                diffs = _this.generateFileHtml(file);
            }
            else {
                diffs = _this.generateEmptyDiff();
            }
            return _this.makeFileDiffHtml(file, diffs);
        })
            .join('\n');
        return this.hoganUtils.render(genericTemplatesPath, 'wrapper', { content: diffsHtml });
    };
    LineByLineRenderer.prototype.makeFileDiffHtml = function (file, diffs) {
        if (this.config.renderNothingWhenEmpty && Array.isArray(file.blocks) && file.blocks.length === 0)
            return '';
        var fileDiffTemplate = this.hoganUtils.template(baseTemplatesPath, 'file-diff');
        var filePathTemplate = this.hoganUtils.template(genericTemplatesPath, 'file-path');
        var fileIconTemplate = this.hoganUtils.template(iconsBaseTemplatesPath, 'file');
        var fileTagTemplate = this.hoganUtils.template(tagsBaseTemplatesPath, _render_utils__WEBPACK_IMPORTED_MODULE_1__["getFileIcon"](file));
        return fileDiffTemplate.render({
            file: file,
            fileHtmlId: _render_utils__WEBPACK_IMPORTED_MODULE_1__["getHtmlId"](file),
            diffs: diffs,
            filePath: filePathTemplate.render({
                fileDiffName: _render_utils__WEBPACK_IMPORTED_MODULE_1__["filenameDiff"](file),
            }, {
                fileIcon: fileIconTemplate,
                fileTag: fileTagTemplate,
            }),
        });
    };
    LineByLineRenderer.prototype.generateEmptyDiff = function () {
        return this.hoganUtils.render(genericTemplatesPath, 'empty-diff', {
            contentClass: 'd2h-code-line',
            CSSLineClass: _render_utils__WEBPACK_IMPORTED_MODULE_1__["CSSLineClass"],
        });
    };
    LineByLineRenderer.prototype.generateFileHtml = function (file) {
        var _this = this;
        var matcher = _rematch__WEBPACK_IMPORTED_MODULE_0__["newMatcherFn"](_rematch__WEBPACK_IMPORTED_MODULE_0__["newDistanceFn"](function (e) { return _render_utils__WEBPACK_IMPORTED_MODULE_1__["deconstructLine"](e.content, file.isCombined).content; }));
        return file.blocks
            .map(function (block) {
            var lines = _this.hoganUtils.render(genericTemplatesPath, 'block-header', {
                CSSLineClass: _render_utils__WEBPACK_IMPORTED_MODULE_1__["CSSLineClass"],
                blockHeader: block.header,
                lineClass: 'd2h-code-linenumber',
                contentClass: 'd2h-code-line',
            });
            _this.applyLineGroupping(block).forEach(function (_a) {
                var contextLines = _a[0], oldLines = _a[1], newLines = _a[2];
                if (oldLines.length && newLines.length && !contextLines.length) {
                    _this.applyRematchMatching(oldLines, newLines, matcher).map(function (_a) {
                        var oldLines = _a[0], newLines = _a[1];
                        var _b = _this.processChangedLines(file.isCombined, oldLines, newLines), left = _b.left, right = _b.right;
                        lines += left;
                        lines += right;
                    });
                }
                else if (contextLines.length) {
                    contextLines.forEach(function (line) {
                        var _a = _render_utils__WEBPACK_IMPORTED_MODULE_1__["deconstructLine"](line.content, file.isCombined), prefix = _a.prefix, content = _a.content;
                        lines += _this.generateSingleLineHtml({
                            type: _render_utils__WEBPACK_IMPORTED_MODULE_1__["CSSLineClass"].CONTEXT,
                            prefix: prefix,
                            content: content,
                            oldNumber: line.oldNumber,
                            newNumber: line.newNumber,
                        });
                    });
                }
                else if (oldLines.length || newLines.length) {
                    var _b = _this.processChangedLines(file.isCombined, oldLines, newLines), left = _b.left, right = _b.right;
                    lines += left;
                    lines += right;
                }
                else {
                    console.error('Unknown state reached while processing groups of lines', contextLines, oldLines, newLines);
                }
            });
            return lines;
        })
            .join('\n');
    };
    LineByLineRenderer.prototype.applyLineGroupping = function (block) {
        var blockLinesGroups = [];
        var oldLines = [];
        var newLines = [];
        for (var i = 0; i < block.lines.length; i++) {
            var diffLine = block.lines[i];
            if ((diffLine.type !== _types__WEBPACK_IMPORTED_MODULE_2__["LineType"].INSERT && newLines.length) ||
                (diffLine.type === _types__WEBPACK_IMPORTED_MODULE_2__["LineType"].CONTEXT && oldLines.length > 0)) {
                blockLinesGroups.push([[], oldLines, newLines]);
                oldLines = [];
                newLines = [];
            }
            if (diffLine.type === _types__WEBPACK_IMPORTED_MODULE_2__["LineType"].CONTEXT) {
                blockLinesGroups.push([[diffLine], [], []]);
            }
            else if (diffLine.type === _types__WEBPACK_IMPORTED_MODULE_2__["LineType"].INSERT && oldLines.length === 0) {
                blockLinesGroups.push([[], [], [diffLine]]);
            }
            else if (diffLine.type === _types__WEBPACK_IMPORTED_MODULE_2__["LineType"].INSERT && oldLines.length > 0) {
                newLines.push(diffLine);
            }
            else if (diffLine.type === _types__WEBPACK_IMPORTED_MODULE_2__["LineType"].DELETE) {
                oldLines.push(diffLine);
            }
        }
        if (oldLines.length || newLines.length) {
            blockLinesGroups.push([[], oldLines, newLines]);
            oldLines = [];
            newLines = [];
        }
        return blockLinesGroups;
    };
    LineByLineRenderer.prototype.applyRematchMatching = function (oldLines, newLines, matcher) {
        var comparisons = oldLines.length * newLines.length;
        var maxLineSizeInBlock = Math.max.apply(null, [0].concat(oldLines.concat(newLines).map(function (elem) { return elem.content.length; })));
        var doMatching = comparisons < this.config.matchingMaxComparisons &&
            maxLineSizeInBlock < this.config.maxLineSizeInBlockForComparison &&
            (this.config.matching === 'lines' || this.config.matching === 'words');
        return doMatching ? matcher(oldLines, newLines) : [[oldLines, newLines]];
    };
    LineByLineRenderer.prototype.processChangedLines = function (isCombined, oldLines, newLines) {
        var fileHtml = {
            right: '',
            left: '',
        };
        var maxLinesNumber = Math.max(oldLines.length, newLines.length);
        for (var i = 0; i < maxLinesNumber; i++) {
            var oldLine = oldLines[i];
            var newLine = newLines[i];
            var diff = oldLine !== undefined && newLine !== undefined
                ? _render_utils__WEBPACK_IMPORTED_MODULE_1__["diffHighlight"](oldLine.content, newLine.content, isCombined, this.config)
                : undefined;
            var preparedOldLine = oldLine !== undefined && oldLine.oldNumber !== undefined
                ? __assign(__assign({}, (diff !== undefined
                    ? {
                        prefix: diff.oldLine.prefix,
                        content: diff.oldLine.content,
                        type: _render_utils__WEBPACK_IMPORTED_MODULE_1__["CSSLineClass"].DELETE_CHANGES,
                    }
                    : __assign(__assign({}, _render_utils__WEBPACK_IMPORTED_MODULE_1__["deconstructLine"](oldLine.content, isCombined)), { type: _render_utils__WEBPACK_IMPORTED_MODULE_1__["toCSSClass"](oldLine.type) }))), { oldNumber: oldLine.oldNumber, newNumber: oldLine.newNumber }) : undefined;
            var preparedNewLine = newLine !== undefined && newLine.newNumber !== undefined
                ? __assign(__assign({}, (diff !== undefined
                    ? {
                        prefix: diff.newLine.prefix,
                        content: diff.newLine.content,
                        type: _render_utils__WEBPACK_IMPORTED_MODULE_1__["CSSLineClass"].INSERT_CHANGES,
                    }
                    : __assign(__assign({}, _render_utils__WEBPACK_IMPORTED_MODULE_1__["deconstructLine"](newLine.content, isCombined)), { type: _render_utils__WEBPACK_IMPORTED_MODULE_1__["toCSSClass"](newLine.type) }))), { oldNumber: newLine.oldNumber, newNumber: newLine.newNumber }) : undefined;
            var _a = this.generateLineHtml(preparedOldLine, preparedNewLine), left = _a.left, right = _a.right;
            fileHtml.left += left;
            fileHtml.right += right;
        }
        return fileHtml;
    };
    LineByLineRenderer.prototype.generateLineHtml = function (oldLine, newLine) {
        return {
            left: this.generateSingleLineHtml(oldLine),
            right: this.generateSingleLineHtml(newLine),
        };
    };
    LineByLineRenderer.prototype.generateSingleLineHtml = function (line) {
        if (line === undefined)
            return '';
        var lineNumberHtml = this.hoganUtils.render(baseTemplatesPath, 'numbers', {
            oldNumber: line.oldNumber || '',
            newNumber: line.newNumber || '',
        });
        return this.hoganUtils.render(genericTemplatesPath, 'line', {
            type: line.type,
            lineClass: 'd2h-code-linenumber',
            contentClass: 'd2h-code-line',
            prefix: line.prefix === ' ' ? '&nbsp;' : line.prefix,
            content: line.content,
            lineNumber: lineNumberHtml,
        });
    };
    return LineByLineRenderer;
}());
/* harmony default export */ __webpack_exports__["default"] = (LineByLineRenderer);
//# sourceMappingURL=line-by-line-renderer.js.map

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RpZmYyaHRtbC9saWItZXNtL2hvZ2FuanMtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RpZmZsaWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXNzZXJ0L2Fzc2VydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGlmZjJodG1sL2xpYi1lc20vZmlsZS1saXN0LXJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oZWFwL2xpYi9oZWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oZWFwL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dGlsL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dGlsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hvZ2FuLmpzL2xpYi9jb21waWxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGlmZjJodG1sL2xpYi1lc20vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hvZ2FuLmpzL2xpYi9ob2dhbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGlmZjJodG1sL2xpYi1lc20vdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hvZ2FuLmpzL2xpYi90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGlmZjJodG1sL2xpYi1lc20vZGlmZjJodG1sLXRlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kaWZmMmh0bWwvbGliLWVzbS9yZW1hdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kaWZmMmh0bWwvbGliLWVzbS9yZW5kZXItdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RpZmYyaHRtbC9saWItZXNtL3NpZGUtYnktc2lkZS1yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGlmZmxpYi9saWIvZGlmZmxpYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGlmZjJodG1sL2xpYi1lc20vZGlmZi1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RpZmYyaHRtbC9saWItZXNtL2RpZmYyaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGlmZi9kaXN0L2RpZmYuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiJFwiIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RpZmYyaHRtbC9saWItZXNtL2xpbmUtYnktbGluZS1yZW5kZXJlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0M7QUFDdUI7QUFDekQ7QUFDQTtBQUNBLDZFQUE2RSw4REFBOEQ7QUFDM0k7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdEQUFhLGtCQUFrQixrQkFBa0I7QUFDcEYsdUNBQXVDLDhCQUE4QjtBQUNyRSxTQUFTLElBQUk7QUFDYixpRUFBaUUsRUFBRSxxRUFBZ0I7QUFDbkY7QUFDQTtBQUNBLGVBQWUsZ0RBQWEsa0JBQWtCLGtCQUFrQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2MsMkVBQVksRUFBQztBQUM1Qix5Qzs7Ozs7Ozs7Ozs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDTEEsaUJBQWlCLG1CQUFPLENBQUMsMkJBQWU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7O0FDdkx0Qyw4Q0FBYTs7QUFFYixtQkFBbUIsbUJBQU8sQ0FBQywyQkFBZTs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsbUJBQU8sQ0FBQyxtQkFBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGdEQUFnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILHNCQUFzQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0Msb0JBQW9COztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDemZBO0FBQUE7QUFBQTtBQUE4QztBQUM5QztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdURBQXFCO0FBQzdDO0FBQ0E7QUFDQSxzQkFBc0IsMERBQXdCO0FBQzlDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsa0VBQWtFLHlEQUF1QjtBQUN6RixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOEM7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELG1DQUFtQywwQkFBMEIsb0JBQW9CO0FBQ3ZJO0FBQ0EsS0FBSztBQUNMO0FBQ0EscUNBQXFDLFdBQVc7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9D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bEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsS0FBSzs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixtQkFBTyxDQUFDLGdDQUFvQjs7QUFFL0M7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLHNCQUFVOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsWUFBWTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0NBQWtDO0FBQzFEO0FBQ0E7QUFDQSx5Q0FBeUMsV0FBVztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELFdBQVc7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFdBQVc7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsV0FBVztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxXQUFXO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsWUFBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsV0FBVztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFlBQVk7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O0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsV0FBVztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsWUFBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsWUFBWTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxZQUFZO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxZQUFZO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHdDQUF3QztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxXQUFXO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsWUFBWTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw0Q0FBNEMsWUFBWTtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsWUFBWTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFlBQVk7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNENBQTRDLFlBQVk7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELFlBQVk7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qzs7QUFFN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0I7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QztBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFdBQVc7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzc4Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBc0IsU0FBSSxJQUFJLFNBQUk7QUFDbEMsaURBQWlELFFBQVE7QUFDekQsd0NBQXdDLFFBQVE7QUFDaEQsd0RBQXdELFFBQVE7QUFDaEU7QUFDQTtBQUNBO0FBQ21DO0FBQ087QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCw2Q0FBNkMsRUFBRTtBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDhEQUFlO0FBQzFDO0FBQ0E7QUFDQSxxREFBcUQsa0NBQWtDLEVBQUU7QUFDekY7QUFDQSw2Q0FBNkMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw0QkFBNEIsYUFBYTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLEVBQUU7QUFDbkMsaUNBQWlDLEVBQUU7QUFDbkMsa0RBQWtELEVBQUU7QUFDcEQsMENBQTBDLEVBQUU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELEVBQUU7QUFDekQ7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRTtBQUN2RCw4Q0FBOEMsRUFBRTtBQUNoRCxzREFBc0QsRUFBRSxNQUFNLEVBQUU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwrQ0FBUTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLCtDQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLCtDQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLDZCQUE2QjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLGtDQUFrQztBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7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QTtBQUNBLENBQUM7QUFDYyxpRkFBa0IsRUFBQztBQUNsQyxpRCIsImZpbGUiOiJiZ20td2lraS1yZXYtZGlmZi5wcm9kLnVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCJlNld1XCIpO1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCAqIGFzIEhvZ2FuIGZyb20gJ2hvZ2FuLmpzJztcbmltcG9ydCB7IGRlZmF1bHRUZW1wbGF0ZXMgfSBmcm9tICcuL2RpZmYyaHRtbC10ZW1wbGF0ZXMnO1xudmFyIEhvZ2FuSnNVdGlscyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSG9nYW5Kc1V0aWxzKF9hKSB7XG4gICAgICAgIHZhciBfYiA9IF9hLmNvbXBpbGVkVGVtcGxhdGVzLCBjb21waWxlZFRlbXBsYXRlcyA9IF9iID09PSB2b2lkIDAgPyB7fSA6IF9iLCBfYyA9IF9hLnJhd1RlbXBsYXRlcywgcmF3VGVtcGxhdGVzID0gX2MgPT09IHZvaWQgMCA/IHt9IDogX2M7XG4gICAgICAgIHZhciBjb21waWxlZFJhd1RlbXBsYXRlcyA9IE9iamVjdC5lbnRyaWVzKHJhd1RlbXBsYXRlcykucmVkdWNlKGZ1bmN0aW9uIChwcmV2aW91c1RlbXBsYXRlcywgX2EpIHtcbiAgICAgICAgICAgIHZhciBfYjtcbiAgICAgICAgICAgIHZhciBuYW1lID0gX2FbMF0sIHRlbXBsYXRlU3RyaW5nID0gX2FbMV07XG4gICAgICAgICAgICB2YXIgY29tcGlsZWRUZW1wbGF0ZSA9IEhvZ2FuLmNvbXBpbGUodGVtcGxhdGVTdHJpbmcsIHsgYXNTdHJpbmc6IGZhbHNlIH0pO1xuICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcmV2aW91c1RlbXBsYXRlcyksIChfYiA9IHt9LCBfYltuYW1lXSA9IGNvbXBpbGVkVGVtcGxhdGUsIF9iKSk7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgdGhpcy5wcmVDb21waWxlZFRlbXBsYXRlcyA9IF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHt9LCBkZWZhdWx0VGVtcGxhdGVzKSwgY29tcGlsZWRUZW1wbGF0ZXMpLCBjb21waWxlZFJhd1RlbXBsYXRlcyk7XG4gICAgfVxuICAgIEhvZ2FuSnNVdGlscy5jb21waWxlID0gZnVuY3Rpb24gKHRlbXBsYXRlU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBIb2dhbi5jb21waWxlKHRlbXBsYXRlU3RyaW5nLCB7IGFzU3RyaW5nOiBmYWxzZSB9KTtcbiAgICB9O1xuICAgIEhvZ2FuSnNVdGlscy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgdmlldywgcGFyYW1zLCBwYXJ0aWFscywgaW5kZW50KSB7XG4gICAgICAgIHZhciB0ZW1wbGF0ZUtleSA9IHRoaXMudGVtcGxhdGVLZXkobmFtZXNwYWNlLCB2aWV3KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMucHJlQ29tcGlsZWRUZW1wbGF0ZXNbdGVtcGxhdGVLZXldO1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlLnJlbmRlcihwYXJhbXMsIHBhcnRpYWxzLCBpbmRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCB0ZW1wbGF0ZSB0byByZW5kZXIgJ1wiICsgdGVtcGxhdGVLZXkgKyBcIidcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEhvZ2FuSnNVdGlscy5wcm90b3R5cGUudGVtcGxhdGUgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCB2aWV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZUNvbXBpbGVkVGVtcGxhdGVzW3RoaXMudGVtcGxhdGVLZXkobmFtZXNwYWNlLCB2aWV3KV07XG4gICAgfTtcbiAgICBIb2dhbkpzVXRpbHMucHJvdG90eXBlLnRlbXBsYXRlS2V5ID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgdmlldykge1xuICAgICAgICByZXR1cm4gbmFtZXNwYWNlICsgXCItXCIgKyB2aWV3O1xuICAgIH07XG4gICAgcmV0dXJuIEhvZ2FuSnNVdGlscztcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBIb2dhbkpzVXRpbHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob2dhbmpzLXV0aWxzLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2RpZmZsaWInKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIGNvbXBhcmUgYW5kIGlzQnVmZmVyIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvYmxvYi82ODBlOWU1ZTQ4OGYyMmFhYzI3NTk5YTU3ZGM4NDRhNjMxNTkyOGRkL2luZGV4LmpzXG4vLyBvcmlnaW5hbCBub3RpY2U6XG5cbi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgdmFyIHggPSBhLmxlbmd0aDtcbiAgdmFyIHkgPSBiLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXTtcbiAgICAgIHkgPSBiW2ldO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmICh5IDwgeCkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufVxuZnVuY3Rpb24gaXNCdWZmZXIoYikge1xuICBpZiAoZ2xvYmFsLkJ1ZmZlciAmJiB0eXBlb2YgZ2xvYmFsLkJ1ZmZlci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBnbG9iYWwuQnVmZmVyLmlzQnVmZmVyKGIpO1xuICB9XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpO1xufVxuXG4vLyBiYXNlZCBvbiBub2RlIGFzc2VydCwgb3JpZ2luYWwgbm90aWNlOlxuLy8gTkI6IFRoZSBVUkwgdG8gdGhlIENvbW1vbkpTIHNwZWMgaXMga2VwdCBqdXN0IGZvciB0cmFkaXRpb24uXG4vLyAgICAgbm9kZS1hc3NlcnQgaGFzIGV2b2x2ZWQgYSBsb3Qgc2luY2UgdGhlbiwgYm90aCBpbiBBUEkgYW5kIGJlaGF2aW9yLlxuXG4vLyBodHRwOi8vd2lraS5jb21tb25qcy5vcmcvd2lraS9Vbml0X1Rlc3RpbmcvMS4wXG4vL1xuLy8gVEhJUyBJUyBOT1QgVEVTVEVEIE5PUiBMSUtFTFkgVE8gV09SSyBPVVRTSURFIFY4IVxuLy9cbi8vIE9yaWdpbmFsbHkgZnJvbSBuYXJ3aGFsLmpzIChodHRwOi8vbmFyd2hhbGpzLm9yZylcbi8vIENvcHlyaWdodCAoYykgMjAwOSBUaG9tYXMgUm9iaW5zb24gPDI4MG5vcnRoLmNvbT5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAnU29mdHdhcmUnKSwgdG9cbi8vIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4vLyByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Jcbi8vIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgJ0FTIElTJywgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4vLyBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OXG4vLyBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsLycpO1xudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcFNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGZ1bmN0aW9uc0hhdmVOYW1lcyA9IChmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmb28oKSB7fS5uYW1lID09PSAnZm9vJztcbn0oKSk7XG5mdW5jdGlvbiBwVG9TdHJpbmcgKG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaik7XG59XG5mdW5jdGlvbiBpc1ZpZXcoYXJyYnVmKSB7XG4gIGlmIChpc0J1ZmZlcihhcnJidWYpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0eXBlb2YgZ2xvYmFsLkFycmF5QnVmZmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIEFycmF5QnVmZmVyLmlzVmlldyhhcnJidWYpO1xuICB9XG4gIGlmICghYXJyYnVmKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChhcnJidWYgaW5zdGFuY2VvZiBEYXRhVmlldykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChhcnJidWYuYnVmZmVyICYmIGFycmJ1Zi5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbi8vIDEuIFRoZSBhc3NlcnQgbW9kdWxlIHByb3ZpZGVzIGZ1bmN0aW9ucyB0aGF0IHRocm93XG4vLyBBc3NlcnRpb25FcnJvcidzIHdoZW4gcGFydGljdWxhciBjb25kaXRpb25zIGFyZSBub3QgbWV0LiBUaGVcbi8vIGFzc2VydCBtb2R1bGUgbXVzdCBjb25mb3JtIHRvIHRoZSBmb2xsb3dpbmcgaW50ZXJmYWNlLlxuXG52YXIgYXNzZXJ0ID0gbW9kdWxlLmV4cG9ydHMgPSBvaztcblxuLy8gMi4gVGhlIEFzc2VydGlvbkVycm9yIGlzIGRlZmluZWQgaW4gYXNzZXJ0LlxuLy8gbmV3IGFzc2VydC5Bc3NlcnRpb25FcnJvcih7IG1lc3NhZ2U6IG1lc3NhZ2UsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBhY3R1YWwsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IGV4cGVjdGVkIH0pXG5cbnZhciByZWdleCA9IC9cXHMqZnVuY3Rpb25cXHMrKFteXFwoXFxzXSopXFxzKi87XG4vLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vbGpoYXJiL2Z1bmN0aW9uLnByb3RvdHlwZS5uYW1lL2Jsb2IvYWRlZWVlYzhiZmNjNjA2OGIxODdkN2Q5ZmIzZDViYjFkM2EzMDg5OS9pbXBsZW1lbnRhdGlvbi5qc1xuZnVuY3Rpb24gZ2V0TmFtZShmdW5jKSB7XG4gIGlmICghdXRpbC5pc0Z1bmN0aW9uKGZ1bmMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChmdW5jdGlvbnNIYXZlTmFtZXMpIHtcbiAgICByZXR1cm4gZnVuYy5uYW1lO1xuICB9XG4gIHZhciBzdHIgPSBmdW5jLnRvU3RyaW5nKCk7XG4gIHZhciBtYXRjaCA9IHN0ci5tYXRjaChyZWdleCk7XG4gIHJldHVybiBtYXRjaCAmJiBtYXRjaFsxXTtcbn1cbmFzc2VydC5Bc3NlcnRpb25FcnJvciA9IGZ1bmN0aW9uIEFzc2VydGlvbkVycm9yKG9wdGlvbnMpIHtcbiAgdGhpcy5uYW1lID0gJ0Fzc2VydGlvbkVycm9yJztcbiAgdGhpcy5hY3R1YWwgPSBvcHRpb25zLmFjdHVhbDtcbiAgdGhpcy5leHBlY3RlZCA9IG9wdGlvbnMuZXhwZWN0ZWQ7XG4gIHRoaXMub3BlcmF0b3IgPSBvcHRpb25zLm9wZXJhdG9yO1xuICBpZiAob3B0aW9ucy5tZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gb3B0aW9ucy5tZXNzYWdlO1xuICAgIHRoaXMuZ2VuZXJhdGVkTWVzc2FnZSA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHRoaXMubWVzc2FnZSA9IGdldE1lc3NhZ2UodGhpcyk7XG4gICAgdGhpcy5nZW5lcmF0ZWRNZXNzYWdlID0gdHJ1ZTtcbiAgfVxuICB2YXIgc3RhY2tTdGFydEZ1bmN0aW9uID0gb3B0aW9ucy5zdGFja1N0YXJ0RnVuY3Rpb24gfHwgZmFpbDtcbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgc3RhY2tTdGFydEZ1bmN0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBub24gdjggYnJvd3NlcnMgc28gd2UgY2FuIGhhdmUgYSBzdGFja3RyYWNlXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcigpO1xuICAgIGlmIChlcnIuc3RhY2spIHtcbiAgICAgIHZhciBvdXQgPSBlcnIuc3RhY2s7XG5cbiAgICAgIC8vIHRyeSB0byBzdHJpcCB1c2VsZXNzIGZyYW1lc1xuICAgICAgdmFyIGZuX25hbWUgPSBnZXROYW1lKHN0YWNrU3RhcnRGdW5jdGlvbik7XG4gICAgICB2YXIgaWR4ID0gb3V0LmluZGV4T2YoJ1xcbicgKyBmbl9uYW1lKTtcbiAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAvLyBvbmNlIHdlIGhhdmUgbG9jYXRlZCB0aGUgZnVuY3Rpb24gZnJhbWVcbiAgICAgICAgLy8gd2UgbmVlZCB0byBzdHJpcCBvdXQgZXZlcnl0aGluZyBiZWZvcmUgaXQgKGFuZCBpdHMgbGluZSlcbiAgICAgICAgdmFyIG5leHRfbGluZSA9IG91dC5pbmRleE9mKCdcXG4nLCBpZHggKyAxKTtcbiAgICAgICAgb3V0ID0gb3V0LnN1YnN0cmluZyhuZXh0X2xpbmUgKyAxKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGFjayA9IG91dDtcbiAgICB9XG4gIH1cbn07XG5cbi8vIGFzc2VydC5Bc3NlcnRpb25FcnJvciBpbnN0YW5jZW9mIEVycm9yXG51dGlsLmluaGVyaXRzKGFzc2VydC5Bc3NlcnRpb25FcnJvciwgRXJyb3IpO1xuXG5mdW5jdGlvbiB0cnVuY2F0ZShzLCBuKSB7XG4gIGlmICh0eXBlb2YgcyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcy5sZW5ndGggPCBuID8gcyA6IHMuc2xpY2UoMCwgbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHM7XG4gIH1cbn1cbmZ1bmN0aW9uIGluc3BlY3Qoc29tZXRoaW5nKSB7XG4gIGlmIChmdW5jdGlvbnNIYXZlTmFtZXMgfHwgIXV0aWwuaXNGdW5jdGlvbihzb21ldGhpbmcpKSB7XG4gICAgcmV0dXJuIHV0aWwuaW5zcGVjdChzb21ldGhpbmcpO1xuICB9XG4gIHZhciByYXduYW1lID0gZ2V0TmFtZShzb21ldGhpbmcpO1xuICB2YXIgbmFtZSA9IHJhd25hbWUgPyAnOiAnICsgcmF3bmFtZSA6ICcnO1xuICByZXR1cm4gJ1tGdW5jdGlvbicgKyAgbmFtZSArICddJztcbn1cbmZ1bmN0aW9uIGdldE1lc3NhZ2Uoc2VsZikge1xuICByZXR1cm4gdHJ1bmNhdGUoaW5zcGVjdChzZWxmLmFjdHVhbCksIDEyOCkgKyAnICcgK1xuICAgICAgICAgc2VsZi5vcGVyYXRvciArICcgJyArXG4gICAgICAgICB0cnVuY2F0ZShpbnNwZWN0KHNlbGYuZXhwZWN0ZWQpLCAxMjgpO1xufVxuXG4vLyBBdCBwcmVzZW50IG9ubHkgdGhlIHRocmVlIGtleXMgbWVudGlvbmVkIGFib3ZlIGFyZSB1c2VkIGFuZFxuLy8gdW5kZXJzdG9vZCBieSB0aGUgc3BlYy4gSW1wbGVtZW50YXRpb25zIG9yIHN1YiBtb2R1bGVzIGNhbiBwYXNzXG4vLyBvdGhlciBrZXlzIHRvIHRoZSBBc3NlcnRpb25FcnJvcidzIGNvbnN0cnVjdG9yIC0gdGhleSB3aWxsIGJlXG4vLyBpZ25vcmVkLlxuXG4vLyAzLiBBbGwgb2YgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnMgbXVzdCB0aHJvdyBhbiBBc3NlcnRpb25FcnJvclxuLy8gd2hlbiBhIGNvcnJlc3BvbmRpbmcgY29uZGl0aW9uIGlzIG5vdCBtZXQsIHdpdGggYSBtZXNzYWdlIHRoYXRcbi8vIG1heSBiZSB1bmRlZmluZWQgaWYgbm90IHByb3ZpZGVkLiAgQWxsIGFzc2VydGlvbiBtZXRob2RzIHByb3ZpZGVcbi8vIGJvdGggdGhlIGFjdHVhbCBhbmQgZXhwZWN0ZWQgdmFsdWVzIHRvIHRoZSBhc3NlcnRpb24gZXJyb3IgZm9yXG4vLyBkaXNwbGF5IHB1cnBvc2VzLlxuXG5mdW5jdGlvbiBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsIG9wZXJhdG9yLCBzdGFja1N0YXJ0RnVuY3Rpb24pIHtcbiAgdGhyb3cgbmV3IGFzc2VydC5Bc3NlcnRpb25FcnJvcih7XG4gICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICBleHBlY3RlZDogZXhwZWN0ZWQsXG4gICAgb3BlcmF0b3I6IG9wZXJhdG9yLFxuICAgIHN0YWNrU3RhcnRGdW5jdGlvbjogc3RhY2tTdGFydEZ1bmN0aW9uXG4gIH0pO1xufVxuXG4vLyBFWFRFTlNJT04hIGFsbG93cyBmb3Igd2VsbCBiZWhhdmVkIGVycm9ycyBkZWZpbmVkIGVsc2V3aGVyZS5cbmFzc2VydC5mYWlsID0gZmFpbDtcblxuLy8gNC4gUHVyZSBhc3NlcnRpb24gdGVzdHMgd2hldGhlciBhIHZhbHVlIGlzIHRydXRoeSwgYXMgZGV0ZXJtaW5lZFxuLy8gYnkgISFndWFyZC5cbi8vIGFzc2VydC5vayhndWFyZCwgbWVzc2FnZV9vcHQpO1xuLy8gVGhpcyBzdGF0ZW1lbnQgaXMgZXF1aXZhbGVudCB0byBhc3NlcnQuZXF1YWwodHJ1ZSwgISFndWFyZCxcbi8vIG1lc3NhZ2Vfb3B0KTsuIFRvIHRlc3Qgc3RyaWN0bHkgZm9yIHRoZSB2YWx1ZSB0cnVlLCB1c2Vcbi8vIGFzc2VydC5zdHJpY3RFcXVhbCh0cnVlLCBndWFyZCwgbWVzc2FnZV9vcHQpOy5cblxuZnVuY3Rpb24gb2sodmFsdWUsIG1lc3NhZ2UpIHtcbiAgaWYgKCF2YWx1ZSkgZmFpbCh2YWx1ZSwgdHJ1ZSwgbWVzc2FnZSwgJz09JywgYXNzZXJ0Lm9rKTtcbn1cbmFzc2VydC5vayA9IG9rO1xuXG4vLyA1LiBUaGUgZXF1YWxpdHkgYXNzZXJ0aW9uIHRlc3RzIHNoYWxsb3csIGNvZXJjaXZlIGVxdWFsaXR5IHdpdGhcbi8vID09LlxuLy8gYXNzZXJ0LmVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0LmVxdWFsID0gZnVuY3Rpb24gZXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYWN0dWFsICE9IGV4cGVjdGVkKSBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICc9PScsIGFzc2VydC5lcXVhbCk7XG59O1xuXG4vLyA2LiBUaGUgbm9uLWVxdWFsaXR5IGFzc2VydGlvbiB0ZXN0cyBmb3Igd2hldGhlciB0d28gb2JqZWN0cyBhcmUgbm90IGVxdWFsXG4vLyB3aXRoICE9IGFzc2VydC5ub3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC5ub3RFcXVhbCA9IGZ1bmN0aW9uIG5vdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFjdHVhbCA9PSBleHBlY3RlZCkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJyE9JywgYXNzZXJ0Lm5vdEVxdWFsKTtcbiAgfVxufTtcblxuLy8gNy4gVGhlIGVxdWl2YWxlbmNlIGFzc2VydGlvbiB0ZXN0cyBhIGRlZXAgZXF1YWxpdHkgcmVsYXRpb24uXG4vLyBhc3NlcnQuZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0LmRlZXBFcXVhbCA9IGZ1bmN0aW9uIGRlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmICghX2RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBmYWxzZSkpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICdkZWVwRXF1YWwnLCBhc3NlcnQuZGVlcEVxdWFsKTtcbiAgfVxufTtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCA9IGZ1bmN0aW9uIGRlZXBTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmICghX2RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCB0cnVlKSkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJ2RlZXBTdHJpY3RFcXVhbCcsIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBfZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIHN0cmljdCwgbWVtb3MpIHtcbiAgLy8gNy4xLiBBbGwgaWRlbnRpY2FsIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgYXMgZGV0ZXJtaW5lZCBieSA9PT0uXG4gIGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoaXNCdWZmZXIoYWN0dWFsKSAmJiBpc0J1ZmZlcihleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gY29tcGFyZShhY3R1YWwsIGV4cGVjdGVkKSA9PT0gMDtcblxuICAvLyA3LjIuIElmIHRoZSBleHBlY3RlZCB2YWx1ZSBpcyBhIERhdGUgb2JqZWN0LCB0aGUgYWN0dWFsIHZhbHVlIGlzXG4gIC8vIGVxdWl2YWxlbnQgaWYgaXQgaXMgYWxzbyBhIERhdGUgb2JqZWN0IHRoYXQgcmVmZXJzIHRvIHRoZSBzYW1lIHRpbWUuXG4gIH0gZWxzZSBpZiAodXRpbC5pc0RhdGUoYWN0dWFsKSAmJiB1dGlsLmlzRGF0ZShleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gYWN0dWFsLmdldFRpbWUoKSA9PT0gZXhwZWN0ZWQuZ2V0VGltZSgpO1xuXG4gIC8vIDcuMyBJZiB0aGUgZXhwZWN0ZWQgdmFsdWUgaXMgYSBSZWdFeHAgb2JqZWN0LCB0aGUgYWN0dWFsIHZhbHVlIGlzXG4gIC8vIGVxdWl2YWxlbnQgaWYgaXQgaXMgYWxzbyBhIFJlZ0V4cCBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzb3VyY2UgYW5kXG4gIC8vIHByb3BlcnRpZXMgKGBnbG9iYWxgLCBgbXVsdGlsaW5lYCwgYGxhc3RJbmRleGAsIGBpZ25vcmVDYXNlYCkuXG4gIH0gZWxzZSBpZiAodXRpbC5pc1JlZ0V4cChhY3R1YWwpICYmIHV0aWwuaXNSZWdFeHAoZXhwZWN0ZWQpKSB7XG4gICAgcmV0dXJuIGFjdHVhbC5zb3VyY2UgPT09IGV4cGVjdGVkLnNvdXJjZSAmJlxuICAgICAgICAgICBhY3R1YWwuZ2xvYmFsID09PSBleHBlY3RlZC5nbG9iYWwgJiZcbiAgICAgICAgICAgYWN0dWFsLm11bHRpbGluZSA9PT0gZXhwZWN0ZWQubXVsdGlsaW5lICYmXG4gICAgICAgICAgIGFjdHVhbC5sYXN0SW5kZXggPT09IGV4cGVjdGVkLmxhc3RJbmRleCAmJlxuICAgICAgICAgICBhY3R1YWwuaWdub3JlQ2FzZSA9PT0gZXhwZWN0ZWQuaWdub3JlQ2FzZTtcblxuICAvLyA3LjQuIE90aGVyIHBhaXJzIHRoYXQgZG8gbm90IGJvdGggcGFzcyB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcsXG4gIC8vIGVxdWl2YWxlbmNlIGlzIGRldGVybWluZWQgYnkgPT0uXG4gIH0gZWxzZSBpZiAoKGFjdHVhbCA9PT0gbnVsbCB8fCB0eXBlb2YgYWN0dWFsICE9PSAnb2JqZWN0JykgJiZcbiAgICAgICAgICAgICAoZXhwZWN0ZWQgPT09IG51bGwgfHwgdHlwZW9mIGV4cGVjdGVkICE9PSAnb2JqZWN0JykpIHtcbiAgICByZXR1cm4gc3RyaWN0ID8gYWN0dWFsID09PSBleHBlY3RlZCA6IGFjdHVhbCA9PSBleHBlY3RlZDtcblxuICAvLyBJZiBib3RoIHZhbHVlcyBhcmUgaW5zdGFuY2VzIG9mIHR5cGVkIGFycmF5cywgd3JhcCB0aGVpciB1bmRlcmx5aW5nXG4gIC8vIEFycmF5QnVmZmVycyBpbiBhIEJ1ZmZlciBlYWNoIHRvIGluY3JlYXNlIHBlcmZvcm1hbmNlXG4gIC8vIFRoaXMgb3B0aW1pemF0aW9uIHJlcXVpcmVzIHRoZSBhcnJheXMgdG8gaGF2ZSB0aGUgc2FtZSB0eXBlIGFzIGNoZWNrZWQgYnlcbiAgLy8gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyAoYWthIHBUb1N0cmluZykuIE5ldmVyIHBlcmZvcm0gYmluYXJ5XG4gIC8vIGNvbXBhcmlzb25zIGZvciBGbG9hdCpBcnJheXMsIHRob3VnaCwgc2luY2UgZS5nLiArMCA9PT0gLTAgYnV0IHRoZWlyXG4gIC8vIGJpdCBwYXR0ZXJucyBhcmUgbm90IGlkZW50aWNhbC5cbiAgfSBlbHNlIGlmIChpc1ZpZXcoYWN0dWFsKSAmJiBpc1ZpZXcoZXhwZWN0ZWQpICYmXG4gICAgICAgICAgICAgcFRvU3RyaW5nKGFjdHVhbCkgPT09IHBUb1N0cmluZyhleHBlY3RlZCkgJiZcbiAgICAgICAgICAgICAhKGFjdHVhbCBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSB8fFxuICAgICAgICAgICAgICAgYWN0dWFsIGluc3RhbmNlb2YgRmxvYXQ2NEFycmF5KSkge1xuICAgIHJldHVybiBjb21wYXJlKG5ldyBVaW50OEFycmF5KGFjdHVhbC5idWZmZXIpLFxuICAgICAgICAgICAgICAgICAgIG5ldyBVaW50OEFycmF5KGV4cGVjdGVkLmJ1ZmZlcikpID09PSAwO1xuXG4gIC8vIDcuNSBGb3IgYWxsIG90aGVyIE9iamVjdCBwYWlycywgaW5jbHVkaW5nIEFycmF5IG9iamVjdHMsIGVxdWl2YWxlbmNlIGlzXG4gIC8vIGRldGVybWluZWQgYnkgaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChhcyB2ZXJpZmllZFxuICAvLyB3aXRoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCksIHRoZSBzYW1lIHNldCBvZiBrZXlzXG4gIC8vIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLCBlcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnlcbiAgLy8gY29ycmVzcG9uZGluZyBrZXksIGFuZCBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuIE5vdGU6IHRoaXNcbiAgLy8gYWNjb3VudHMgZm9yIGJvdGggbmFtZWQgYW5kIGluZGV4ZWQgcHJvcGVydGllcyBvbiBBcnJheXMuXG4gIH0gZWxzZSBpZiAoaXNCdWZmZXIoYWN0dWFsKSAhPT0gaXNCdWZmZXIoZXhwZWN0ZWQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIG1lbW9zID0gbWVtb3MgfHwge2FjdHVhbDogW10sIGV4cGVjdGVkOiBbXX07XG5cbiAgICB2YXIgYWN0dWFsSW5kZXggPSBtZW1vcy5hY3R1YWwuaW5kZXhPZihhY3R1YWwpO1xuICAgIGlmIChhY3R1YWxJbmRleCAhPT0gLTEpIHtcbiAgICAgIGlmIChhY3R1YWxJbmRleCA9PT0gbWVtb3MuZXhwZWN0ZWQuaW5kZXhPZihleHBlY3RlZCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb3MuYWN0dWFsLnB1c2goYWN0dWFsKTtcbiAgICBtZW1vcy5leHBlY3RlZC5wdXNoKGV4cGVjdGVkKTtcblxuICAgIHJldHVybiBvYmpFcXVpdihhY3R1YWwsIGV4cGVjdGVkLCBzdHJpY3QsIG1lbW9zKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyhvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpID09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xufVxuXG5mdW5jdGlvbiBvYmpFcXVpdihhLCBiLCBzdHJpY3QsIGFjdHVhbFZpc2l0ZWRPYmplY3RzKSB7XG4gIGlmIChhID09PSBudWxsIHx8IGEgPT09IHVuZGVmaW5lZCB8fCBiID09PSBudWxsIHx8IGIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG4gIC8vIGlmIG9uZSBpcyBhIHByaW1pdGl2ZSwgdGhlIG90aGVyIG11c3QgYmUgc2FtZVxuICBpZiAodXRpbC5pc1ByaW1pdGl2ZShhKSB8fCB1dGlsLmlzUHJpbWl0aXZlKGIpKVxuICAgIHJldHVybiBhID09PSBiO1xuICBpZiAoc3RyaWN0ICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihhKSAhPT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGIpKVxuICAgIHJldHVybiBmYWxzZTtcbiAgdmFyIGFJc0FyZ3MgPSBpc0FyZ3VtZW50cyhhKTtcbiAgdmFyIGJJc0FyZ3MgPSBpc0FyZ3VtZW50cyhiKTtcbiAgaWYgKChhSXNBcmdzICYmICFiSXNBcmdzKSB8fCAoIWFJc0FyZ3MgJiYgYklzQXJncykpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBpZiAoYUlzQXJncykge1xuICAgIGEgPSBwU2xpY2UuY2FsbChhKTtcbiAgICBiID0gcFNsaWNlLmNhbGwoYik7XG4gICAgcmV0dXJuIF9kZWVwRXF1YWwoYSwgYiwgc3RyaWN0KTtcbiAgfVxuICB2YXIga2EgPSBvYmplY3RLZXlzKGEpO1xuICB2YXIga2IgPSBvYmplY3RLZXlzKGIpO1xuICB2YXIga2V5LCBpO1xuICAvLyBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGtleXMgaW5jb3Jwb3JhdGVzXG4gIC8vIGhhc093blByb3BlcnR5KVxuICBpZiAoa2EubGVuZ3RoICE9PSBrYi5sZW5ndGgpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvL3RoZSBzYW1lIHNldCBvZiBrZXlzIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLFxuICBrYS5zb3J0KCk7XG4gIGtiLnNvcnQoKTtcbiAgLy9+fn5jaGVhcCBrZXkgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChrYVtpXSAhPT0ga2JbaV0pXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy9lcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnkgY29ycmVzcG9uZGluZyBrZXksIGFuZFxuICAvL35+fnBvc3NpYmx5IGV4cGVuc2l2ZSBkZWVwIHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBrZXkgPSBrYVtpXTtcbiAgICBpZiAoIV9kZWVwRXF1YWwoYVtrZXldLCBiW2tleV0sIHN0cmljdCwgYWN0dWFsVmlzaXRlZE9iamVjdHMpKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyA4LiBUaGUgbm9uLWVxdWl2YWxlbmNlIGFzc2VydGlvbiB0ZXN0cyBmb3IgYW55IGRlZXAgaW5lcXVhbGl0eS5cbi8vIGFzc2VydC5ub3REZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQubm90RGVlcEVxdWFsID0gZnVuY3Rpb24gbm90RGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKF9kZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgZmFsc2UpKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnbm90RGVlcEVxdWFsJywgYXNzZXJ0Lm5vdERlZXBFcXVhbCk7XG4gIH1cbn07XG5cbmFzc2VydC5ub3REZWVwU3RyaWN0RXF1YWwgPSBub3REZWVwU3RyaWN0RXF1YWw7XG5mdW5jdGlvbiBub3REZWVwU3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoX2RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCB0cnVlKSkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJ25vdERlZXBTdHJpY3RFcXVhbCcsIG5vdERlZXBTdHJpY3RFcXVhbCk7XG4gIH1cbn1cblxuXG4vLyA5LiBUaGUgc3RyaWN0IGVxdWFsaXR5IGFzc2VydGlvbiB0ZXN0cyBzdHJpY3QgZXF1YWxpdHksIGFzIGRldGVybWluZWQgYnkgPT09LlxuLy8gYXNzZXJ0LnN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0LnN0cmljdEVxdWFsID0gZnVuY3Rpb24gc3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYWN0dWFsICE9PSBleHBlY3RlZCkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJz09PScsIGFzc2VydC5zdHJpY3RFcXVhbCk7XG4gIH1cbn07XG5cbi8vIDEwLiBUaGUgc3RyaWN0IG5vbi1lcXVhbGl0eSBhc3NlcnRpb24gdGVzdHMgZm9yIHN0cmljdCBpbmVxdWFsaXR5LCBhc1xuLy8gZGV0ZXJtaW5lZCBieSAhPT0uICBhc3NlcnQubm90U3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQubm90U3RyaWN0RXF1YWwgPSBmdW5jdGlvbiBub3RTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnIT09JywgYXNzZXJ0Lm5vdFN0cmljdEVxdWFsKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZXhwZWN0ZWRFeGNlcHRpb24oYWN0dWFsLCBleHBlY3RlZCkge1xuICBpZiAoIWFjdHVhbCB8fCAhZXhwZWN0ZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGV4cGVjdGVkKSA9PSAnW29iamVjdCBSZWdFeHBdJykge1xuICAgIHJldHVybiBleHBlY3RlZC50ZXN0KGFjdHVhbCk7XG4gIH1cblxuICB0cnkge1xuICAgIGlmIChhY3R1YWwgaW5zdGFuY2VvZiBleHBlY3RlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gSWdub3JlLiAgVGhlIGluc3RhbmNlb2YgY2hlY2sgZG9lc24ndCB3b3JrIGZvciBhcnJvdyBmdW5jdGlvbnMuXG4gIH1cblxuICBpZiAoRXJyb3IuaXNQcm90b3R5cGVPZihleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZXhwZWN0ZWQuY2FsbCh7fSwgYWN0dWFsKSA9PT0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gX3RyeUJsb2NrKGJsb2NrKSB7XG4gIHZhciBlcnJvcjtcbiAgdHJ5IHtcbiAgICBibG9jaygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZXJyb3IgPSBlO1xuICB9XG4gIHJldHVybiBlcnJvcjtcbn1cblxuZnVuY3Rpb24gX3Rocm93cyhzaG91bGRUaHJvdywgYmxvY2ssIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIHZhciBhY3R1YWw7XG5cbiAgaWYgKHR5cGVvZiBibG9jayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYmxvY2tcIiBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZXhwZWN0ZWQgPT09ICdzdHJpbmcnKSB7XG4gICAgbWVzc2FnZSA9IGV4cGVjdGVkO1xuICAgIGV4cGVjdGVkID0gbnVsbDtcbiAgfVxuXG4gIGFjdHVhbCA9IF90cnlCbG9jayhibG9jayk7XG5cbiAgbWVzc2FnZSA9IChleHBlY3RlZCAmJiBleHBlY3RlZC5uYW1lID8gJyAoJyArIGV4cGVjdGVkLm5hbWUgKyAnKS4nIDogJy4nKSArXG4gICAgICAgICAgICAobWVzc2FnZSA/ICcgJyArIG1lc3NhZ2UgOiAnLicpO1xuXG4gIGlmIChzaG91bGRUaHJvdyAmJiAhYWN0dWFsKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCAnTWlzc2luZyBleHBlY3RlZCBleGNlcHRpb24nICsgbWVzc2FnZSk7XG4gIH1cblxuICB2YXIgdXNlclByb3ZpZGVkTWVzc2FnZSA9IHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJztcbiAgdmFyIGlzVW53YW50ZWRFeGNlcHRpb24gPSAhc2hvdWxkVGhyb3cgJiYgdXRpbC5pc0Vycm9yKGFjdHVhbCk7XG4gIHZhciBpc1VuZXhwZWN0ZWRFeGNlcHRpb24gPSAhc2hvdWxkVGhyb3cgJiYgYWN0dWFsICYmICFleHBlY3RlZDtcblxuICBpZiAoKGlzVW53YW50ZWRFeGNlcHRpb24gJiZcbiAgICAgIHVzZXJQcm92aWRlZE1lc3NhZ2UgJiZcbiAgICAgIGV4cGVjdGVkRXhjZXB0aW9uKGFjdHVhbCwgZXhwZWN0ZWQpKSB8fFxuICAgICAgaXNVbmV4cGVjdGVkRXhjZXB0aW9uKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCAnR290IHVud2FudGVkIGV4Y2VwdGlvbicgKyBtZXNzYWdlKTtcbiAgfVxuXG4gIGlmICgoc2hvdWxkVGhyb3cgJiYgYWN0dWFsICYmIGV4cGVjdGVkICYmXG4gICAgICAhZXhwZWN0ZWRFeGNlcHRpb24oYWN0dWFsLCBleHBlY3RlZCkpIHx8ICghc2hvdWxkVGhyb3cgJiYgYWN0dWFsKSkge1xuICAgIHRocm93IGFjdHVhbDtcbiAgfVxufVxuXG4vLyAxMS4gRXhwZWN0ZWQgdG8gdGhyb3cgYW4gZXJyb3I6XG4vLyBhc3NlcnQudGhyb3dzKGJsb2NrLCBFcnJvcl9vcHQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0LnRocm93cyA9IGZ1bmN0aW9uKGJsb2NrLCAvKm9wdGlvbmFsKi9lcnJvciwgLypvcHRpb25hbCovbWVzc2FnZSkge1xuICBfdGhyb3dzKHRydWUsIGJsb2NrLCBlcnJvciwgbWVzc2FnZSk7XG59O1xuXG4vLyBFWFRFTlNJT04hIFRoaXMgaXMgYW5ub3lpbmcgdG8gd3JpdGUgb3V0c2lkZSB0aGlzIG1vZHVsZS5cbmFzc2VydC5kb2VzTm90VGhyb3cgPSBmdW5jdGlvbihibG9jaywgLypvcHRpb25hbCovZXJyb3IsIC8qb3B0aW9uYWwqL21lc3NhZ2UpIHtcbiAgX3Rocm93cyhmYWxzZSwgYmxvY2ssIGVycm9yLCBtZXNzYWdlKTtcbn07XG5cbmFzc2VydC5pZkVycm9yID0gZnVuY3Rpb24oZXJyKSB7IGlmIChlcnIpIHRocm93IGVycjsgfTtcblxuLy8gRXhwb3NlIGEgc3RyaWN0IG9ubHkgdmFyaWFudCBvZiBhc3NlcnRcbmZ1bmN0aW9uIHN0cmljdCh2YWx1ZSwgbWVzc2FnZSkge1xuICBpZiAoIXZhbHVlKSBmYWlsKHZhbHVlLCB0cnVlLCBtZXNzYWdlLCAnPT0nLCBzdHJpY3QpO1xufVxuYXNzZXJ0LnN0cmljdCA9IG9iamVjdEFzc2lnbihzdHJpY3QsIGFzc2VydCwge1xuICBlcXVhbDogYXNzZXJ0LnN0cmljdEVxdWFsLFxuICBkZWVwRXF1YWw6IGFzc2VydC5kZWVwU3RyaWN0RXF1YWwsXG4gIG5vdEVxdWFsOiBhc3NlcnQubm90U3RyaWN0RXF1YWwsXG4gIG5vdERlZXBFcXVhbDogYXNzZXJ0Lm5vdERlZXBTdHJpY3RFcXVhbFxufSk7XG5hc3NlcnQuc3RyaWN0LnN0cmljdCA9IGFzc2VydC5zdHJpY3Q7XG5cbnZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICB2YXIga2V5cyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGhhc093bi5jYWxsKG9iaiwga2V5KSkga2V5cy5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59O1xuIiwiaW1wb3J0ICogYXMgcmVuZGVyVXRpbHMgZnJvbSAnLi9yZW5kZXItdXRpbHMnO1xudmFyIGJhc2VUZW1wbGF0ZXNQYXRoID0gJ2ZpbGUtc3VtbWFyeSc7XG52YXIgaWNvbnNCYXNlVGVtcGxhdGVzUGF0aCA9ICdpY29uJztcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoZGlmZkZpbGVzLCBob2dhblV0aWxzKSB7XG4gICAgdmFyIGZpbGVzID0gZGlmZkZpbGVzXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgcmV0dXJuIGhvZ2FuVXRpbHMucmVuZGVyKGJhc2VUZW1wbGF0ZXNQYXRoLCAnbGluZScsIHtcbiAgICAgICAgICAgIGZpbGVIdG1sSWQ6IHJlbmRlclV0aWxzLmdldEh0bWxJZChmaWxlKSxcbiAgICAgICAgICAgIG9sZE5hbWU6IGZpbGUub2xkTmFtZSxcbiAgICAgICAgICAgIG5ld05hbWU6IGZpbGUubmV3TmFtZSxcbiAgICAgICAgICAgIGZpbGVOYW1lOiByZW5kZXJVdGlscy5maWxlbmFtZURpZmYoZmlsZSksXG4gICAgICAgICAgICBkZWxldGVkTGluZXM6ICctJyArIGZpbGUuZGVsZXRlZExpbmVzLFxuICAgICAgICAgICAgYWRkZWRMaW5lczogJysnICsgZmlsZS5hZGRlZExpbmVzLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBmaWxlSWNvbjogaG9nYW5VdGlscy50ZW1wbGF0ZShpY29uc0Jhc2VUZW1wbGF0ZXNQYXRoLCByZW5kZXJVdGlscy5nZXRGaWxlSWNvbihmaWxlKSksXG4gICAgICAgIH0pO1xuICAgIH0pXG4gICAgICAgIC5qb2luKCdcXG4nKTtcbiAgICByZXR1cm4gaG9nYW5VdGlscy5yZW5kZXIoYmFzZVRlbXBsYXRlc1BhdGgsICd3cmFwcGVyJywge1xuICAgICAgICBmaWxlc051bWJlcjogZGlmZkZpbGVzLmxlbmd0aCxcbiAgICAgICAgZmlsZXM6IGZpbGVzLFxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmlsZS1saXN0LXJlbmRlcmVyLmpzLm1hcCIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS44LjBcbihmdW5jdGlvbigpIHtcbiAgdmFyIEhlYXAsIGRlZmF1bHRDbXAsIGZsb29yLCBoZWFwaWZ5LCBoZWFwcG9wLCBoZWFwcHVzaCwgaGVhcHB1c2hwb3AsIGhlYXByZXBsYWNlLCBpbnNvcnQsIG1pbiwgbmxhcmdlc3QsIG5zbWFsbGVzdCwgdXBkYXRlSXRlbSwgX3NpZnRkb3duLCBfc2lmdHVwO1xuXG4gIGZsb29yID0gTWF0aC5mbG9vciwgbWluID0gTWF0aC5taW47XG5cblxuICAvKlxuICBEZWZhdWx0IGNvbXBhcmlzb24gZnVuY3Rpb24gdG8gYmUgdXNlZFxuICAgKi9cblxuICBkZWZhdWx0Q21wID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIGlmICh4IDwgeSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAoeCA+IHkpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfTtcblxuXG4gIC8qXG4gIEluc2VydCBpdGVtIHggaW4gbGlzdCBhLCBhbmQga2VlcCBpdCBzb3J0ZWQgYXNzdW1pbmcgYSBpcyBzb3J0ZWQuXG4gIFxuICBJZiB4IGlzIGFscmVhZHkgaW4gYSwgaW5zZXJ0IGl0IHRvIHRoZSByaWdodCBvZiB0aGUgcmlnaHRtb3N0IHguXG4gIFxuICBPcHRpb25hbCBhcmdzIGxvIChkZWZhdWx0IDApIGFuZCBoaSAoZGVmYXVsdCBhLmxlbmd0aCkgYm91bmQgdGhlIHNsaWNlXG4gIG9mIGEgdG8gYmUgc2VhcmNoZWQuXG4gICAqL1xuXG4gIGluc29ydCA9IGZ1bmN0aW9uKGEsIHgsIGxvLCBoaSwgY21wKSB7XG4gICAgdmFyIG1pZDtcbiAgICBpZiAobG8gPT0gbnVsbCkge1xuICAgICAgbG8gPSAwO1xuICAgIH1cbiAgICBpZiAoY21wID09IG51bGwpIHtcbiAgICAgIGNtcCA9IGRlZmF1bHRDbXA7XG4gICAgfVxuICAgIGlmIChsbyA8IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbG8gbXVzdCBiZSBub24tbmVnYXRpdmUnKTtcbiAgICB9XG4gICAgaWYgKGhpID09IG51bGwpIHtcbiAgICAgIGhpID0gYS5sZW5ndGg7XG4gICAgfVxuICAgIHdoaWxlIChsbyA8IGhpKSB7XG4gICAgICBtaWQgPSBmbG9vcigobG8gKyBoaSkgLyAyKTtcbiAgICAgIGlmIChjbXAoeCwgYVttaWRdKSA8IDApIHtcbiAgICAgICAgaGkgPSBtaWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsbyA9IG1pZCArIDE7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoW10uc3BsaWNlLmFwcGx5KGEsIFtsbywgbG8gLSBsb10uY29uY2F0KHgpKSwgeCk7XG4gIH07XG5cblxuICAvKlxuICBQdXNoIGl0ZW0gb250byBoZWFwLCBtYWludGFpbmluZyB0aGUgaGVhcCBpbnZhcmlhbnQuXG4gICAqL1xuXG4gIGhlYXBwdXNoID0gZnVuY3Rpb24oYXJyYXksIGl0ZW0sIGNtcCkge1xuICAgIGlmIChjbXAgPT0gbnVsbCkge1xuICAgICAgY21wID0gZGVmYXVsdENtcDtcbiAgICB9XG4gICAgYXJyYXkucHVzaChpdGVtKTtcbiAgICByZXR1cm4gX3NpZnRkb3duKGFycmF5LCAwLCBhcnJheS5sZW5ndGggLSAxLCBjbXApO1xuICB9O1xuXG5cbiAgLypcbiAgUG9wIHRoZSBzbWFsbGVzdCBpdGVtIG9mZiB0aGUgaGVhcCwgbWFpbnRhaW5pbmcgdGhlIGhlYXAgaW52YXJpYW50LlxuICAgKi9cblxuICBoZWFwcG9wID0gZnVuY3Rpb24oYXJyYXksIGNtcCkge1xuICAgIHZhciBsYXN0ZWx0LCByZXR1cm5pdGVtO1xuICAgIGlmIChjbXAgPT0gbnVsbCkge1xuICAgICAgY21wID0gZGVmYXVsdENtcDtcbiAgICB9XG4gICAgbGFzdGVsdCA9IGFycmF5LnBvcCgpO1xuICAgIGlmIChhcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVybml0ZW0gPSBhcnJheVswXTtcbiAgICAgIGFycmF5WzBdID0gbGFzdGVsdDtcbiAgICAgIF9zaWZ0dXAoYXJyYXksIDAsIGNtcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybml0ZW0gPSBsYXN0ZWx0O1xuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuaXRlbTtcbiAgfTtcblxuXG4gIC8qXG4gIFBvcCBhbmQgcmV0dXJuIHRoZSBjdXJyZW50IHNtYWxsZXN0IHZhbHVlLCBhbmQgYWRkIHRoZSBuZXcgaXRlbS5cbiAgXG4gIFRoaXMgaXMgbW9yZSBlZmZpY2llbnQgdGhhbiBoZWFwcG9wKCkgZm9sbG93ZWQgYnkgaGVhcHB1c2goKSwgYW5kIGNhbiBiZVxuICBtb3JlIGFwcHJvcHJpYXRlIHdoZW4gdXNpbmcgYSBmaXhlZCBzaXplIGhlYXAuIE5vdGUgdGhhdCB0aGUgdmFsdWVcbiAgcmV0dXJuZWQgbWF5IGJlIGxhcmdlciB0aGFuIGl0ZW0hIFRoYXQgY29uc3RyYWlucyByZWFzb25hYmxlIHVzZSBvZlxuICB0aGlzIHJvdXRpbmUgdW5sZXNzIHdyaXR0ZW4gYXMgcGFydCBvZiBhIGNvbmRpdGlvbmFsIHJlcGxhY2VtZW50OlxuICAgICAgaWYgaXRlbSA+IGFycmF5WzBdXG4gICAgICAgIGl0ZW0gPSBoZWFwcmVwbGFjZShhcnJheSwgaXRlbSlcbiAgICovXG5cbiAgaGVhcHJlcGxhY2UgPSBmdW5jdGlvbihhcnJheSwgaXRlbSwgY21wKSB7XG4gICAgdmFyIHJldHVybml0ZW07XG4gICAgaWYgKGNtcCA9PSBudWxsKSB7XG4gICAgICBjbXAgPSBkZWZhdWx0Q21wO1xuICAgIH1cbiAgICByZXR1cm5pdGVtID0gYXJyYXlbMF07XG4gICAgYXJyYXlbMF0gPSBpdGVtO1xuICAgIF9zaWZ0dXAoYXJyYXksIDAsIGNtcCk7XG4gICAgcmV0dXJuIHJldHVybml0ZW07XG4gIH07XG5cblxuICAvKlxuICBGYXN0IHZlcnNpb24gb2YgYSBoZWFwcHVzaCBmb2xsb3dlZCBieSBhIGhlYXBwb3AuXG4gICAqL1xuXG4gIGhlYXBwdXNocG9wID0gZnVuY3Rpb24oYXJyYXksIGl0ZW0sIGNtcCkge1xuICAgIHZhciBfcmVmO1xuICAgIGlmIChjbXAgPT0gbnVsbCkge1xuICAgICAgY21wID0gZGVmYXVsdENtcDtcbiAgICB9XG4gICAgaWYgKGFycmF5Lmxlbmd0aCAmJiBjbXAoYXJyYXlbMF0sIGl0ZW0pIDwgMCkge1xuICAgICAgX3JlZiA9IFthcnJheVswXSwgaXRlbV0sIGl0ZW0gPSBfcmVmWzBdLCBhcnJheVswXSA9IF9yZWZbMV07XG4gICAgICBfc2lmdHVwKGFycmF5LCAwLCBjbXApO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbTtcbiAgfTtcblxuXG4gIC8qXG4gIFRyYW5zZm9ybSBsaXN0IGludG8gYSBoZWFwLCBpbi1wbGFjZSwgaW4gTyhhcnJheS5sZW5ndGgpIHRpbWUuXG4gICAqL1xuXG4gIGhlYXBpZnkgPSBmdW5jdGlvbihhcnJheSwgY21wKSB7XG4gICAgdmFyIGksIF9pLCBfaiwgX2xlbiwgX3JlZiwgX3JlZjEsIF9yZXN1bHRzLCBfcmVzdWx0czE7XG4gICAgaWYgKGNtcCA9PSBudWxsKSB7XG4gICAgICBjbXAgPSBkZWZhdWx0Q21wO1xuICAgIH1cbiAgICBfcmVmMSA9IChmdW5jdGlvbigpIHtcbiAgICAgIF9yZXN1bHRzMSA9IFtdO1xuICAgICAgZm9yICh2YXIgX2ogPSAwLCBfcmVmID0gZmxvb3IoYXJyYXkubGVuZ3RoIC8gMik7IDAgPD0gX3JlZiA/IF9qIDwgX3JlZiA6IF9qID4gX3JlZjsgMCA8PSBfcmVmID8gX2orKyA6IF9qLS0peyBfcmVzdWx0czEucHVzaChfaik7IH1cbiAgICAgIHJldHVybiBfcmVzdWx0czE7XG4gICAgfSkuYXBwbHkodGhpcykucmV2ZXJzZSgpO1xuICAgIF9yZXN1bHRzID0gW107XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmMS5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgaSA9IF9yZWYxW19pXTtcbiAgICAgIF9yZXN1bHRzLnB1c2goX3NpZnR1cChhcnJheSwgaSwgY21wKSk7XG4gICAgfVxuICAgIHJldHVybiBfcmVzdWx0cztcbiAgfTtcblxuXG4gIC8qXG4gIFVwZGF0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIGdpdmVuIGl0ZW0gaW4gdGhlIGhlYXAuXG4gIFRoaXMgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZCBldmVyeSB0aW1lIHRoZSBpdGVtIGlzIGJlaW5nIG1vZGlmaWVkLlxuICAgKi9cblxuICB1cGRhdGVJdGVtID0gZnVuY3Rpb24oYXJyYXksIGl0ZW0sIGNtcCkge1xuICAgIHZhciBwb3M7XG4gICAgaWYgKGNtcCA9PSBudWxsKSB7XG4gICAgICBjbXAgPSBkZWZhdWx0Q21wO1xuICAgIH1cbiAgICBwb3MgPSBhcnJheS5pbmRleE9mKGl0ZW0pO1xuICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIF9zaWZ0ZG93bihhcnJheSwgMCwgcG9zLCBjbXApO1xuICAgIHJldHVybiBfc2lmdHVwKGFycmF5LCBwb3MsIGNtcCk7XG4gIH07XG5cblxuICAvKlxuICBGaW5kIHRoZSBuIGxhcmdlc3QgZWxlbWVudHMgaW4gYSBkYXRhc2V0LlxuICAgKi9cblxuICBubGFyZ2VzdCA9IGZ1bmN0aW9uKGFycmF5LCBuLCBjbXApIHtcbiAgICB2YXIgZWxlbSwgcmVzdWx0LCBfaSwgX2xlbiwgX3JlZjtcbiAgICBpZiAoY21wID09IG51bGwpIHtcbiAgICAgIGNtcCA9IGRlZmF1bHRDbXA7XG4gICAgfVxuICAgIHJlc3VsdCA9IGFycmF5LnNsaWNlKDAsIG4pO1xuICAgIGlmICghcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgaGVhcGlmeShyZXN1bHQsIGNtcCk7XG4gICAgX3JlZiA9IGFycmF5LnNsaWNlKG4pO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgZWxlbSA9IF9yZWZbX2ldO1xuICAgICAgaGVhcHB1c2hwb3AocmVzdWx0LCBlbGVtLCBjbXApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0LnNvcnQoY21wKS5yZXZlcnNlKCk7XG4gIH07XG5cblxuICAvKlxuICBGaW5kIHRoZSBuIHNtYWxsZXN0IGVsZW1lbnRzIGluIGEgZGF0YXNldC5cbiAgICovXG5cbiAgbnNtYWxsZXN0ID0gZnVuY3Rpb24oYXJyYXksIG4sIGNtcCkge1xuICAgIHZhciBlbGVtLCBpLCBsb3MsIHJlc3VsdCwgX2ksIF9qLCBfbGVuLCBfcmVmLCBfcmVmMSwgX3Jlc3VsdHM7XG4gICAgaWYgKGNtcCA9PSBudWxsKSB7XG4gICAgICBjbXAgPSBkZWZhdWx0Q21wO1xuICAgIH1cbiAgICBpZiAobiAqIDEwIDw9IGFycmF5Lmxlbmd0aCkge1xuICAgICAgcmVzdWx0ID0gYXJyYXkuc2xpY2UoMCwgbikuc29ydChjbXApO1xuICAgICAgaWYgKCFyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICBsb3MgPSByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdO1xuICAgICAgX3JlZiA9IGFycmF5LnNsaWNlKG4pO1xuICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIGVsZW0gPSBfcmVmW19pXTtcbiAgICAgICAgaWYgKGNtcChlbGVtLCBsb3MpIDwgMCkge1xuICAgICAgICAgIGluc29ydChyZXN1bHQsIGVsZW0sIDAsIG51bGwsIGNtcCk7XG4gICAgICAgICAgcmVzdWx0LnBvcCgpO1xuICAgICAgICAgIGxvcyA9IHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGhlYXBpZnkoYXJyYXksIGNtcCk7XG4gICAgX3Jlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSBfaiA9IDAsIF9yZWYxID0gbWluKG4sIGFycmF5Lmxlbmd0aCk7IDAgPD0gX3JlZjEgPyBfaiA8IF9yZWYxIDogX2ogPiBfcmVmMTsgaSA9IDAgPD0gX3JlZjEgPyArK19qIDogLS1faikge1xuICAgICAgX3Jlc3VsdHMucHVzaChoZWFwcG9wKGFycmF5LCBjbXApKTtcbiAgICB9XG4gICAgcmV0dXJuIF9yZXN1bHRzO1xuICB9O1xuXG4gIF9zaWZ0ZG93biA9IGZ1bmN0aW9uKGFycmF5LCBzdGFydHBvcywgcG9zLCBjbXApIHtcbiAgICB2YXIgbmV3aXRlbSwgcGFyZW50LCBwYXJlbnRwb3M7XG4gICAgaWYgKGNtcCA9PSBudWxsKSB7XG4gICAgICBjbXAgPSBkZWZhdWx0Q21wO1xuICAgIH1cbiAgICBuZXdpdGVtID0gYXJyYXlbcG9zXTtcbiAgICB3aGlsZSAocG9zID4gc3RhcnRwb3MpIHtcbiAgICAgIHBhcmVudHBvcyA9IChwb3MgLSAxKSA+PiAxO1xuICAgICAgcGFyZW50ID0gYXJyYXlbcGFyZW50cG9zXTtcbiAgICAgIGlmIChjbXAobmV3aXRlbSwgcGFyZW50KSA8IDApIHtcbiAgICAgICAgYXJyYXlbcG9zXSA9IHBhcmVudDtcbiAgICAgICAgcG9zID0gcGFyZW50cG9zO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXlbcG9zXSA9IG5ld2l0ZW07XG4gIH07XG5cbiAgX3NpZnR1cCA9IGZ1bmN0aW9uKGFycmF5LCBwb3MsIGNtcCkge1xuICAgIHZhciBjaGlsZHBvcywgZW5kcG9zLCBuZXdpdGVtLCByaWdodHBvcywgc3RhcnRwb3M7XG4gICAgaWYgKGNtcCA9PSBudWxsKSB7XG4gICAgICBjbXAgPSBkZWZhdWx0Q21wO1xuICAgIH1cbiAgICBlbmRwb3MgPSBhcnJheS5sZW5ndGg7XG4gICAgc3RhcnRwb3MgPSBwb3M7XG4gICAgbmV3aXRlbSA9IGFycmF5W3Bvc107XG4gICAgY2hpbGRwb3MgPSAyICogcG9zICsgMTtcbiAgICB3aGlsZSAoY2hpbGRwb3MgPCBlbmRwb3MpIHtcbiAgICAgIHJpZ2h0cG9zID0gY2hpbGRwb3MgKyAxO1xuICAgICAgaWYgKHJpZ2h0cG9zIDwgZW5kcG9zICYmICEoY21wKGFycmF5W2NoaWxkcG9zXSwgYXJyYXlbcmlnaHRwb3NdKSA8IDApKSB7XG4gICAgICAgIGNoaWxkcG9zID0gcmlnaHRwb3M7XG4gICAgICB9XG4gICAgICBhcnJheVtwb3NdID0gYXJyYXlbY2hpbGRwb3NdO1xuICAgICAgcG9zID0gY2hpbGRwb3M7XG4gICAgICBjaGlsZHBvcyA9IDIgKiBwb3MgKyAxO1xuICAgIH1cbiAgICBhcnJheVtwb3NdID0gbmV3aXRlbTtcbiAgICByZXR1cm4gX3NpZnRkb3duKGFycmF5LCBzdGFydHBvcywgcG9zLCBjbXApO1xuICB9O1xuXG4gIEhlYXAgPSAoZnVuY3Rpb24oKSB7XG4gICAgSGVhcC5wdXNoID0gaGVhcHB1c2g7XG5cbiAgICBIZWFwLnBvcCA9IGhlYXBwb3A7XG5cbiAgICBIZWFwLnJlcGxhY2UgPSBoZWFwcmVwbGFjZTtcblxuICAgIEhlYXAucHVzaHBvcCA9IGhlYXBwdXNocG9wO1xuXG4gICAgSGVhcC5oZWFwaWZ5ID0gaGVhcGlmeTtcblxuICAgIEhlYXAudXBkYXRlSXRlbSA9IHVwZGF0ZUl0ZW07XG5cbiAgICBIZWFwLm5sYXJnZXN0ID0gbmxhcmdlc3Q7XG5cbiAgICBIZWFwLm5zbWFsbGVzdCA9IG5zbWFsbGVzdDtcblxuICAgIGZ1bmN0aW9uIEhlYXAoY21wKSB7XG4gICAgICB0aGlzLmNtcCA9IGNtcCAhPSBudWxsID8gY21wIDogZGVmYXVsdENtcDtcbiAgICAgIHRoaXMubm9kZXMgPSBbXTtcbiAgICB9XG5cbiAgICBIZWFwLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIGhlYXBwdXNoKHRoaXMubm9kZXMsIHgsIHRoaXMuY21wKTtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaGVhcHBvcCh0aGlzLm5vZGVzLCB0aGlzLmNtcCk7XG4gICAgfTtcblxuICAgIEhlYXAucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVzWzBdO1xuICAgIH07XG5cbiAgICBIZWFwLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVzLmluZGV4T2YoeCkgIT09IC0xO1xuICAgIH07XG5cbiAgICBIZWFwLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIGhlYXByZXBsYWNlKHRoaXMubm9kZXMsIHgsIHRoaXMuY21wKTtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUucHVzaHBvcCA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiBoZWFwcHVzaHBvcCh0aGlzLm5vZGVzLCB4LCB0aGlzLmNtcCk7XG4gICAgfTtcblxuICAgIEhlYXAucHJvdG90eXBlLmhlYXBpZnkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBoZWFwaWZ5KHRoaXMubm9kZXMsIHRoaXMuY21wKTtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUudXBkYXRlSXRlbSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB1cGRhdGVJdGVtKHRoaXMubm9kZXMsIHgsIHRoaXMuY21wKTtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVzID0gW107XG4gICAgfTtcblxuICAgIEhlYXAucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2Rlcy5sZW5ndGggPT09IDA7XG4gICAgfTtcblxuICAgIEhlYXAucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVzLmxlbmd0aDtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBoZWFwO1xuICAgICAgaGVhcCA9IG5ldyBIZWFwKCk7XG4gICAgICBoZWFwLm5vZGVzID0gdGhpcy5ub2Rlcy5zbGljZSgwKTtcbiAgICAgIHJldHVybiBoZWFwO1xuICAgIH07XG5cbiAgICBIZWFwLnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2Rlcy5zbGljZSgwKTtcbiAgICB9O1xuXG4gICAgSGVhcC5wcm90b3R5cGUuaW5zZXJ0ID0gSGVhcC5wcm90b3R5cGUucHVzaDtcblxuICAgIEhlYXAucHJvdG90eXBlLnRvcCA9IEhlYXAucHJvdG90eXBlLnBlZWs7XG5cbiAgICBIZWFwLnByb3RvdHlwZS5mcm9udCA9IEhlYXAucHJvdG90eXBlLnBlZWs7XG5cbiAgICBIZWFwLnByb3RvdHlwZS5oYXMgPSBIZWFwLnByb3RvdHlwZS5jb250YWlucztcblxuICAgIEhlYXAucHJvdG90eXBlLmNvcHkgPSBIZWFwLnByb3RvdHlwZS5jbG9uZTtcblxuICAgIHJldHVybiBIZWFwO1xuXG4gIH0pKCk7XG5cbiAgKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICByZXR1cm4gZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcm9vdC5IZWFwID0gZmFjdG9yeSgpO1xuICAgIH1cbiAgfSkodGhpcywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIEhlYXA7XG4gIH0pO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9oZWFwJyk7XG4iLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIHx8XG4gIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIHZhciBkZXNjcmlwdG9ycyA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZGVzY3JpcHRvcnNba2V5c1tpXV0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBkZXNjcmlwdG9ycztcbiAgfTtcblxudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG5leHBvcnRzLmZvcm1hdCA9IGZ1bmN0aW9uKGYpIHtcbiAgaWYgKCFpc1N0cmluZyhmKSkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9iamVjdHMucHVzaChpbnNwZWN0KGFyZ3VtZW50c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0cy5qb2luKCcgJyk7XG4gIH1cblxuICB2YXIgaSA9IDE7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBzdHIgPSBTdHJpbmcoZikucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoeCA9PT0gJyUlJykgcmV0dXJuICclJztcbiAgICBpZiAoaSA+PSBsZW4pIHJldHVybiB4O1xuICAgIHN3aXRjaCAoeCkge1xuICAgICAgY2FzZSAnJXMnOiByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclZCc6IHJldHVybiBOdW1iZXIoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVqJzpcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnc1tpKytdKTtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfSk7XG4gIGZvciAodmFyIHggPSBhcmdzW2ldOyBpIDwgbGVuOyB4ID0gYXJnc1srK2ldKSB7XG4gICAgaWYgKGlzTnVsbCh4KSB8fCAhaXNPYmplY3QoeCkpIHtcbiAgICAgIHN0ciArPSAnICcgKyB4O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgKz0gJyAnICsgaW5zcGVjdCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cblxuLy8gTWFyayB0aGF0IGEgbWV0aG9kIHNob3VsZCBub3QgYmUgdXNlZC5cbi8vIFJldHVybnMgYSBtb2RpZmllZCBmdW5jdGlvbiB3aGljaCB3YXJucyBvbmNlIGJ5IGRlZmF1bHQuXG4vLyBJZiAtLW5vLWRlcHJlY2F0aW9uIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuZXhwb3J0cy5kZXByZWNhdGUgPSBmdW5jdGlvbihmbiwgbXNnKSB7XG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG52YXIga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgPyBTeW1ib2woJ3V0aWwucHJvbWlzaWZ5LmN1c3RvbScpIDogdW5kZWZpbmVkO1xuXG5leHBvcnRzLnByb21pc2lmeSA9IGZ1bmN0aW9uIHByb21pc2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm9yaWdpbmFsXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG5cbiAgaWYgKGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCAmJiBvcmlnaW5hbFtrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xdKSB7XG4gICAgdmFyIGZuID0gb3JpZ2luYWxba0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXTtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJ1dGlsLnByb21pc2lmeS5jdXN0b21cIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wsIHtcbiAgICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgZnVuY3Rpb24gZm4oKSB7XG4gICAgdmFyIHByb21pc2VSZXNvbHZlLCBwcm9taXNlUmVqZWN0O1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcHJvbWlzZVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgcHJvbWlzZVJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcblxuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cbiAgICBhcmdzLnB1c2goZnVuY3Rpb24gKGVyciwgdmFsdWUpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZVJlc29sdmUodmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGZuLCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luYWwpKTtcblxuICBpZiAoa0N1c3RvbVByb21pc2lmaWVkU3ltYm9sKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCwge1xuICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoXG4gICAgZm4sXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvcmlnaW5hbClcbiAgKTtcbn1cblxuZXhwb3J0cy5wcm9taXNpZnkuY3VzdG9tID0ga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXG5cbmZ1bmN0aW9uIGNhbGxiYWNraWZ5T25SZWplY3RlZChyZWFzb24sIGNiKSB7XG4gIC8vIGAhcmVhc29uYCBndWFyZCBpbnNwaXJlZCBieSBibHVlYmlyZCAoUmVmOiBodHRwczovL2dvby5nbC90NUlTNk0pLlxuICAvLyBCZWNhdXNlIGBudWxsYCBpcyBhIHNwZWNpYWwgZXJyb3IgdmFsdWUgaW4gY2FsbGJhY2tzIHdoaWNoIG1lYW5zIFwibm8gZXJyb3JcbiAgLy8gb2NjdXJyZWRcIiwgd2UgZXJyb3Itd3JhcCBzbyB0aGUgY2FsbGJhY2sgY29uc3VtZXIgY2FuIGRpc3Rpbmd1aXNoIGJldHdlZW5cbiAgLy8gXCJ0aGUgcHJvbWlzZSByZWplY3RlZCB3aXRoIG51bGxcIiBvciBcInRoZSBwcm9taXNlIGZ1bGZpbGxlZCB3aXRoIHVuZGVmaW5lZFwiLlxuICBpZiAoIXJlYXNvbikge1xuICAgIHZhciBuZXdSZWFzb24gPSBuZXcgRXJyb3IoJ1Byb21pc2Ugd2FzIHJlamVjdGVkIHdpdGggYSBmYWxzeSB2YWx1ZScpO1xuICAgIG5ld1JlYXNvbi5yZWFzb24gPSByZWFzb247XG4gICAgcmVhc29uID0gbmV3UmVhc29uO1xuICB9XG4gIHJldHVybiBjYihyZWFzb24pO1xufVxuXG5mdW5jdGlvbiBjYWxsYmFja2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwib3JpZ2luYWxcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgfVxuXG4gIC8vIFdlIERPIE5PVCByZXR1cm4gdGhlIHByb21pc2UgYXMgaXQgZ2l2ZXMgdGhlIHVzZXIgYSBmYWxzZSBzZW5zZSB0aGF0XG4gIC8vIHRoZSBwcm9taXNlIGlzIGFjdHVhbGx5IHNvbWVob3cgcmVsYXRlZCB0byB0aGUgY2FsbGJhY2sncyBleGVjdXRpb25cbiAgLy8gYW5kIHRoYXQgdGhlIGNhbGxiYWNrIHRocm93aW5nIHdpbGwgcmVqZWN0IHRoZSBwcm9taXNlLlxuICBmdW5jdGlvbiBjYWxsYmFja2lmaWVkKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIHZhciBtYXliZUNiID0gYXJncy5wb3AoKTtcbiAgICBpZiAodHlwZW9mIG1heWJlQ2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBsYXN0IGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICAgIH1cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGNiID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbWF5YmVDYi5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgLy8gSW4gdHJ1ZSBub2RlIHN0eWxlIHdlIHByb2Nlc3MgdGhlIGNhbGxiYWNrIG9uIGBuZXh0VGlja2Agd2l0aCBhbGwgdGhlXG4gICAgLy8gaW1wbGljYXRpb25zIChzdGFjaywgYHVuY2F1Z2h0RXhjZXB0aW9uYCwgYGFzeW5jX2hvb2tzYClcbiAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmV0KSB7IHByb2Nlc3MubmV4dFRpY2soY2IsIG51bGwsIHJldCkgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHJlaikgeyBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNraWZ5T25SZWplY3RlZCwgcmVqLCBjYikgfSk7XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY2FsbGJhY2tpZmllZCwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNhbGxiYWNraWZpZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpKTtcbiAgcmV0dXJuIGNhbGxiYWNraWZpZWQ7XG59XG5leHBvcnRzLmNhbGxiYWNraWZ5ID0gY2FsbGJhY2tpZnk7XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLypcbiAqICBDb3B5cmlnaHQgMjAxMSBUd2l0dGVyLCBJbmMuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4oZnVuY3Rpb24gKEhvZ2FuKSB7XG4gIC8vIFNldHVwIHJlZ2V4ICBhc3NpZ25tZW50c1xuICAvLyByZW1vdmUgd2hpdGVzcGFjZSBhY2NvcmRpbmcgdG8gTXVzdGFjaGUgc3BlY1xuICB2YXIgcklzV2hpdGVzcGFjZSA9IC9cXFMvLFxuICAgICAgclF1b3QgPSAvXFxcIi9nLFxuICAgICAgck5ld2xpbmUgPSAgL1xcbi9nLFxuICAgICAgckNyID0gL1xcci9nLFxuICAgICAgclNsYXNoID0gL1xcXFwvZyxcbiAgICAgIHJMaW5lU2VwID0gL1xcdTIwMjgvLFxuICAgICAgclBhcmFncmFwaFNlcCA9IC9cXHUyMDI5LztcblxuICBIb2dhbi50YWdzID0ge1xuICAgICcjJzogMSwgJ14nOiAyLCAnPCc6IDMsICckJzogNCxcbiAgICAnLyc6IDUsICchJzogNiwgJz4nOiA3LCAnPSc6IDgsICdfdic6IDksXG4gICAgJ3snOiAxMCwgJyYnOiAxMSwgJ190JzogMTJcbiAgfTtcblxuICBIb2dhbi5zY2FuID0gZnVuY3Rpb24gc2Nhbih0ZXh0LCBkZWxpbWl0ZXJzKSB7XG4gICAgdmFyIGxlbiA9IHRleHQubGVuZ3RoLFxuICAgICAgICBJTl9URVhUID0gMCxcbiAgICAgICAgSU5fVEFHX1RZUEUgPSAxLFxuICAgICAgICBJTl9UQUcgPSAyLFxuICAgICAgICBzdGF0ZSA9IElOX1RFWFQsXG4gICAgICAgIHRhZ1R5cGUgPSBudWxsLFxuICAgICAgICB0YWcgPSBudWxsLFxuICAgICAgICBidWYgPSAnJyxcbiAgICAgICAgdG9rZW5zID0gW10sXG4gICAgICAgIHNlZW5UYWcgPSBmYWxzZSxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGxpbmVTdGFydCA9IDAsXG4gICAgICAgIG90YWcgPSAne3snLFxuICAgICAgICBjdGFnID0gJ319JztcblxuICAgIGZ1bmN0aW9uIGFkZEJ1ZigpIHtcbiAgICAgIGlmIChidWYubGVuZ3RoID4gMCkge1xuICAgICAgICB0b2tlbnMucHVzaCh7dGFnOiAnX3QnLCB0ZXh0OiBuZXcgU3RyaW5nKGJ1Zil9KTtcbiAgICAgICAgYnVmID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGluZUlzV2hpdGVzcGFjZSgpIHtcbiAgICAgIHZhciBpc0FsbFdoaXRlc3BhY2UgPSB0cnVlO1xuICAgICAgZm9yICh2YXIgaiA9IGxpbmVTdGFydDsgaiA8IHRva2Vucy5sZW5ndGg7IGorKykge1xuICAgICAgICBpc0FsbFdoaXRlc3BhY2UgPVxuICAgICAgICAgIChIb2dhbi50YWdzW3Rva2Vuc1tqXS50YWddIDwgSG9nYW4udGFnc1snX3YnXSkgfHxcbiAgICAgICAgICAodG9rZW5zW2pdLnRhZyA9PSAnX3QnICYmIHRva2Vuc1tqXS50ZXh0Lm1hdGNoKHJJc1doaXRlc3BhY2UpID09PSBudWxsKTtcbiAgICAgICAgaWYgKCFpc0FsbFdoaXRlc3BhY2UpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlzQWxsV2hpdGVzcGFjZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXJMaW5lKGhhdmVTZWVuVGFnLCBub05ld0xpbmUpIHtcbiAgICAgIGFkZEJ1ZigpO1xuXG4gICAgICBpZiAoaGF2ZVNlZW5UYWcgJiYgbGluZUlzV2hpdGVzcGFjZSgpKSB7XG4gICAgICAgIGZvciAodmFyIGogPSBsaW5lU3RhcnQsIG5leHQ7IGogPCB0b2tlbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBpZiAodG9rZW5zW2pdLnRleHQpIHtcbiAgICAgICAgICAgIGlmICgobmV4dCA9IHRva2Vuc1tqKzFdKSAmJiBuZXh0LnRhZyA9PSAnPicpIHtcbiAgICAgICAgICAgICAgLy8gc2V0IGluZGVudCB0byB0b2tlbiB2YWx1ZVxuICAgICAgICAgICAgICBuZXh0LmluZGVudCA9IHRva2Vuc1tqXS50ZXh0LnRvU3RyaW5nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRva2Vucy5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFub05ld0xpbmUpIHtcbiAgICAgICAgdG9rZW5zLnB1c2goe3RhZzonXFxuJ30pO1xuICAgICAgfVxuXG4gICAgICBzZWVuVGFnID0gZmFsc2U7XG4gICAgICBsaW5lU3RhcnQgPSB0b2tlbnMubGVuZ3RoO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZURlbGltaXRlcnModGV4dCwgaW5kZXgpIHtcbiAgICAgIHZhciBjbG9zZSA9ICc9JyArIGN0YWcsXG4gICAgICAgICAgY2xvc2VJbmRleCA9IHRleHQuaW5kZXhPZihjbG9zZSwgaW5kZXgpLFxuICAgICAgICAgIGRlbGltaXRlcnMgPSB0cmltKFxuICAgICAgICAgICAgdGV4dC5zdWJzdHJpbmcodGV4dC5pbmRleE9mKCc9JywgaW5kZXgpICsgMSwgY2xvc2VJbmRleClcbiAgICAgICAgICApLnNwbGl0KCcgJyk7XG5cbiAgICAgIG90YWcgPSBkZWxpbWl0ZXJzWzBdO1xuICAgICAgY3RhZyA9IGRlbGltaXRlcnNbZGVsaW1pdGVycy5sZW5ndGggLSAxXTtcblxuICAgICAgcmV0dXJuIGNsb3NlSW5kZXggKyBjbG9zZS5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIGlmIChkZWxpbWl0ZXJzKSB7XG4gICAgICBkZWxpbWl0ZXJzID0gZGVsaW1pdGVycy5zcGxpdCgnICcpO1xuICAgICAgb3RhZyA9IGRlbGltaXRlcnNbMF07XG4gICAgICBjdGFnID0gZGVsaW1pdGVyc1sxXTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmIChzdGF0ZSA9PSBJTl9URVhUKSB7XG4gICAgICAgIGlmICh0YWdDaGFuZ2Uob3RhZywgdGV4dCwgaSkpIHtcbiAgICAgICAgICAtLWk7XG4gICAgICAgICAgYWRkQnVmKCk7XG4gICAgICAgICAgc3RhdGUgPSBJTl9UQUdfVFlQRTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGV4dC5jaGFyQXQoaSkgPT0gJ1xcbicpIHtcbiAgICAgICAgICAgIGZpbHRlckxpbmUoc2VlblRhZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZiArPSB0ZXh0LmNoYXJBdChpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gSU5fVEFHX1RZUEUpIHtcbiAgICAgICAgaSArPSBvdGFnLmxlbmd0aCAtIDE7XG4gICAgICAgIHRhZyA9IEhvZ2FuLnRhZ3NbdGV4dC5jaGFyQXQoaSArIDEpXTtcbiAgICAgICAgdGFnVHlwZSA9IHRhZyA/IHRleHQuY2hhckF0KGkgKyAxKSA6ICdfdic7XG4gICAgICAgIGlmICh0YWdUeXBlID09ICc9Jykge1xuICAgICAgICAgIGkgPSBjaGFuZ2VEZWxpbWl0ZXJzKHRleHQsIGkpO1xuICAgICAgICAgIHN0YXRlID0gSU5fVEVYVDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGFnKSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXRlID0gSU5fVEFHO1xuICAgICAgICB9XG4gICAgICAgIHNlZW5UYWcgPSBpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRhZ0NoYW5nZShjdGFnLCB0ZXh0LCBpKSkge1xuICAgICAgICAgIHRva2Vucy5wdXNoKHt0YWc6IHRhZ1R5cGUsIG46IHRyaW0oYnVmKSwgb3RhZzogb3RhZywgY3RhZzogY3RhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgaTogKHRhZ1R5cGUgPT0gJy8nKSA/IHNlZW5UYWcgLSBvdGFnLmxlbmd0aCA6IGkgKyBjdGFnLmxlbmd0aH0pO1xuICAgICAgICAgIGJ1ZiA9ICcnO1xuICAgICAgICAgIGkgKz0gY3RhZy5sZW5ndGggLSAxO1xuICAgICAgICAgIHN0YXRlID0gSU5fVEVYVDtcbiAgICAgICAgICBpZiAodGFnVHlwZSA9PSAneycpIHtcbiAgICAgICAgICAgIGlmIChjdGFnID09ICd9fScpIHtcbiAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2xlYW5UcmlwbGVTdGFjaGUodG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJ1ZiArPSB0ZXh0LmNoYXJBdChpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZpbHRlckxpbmUoc2VlblRhZywgdHJ1ZSk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW5UcmlwbGVTdGFjaGUodG9rZW4pIHtcbiAgICBpZiAodG9rZW4ubi5zdWJzdHIodG9rZW4ubi5sZW5ndGggLSAxKSA9PT0gJ30nKSB7XG4gICAgICB0b2tlbi5uID0gdG9rZW4ubi5zdWJzdHJpbmcoMCwgdG9rZW4ubi5sZW5ndGggLSAxKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cmltKHMpIHtcbiAgICBpZiAocy50cmltKSB7XG4gICAgICByZXR1cm4gcy50cmltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHMucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGFnQ2hhbmdlKHRhZywgdGV4dCwgaW5kZXgpIHtcbiAgICBpZiAodGV4dC5jaGFyQXQoaW5kZXgpICE9IHRhZy5jaGFyQXQoMCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMSwgbCA9IHRhZy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh0ZXh0LmNoYXJBdChpbmRleCArIGkpICE9IHRhZy5jaGFyQXQoaSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gdGhlIHRhZ3MgYWxsb3dlZCBpbnNpZGUgc3VwZXIgdGVtcGxhdGVzXG4gIHZhciBhbGxvd2VkSW5TdXBlciA9IHsnX3QnOiB0cnVlLCAnXFxuJzogdHJ1ZSwgJyQnOiB0cnVlLCAnLyc6IHRydWV9O1xuXG4gIGZ1bmN0aW9uIGJ1aWxkVHJlZSh0b2tlbnMsIGtpbmQsIHN0YWNrLCBjdXN0b21UYWdzKSB7XG4gICAgdmFyIGluc3RydWN0aW9ucyA9IFtdLFxuICAgICAgICBvcGVuZXIgPSBudWxsLFxuICAgICAgICB0YWlsID0gbnVsbCxcbiAgICAgICAgdG9rZW4gPSBudWxsO1xuXG4gICAgdGFpbCA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuXG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGggPiAwKSB7XG4gICAgICB0b2tlbiA9IHRva2Vucy5zaGlmdCgpO1xuXG4gICAgICBpZiAodGFpbCAmJiB0YWlsLnRhZyA9PSAnPCcgJiYgISh0b2tlbi50YWcgaW4gYWxsb3dlZEluU3VwZXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBjb250ZW50IGluIDwgc3VwZXIgdGFnLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoSG9nYW4udGFnc1t0b2tlbi50YWddIDw9IEhvZ2FuLnRhZ3NbJyQnXSB8fCBpc09wZW5lcih0b2tlbiwgY3VzdG9tVGFncykpIHtcbiAgICAgICAgc3RhY2sucHVzaCh0b2tlbik7XG4gICAgICAgIHRva2VuLm5vZGVzID0gYnVpbGRUcmVlKHRva2VucywgdG9rZW4udGFnLCBzdGFjaywgY3VzdG9tVGFncyk7XG4gICAgICB9IGVsc2UgaWYgKHRva2VuLnRhZyA9PSAnLycpIHtcbiAgICAgICAgaWYgKHN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2xvc2luZyB0YWcgd2l0aG91dCBvcGVuZXI6IC8nICsgdG9rZW4ubik7XG4gICAgICAgIH1cbiAgICAgICAgb3BlbmVyID0gc3RhY2sucG9wKCk7XG4gICAgICAgIGlmICh0b2tlbi5uICE9IG9wZW5lci5uICYmICFpc0Nsb3Nlcih0b2tlbi5uLCBvcGVuZXIubiwgY3VzdG9tVGFncykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05lc3RpbmcgZXJyb3I6ICcgKyBvcGVuZXIubiArICcgdnMuICcgKyB0b2tlbi5uKTtcbiAgICAgICAgfVxuICAgICAgICBvcGVuZXIuZW5kID0gdG9rZW4uaTtcbiAgICAgICAgcmV0dXJuIGluc3RydWN0aW9ucztcbiAgICAgIH0gZWxzZSBpZiAodG9rZW4udGFnID09ICdcXG4nKSB7XG4gICAgICAgIHRva2VuLmxhc3QgPSAodG9rZW5zLmxlbmd0aCA9PSAwKSB8fCAodG9rZW5zWzBdLnRhZyA9PSAnXFxuJyk7XG4gICAgICB9XG5cbiAgICAgIGluc3RydWN0aW9ucy5wdXNoKHRva2VuKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNsb3NpbmcgdGFnOiAnICsgc3RhY2sucG9wKCkubik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RydWN0aW9ucztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzT3BlbmVyKHRva2VuLCB0YWdzKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0YWdzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKHRhZ3NbaV0ubyA9PSB0b2tlbi5uKSB7XG4gICAgICAgIHRva2VuLnRhZyA9ICcjJztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNDbG9zZXIoY2xvc2UsIG9wZW4sIHRhZ3MpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRhZ3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAodGFnc1tpXS5jID09IGNsb3NlICYmIHRhZ3NbaV0ubyA9PSBvcGVuKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cmluZ2lmeVN1YnN0aXR1dGlvbnMob2JqKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaXRlbXMucHVzaCgnXCInICsgZXNjKGtleSkgKyAnXCI6IGZ1bmN0aW9uKGMscCx0LGkpIHsnICsgb2JqW2tleV0gKyAnfScpO1xuICAgIH1cbiAgICByZXR1cm4gXCJ7IFwiICsgaXRlbXMuam9pbihcIixcIikgKyBcIiB9XCI7XG4gIH1cblxuICBmdW5jdGlvbiBzdHJpbmdpZnlQYXJ0aWFscyhjb2RlT2JqKSB7XG4gICAgdmFyIHBhcnRpYWxzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIGNvZGVPYmoucGFydGlhbHMpIHtcbiAgICAgIHBhcnRpYWxzLnB1c2goJ1wiJyArIGVzYyhrZXkpICsgJ1wiOntuYW1lOlwiJyArIGVzYyhjb2RlT2JqLnBhcnRpYWxzW2tleV0ubmFtZSkgKyAnXCIsICcgKyBzdHJpbmdpZnlQYXJ0aWFscyhjb2RlT2JqLnBhcnRpYWxzW2tleV0pICsgXCJ9XCIpO1xuICAgIH1cbiAgICByZXR1cm4gXCJwYXJ0aWFsczoge1wiICsgcGFydGlhbHMuam9pbihcIixcIikgKyBcIn0sIHN1YnM6IFwiICsgc3RyaW5naWZ5U3Vic3RpdHV0aW9ucyhjb2RlT2JqLnN1YnMpO1xuICB9XG5cbiAgSG9nYW4uc3RyaW5naWZ5ID0gZnVuY3Rpb24oY29kZU9iaiwgdGV4dCwgb3B0aW9ucykge1xuICAgIHJldHVybiBcIntjb2RlOiBmdW5jdGlvbiAoYyxwLGkpIHsgXCIgKyBIb2dhbi53cmFwTWFpbihjb2RlT2JqLmNvZGUpICsgXCIgfSxcIiArIHN0cmluZ2lmeVBhcnRpYWxzKGNvZGVPYmopICsgIFwifVwiO1xuICB9XG5cbiAgdmFyIHNlcmlhbE5vID0gMDtcbiAgSG9nYW4uZ2VuZXJhdGUgPSBmdW5jdGlvbih0cmVlLCB0ZXh0LCBvcHRpb25zKSB7XG4gICAgc2VyaWFsTm8gPSAwO1xuICAgIHZhciBjb250ZXh0ID0geyBjb2RlOiAnJywgc3Viczoge30sIHBhcnRpYWxzOiB7fSB9O1xuICAgIEhvZ2FuLndhbGsodHJlZSwgY29udGV4dCk7XG5cbiAgICBpZiAob3B0aW9ucy5hc1N0cmluZykge1xuICAgICAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KGNvbnRleHQsIHRleHQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm1ha2VUZW1wbGF0ZShjb250ZXh0LCB0ZXh0LCBvcHRpb25zKTtcbiAgfVxuXG4gIEhvZ2FuLndyYXBNYWluID0gZnVuY3Rpb24oY29kZSkge1xuICAgIHJldHVybiAndmFyIHQ9dGhpczt0LmIoaT1pfHxcIlwiKTsnICsgY29kZSArICdyZXR1cm4gdC5mbCgpOyc7XG4gIH1cblxuICBIb2dhbi50ZW1wbGF0ZSA9IEhvZ2FuLlRlbXBsYXRlO1xuXG4gIEhvZ2FuLm1ha2VUZW1wbGF0ZSA9IGZ1bmN0aW9uKGNvZGVPYmosIHRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLm1ha2VQYXJ0aWFscyhjb2RlT2JqKTtcbiAgICB0ZW1wbGF0ZS5jb2RlID0gbmV3IEZ1bmN0aW9uKCdjJywgJ3AnLCAnaScsIHRoaXMud3JhcE1haW4oY29kZU9iai5jb2RlKSk7XG4gICAgcmV0dXJuIG5ldyB0aGlzLnRlbXBsYXRlKHRlbXBsYXRlLCB0ZXh0LCB0aGlzLCBvcHRpb25zKTtcbiAgfVxuXG4gIEhvZ2FuLm1ha2VQYXJ0aWFscyA9IGZ1bmN0aW9uKGNvZGVPYmopIHtcbiAgICB2YXIga2V5LCB0ZW1wbGF0ZSA9IHtzdWJzOiB7fSwgcGFydGlhbHM6IGNvZGVPYmoucGFydGlhbHMsIG5hbWU6IGNvZGVPYmoubmFtZX07XG4gICAgZm9yIChrZXkgaW4gdGVtcGxhdGUucGFydGlhbHMpIHtcbiAgICAgIHRlbXBsYXRlLnBhcnRpYWxzW2tleV0gPSB0aGlzLm1ha2VQYXJ0aWFscyh0ZW1wbGF0ZS5wYXJ0aWFsc1trZXldKTtcbiAgICB9XG4gICAgZm9yIChrZXkgaW4gY29kZU9iai5zdWJzKSB7XG4gICAgICB0ZW1wbGF0ZS5zdWJzW2tleV0gPSBuZXcgRnVuY3Rpb24oJ2MnLCAncCcsICd0JywgJ2knLCBjb2RlT2JqLnN1YnNba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVzYyhzKSB7XG4gICAgcmV0dXJuIHMucmVwbGFjZShyU2xhc2gsICdcXFxcXFxcXCcpXG4gICAgICAgICAgICAucmVwbGFjZShyUXVvdCwgJ1xcXFxcXFwiJylcbiAgICAgICAgICAgIC5yZXBsYWNlKHJOZXdsaW5lLCAnXFxcXG4nKVxuICAgICAgICAgICAgLnJlcGxhY2UockNyLCAnXFxcXHInKVxuICAgICAgICAgICAgLnJlcGxhY2UockxpbmVTZXAsICdcXFxcdTIwMjgnKVxuICAgICAgICAgICAgLnJlcGxhY2UoclBhcmFncmFwaFNlcCwgJ1xcXFx1MjAyOScpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hvb3NlTWV0aG9kKHMpIHtcbiAgICByZXR1cm4gKH5zLmluZGV4T2YoJy4nKSkgPyAnZCcgOiAnZic7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQYXJ0aWFsKG5vZGUsIGNvbnRleHQpIHtcbiAgICB2YXIgcHJlZml4ID0gXCI8XCIgKyAoY29udGV4dC5wcmVmaXggfHwgXCJcIik7XG4gICAgdmFyIHN5bSA9IHByZWZpeCArIG5vZGUubiArIHNlcmlhbE5vKys7XG4gICAgY29udGV4dC5wYXJ0aWFsc1tzeW1dID0ge25hbWU6IG5vZGUubiwgcGFydGlhbHM6IHt9fTtcbiAgICBjb250ZXh0LmNvZGUgKz0gJ3QuYih0LnJwKFwiJyArICBlc2Moc3ltKSArICdcIixjLHAsXCInICsgKG5vZGUuaW5kZW50IHx8ICcnKSArICdcIikpOyc7XG4gICAgcmV0dXJuIHN5bTtcbiAgfVxuXG4gIEhvZ2FuLmNvZGVnZW4gPSB7XG4gICAgJyMnOiBmdW5jdGlvbihub2RlLCBjb250ZXh0KSB7XG4gICAgICBjb250ZXh0LmNvZGUgKz0gJ2lmKHQucyh0LicgKyBjaG9vc2VNZXRob2Qobm9kZS5uKSArICcoXCInICsgZXNjKG5vZGUubikgKyAnXCIsYyxwLDEpLCcgK1xuICAgICAgICAgICAgICAgICAgICAgICdjLHAsMCwnICsgbm9kZS5pICsgJywnICsgbm9kZS5lbmQgKyAnLFwiJyArIG5vZGUub3RhZyArIFwiIFwiICsgbm9kZS5jdGFnICsgJ1wiKSl7JyArXG4gICAgICAgICAgICAgICAgICAgICAgJ3QucnMoYyxwLCcgKyAnZnVuY3Rpb24oYyxwLHQpeyc7XG4gICAgICBIb2dhbi53YWxrKG5vZGUubm9kZXMsIGNvbnRleHQpO1xuICAgICAgY29udGV4dC5jb2RlICs9ICd9KTtjLnBvcCgpO30nO1xuICAgIH0sXG5cbiAgICAnXic6IGZ1bmN0aW9uKG5vZGUsIGNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQuY29kZSArPSAnaWYoIXQucyh0LicgKyBjaG9vc2VNZXRob2Qobm9kZS5uKSArICcoXCInICsgZXNjKG5vZGUubikgKyAnXCIsYyxwLDEpLGMscCwxLDAsMCxcIlwiKSl7JztcbiAgICAgIEhvZ2FuLndhbGsobm9kZS5ub2RlcywgY29udGV4dCk7XG4gICAgICBjb250ZXh0LmNvZGUgKz0gJ307JztcbiAgICB9LFxuXG4gICAgJz4nOiBjcmVhdGVQYXJ0aWFsLFxuICAgICc8JzogZnVuY3Rpb24obm9kZSwgY29udGV4dCkge1xuICAgICAgdmFyIGN0eCA9IHtwYXJ0aWFsczoge30sIGNvZGU6ICcnLCBzdWJzOiB7fSwgaW5QYXJ0aWFsOiB0cnVlfTtcbiAgICAgIEhvZ2FuLndhbGsobm9kZS5ub2RlcywgY3R4KTtcbiAgICAgIHZhciB0ZW1wbGF0ZSA9IGNvbnRleHQucGFydGlhbHNbY3JlYXRlUGFydGlhbChub2RlLCBjb250ZXh0KV07XG4gICAgICB0ZW1wbGF0ZS5zdWJzID0gY3R4LnN1YnM7XG4gICAgICB0ZW1wbGF0ZS5wYXJ0aWFscyA9IGN0eC5wYXJ0aWFscztcbiAgICB9LFxuXG4gICAgJyQnOiBmdW5jdGlvbihub2RlLCBjb250ZXh0KSB7XG4gICAgICB2YXIgY3R4ID0ge3N1YnM6IHt9LCBjb2RlOiAnJywgcGFydGlhbHM6IGNvbnRleHQucGFydGlhbHMsIHByZWZpeDogbm9kZS5ufTtcbiAgICAgIEhvZ2FuLndhbGsobm9kZS5ub2RlcywgY3R4KTtcbiAgICAgIGNvbnRleHQuc3Vic1tub2RlLm5dID0gY3R4LmNvZGU7XG4gICAgICBpZiAoIWNvbnRleHQuaW5QYXJ0aWFsKSB7XG4gICAgICAgIGNvbnRleHQuY29kZSArPSAndC5zdWIoXCInICsgZXNjKG5vZGUubikgKyAnXCIsYyxwLGkpOyc7XG4gICAgICB9XG4gICAgfSxcblxuICAgICdcXG4nOiBmdW5jdGlvbihub2RlLCBjb250ZXh0KSB7XG4gICAgICBjb250ZXh0LmNvZGUgKz0gd3JpdGUoJ1wiXFxcXG5cIicgKyAobm9kZS5sYXN0ID8gJycgOiAnICsgaScpKTtcbiAgICB9LFxuXG4gICAgJ192JzogZnVuY3Rpb24obm9kZSwgY29udGV4dCkge1xuICAgICAgY29udGV4dC5jb2RlICs9ICd0LmIodC52KHQuJyArIGNob29zZU1ldGhvZChub2RlLm4pICsgJyhcIicgKyBlc2Mobm9kZS5uKSArICdcIixjLHAsMCkpKTsnO1xuICAgIH0sXG5cbiAgICAnX3QnOiBmdW5jdGlvbihub2RlLCBjb250ZXh0KSB7XG4gICAgICBjb250ZXh0LmNvZGUgKz0gd3JpdGUoJ1wiJyArIGVzYyhub2RlLnRleHQpICsgJ1wiJyk7XG4gICAgfSxcblxuICAgICd7JzogdHJpcGxlU3RhY2hlLFxuXG4gICAgJyYnOiB0cmlwbGVTdGFjaGVcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyaXBsZVN0YWNoZShub2RlLCBjb250ZXh0KSB7XG4gICAgY29udGV4dC5jb2RlICs9ICd0LmIodC50KHQuJyArIGNob29zZU1ldGhvZChub2RlLm4pICsgJyhcIicgKyBlc2Mobm9kZS5uKSArICdcIixjLHAsMCkpKTsnO1xuICB9XG5cbiAgZnVuY3Rpb24gd3JpdGUocykge1xuICAgIHJldHVybiAndC5iKCcgKyBzICsgJyk7JztcbiAgfVxuXG4gIEhvZ2FuLndhbGsgPSBmdW5jdGlvbihub2RlbGlzdCwgY29udGV4dCkge1xuICAgIHZhciBmdW5jO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gbm9kZWxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmdW5jID0gSG9nYW4uY29kZWdlbltub2RlbGlzdFtpXS50YWddO1xuICAgICAgZnVuYyAmJiBmdW5jKG5vZGVsaXN0W2ldLCBjb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBIb2dhbi5wYXJzZSA9IGZ1bmN0aW9uKHRva2VucywgdGV4dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHJldHVybiBidWlsZFRyZWUodG9rZW5zLCAnJywgW10sIG9wdGlvbnMuc2VjdGlvblRhZ3MgfHwgW10pO1xuICB9XG5cbiAgSG9nYW4uY2FjaGUgPSB7fTtcblxuICBIb2dhbi5jYWNoZUtleSA9IGZ1bmN0aW9uKHRleHQsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gW3RleHQsICEhb3B0aW9ucy5hc1N0cmluZywgISFvcHRpb25zLmRpc2FibGVMYW1iZGEsIG9wdGlvbnMuZGVsaW1pdGVycywgISFvcHRpb25zLm1vZGVsR2V0XS5qb2luKCd8fCcpO1xuICB9XG5cbiAgSG9nYW4uY29tcGlsZSA9IGZ1bmN0aW9uKHRleHQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIga2V5ID0gSG9nYW4uY2FjaGVLZXkodGV4dCwgb3B0aW9ucyk7XG4gICAgdmFyIHRlbXBsYXRlID0gdGhpcy5jYWNoZVtrZXldO1xuXG4gICAgaWYgKHRlbXBsYXRlKSB7XG4gICAgICB2YXIgcGFydGlhbHMgPSB0ZW1wbGF0ZS5wYXJ0aWFscztcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gcGFydGlhbHMpIHtcbiAgICAgICAgZGVsZXRlIHBhcnRpYWxzW25hbWVdLmluc3RhbmNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cblxuICAgIHRlbXBsYXRlID0gdGhpcy5nZW5lcmF0ZSh0aGlzLnBhcnNlKHRoaXMuc2Nhbih0ZXh0LCBvcHRpb25zLmRlbGltaXRlcnMpLCB0ZXh0LCBvcHRpb25zKSwgdGV4dCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XSA9IHRlbXBsYXRlO1xuICB9XG59KSh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcgPyBleHBvcnRzIDogSG9nYW4pO1xuIiwidmFyIHNwZWNpYWxzID0gW1xuICAgICctJyxcbiAgICAnWycsXG4gICAgJ10nLFxuICAgICcvJyxcbiAgICAneycsXG4gICAgJ30nLFxuICAgICcoJyxcbiAgICAnKScsXG4gICAgJyonLFxuICAgICcrJyxcbiAgICAnPycsXG4gICAgJy4nLFxuICAgICdcXFxcJyxcbiAgICAnXicsXG4gICAgJyQnLFxuICAgICd8Jyxcbl07XG52YXIgcmVnZXggPSBSZWdFeHAoJ1snICsgc3BlY2lhbHMuam9pbignXFxcXCcpICsgJ10nLCAnZycpO1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZUZvclJlZ0V4cChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UocmVnZXgsICdcXFxcJCYnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoID8gcGF0aC5yZXBsYWNlKC9cXFxcL2csICcvJykgOiBwYXRoO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hDb2RlKHRleHQpIHtcbiAgICB2YXIgaSwgY2hyLCBsZW47XG4gICAgdmFyIGhhc2ggPSAwO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHRleHQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY2hyID0gdGV4dC5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgY2hyO1xuICAgICAgICBoYXNoIHw9IDA7XG4gICAgfVxuICAgIHJldHVybiBoYXNoO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiLypcbiAqICBDb3B5cmlnaHQgMjAxMSBUd2l0dGVyLCBJbmMuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBUaGlzIGZpbGUgaXMgZm9yIHVzZSB3aXRoIE5vZGUuanMuIFNlZSBkaXN0LyBmb3IgYnJvd3NlciBmaWxlcy5cblxudmFyIEhvZ2FuID0gcmVxdWlyZSgnLi9jb21waWxlcicpO1xuSG9nYW4uVGVtcGxhdGUgPSByZXF1aXJlKCcuL3RlbXBsYXRlJykuVGVtcGxhdGU7XG5Ib2dhbi50ZW1wbGF0ZSA9IEhvZ2FuLlRlbXBsYXRlO1xubW9kdWxlLmV4cG9ydHMgPSBIb2dhbjtcbiIsImV4cG9ydCB2YXIgTGluZVR5cGU7XG4oZnVuY3Rpb24gKExpbmVUeXBlKSB7XG4gICAgTGluZVR5cGVbXCJJTlNFUlRcIl0gPSBcImluc2VydFwiO1xuICAgIExpbmVUeXBlW1wiREVMRVRFXCJdID0gXCJkZWxldGVcIjtcbiAgICBMaW5lVHlwZVtcIkNPTlRFWFRcIl0gPSBcImNvbnRleHRcIjtcbn0pKExpbmVUeXBlIHx8IChMaW5lVHlwZSA9IHt9KSk7XG5leHBvcnQgdmFyIE91dHB1dEZvcm1hdFR5cGUgPSB7XG4gICAgTElORV9CWV9MSU5FOiAnbGluZS1ieS1saW5lJyxcbiAgICBTSURFX0JZX1NJREU6ICdzaWRlLWJ5LXNpZGUnLFxufTtcbmV4cG9ydCB2YXIgTGluZU1hdGNoaW5nVHlwZSA9IHtcbiAgICBMSU5FUzogJ2xpbmVzJyxcbiAgICBXT1JEUzogJ3dvcmRzJyxcbiAgICBOT05FOiAnbm9uZScsXG59O1xuZXhwb3J0IHZhciBEaWZmU3R5bGVUeXBlID0ge1xuICAgIFdPUkQ6ICd3b3JkJyxcbiAgICBDSEFSOiAnY2hhcicsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHlwZXMuanMubWFwIiwiLypcbiAqICBDb3B5cmlnaHQgMjAxMSBUd2l0dGVyLCBJbmMuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG52YXIgSG9nYW4gPSB7fTtcblxuKGZ1bmN0aW9uIChIb2dhbikge1xuICBIb2dhbi5UZW1wbGF0ZSA9IGZ1bmN0aW9uIChjb2RlT2JqLCB0ZXh0LCBjb21waWxlciwgb3B0aW9ucykge1xuICAgIGNvZGVPYmogPSBjb2RlT2JqIHx8IHt9O1xuICAgIHRoaXMuciA9IGNvZGVPYmouY29kZSB8fCB0aGlzLnI7XG4gICAgdGhpcy5jID0gY29tcGlsZXI7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLnRleHQgPSB0ZXh0IHx8ICcnO1xuICAgIHRoaXMucGFydGlhbHMgPSBjb2RlT2JqLnBhcnRpYWxzIHx8IHt9O1xuICAgIHRoaXMuc3VicyA9IGNvZGVPYmouc3VicyB8fCB7fTtcbiAgICB0aGlzLmJ1ZiA9ICcnO1xuICB9XG5cbiAgSG9nYW4uVGVtcGxhdGUucHJvdG90eXBlID0ge1xuICAgIC8vIHJlbmRlcjogcmVwbGFjZWQgYnkgZ2VuZXJhdGVkIGNvZGUuXG4gICAgcjogZnVuY3Rpb24gKGNvbnRleHQsIHBhcnRpYWxzLCBpbmRlbnQpIHsgcmV0dXJuICcnOyB9LFxuXG4gICAgLy8gdmFyaWFibGUgZXNjYXBpbmdcbiAgICB2OiBob2dhbkVzY2FwZSxcblxuICAgIC8vIHRyaXBsZSBzdGFjaGVcbiAgICB0OiBjb2VyY2VUb1N0cmluZyxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKGNvbnRleHQsIHBhcnRpYWxzLCBpbmRlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnJpKFtjb250ZXh0XSwgcGFydGlhbHMgfHwge30sIGluZGVudCk7XG4gICAgfSxcblxuICAgIC8vIHJlbmRlciBpbnRlcm5hbCAtLSBhIGhvb2sgZm9yIG92ZXJyaWRlcyB0aGF0IGNhdGNoZXMgcGFydGlhbHMgdG9vXG4gICAgcmk6IGZ1bmN0aW9uIChjb250ZXh0LCBwYXJ0aWFscywgaW5kZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5yKGNvbnRleHQsIHBhcnRpYWxzLCBpbmRlbnQpO1xuICAgIH0sXG5cbiAgICAvLyBlbnN1cmVQYXJ0aWFsXG4gICAgZXA6IGZ1bmN0aW9uKHN5bWJvbCwgcGFydGlhbHMpIHtcbiAgICAgIHZhciBwYXJ0aWFsID0gdGhpcy5wYXJ0aWFsc1tzeW1ib2xdO1xuXG4gICAgICAvLyBjaGVjayB0byBzZWUgdGhhdCBpZiB3ZSd2ZSBpbnN0YW50aWF0ZWQgdGhpcyBwYXJ0aWFsIGJlZm9yZVxuICAgICAgdmFyIHRlbXBsYXRlID0gcGFydGlhbHNbcGFydGlhbC5uYW1lXTtcbiAgICAgIGlmIChwYXJ0aWFsLmluc3RhbmNlICYmIHBhcnRpYWwuYmFzZSA9PSB0ZW1wbGF0ZSkge1xuICAgICAgICByZXR1cm4gcGFydGlhbC5pbnN0YW5jZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoIXRoaXMuYykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbXBpbGVyIGF2YWlsYWJsZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGVtcGxhdGUgPSB0aGlzLmMuY29tcGlsZSh0ZW1wbGF0ZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gV2UgdXNlIHRoaXMgdG8gY2hlY2sgd2hldGhlciB0aGUgcGFydGlhbHMgZGljdGlvbmFyeSBoYXMgY2hhbmdlZFxuICAgICAgdGhpcy5wYXJ0aWFsc1tzeW1ib2xdLmJhc2UgPSB0ZW1wbGF0ZTtcblxuICAgICAgaWYgKHBhcnRpYWwuc3Vicykge1xuICAgICAgICAvLyBNYWtlIHN1cmUgd2UgY29uc2lkZXIgcGFyZW50IHRlbXBsYXRlIG5vd1xuICAgICAgICBpZiAoIXBhcnRpYWxzLnN0YWNrVGV4dCkgcGFydGlhbHMuc3RhY2tUZXh0ID0ge307XG4gICAgICAgIGZvciAoa2V5IGluIHBhcnRpYWwuc3Vicykge1xuICAgICAgICAgIGlmICghcGFydGlhbHMuc3RhY2tUZXh0W2tleV0pIHtcbiAgICAgICAgICAgIHBhcnRpYWxzLnN0YWNrVGV4dFtrZXldID0gKHRoaXMuYWN0aXZlU3ViICE9PSB1bmRlZmluZWQgJiYgcGFydGlhbHMuc3RhY2tUZXh0W3RoaXMuYWN0aXZlU3ViXSkgPyBwYXJ0aWFscy5zdGFja1RleHRbdGhpcy5hY3RpdmVTdWJdIDogdGhpcy50ZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0ZW1wbGF0ZSA9IGNyZWF0ZVNwZWNpYWxpemVkUGFydGlhbCh0ZW1wbGF0ZSwgcGFydGlhbC5zdWJzLCBwYXJ0aWFsLnBhcnRpYWxzLFxuICAgICAgICAgIHRoaXMuc3RhY2tTdWJzLCB0aGlzLnN0YWNrUGFydGlhbHMsIHBhcnRpYWxzLnN0YWNrVGV4dCk7XG4gICAgICB9XG4gICAgICB0aGlzLnBhcnRpYWxzW3N5bWJvbF0uaW5zdGFuY2UgPSB0ZW1wbGF0ZTtcblxuICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH0sXG5cbiAgICAvLyB0cmllcyB0byBmaW5kIGEgcGFydGlhbCBpbiB0aGUgY3VycmVudCBzY29wZSBhbmQgcmVuZGVyIGl0XG4gICAgcnA6IGZ1bmN0aW9uKHN5bWJvbCwgY29udGV4dCwgcGFydGlhbHMsIGluZGVudCkge1xuICAgICAgdmFyIHBhcnRpYWwgPSB0aGlzLmVwKHN5bWJvbCwgcGFydGlhbHMpO1xuICAgICAgaWYgKCFwYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnRpYWwucmkoY29udGV4dCwgcGFydGlhbHMsIGluZGVudCk7XG4gICAgfSxcblxuICAgIC8vIHJlbmRlciBhIHNlY3Rpb25cbiAgICByczogZnVuY3Rpb24oY29udGV4dCwgcGFydGlhbHMsIHNlY3Rpb24pIHtcbiAgICAgIHZhciB0YWlsID0gY29udGV4dFtjb250ZXh0Lmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAoIWlzQXJyYXkodGFpbCkpIHtcbiAgICAgICAgc2VjdGlvbihjb250ZXh0LCBwYXJ0aWFscywgdGhpcyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWlsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnRleHQucHVzaCh0YWlsW2ldKTtcbiAgICAgICAgc2VjdGlvbihjb250ZXh0LCBwYXJ0aWFscywgdGhpcyk7XG4gICAgICAgIGNvbnRleHQucG9wKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIG1heWJlIHN0YXJ0IGEgc2VjdGlvblxuICAgIHM6IGZ1bmN0aW9uKHZhbCwgY3R4LCBwYXJ0aWFscywgaW52ZXJ0ZWQsIHN0YXJ0LCBlbmQsIHRhZ3MpIHtcbiAgICAgIHZhciBwYXNzO1xuXG4gICAgICBpZiAoaXNBcnJheSh2YWwpICYmIHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbCA9IHRoaXMubXModmFsLCBjdHgsIHBhcnRpYWxzLCBpbnZlcnRlZCwgc3RhcnQsIGVuZCwgdGFncyk7XG4gICAgICB9XG5cbiAgICAgIHBhc3MgPSAhIXZhbDtcblxuICAgICAgaWYgKCFpbnZlcnRlZCAmJiBwYXNzICYmIGN0eCkge1xuICAgICAgICBjdHgucHVzaCgodHlwZW9mIHZhbCA9PSAnb2JqZWN0JykgPyB2YWwgOiBjdHhbY3R4Lmxlbmd0aCAtIDFdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhc3M7XG4gICAgfSxcblxuICAgIC8vIGZpbmQgdmFsdWVzIHdpdGggZG90dGVkIG5hbWVzXG4gICAgZDogZnVuY3Rpb24oa2V5LCBjdHgsIHBhcnRpYWxzLCByZXR1cm5Gb3VuZCkge1xuICAgICAgdmFyIGZvdW5kLFxuICAgICAgICAgIG5hbWVzID0ga2V5LnNwbGl0KCcuJyksXG4gICAgICAgICAgdmFsID0gdGhpcy5mKG5hbWVzWzBdLCBjdHgsIHBhcnRpYWxzLCByZXR1cm5Gb3VuZCksXG4gICAgICAgICAgZG9Nb2RlbEdldCA9IHRoaXMub3B0aW9ucy5tb2RlbEdldCxcbiAgICAgICAgICBjeCA9IG51bGw7XG5cbiAgICAgIGlmIChrZXkgPT09ICcuJyAmJiBpc0FycmF5KGN0eFtjdHgubGVuZ3RoIC0gMl0pKSB7XG4gICAgICAgIHZhbCA9IGN0eFtjdHgubGVuZ3RoIC0gMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZm91bmQgPSBmaW5kSW5TY29wZShuYW1lc1tpXSwgdmFsLCBkb01vZGVsR2V0KTtcbiAgICAgICAgICBpZiAoZm91bmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY3ggPSB2YWw7XG4gICAgICAgICAgICB2YWwgPSBmb3VuZDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXR1cm5Gb3VuZCAmJiAhdmFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFyZXR1cm5Gb3VuZCAmJiB0eXBlb2YgdmFsID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY3R4LnB1c2goY3gpO1xuICAgICAgICB2YWwgPSB0aGlzLm12KHZhbCwgY3R4LCBwYXJ0aWFscyk7XG4gICAgICAgIGN0eC5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9LFxuXG4gICAgLy8gZmluZCB2YWx1ZXMgd2l0aCBub3JtYWwgbmFtZXNcbiAgICBmOiBmdW5jdGlvbihrZXksIGN0eCwgcGFydGlhbHMsIHJldHVybkZvdW5kKSB7XG4gICAgICB2YXIgdmFsID0gZmFsc2UsXG4gICAgICAgICAgdiA9IG51bGwsXG4gICAgICAgICAgZm91bmQgPSBmYWxzZSxcbiAgICAgICAgICBkb01vZGVsR2V0ID0gdGhpcy5vcHRpb25zLm1vZGVsR2V0O1xuXG4gICAgICBmb3IgKHZhciBpID0gY3R4Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHYgPSBjdHhbaV07XG4gICAgICAgIHZhbCA9IGZpbmRJblNjb3BlKGtleSwgdiwgZG9Nb2RlbEdldCk7XG4gICAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgIHJldHVybiAocmV0dXJuRm91bmQpID8gZmFsc2UgOiBcIlwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXJldHVybkZvdW5kICYmIHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YWwgPSB0aGlzLm12KHZhbCwgY3R4LCBwYXJ0aWFscyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWw7XG4gICAgfSxcblxuICAgIC8vIGhpZ2hlciBvcmRlciB0ZW1wbGF0ZXNcbiAgICBsczogZnVuY3Rpb24oZnVuYywgY3gsIHBhcnRpYWxzLCB0ZXh0LCB0YWdzKSB7XG4gICAgICB2YXIgb2xkVGFncyA9IHRoaXMub3B0aW9ucy5kZWxpbWl0ZXJzO1xuXG4gICAgICB0aGlzLm9wdGlvbnMuZGVsaW1pdGVycyA9IHRhZ3M7XG4gICAgICB0aGlzLmIodGhpcy5jdChjb2VyY2VUb1N0cmluZyhmdW5jLmNhbGwoY3gsIHRleHQpKSwgY3gsIHBhcnRpYWxzKSk7XG4gICAgICB0aGlzLm9wdGlvbnMuZGVsaW1pdGVycyA9IG9sZFRhZ3M7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgLy8gY29tcGlsZSB0ZXh0XG4gICAgY3Q6IGZ1bmN0aW9uKHRleHQsIGN4LCBwYXJ0aWFscykge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlTGFtYmRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTGFtYmRhIGZlYXR1cmVzIGRpc2FibGVkLicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuYy5jb21waWxlKHRleHQsIHRoaXMub3B0aW9ucykucmVuZGVyKGN4LCBwYXJ0aWFscyk7XG4gICAgfSxcblxuICAgIC8vIHRlbXBsYXRlIHJlc3VsdCBidWZmZXJpbmdcbiAgICBiOiBmdW5jdGlvbihzKSB7IHRoaXMuYnVmICs9IHM7IH0sXG5cbiAgICBmbDogZnVuY3Rpb24oKSB7IHZhciByID0gdGhpcy5idWY7IHRoaXMuYnVmID0gJyc7IHJldHVybiByOyB9LFxuXG4gICAgLy8gbWV0aG9kIHJlcGxhY2Ugc2VjdGlvblxuICAgIG1zOiBmdW5jdGlvbihmdW5jLCBjdHgsIHBhcnRpYWxzLCBpbnZlcnRlZCwgc3RhcnQsIGVuZCwgdGFncykge1xuICAgICAgdmFyIHRleHRTb3VyY2UsXG4gICAgICAgICAgY3ggPSBjdHhbY3R4Lmxlbmd0aCAtIDFdLFxuICAgICAgICAgIHJlc3VsdCA9IGZ1bmMuY2FsbChjeCk7XG5cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKGludmVydGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGV4dFNvdXJjZSA9ICh0aGlzLmFjdGl2ZVN1YiAmJiB0aGlzLnN1YnNUZXh0ICYmIHRoaXMuc3Vic1RleHRbdGhpcy5hY3RpdmVTdWJdKSA/IHRoaXMuc3Vic1RleHRbdGhpcy5hY3RpdmVTdWJdIDogdGhpcy50ZXh0O1xuICAgICAgICAgIHJldHVybiB0aGlzLmxzKHJlc3VsdCwgY3gsIHBhcnRpYWxzLCB0ZXh0U291cmNlLnN1YnN0cmluZyhzdGFydCwgZW5kKSwgdGFncyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgLy8gbWV0aG9kIHJlcGxhY2UgdmFyaWFibGVcbiAgICBtdjogZnVuY3Rpb24oZnVuYywgY3R4LCBwYXJ0aWFscykge1xuICAgICAgdmFyIGN4ID0gY3R4W2N0eC5sZW5ndGggLSAxXTtcbiAgICAgIHZhciByZXN1bHQgPSBmdW5jLmNhbGwoY3gpO1xuXG4gICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN0KGNvZXJjZVRvU3RyaW5nKHJlc3VsdC5jYWxsKGN4KSksIGN4LCBwYXJ0aWFscyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIHN1YjogZnVuY3Rpb24obmFtZSwgY29udGV4dCwgcGFydGlhbHMsIGluZGVudCkge1xuICAgICAgdmFyIGYgPSB0aGlzLnN1YnNbbmFtZV07XG4gICAgICBpZiAoZikge1xuICAgICAgICB0aGlzLmFjdGl2ZVN1YiA9IG5hbWU7XG4gICAgICAgIGYoY29udGV4dCwgcGFydGlhbHMsIHRoaXMsIGluZGVudCk7XG4gICAgICAgIHRoaXMuYWN0aXZlU3ViID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gIH07XG5cbiAgLy9GaW5kIGEga2V5IGluIGFuIG9iamVjdFxuICBmdW5jdGlvbiBmaW5kSW5TY29wZShrZXksIHNjb3BlLCBkb01vZGVsR2V0KSB7XG4gICAgdmFyIHZhbDtcblxuICAgIGlmIChzY29wZSAmJiB0eXBlb2Ygc2NvcGUgPT0gJ29iamVjdCcpIHtcblxuICAgICAgaWYgKHNjb3BlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWwgPSBzY29wZVtrZXldO1xuXG4gICAgICAvLyB0cnkgbG9va3VwIHdpdGggZ2V0IGZvciBiYWNrYm9uZSBvciBzaW1pbGFyIG1vZGVsIGRhdGFcbiAgICAgIH0gZWxzZSBpZiAoZG9Nb2RlbEdldCAmJiBzY29wZS5nZXQgJiYgdHlwZW9mIHNjb3BlLmdldCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbCA9IHNjb3BlLmdldChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTcGVjaWFsaXplZFBhcnRpYWwoaW5zdGFuY2UsIHN1YnMsIHBhcnRpYWxzLCBzdGFja1N1YnMsIHN0YWNrUGFydGlhbHMsIHN0YWNrVGV4dCkge1xuICAgIGZ1bmN0aW9uIFBhcnRpYWxUZW1wbGF0ZSgpIHt9O1xuICAgIFBhcnRpYWxUZW1wbGF0ZS5wcm90b3R5cGUgPSBpbnN0YW5jZTtcbiAgICBmdW5jdGlvbiBTdWJzdGl0dXRpb25zKCkge307XG4gICAgU3Vic3RpdHV0aW9ucy5wcm90b3R5cGUgPSBpbnN0YW5jZS5zdWJzO1xuICAgIHZhciBrZXk7XG4gICAgdmFyIHBhcnRpYWwgPSBuZXcgUGFydGlhbFRlbXBsYXRlKCk7XG4gICAgcGFydGlhbC5zdWJzID0gbmV3IFN1YnN0aXR1dGlvbnMoKTtcbiAgICBwYXJ0aWFsLnN1YnNUZXh0ID0ge307ICAvL2hlaGUuIHN1YnN0ZXh0LlxuICAgIHBhcnRpYWwuYnVmID0gJyc7XG5cbiAgICBzdGFja1N1YnMgPSBzdGFja1N1YnMgfHwge307XG4gICAgcGFydGlhbC5zdGFja1N1YnMgPSBzdGFja1N1YnM7XG4gICAgcGFydGlhbC5zdWJzVGV4dCA9IHN0YWNrVGV4dDtcbiAgICBmb3IgKGtleSBpbiBzdWJzKSB7XG4gICAgICBpZiAoIXN0YWNrU3Vic1trZXldKSBzdGFja1N1YnNba2V5XSA9IHN1YnNba2V5XTtcbiAgICB9XG4gICAgZm9yIChrZXkgaW4gc3RhY2tTdWJzKSB7XG4gICAgICBwYXJ0aWFsLnN1YnNba2V5XSA9IHN0YWNrU3Vic1trZXldO1xuICAgIH1cblxuICAgIHN0YWNrUGFydGlhbHMgPSBzdGFja1BhcnRpYWxzIHx8IHt9O1xuICAgIHBhcnRpYWwuc3RhY2tQYXJ0aWFscyA9IHN0YWNrUGFydGlhbHM7XG4gICAgZm9yIChrZXkgaW4gcGFydGlhbHMpIHtcbiAgICAgIGlmICghc3RhY2tQYXJ0aWFsc1trZXldKSBzdGFja1BhcnRpYWxzW2tleV0gPSBwYXJ0aWFsc1trZXldO1xuICAgIH1cbiAgICBmb3IgKGtleSBpbiBzdGFja1BhcnRpYWxzKSB7XG4gICAgICBwYXJ0aWFsLnBhcnRpYWxzW2tleV0gPSBzdGFja1BhcnRpYWxzW2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnRpYWw7XG4gIH1cblxuICB2YXIgckFtcCA9IC8mL2csXG4gICAgICByTHQgPSAvPC9nLFxuICAgICAgckd0ID0gLz4vZyxcbiAgICAgIHJBcG9zID0gL1xcJy9nLFxuICAgICAgclF1b3QgPSAvXFxcIi9nLFxuICAgICAgaENoYXJzID0gL1smPD5cXFwiXFwnXS87XG5cbiAgZnVuY3Rpb24gY29lcmNlVG9TdHJpbmcodmFsKSB7XG4gICAgcmV0dXJuIFN0cmluZygodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSA/ICcnIDogdmFsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhvZ2FuRXNjYXBlKHN0cikge1xuICAgIHN0ciA9IGNvZXJjZVRvU3RyaW5nKHN0cik7XG4gICAgcmV0dXJuIGhDaGFycy50ZXN0KHN0cikgP1xuICAgICAgc3RyXG4gICAgICAgIC5yZXBsYWNlKHJBbXAsICcmYW1wOycpXG4gICAgICAgIC5yZXBsYWNlKHJMdCwgJyZsdDsnKVxuICAgICAgICAucmVwbGFjZShyR3QsICcmZ3Q7JylcbiAgICAgICAgLnJlcGxhY2UockFwb3MsICcmIzM5OycpXG4gICAgICAgIC5yZXBsYWNlKHJRdW90LCAnJnF1b3Q7JykgOlxuICAgICAgc3RyO1xuICB9XG5cbiAgdmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uKGEpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9O1xuXG59KSh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcgPyBleHBvcnRzIDogSG9nYW4pO1xuIiwiaW1wb3J0ICogYXMgSG9nYW4gZnJvbSBcImhvZ2FuLmpzXCI7XG5leHBvcnQgdmFyIGRlZmF1bHRUZW1wbGF0ZXMgPSB7fTtcbmRlZmF1bHRUZW1wbGF0ZXNbXCJmaWxlLXN1bW1hcnktbGluZVwiXSA9IG5ldyBIb2dhbi5UZW1wbGF0ZSh7IGNvZGU6IGZ1bmN0aW9uIChjLCBwLCBpKSB7IHZhciB0ID0gdGhpczsgdC5iKGkgPSBpIHx8IFwiXCIpOyB0LmIoXCI8bGkgY2xhc3M9XFxcImQyaC1maWxlLWxpc3QtbGluZVxcXCI+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgPHNwYW4gY2xhc3M9XFxcImQyaC1maWxlLW5hbWUtd3JhcHBlclxcXCI+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIodC5ycChcIjxmaWxlSWNvbjBcIiwgYywgcCwgXCIgICAgICBcIikpOyB0LmIoXCIgICAgICA8YSBocmVmPVxcXCIjXCIpOyB0LmIodC52KHQuZihcImZpbGVIdG1sSWRcIiwgYywgcCwgMCkpKTsgdC5iKFwiXFxcIiBjbGFzcz1cXFwiZDJoLWZpbGUtbmFtZVxcXCI+XCIpOyB0LmIodC52KHQuZihcImZpbGVOYW1lXCIsIGMsIHAsIDApKSk7IHQuYihcIjwvYT5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICAgIDxzcGFuIGNsYXNzPVxcXCJkMmgtZmlsZS1zdGF0c1xcXCI+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImQyaC1saW5lcy1hZGRlZFxcXCI+XCIpOyB0LmIodC52KHQuZihcImFkZGVkTGluZXNcIiwgYywgcCwgMCkpKTsgdC5iKFwiPC9zcGFuPlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkMmgtbGluZXMtZGVsZXRlZFxcXCI+XCIpOyB0LmIodC52KHQuZihcImRlbGV0ZWRMaW5lc1wiLCBjLCBwLCAwKSkpOyB0LmIoXCI8L3NwYW4+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgICA8L3NwYW4+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgPC9zcGFuPlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiPC9saT5cIik7IHJldHVybiB0LmZsKCk7IH0sIHBhcnRpYWxzOiB7IFwiPGZpbGVJY29uMFwiOiB7IG5hbWU6IFwiZmlsZUljb25cIiwgcGFydGlhbHM6IHt9LCBzdWJzOiB7fSB9IH0sIHN1YnM6IHt9IH0pO1xuZGVmYXVsdFRlbXBsYXRlc1tcImZpbGUtc3VtbWFyeS13cmFwcGVyXCJdID0gbmV3IEhvZ2FuLlRlbXBsYXRlKHsgY29kZTogZnVuY3Rpb24gKGMsIHAsIGkpIHsgdmFyIHQgPSB0aGlzOyB0LmIoaSA9IGkgfHwgXCJcIik7IHQuYihcIjxkaXYgY2xhc3M9XFxcImQyaC1maWxlLWxpc3Qtd3JhcHBlclxcXCI+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgPGRpdiBjbGFzcz1cXFwiZDJoLWZpbGUtbGlzdC1oZWFkZXJcXFwiPlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZDJoLWZpbGUtbGlzdC10aXRsZVxcXCI+RmlsZXMgY2hhbmdlZCAoXCIpOyB0LmIodC52KHQuZihcImZpbGVzTnVtYmVyXCIsIGMsIHAsIDApKSk7IHQuYihcIik8L3NwYW4+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgICAgIDxhIGNsYXNzPVxcXCJkMmgtZmlsZS1zd2l0Y2ggZDJoLWhpZGVcXFwiPmhpZGU8L2E+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgICAgIDxhIGNsYXNzPVxcXCJkMmgtZmlsZS1zd2l0Y2ggZDJoLXNob3dcXFwiPnNob3c8L2E+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgPC9kaXY+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgPG9sIGNsYXNzPVxcXCJkMmgtZmlsZS1saXN0XFxcIj5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICBcIik7IHQuYih0LnQodC5mKFwiZmlsZXNcIiwgYywgcCwgMCkpKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiICAgIDwvb2w+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCI8L2Rpdj5cIik7IHJldHVybiB0LmZsKCk7IH0sIHBhcnRpYWxzOiB7fSwgc3Viczoge30gfSk7XG5kZWZhdWx0VGVtcGxhdGVzW1wiZ2VuZXJpYy1ibG9jay1oZWFkZXJcIl0gPSBuZXcgSG9nYW4uVGVtcGxhdGUoeyBjb2RlOiBmdW5jdGlvbiAoYywgcCwgaSkgeyB2YXIgdCA9IHRoaXM7IHQuYihpID0gaSB8fCBcIlwiKTsgdC5iKFwiPHRyPlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiICAgIDx0ZCBjbGFzcz1cXFwiXCIpOyB0LmIodC52KHQuZihcImxpbmVDbGFzc1wiLCBjLCBwLCAwKSkpOyB0LmIoXCIgXCIpOyB0LmIodC52KHQuZChcIkNTU0xpbmVDbGFzcy5JTkZPXCIsIGMsIHAsIDApKSk7IHQuYihcIlxcXCI+PC90ZD5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICA8dGQgY2xhc3M9XFxcIlwiKTsgdC5iKHQudih0LmQoXCJDU1NMaW5lQ2xhc3MuSU5GT1wiLCBjLCBwLCAwKSkpOyB0LmIoXCJcXFwiPlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJcIik7IHQuYih0LnYodC5mKFwiY29udGVudENsYXNzXCIsIGMsIHAsIDApKSk7IHQuYihcIiBcIik7IHQuYih0LnYodC5kKFwiQ1NTTGluZUNsYXNzLklORk9cIiwgYywgcCwgMCkpKTsgdC5iKFwiXFxcIj5cIik7IHQuYih0LnQodC5mKFwiYmxvY2tIZWFkZXJcIiwgYywgcCwgMCkpKTsgdC5iKFwiPC9kaXY+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgPC90ZD5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIjwvdHI+XCIpOyByZXR1cm4gdC5mbCgpOyB9LCBwYXJ0aWFsczoge30sIHN1YnM6IHt9IH0pO1xuZGVmYXVsdFRlbXBsYXRlc1tcImdlbmVyaWMtZW1wdHktZGlmZlwiXSA9IG5ldyBIb2dhbi5UZW1wbGF0ZSh7IGNvZGU6IGZ1bmN0aW9uIChjLCBwLCBpKSB7IHZhciB0ID0gdGhpczsgdC5iKGkgPSBpIHx8IFwiXCIpOyB0LmIoXCI8dHI+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgPHRkIGNsYXNzPVxcXCJcIik7IHQuYih0LnYodC5kKFwiQ1NTTGluZUNsYXNzLklORk9cIiwgYywgcCwgMCkpKTsgdC5iKFwiXFxcIj5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiXCIpOyB0LmIodC52KHQuZihcImNvbnRlbnRDbGFzc1wiLCBjLCBwLCAwKSkpOyB0LmIoXCIgXCIpOyB0LmIodC52KHQuZChcIkNTU0xpbmVDbGFzcy5JTkZPXCIsIGMsIHAsIDApKSk7IHQuYihcIlxcXCI+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgICAgICAgICBGaWxlIHdpdGhvdXQgY2hhbmdlc1wiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiICAgICAgICA8L2Rpdj5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICA8L3RkPlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiPC90cj5cIik7IHJldHVybiB0LmZsKCk7IH0sIHBhcnRpYWxzOiB7fSwgc3Viczoge30gfSk7XG5kZWZhdWx0VGVtcGxhdGVzW1wiZ2VuZXJpYy1maWxlLXBhdGhcIl0gPSBuZXcgSG9nYW4uVGVtcGxhdGUoeyBjb2RlOiBmdW5jdGlvbiAoYywgcCwgaSkgeyB2YXIgdCA9IHRoaXM7IHQuYihpID0gaSB8fCBcIlwiKTsgdC5iKFwiPHNwYW4gY2xhc3M9XFxcImQyaC1maWxlLW5hbWUtd3JhcHBlclxcXCI+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIodC5ycChcIjxmaWxlSWNvbjBcIiwgYywgcCwgXCIgICAgXCIpKTsgdC5iKFwiICAgIDxzcGFuIGNsYXNzPVxcXCJkMmgtZmlsZS1uYW1lXFxcIj5cIik7IHQuYih0LnYodC5mKFwiZmlsZURpZmZOYW1lXCIsIGMsIHAsIDApKSk7IHQuYihcIjwvc3Bhbj5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYih0LnJwKFwiPGZpbGVUYWcxXCIsIGMsIHAsIFwiICAgIFwiKSk7IHQuYihcIjwvc3Bhbj5cIik7IHJldHVybiB0LmZsKCk7IH0sIHBhcnRpYWxzOiB7IFwiPGZpbGVJY29uMFwiOiB7IG5hbWU6IFwiZmlsZUljb25cIiwgcGFydGlhbHM6IHt9LCBzdWJzOiB7fSB9LCBcIjxmaWxlVGFnMVwiOiB7IG5hbWU6IFwiZmlsZVRhZ1wiLCBwYXJ0aWFsczoge30sIHN1YnM6IHt9IH0gfSwgc3Viczoge30gfSk7XG5kZWZhdWx0VGVtcGxhdGVzW1wiZ2VuZXJpYy1saW5lXCJdID0gbmV3IEhvZ2FuLlRlbXBsYXRlKHsgY29kZTogZnVuY3Rpb24gKGMsIHAsIGkpIHsgdmFyIHQgPSB0aGlzOyB0LmIoaSA9IGkgfHwgXCJcIik7IHQuYihcIjx0cj5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICA8dGQgY2xhc3M9XFxcIlwiKTsgdC5iKHQudih0LmYoXCJsaW5lQ2xhc3NcIiwgYywgcCwgMCkpKTsgdC5iKFwiIFwiKTsgdC5iKHQudih0LmYoXCJ0eXBlXCIsIGMsIHAsIDApKSk7IHQuYihcIlxcXCI+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgICBcIik7IHQuYih0LnQodC5mKFwibGluZU51bWJlclwiLCBjLCBwLCAwKSkpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgPC90ZD5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICA8dGQgY2xhc3M9XFxcIlwiKTsgdC5iKHQudih0LmYoXCJ0eXBlXCIsIGMsIHAsIDApKSk7IHQuYihcIlxcXCI+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcIlwiKTsgdC5iKHQudih0LmYoXCJjb250ZW50Q2xhc3NcIiwgYywgcCwgMCkpKTsgdC5iKFwiIFwiKTsgdC5iKHQudih0LmYoXCJ0eXBlXCIsIGMsIHAsIDApKSk7IHQuYihcIlxcXCI+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyBpZiAodC5zKHQuZihcInByZWZpeFwiLCBjLCBwLCAxKSwgYywgcCwgMCwgMTcxLCAyNDcsIFwie3sgfX1cIikpIHtcbiAgICAgICAgdC5ycyhjLCBwLCBmdW5jdGlvbiAoYywgcCwgdCkgeyB0LmIoXCIgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZDJoLWNvZGUtbGluZS1wcmVmaXhcXFwiPlwiKTsgdC5iKHQudCh0LmYoXCJwcmVmaXhcIiwgYywgcCwgMCkpKTsgdC5iKFwiPC9zcGFuPlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgfSk7XG4gICAgICAgIGMucG9wKCk7XG4gICAgfSBpZiAoIXQucyh0LmYoXCJwcmVmaXhcIiwgYywgcCwgMSksIGMsIHAsIDEsIDAsIDAsIFwiXCIpKSB7XG4gICAgICAgIHQuYihcIiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkMmgtY29kZS1saW5lLXByZWZpeFxcXCI+Jm5ic3A7PC9zcGFuPlwiKTtcbiAgICAgICAgdC5iKFwiXFxuXCIgKyBpKTtcbiAgICB9IDsgaWYgKHQucyh0LmYoXCJjb250ZW50XCIsIGMsIHAsIDEpLCBjLCBwLCAwLCAzODAsIDQ1NCwgXCJ7eyB9fVwiKSkge1xuICAgICAgICB0LnJzKGMsIHAsIGZ1bmN0aW9uIChjLCBwLCB0KSB7IHQuYihcIiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJkMmgtY29kZS1saW5lLWN0blxcXCI+XCIpOyB0LmIodC50KHQuZihcImNvbnRlbnRcIiwgYywgcCwgMCkpKTsgdC5iKFwiPC9zcGFuPlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgfSk7XG4gICAgICAgIGMucG9wKCk7XG4gICAgfSBpZiAoIXQucyh0LmYoXCJjb250ZW50XCIsIGMsIHAsIDEpLCBjLCBwLCAxLCAwLCAwLCBcIlwiKSkge1xuICAgICAgICB0LmIoXCIgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZDJoLWNvZGUtbGluZS1jdG5cXFwiPjxicj48L3NwYW4+XCIpO1xuICAgICAgICB0LmIoXCJcXG5cIiArIGkpO1xuICAgIH0gOyB0LmIoXCIgICAgICAgIDwvZGl2PlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiICAgIDwvdGQ+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCI8L3RyPlwiKTsgcmV0dXJuIHQuZmwoKTsgfSwgcGFydGlhbHM6IHt9LCBzdWJzOiB7fSB9KTtcbmRlZmF1bHRUZW1wbGF0ZXNbXCJnZW5lcmljLXdyYXBwZXJcIl0gPSBuZXcgSG9nYW4uVGVtcGxhdGUoeyBjb2RlOiBmdW5jdGlvbiAoYywgcCwgaSkgeyB2YXIgdCA9IHRoaXM7IHQuYihpID0gaSB8fCBcIlwiKTsgdC5iKFwiPGRpdiBjbGFzcz1cXFwiZDJoLXdyYXBwZXJcXFwiPlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiICAgIFwiKTsgdC5iKHQudCh0LmYoXCJjb250ZW50XCIsIGMsIHAsIDApKSk7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIjwvZGl2PlwiKTsgcmV0dXJuIHQuZmwoKTsgfSwgcGFydGlhbHM6IHt9LCBzdWJzOiB7fSB9KTtcbmRlZmF1bHRUZW1wbGF0ZXNbXCJpY29uLWZpbGUtYWRkZWRcIl0gPSBuZXcgSG9nYW4uVGVtcGxhdGUoeyBjb2RlOiBmdW5jdGlvbiAoYywgcCwgaSkgeyB2YXIgdCA9IHRoaXM7IHQuYihpID0gaSB8fCBcIlwiKTsgdC5iKFwiPHN2ZyBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImQyaC1pY29uIGQyaC1hZGRlZFxcXCIgaGVpZ2h0PVxcXCIxNlxcXCIgdGl0bGU9XFxcImFkZGVkXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNCAxNlxcXCJcIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICAgd2lkdGg9XFxcIjE0XFxcIj5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICA8cGF0aCBkPVxcXCJNMTMgMUgxQzAuNDUgMSAwIDEuNDUgMCAydjEyYzAgMC41NSAwLjQ1IDEgMSAxaDEyYzAuNTUgMCAxLTAuNDUgMS0xVjJjMC0wLjU1LTAuNDUtMS0xLTF6IG0wIDEzSDFWMmgxMnYxMnpNNiA5SDNWN2gzVjRoMnYzaDN2Mkg4djNINlY5elxcXCI+PC9wYXRoPlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiPC9zdmc+XCIpOyByZXR1cm4gdC5mbCgpOyB9LCBwYXJ0aWFsczoge30sIHN1YnM6IHt9IH0pO1xuZGVmYXVsdFRlbXBsYXRlc1tcImljb24tZmlsZS1jaGFuZ2VkXCJdID0gbmV3IEhvZ2FuLlRlbXBsYXRlKHsgY29kZTogZnVuY3Rpb24gKGMsIHAsIGkpIHsgdmFyIHQgPSB0aGlzOyB0LmIoaSA9IGkgfHwgXCJcIik7IHQuYihcIjxzdmcgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJkMmgtaWNvbiBkMmgtY2hhbmdlZFxcXCIgaGVpZ2h0PVxcXCIxNlxcXCIgdGl0bGU9XFxcIm1vZGlmaWVkXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiXCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgIHZpZXdCb3g9XFxcIjAgMCAxNCAxNlxcXCIgd2lkdGg9XFxcIjE0XFxcIj5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICA8cGF0aCBkPVxcXCJNMTMgMUgxQzAuNDUgMSAwIDEuNDUgMCAydjEyYzAgMC41NSAwLjQ1IDEgMSAxaDEyYzAuNTUgMCAxLTAuNDUgMS0xVjJjMC0wLjU1LTAuNDUtMS0xLTF6IG0wIDEzSDFWMmgxMnYxMnpNNCA4YzAtMS42NiAxLjM0LTMgMy0zczMgMS4zNCAzIDMtMS4zNCAzLTMgMy0zLTEuMzQtMy0zelxcXCI+PC9wYXRoPlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiPC9zdmc+XCIpOyByZXR1cm4gdC5mbCgpOyB9LCBwYXJ0aWFsczoge30sIHN1YnM6IHt9IH0pO1xuZGVmYXVsdFRlbXBsYXRlc1tcImljb24tZmlsZS1kZWxldGVkXCJdID0gbmV3IEhvZ2FuLlRlbXBsYXRlKHsgY29kZTogZnVuY3Rpb24gKGMsIHAsIGkpIHsgdmFyIHQgPSB0aGlzOyB0LmIoaSA9IGkgfHwgXCJcIik7IHQuYihcIjxzdmcgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGNsYXNzPVxcXCJkMmgtaWNvbiBkMmgtZGVsZXRlZFxcXCIgaGVpZ2h0PVxcXCIxNlxcXCIgdGl0bGU9XFxcInJlbW92ZWRcXFwiIHZlcnNpb249XFxcIjEuMVxcXCJcIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICAgdmlld0JveD1cXFwiMCAwIDE0IDE2XFxcIiB3aWR0aD1cXFwiMTRcXFwiPlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiICAgIDxwYXRoIGQ9XFxcIk0xMyAxSDFDMC40NSAxIDAgMS40NSAwIDJ2MTJjMCAwLjU1IDAuNDUgMSAxIDFoMTJjMC41NSAwIDEtMC40NSAxLTFWMmMwLTAuNTUtMC40NS0xLTEtMXogbTAgMTNIMVYyaDEydjEyek0xMSA5SDNWN2g4djJ6XFxcIj48L3BhdGg+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCI8L3N2Zz5cIik7IHJldHVybiB0LmZsKCk7IH0sIHBhcnRpYWxzOiB7fSwgc3Viczoge30gfSk7XG5kZWZhdWx0VGVtcGxhdGVzW1wiaWNvbi1maWxlLXJlbmFtZWRcIl0gPSBuZXcgSG9nYW4uVGVtcGxhdGUoeyBjb2RlOiBmdW5jdGlvbiAoYywgcCwgaSkgeyB2YXIgdCA9IHRoaXM7IHQuYihpID0gaSB8fCBcIlwiKTsgdC5iKFwiPHN2ZyBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImQyaC1pY29uIGQyaC1tb3ZlZFxcXCIgaGVpZ2h0PVxcXCIxNlxcXCIgdGl0bGU9XFxcInJlbmFtZWRcXFwiIHZlcnNpb249XFxcIjEuMVxcXCJcIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICAgdmlld0JveD1cXFwiMCAwIDE0IDE2XFxcIiB3aWR0aD1cXFwiMTRcXFwiPlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiICAgIDxwYXRoIGQ9XFxcIk02IDlIM1Y3aDNWNGw1IDQtNSA0Vjl6IG04LTd2MTJjMCAwLjU1LTAuNDUgMS0xIDFIMWMtMC41NSAwLTEtMC40NS0xLTFWMmMwLTAuNTUgMC40NS0xIDEtMWgxMmMwLjU1IDAgMSAwLjQ1IDEgMXogbS0xIDBIMXYxMmgxMlYyelxcXCI+PC9wYXRoPlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiPC9zdmc+XCIpOyByZXR1cm4gdC5mbCgpOyB9LCBwYXJ0aWFsczoge30sIHN1YnM6IHt9IH0pO1xuZGVmYXVsdFRlbXBsYXRlc1tcImljb24tZmlsZVwiXSA9IG5ldyBIb2dhbi5UZW1wbGF0ZSh7IGNvZGU6IGZ1bmN0aW9uIChjLCBwLCBpKSB7IHZhciB0ID0gdGhpczsgdC5iKGkgPSBpIHx8IFwiXCIpOyB0LmIoXCI8c3ZnIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiZDJoLWljb25cXFwiIGhlaWdodD1cXFwiMTZcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDEyIDE2XFxcIiB3aWR0aD1cXFwiMTJcXFwiPlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiICAgIDxwYXRoIGQ9XFxcIk02IDVIMnYtMWg0djF6TTIgOGg3di0xSDJ2MXogbTAgMmg3di0xSDJ2MXogbTAgMmg3di0xSDJ2MXogbTEwLTcuNXY5LjVjMCAwLjU1LTAuNDUgMS0xIDFIMWMtMC41NSAwLTEtMC40NS0xLTFWMmMwLTAuNTUgMC40NS0xIDEtMWg3LjVsMy41IDMuNXogbS0xIDAuNUw4IDJIMXYxMmgxMFY1elxcXCI+PC9wYXRoPlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiPC9zdmc+XCIpOyByZXR1cm4gdC5mbCgpOyB9LCBwYXJ0aWFsczoge30sIHN1YnM6IHt9IH0pO1xuZGVmYXVsdFRlbXBsYXRlc1tcImxpbmUtYnktbGluZS1maWxlLWRpZmZcIl0gPSBuZXcgSG9nYW4uVGVtcGxhdGUoeyBjb2RlOiBmdW5jdGlvbiAoYywgcCwgaSkgeyB2YXIgdCA9IHRoaXM7IHQuYihpID0gaSB8fCBcIlwiKTsgdC5iKFwiPGRpdiBpZD1cXFwiXCIpOyB0LmIodC52KHQuZihcImZpbGVIdG1sSWRcIiwgYywgcCwgMCkpKTsgdC5iKFwiXFxcIiBjbGFzcz1cXFwiZDJoLWZpbGUtd3JhcHBlclxcXCIgZGF0YS1sYW5nPVxcXCJcIik7IHQuYih0LnYodC5kKFwiZmlsZS5sYW5ndWFnZVwiLCBjLCBwLCAwKSkpOyB0LmIoXCJcXFwiPlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiICAgIDxkaXYgY2xhc3M9XFxcImQyaC1maWxlLWhlYWRlclxcXCI+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgXCIpOyB0LmIodC50KHQuZihcImZpbGVQYXRoXCIsIGMsIHAsIDApKSk7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICA8L2Rpdj5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICA8ZGl2IGNsYXNzPVxcXCJkMmgtZmlsZS1kaWZmXFxcIj5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZDJoLWNvZGUtd3JhcHBlclxcXCI+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcImQyaC1kaWZmLXRhYmxlXFxcIj5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3M9XFxcImQyaC1kaWZmLXRib2R5XFxcIj5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICAgICAgICAgICAgICBcIik7IHQuYih0LnQodC5mKFwiZGlmZnNcIiwgYywgcCwgMCkpKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiICAgICAgICAgICAgICAgIDwvdGJvZHk+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgICAgICAgICA8L3RhYmxlPlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiICAgICAgICA8L2Rpdj5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICA8L2Rpdj5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIjwvZGl2PlwiKTsgcmV0dXJuIHQuZmwoKTsgfSwgcGFydGlhbHM6IHt9LCBzdWJzOiB7fSB9KTtcbmRlZmF1bHRUZW1wbGF0ZXNbXCJsaW5lLWJ5LWxpbmUtbnVtYmVyc1wiXSA9IG5ldyBIb2dhbi5UZW1wbGF0ZSh7IGNvZGU6IGZ1bmN0aW9uIChjLCBwLCBpKSB7IHZhciB0ID0gdGhpczsgdC5iKGkgPSBpIHx8IFwiXCIpOyB0LmIoXCI8ZGl2IGNsYXNzPVxcXCJsaW5lLW51bTFcXFwiPlwiKTsgdC5iKHQudih0LmYoXCJvbGROdW1iZXJcIiwgYywgcCwgMCkpKTsgdC5iKFwiPC9kaXY+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCI8ZGl2IGNsYXNzPVxcXCJsaW5lLW51bTJcXFwiPlwiKTsgdC5iKHQudih0LmYoXCJuZXdOdW1iZXJcIiwgYywgcCwgMCkpKTsgdC5iKFwiPC9kaXY+XCIpOyByZXR1cm4gdC5mbCgpOyB9LCBwYXJ0aWFsczoge30sIHN1YnM6IHt9IH0pO1xuZGVmYXVsdFRlbXBsYXRlc1tcInNpZGUtYnktc2lkZS1maWxlLWRpZmZcIl0gPSBuZXcgSG9nYW4uVGVtcGxhdGUoeyBjb2RlOiBmdW5jdGlvbiAoYywgcCwgaSkgeyB2YXIgdCA9IHRoaXM7IHQuYihpID0gaSB8fCBcIlwiKTsgdC5iKFwiPGRpdiBpZD1cXFwiXCIpOyB0LmIodC52KHQuZihcImZpbGVIdG1sSWRcIiwgYywgcCwgMCkpKTsgdC5iKFwiXFxcIiBjbGFzcz1cXFwiZDJoLWZpbGUtd3JhcHBlclxcXCIgZGF0YS1sYW5nPVxcXCJcIik7IHQuYih0LnYodC5kKFwiZmlsZS5sYW5ndWFnZVwiLCBjLCBwLCAwKSkpOyB0LmIoXCJcXFwiPlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiICAgIDxkaXYgY2xhc3M9XFxcImQyaC1maWxlLWhlYWRlclxcXCI+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgICBcIik7IHQuYih0LnQodC5mKFwiZmlsZVBhdGhcIiwgYywgcCwgMCkpKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiICAgIDwvZGl2PlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiICAgIDxkaXYgY2xhc3M9XFxcImQyaC1maWxlcy1kaWZmXFxcIj5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZDJoLWZpbGUtc2lkZS1kaWZmXFxcIj5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImQyaC1jb2RlLXdyYXBwZXJcXFwiPlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwiZDJoLWRpZmYtdGFibGVcXFwiPlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3M9XFxcImQyaC1kaWZmLXRib2R5XFxcIj5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICAgICAgICAgICAgICAgICAgXCIpOyB0LmIodC50KHQuZChcImRpZmZzLmxlZnRcIiwgYywgcCwgMCkpKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiICAgICAgICAgICAgICAgIDwvdGFibGU+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgICAgICAgICA8L2Rpdj5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICAgICAgPC9kaXY+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcImQyaC1maWxlLXNpZGUtZGlmZlxcXCI+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkMmgtY29kZS13cmFwcGVyXFxcIj5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcImQyaC1kaWZmLXRhYmxlXFxcIj5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzPVxcXCJkMmgtZGlmZi10Ym9keVxcXCI+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgICAgICAgICAgICAgICAgIFwiKTsgdC5iKHQudCh0LmQoXCJkaWZmcy5yaWdodFwiLCBjLCBwLCAwKSkpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XCIpOyB0LmIoXCJcXG5cIiArIGkpOyB0LmIoXCIgICAgICAgICAgICAgICAgPC90YWJsZT5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICAgICAgICAgIDwvZGl2PlwiKTsgdC5iKFwiXFxuXCIgKyBpKTsgdC5iKFwiICAgICAgICA8L2Rpdj5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIiAgICA8L2Rpdj5cIik7IHQuYihcIlxcblwiICsgaSk7IHQuYihcIjwvZGl2PlwiKTsgcmV0dXJuIHQuZmwoKTsgfSwgcGFydGlhbHM6IHt9LCBzdWJzOiB7fSB9KTtcbmRlZmF1bHRUZW1wbGF0ZXNbXCJ0YWctZmlsZS1hZGRlZFwiXSA9IG5ldyBIb2dhbi5UZW1wbGF0ZSh7IGNvZGU6IGZ1bmN0aW9uIChjLCBwLCBpKSB7IHZhciB0ID0gdGhpczsgdC5iKGkgPSBpIHx8IFwiXCIpOyB0LmIoXCI8c3BhbiBjbGFzcz1cXFwiZDJoLXRhZyBkMmgtYWRkZWQgZDJoLWFkZGVkLXRhZ1xcXCI+QURERUQ8L3NwYW4+XCIpOyByZXR1cm4gdC5mbCgpOyB9LCBwYXJ0aWFsczoge30sIHN1YnM6IHt9IH0pO1xuZGVmYXVsdFRlbXBsYXRlc1tcInRhZy1maWxlLWNoYW5nZWRcIl0gPSBuZXcgSG9nYW4uVGVtcGxhdGUoeyBjb2RlOiBmdW5jdGlvbiAoYywgcCwgaSkgeyB2YXIgdCA9IHRoaXM7IHQuYihpID0gaSB8fCBcIlwiKTsgdC5iKFwiPHNwYW4gY2xhc3M9XFxcImQyaC10YWcgZDJoLWNoYW5nZWQgZDJoLWNoYW5nZWQtdGFnXFxcIj5DSEFOR0VEPC9zcGFuPlwiKTsgcmV0dXJuIHQuZmwoKTsgfSwgcGFydGlhbHM6IHt9LCBzdWJzOiB7fSB9KTtcbmRlZmF1bHRUZW1wbGF0ZXNbXCJ0YWctZmlsZS1kZWxldGVkXCJdID0gbmV3IEhvZ2FuLlRlbXBsYXRlKHsgY29kZTogZnVuY3Rpb24gKGMsIHAsIGkpIHsgdmFyIHQgPSB0aGlzOyB0LmIoaSA9IGkgfHwgXCJcIik7IHQuYihcIjxzcGFuIGNsYXNzPVxcXCJkMmgtdGFnIGQyaC1kZWxldGVkIGQyaC1kZWxldGVkLXRhZ1xcXCI+REVMRVRFRDwvc3Bhbj5cIik7IHJldHVybiB0LmZsKCk7IH0sIHBhcnRpYWxzOiB7fSwgc3Viczoge30gfSk7XG5kZWZhdWx0VGVtcGxhdGVzW1widGFnLWZpbGUtcmVuYW1lZFwiXSA9IG5ldyBIb2dhbi5UZW1wbGF0ZSh7IGNvZGU6IGZ1bmN0aW9uIChjLCBwLCBpKSB7IHZhciB0ID0gdGhpczsgdC5iKGkgPSBpIHx8IFwiXCIpOyB0LmIoXCI8c3BhbiBjbGFzcz1cXFwiZDJoLXRhZyBkMmgtbW92ZWQgZDJoLW1vdmVkLXRhZ1xcXCI+UkVOQU1FRDwvc3Bhbj5cIik7IHJldHVybiB0LmZsKCk7IH0sIHBhcnRpYWxzOiB7fSwgc3Viczoge30gfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kaWZmMmh0bWwtdGVtcGxhdGVzLmpzLm1hcCIsImltcG9ydCAqIGFzIGRpZmZMaWIgZnJvbSAnZGlmZmxpYidcbmltcG9ydCAqIGFzIERpZmYySHRtbCBmcm9tICdkaWZmMmh0bWwnXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuL3V0aWxzJ1xuXG5mdW5jdGlvbiBtYWluICgpIHtcbiAgY29uc29sZS5sb2coJ3N0YXJ0IGJnbSB3aWtpIHJldiBkaWZmIFVzZXJTY3JpcHQnKVxuICBpbml0VUkoKVxufVxuXG5mdW5jdGlvbiBpbml0VUkgKCkge1xuICAkKCcjcGFnZWhpc3RvcnkgbGknKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBlbCA9ICQodGhpcylcbiAgICBjb25zdCByZXYgPSBwYXJzZVJldkVsKGVsKVxuICAgIGVsLnByZXBlbmQoYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInJldi10cmltMjEtY25cIiBuYW1lPVwicmV2XCIgbGFiZWw9XCJzZWxlY3QgdG8gY29tcGFyZVwiIHZhbHVlPVwiJHtyZXYuaWR9XCI+YClcbiAgfSlcbiAgJCgnI2NvbHVtbkluU3ViamVjdEEgc3Bhbi50ZXh0JykuYXBwZW5kKCc8YSBocmVmPVwiIztcIiBpZD1cImNvbXBhcmUtdHJpbTIxLWNuXCIgdGFyIGNsYXNzPVwibFwiPiA+IOavlOi+g+mAieS4reeahOeJiOacrDwvYT4nKVxuICAkKCcjY29tcGFyZS10cmltMjEtY24nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRSZXZzID0gZ2V0U2VsZWN0ZWRWZXJzaW9uKClcbiAgICBjb21wYXJlKHNlbGVjdGVkUmV2cylcbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0U2VsZWN0ZWRWZXJzaW9uICgpIHtcbiAgY29uc3Qgc2VsZWN0ZWRWZXJzaW9uID0gW11cbiAgY29uc3Qgc2VsZWN0ZWRSZXYgPSAkKCcucmV2LXRyaW0yMS1jbjpjaGVja2VkJylcbiAgaWYgKHNlbGVjdGVkUmV2Lmxlbmd0aCA8IDIpIHtcbiAgICB3aW5kb3cuYWxlcnQoJ+ivt+mAieS4reS4pOS4queJiOacrOi/m+ihjOavlOi+gycpXG4gIH1cbiAgaWYgKHNlbGVjdGVkUmV2Lmxlbmd0aCA+IDIpIHtcbiAgICB3aW5kb3cuYWxlcnQoJ+WPquiDveavlOi+g+S4pOS4queJiOacrCcpXG4gIH1cbiAgc2VsZWN0ZWRSZXYuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZWwgPSAkKHRoaXMpXG4gICAgc2VsZWN0ZWRWZXJzaW9uLnB1c2goZWwudmFsKCkpXG4gIH0pXG4gIHNlbGVjdGVkVmVyc2lvbi5yZXZlcnNlKClcbiAgcmV0dXJuIHNlbGVjdGVkVmVyc2lvblxufVxuXG5mdW5jdGlvbiBjb21wYXJlIChyZXZzKSB7XG4gIGNvbnNvbGUubG9nKCdjb21wYXJlJylcbiAgJCgnaGVhZCcpLmFwcGVuZCgnPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2RpZmYyaHRtbC9idW5kbGVzL2Nzcy9kaWZmMmh0bWwubWluLmNzc1wiIC8+JylcbiAgY29uc3QgcmV2MSA9IGdldFJldkluZm8ocmV2c1swXSlcbiAgY29uc3QgcmV2MiA9IGdldFJldkluZm8ocmV2c1sxXSlcbiAgY29uc3QgcDEgPSByZXF1ZXN0KHJldjEudXJsKVxuICBjb25zdCBwMiA9IHJlcXVlc3QocmV2Mi51cmwpXG4gIFByb21pc2UuYWxsKFtwMSwgcDJdKS50aGVuKHZhbHVlcyA9PiB7XG4gICAgY29uc3QgY29udGVudHMgPSBbXVxuICAgIGZvciAoY29uc3QgcGFnZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGNvbnN0IGpxID0gJChwYWdlLnJlc3BvbnNlVGV4dClcbiAgICAgIGNvbnRlbnRzLnB1c2goanEuZmluZCgnI3N1YmplY3RfaW5mb2JveCcpLnZhbCgpKVxuICAgIH1cbiAgICBjb25zdCBkID0gZGlmZkxpYi51bmlmaWVkRGlmZihjb250ZW50c1swXS5zcGxpdCgnXFxuJyksIGNvbnRlbnRzWzFdLnNwbGl0KCdcXG4nKSwge1xuICAgICAgZnJvbWZpbGU6IHJldjEuY29tbWVudCxcbiAgICAgIHRvZmlsZTogcmV2Mi5jb21tZW50LFxuICAgICAgZnJvbWZpbGVkYXRlOiByZXYxLmRhdGUsXG4gICAgICB0b2ZpbGVkYXRlOiByZXYyLmRhdGUsXG4gICAgICBsaW5ldGVybTogJydcbiAgICB9KVxuICAgIGNvbnN0IHJlbmRlcmVkID0gcmVuZGVyKGQuam9pbignXFxuJyksIHt9KVxuICAgIHNob3cocmVuZGVyZWQpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdldFJldnMgKCkge1xuICBjb25zdCByZXZzID0gW11cbiAgJCgnI3BhZ2VoaXN0b3J5IGxpJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZWwgPSAkKHRoaXMpXG4gICAgcmV2cy5wdXNoKHBhcnNlUmV2RWwoZWwpKVxuICB9KVxuICByZXR1cm4gcmV2c1xufVxuXG5mdW5jdGlvbiBwYXJzZVJldkVsIChlbCkge1xuICBjb25zdCBkYXRlID0gZWwuZmluZCgnYScpLmZpcnN0KCkuaHRtbCgpXG4gIGNvbnN0IHJldkVMID0gZWwuZmluZCgnYS5sOmNvbnRhaW5zKFwi5oGi5aSNXCIpJylcbiAgY29uc3QgcmV2Q29tbWVudEVsID0gZWwuZmluZCgnc3Bhbi5jb21tZW50JylcbiAgbGV0IGNvbW1lbnQgPSAnJ1xuICBpZiAocmV2Q29tbWVudEVsLmxlbmd0aCkge1xuICAgIGNvbW1lbnQgPSByZXZDb21tZW50RWwuaHRtbCgpXG4gICAgY29tbWVudCA9IGNvbW1lbnQuc3Vic3RyaW5nKDEsIGNvbW1lbnQubGVuZ3RoIC0gMSlcbiAgfVxuICBjb25zdCByZXZIcmVmID0gcmV2RUwuYXR0cignaHJlZicpXG4gIGNvbnN0IHJldklEID0gcmV2SHJlZi5zcGxpdCgnLycpLnBvcCgpXG4gIHJldHVybiB7XG4gICAgaWQ6IHJldklELFxuICAgIGNvbW1lbnQsXG4gICAgZGF0ZSxcbiAgICB1cmw6IHJldkhyZWYsXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmV2SW5mbyAocmV2SUQpIHtcbiAgZm9yIChjb25zdCByZXYgb2YgZ2V0UmV2cygpKSB7XG4gICAgaWYgKHJldi5pZCA9PT0gcmV2SUQpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJldklELCByZXYpXG4gICAgICByZXR1cm4gcmV2XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlciAoZGlmZikge1xuICByZXR1cm4gRGlmZjJIdG1sLmh0bWwoZGlmZilcbn1cblxuZnVuY3Rpb24gc2hvdyAoaHRtbCkge1xuICBjb25zdCBlbCA9ICQoJyNzaG93LXRyaW0yMS1jbicpXG4gIGlmIChlbC5sZW5ndGgpIHtcbiAgICBlbC5odG1sKGh0bWwpXG4gIH0gZWxzZSB7XG4gICAgJCgnI2NvbHVtbkluU3ViamVjdEEnKS5wcmVwZW5kKCc8ZGl2IGlkPXNob3ctdHJpbTIxLWNuPjwvZGV2PicpXG4gICAgc2hvdyhodG1sKVxuICB9XG59XG5cbm1haW4oKVxuIiwiZnVuY3Rpb24gcmVxdWVzdCAodXJsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgd2luZG93LkdNX3htbGh0dHBSZXF1ZXN0KHtcbiAgICAgIHVybCxcbiAgICAgIG9ubG9hZDogZnVuY3Rpb24gKHsgcmVzcG9uc2UsIHJlc3BvbnNlVGV4dCwgfSkge1xuICAgICAgICByZXNvbHZlKHsgcmVzcG9uc2UsIHJlc3BvbnNlVGV4dCB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbmV4cG9ydCB7IHJlcXVlc3QgfVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGxldmVuc2h0ZWluKGEsIGIpIHtcbiAgICBpZiAoYS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGIubGVuZ3RoO1xuICAgIH1cbiAgICBpZiAoYi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGEubGVuZ3RoO1xuICAgIH1cbiAgICB2YXIgbWF0cml4ID0gW107XG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gMDsgaSA8PSBiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1hdHJpeFtpXSA9IFtpXTtcbiAgICB9XG4gICAgdmFyIGo7XG4gICAgZm9yIChqID0gMDsgaiA8PSBhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIG1hdHJpeFswXVtqXSA9IGo7XG4gICAgfVxuICAgIGZvciAoaSA9IDE7IGkgPD0gYi5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGogPSAxOyBqIDw9IGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChiLmNoYXJBdChpIC0gMSkgPT09IGEuY2hhckF0KGogLSAxKSkge1xuICAgICAgICAgICAgICAgIG1hdHJpeFtpXVtqXSA9IG1hdHJpeFtpIC0gMV1baiAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWF0cml4W2ldW2pdID0gTWF0aC5taW4obWF0cml4W2kgLSAxXVtqIC0gMV0gKyAxLCBNYXRoLm1pbihtYXRyaXhbaV1baiAtIDFdICsgMSwgbWF0cml4W2kgLSAxXVtqXSArIDEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF0cml4W2IubGVuZ3RoXVthLmxlbmd0aF07XG59XG5leHBvcnQgZnVuY3Rpb24gbmV3RGlzdGFuY2VGbihzdHIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdmFyIHhWYWx1ZSA9IHN0cih4KS50cmltKCk7XG4gICAgICAgIHZhciB5VmFsdWUgPSBzdHIoeSkudHJpbSgpO1xuICAgICAgICB2YXIgbGV2ID0gbGV2ZW5zaHRlaW4oeFZhbHVlLCB5VmFsdWUpO1xuICAgICAgICByZXR1cm4gbGV2IC8gKHhWYWx1ZS5sZW5ndGggKyB5VmFsdWUubGVuZ3RoKTtcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIG5ld01hdGNoZXJGbihkaXN0YW5jZSkge1xuICAgIGZ1bmN0aW9uIGZpbmRCZXN0TWF0Y2goYSwgYiwgY2FjaGUpIHtcbiAgICAgICAgaWYgKGNhY2hlID09PSB2b2lkIDApIHsgY2FjaGUgPSBuZXcgTWFwKCk7IH1cbiAgICAgICAgdmFyIGJlc3RNYXRjaERpc3QgPSBJbmZpbml0eTtcbiAgICAgICAgdmFyIGJlc3RNYXRjaDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGIubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBKU09OLnN0cmluZ2lmeShbYVtpXSwgYltqXV0pO1xuICAgICAgICAgICAgICAgIHZhciBtZCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBpZiAoIShjYWNoZS5oYXMoY2FjaGVLZXkpICYmIChtZCA9IGNhY2hlLmdldChjYWNoZUtleSkpKSkge1xuICAgICAgICAgICAgICAgICAgICBtZCA9IGRpc3RhbmNlKGFbaV0sIGJbal0pO1xuICAgICAgICAgICAgICAgICAgICBjYWNoZS5zZXQoY2FjaGVLZXksIG1kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1kIDwgYmVzdE1hdGNoRGlzdCkge1xuICAgICAgICAgICAgICAgICAgICBiZXN0TWF0Y2hEaXN0ID0gbWQ7XG4gICAgICAgICAgICAgICAgICAgIGJlc3RNYXRjaCA9IHsgaW5kZXhBOiBpLCBpbmRleEI6IGosIHNjb3JlOiBiZXN0TWF0Y2hEaXN0IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiZXN0TWF0Y2g7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdyb3VwKGEsIGIsIGxldmVsLCBjYWNoZSkge1xuICAgICAgICBpZiAobGV2ZWwgPT09IHZvaWQgMCkgeyBsZXZlbCA9IDA7IH1cbiAgICAgICAgaWYgKGNhY2hlID09PSB2b2lkIDApIHsgY2FjaGUgPSBuZXcgTWFwKCk7IH1cbiAgICAgICAgdmFyIGJtID0gZmluZEJlc3RNYXRjaChhLCBiLCBjYWNoZSk7XG4gICAgICAgIGlmICghYm0gfHwgYS5sZW5ndGggKyBiLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgIHJldHVybiBbW2EsIGJdXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYTEgPSBhLnNsaWNlKDAsIGJtLmluZGV4QSk7XG4gICAgICAgIHZhciBiMSA9IGIuc2xpY2UoMCwgYm0uaW5kZXhCKTtcbiAgICAgICAgdmFyIGFNYXRjaCA9IFthW2JtLmluZGV4QV1dO1xuICAgICAgICB2YXIgYk1hdGNoID0gW2JbYm0uaW5kZXhCXV07XG4gICAgICAgIHZhciB0YWlsQSA9IGJtLmluZGV4QSArIDE7XG4gICAgICAgIHZhciB0YWlsQiA9IGJtLmluZGV4QiArIDE7XG4gICAgICAgIHZhciBhMiA9IGEuc2xpY2UodGFpbEEpO1xuICAgICAgICB2YXIgYjIgPSBiLnNsaWNlKHRhaWxCKTtcbiAgICAgICAgdmFyIGdyb3VwMSA9IGdyb3VwKGExLCBiMSwgbGV2ZWwgKyAxLCBjYWNoZSk7XG4gICAgICAgIHZhciBncm91cE1hdGNoID0gZ3JvdXAoYU1hdGNoLCBiTWF0Y2gsIGxldmVsICsgMSwgY2FjaGUpO1xuICAgICAgICB2YXIgZ3JvdXAyID0gZ3JvdXAoYTIsIGIyLCBsZXZlbCArIDEsIGNhY2hlKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGdyb3VwTWF0Y2g7XG4gICAgICAgIGlmIChibS5pbmRleEEgPiAwIHx8IGJtLmluZGV4QiA+IDApIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGdyb3VwMS5jb25jYXQocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYS5sZW5ndGggPiB0YWlsQSB8fCBiLmxlbmd0aCA+IHRhaWxCKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGdyb3VwMik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcmV0dXJuIGdyb3VwO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVtYXRjaC5qcy5tYXAiLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0ICogYXMganNEaWZmIGZyb20gJ2RpZmYnO1xuaW1wb3J0IHsgdW5pZnlQYXRoLCBoYXNoQ29kZSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0ICogYXMgcmVtYXRjaCBmcm9tICcuL3JlbWF0Y2gnO1xuaW1wb3J0IHsgTGluZU1hdGNoaW5nVHlwZSwgRGlmZlN0eWxlVHlwZSwgTGluZVR5cGUgfSBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCB2YXIgQ1NTTGluZUNsYXNzID0ge1xuICAgIElOU0VSVFM6ICdkMmgtaW5zJyxcbiAgICBERUxFVEVTOiAnZDJoLWRlbCcsXG4gICAgQ09OVEVYVDogJ2QyaC1jbnR4JyxcbiAgICBJTkZPOiAnZDJoLWluZm8nLFxuICAgIElOU0VSVF9DSEFOR0VTOiAnZDJoLWlucyBkMmgtY2hhbmdlJyxcbiAgICBERUxFVEVfQ0hBTkdFUzogJ2QyaC1kZWwgZDJoLWNoYW5nZScsXG59O1xuZXhwb3J0IHZhciBkZWZhdWx0UmVuZGVyQ29uZmlnID0ge1xuICAgIG1hdGNoaW5nOiBMaW5lTWF0Y2hpbmdUeXBlLk5PTkUsXG4gICAgbWF0Y2hXb3Jkc1RocmVzaG9sZDogMC4yNSxcbiAgICBtYXhMaW5lTGVuZ3RoSGlnaGxpZ2h0OiAxMDAwMCxcbiAgICBkaWZmU3R5bGU6IERpZmZTdHlsZVR5cGUuV09SRCxcbn07XG52YXIgc2VwYXJhdG9yID0gJy8nO1xudmFyIGRpc3RhbmNlID0gcmVtYXRjaC5uZXdEaXN0YW5jZUZuKGZ1bmN0aW9uIChjaGFuZ2UpIHsgcmV0dXJuIGNoYW5nZS52YWx1ZTsgfSk7XG52YXIgbWF0Y2hlciA9IHJlbWF0Y2gubmV3TWF0Y2hlckZuKGRpc3RhbmNlKTtcbmZ1bmN0aW9uIGlzRGV2TnVsbE5hbWUobmFtZSkge1xuICAgIHJldHVybiBuYW1lLmluZGV4T2YoJ2Rldi9udWxsJykgIT09IC0xO1xufVxuZnVuY3Rpb24gcmVtb3ZlSW5zRWxlbWVudHMobGluZSkge1xuICAgIHJldHVybiBsaW5lLnJlcGxhY2UoLyg8aW5zW14+XSo+KCgufFxcbikqPyk8XFwvaW5zPikvZywgJycpO1xufVxuZnVuY3Rpb24gcmVtb3ZlRGVsRWxlbWVudHMobGluZSkge1xuICAgIHJldHVybiBsaW5lLnJlcGxhY2UoLyg8ZGVsW14+XSo+KCgufFxcbikqPyk8XFwvZGVsPikvZywgJycpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvQ1NTQ2xhc3MobGluZVR5cGUpIHtcbiAgICBzd2l0Y2ggKGxpbmVUeXBlKSB7XG4gICAgICAgIGNhc2UgTGluZVR5cGUuQ09OVEVYVDpcbiAgICAgICAgICAgIHJldHVybiBDU1NMaW5lQ2xhc3MuQ09OVEVYVDtcbiAgICAgICAgY2FzZSBMaW5lVHlwZS5JTlNFUlQ6XG4gICAgICAgICAgICByZXR1cm4gQ1NTTGluZUNsYXNzLklOU0VSVFM7XG4gICAgICAgIGNhc2UgTGluZVR5cGUuREVMRVRFOlxuICAgICAgICAgICAgcmV0dXJuIENTU0xpbmVDbGFzcy5ERUxFVEVTO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHByZWZpeExlbmd0aChpc0NvbWJpbmVkKSB7XG4gICAgcmV0dXJuIGlzQ29tYmluZWQgPyAyIDogMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVGb3JIdG1sKHN0cikge1xuICAgIHJldHVybiBzdHJcbiAgICAgICAgLnNsaWNlKDApXG4gICAgICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgICAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gICAgICAgIC5yZXBsYWNlKC8nL2csICcmI3gyNzsnKVxuICAgICAgICAucmVwbGFjZSgvXFwvL2csICcmI3gyRjsnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWNvbnN0cnVjdExpbmUobGluZSwgaXNDb21iaW5lZCwgZXNjYXBlKSB7XG4gICAgaWYgKGVzY2FwZSA9PT0gdm9pZCAwKSB7IGVzY2FwZSA9IHRydWU7IH1cbiAgICB2YXIgaW5kZXhUb1NwbGl0ID0gcHJlZml4TGVuZ3RoKGlzQ29tYmluZWQpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByZWZpeDogbGluZS5zdWJzdHJpbmcoMCwgaW5kZXhUb1NwbGl0KSxcbiAgICAgICAgY29udGVudDogZXNjYXBlID8gZXNjYXBlRm9ySHRtbChsaW5lLnN1YnN0cmluZyhpbmRleFRvU3BsaXQpKSA6IGxpbmUuc3Vic3RyaW5nKGluZGV4VG9TcGxpdCksXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaWxlbmFtZURpZmYoZmlsZSkge1xuICAgIHZhciBvbGRGaWxlbmFtZSA9IHVuaWZ5UGF0aChmaWxlLm9sZE5hbWUpO1xuICAgIHZhciBuZXdGaWxlbmFtZSA9IHVuaWZ5UGF0aChmaWxlLm5ld05hbWUpO1xuICAgIGlmIChvbGRGaWxlbmFtZSAhPT0gbmV3RmlsZW5hbWUgJiYgIWlzRGV2TnVsbE5hbWUob2xkRmlsZW5hbWUpICYmICFpc0Rldk51bGxOYW1lKG5ld0ZpbGVuYW1lKSkge1xuICAgICAgICB2YXIgcHJlZml4UGF0aHMgPSBbXTtcbiAgICAgICAgdmFyIHN1ZmZpeFBhdGhzID0gW107XG4gICAgICAgIHZhciBvbGRGaWxlbmFtZVBhcnRzID0gb2xkRmlsZW5hbWUuc3BsaXQoc2VwYXJhdG9yKTtcbiAgICAgICAgdmFyIG5ld0ZpbGVuYW1lUGFydHMgPSBuZXdGaWxlbmFtZS5zcGxpdChzZXBhcmF0b3IpO1xuICAgICAgICB2YXIgb2xkRmlsZW5hbWVQYXJ0c1NpemUgPSBvbGRGaWxlbmFtZVBhcnRzLmxlbmd0aDtcbiAgICAgICAgdmFyIG5ld0ZpbGVuYW1lUGFydHNTaXplID0gbmV3RmlsZW5hbWVQYXJ0cy5sZW5ndGg7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGogPSBvbGRGaWxlbmFtZVBhcnRzU2l6ZSAtIDE7XG4gICAgICAgIHZhciBrID0gbmV3RmlsZW5hbWVQYXJ0c1NpemUgLSAxO1xuICAgICAgICB3aGlsZSAoaSA8IGogJiYgaSA8IGspIHtcbiAgICAgICAgICAgIGlmIChvbGRGaWxlbmFtZVBhcnRzW2ldID09PSBuZXdGaWxlbmFtZVBhcnRzW2ldKSB7XG4gICAgICAgICAgICAgICAgcHJlZml4UGF0aHMucHVzaChuZXdGaWxlbmFtZVBhcnRzW2ldKTtcbiAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoaiA+IGkgJiYgayA+IGkpIHtcbiAgICAgICAgICAgIGlmIChvbGRGaWxlbmFtZVBhcnRzW2pdID09PSBuZXdGaWxlbmFtZVBhcnRzW2tdKSB7XG4gICAgICAgICAgICAgICAgc3VmZml4UGF0aHMudW5zaGlmdChuZXdGaWxlbmFtZVBhcnRzW2tdKTtcbiAgICAgICAgICAgICAgICBqIC09IDE7XG4gICAgICAgICAgICAgICAgayAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZpbmFsUHJlZml4ID0gcHJlZml4UGF0aHMuam9pbihzZXBhcmF0b3IpO1xuICAgICAgICB2YXIgZmluYWxTdWZmaXggPSBzdWZmaXhQYXRocy5qb2luKHNlcGFyYXRvcik7XG4gICAgICAgIHZhciBvbGRSZW1haW5pbmdQYXRoID0gb2xkRmlsZW5hbWVQYXJ0cy5zbGljZShpLCBqICsgMSkuam9pbihzZXBhcmF0b3IpO1xuICAgICAgICB2YXIgbmV3UmVtYWluaW5nUGF0aCA9IG5ld0ZpbGVuYW1lUGFydHMuc2xpY2UoaSwgayArIDEpLmpvaW4oc2VwYXJhdG9yKTtcbiAgICAgICAgaWYgKGZpbmFsUHJlZml4Lmxlbmd0aCAmJiBmaW5hbFN1ZmZpeC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAoZmluYWxQcmVmaXggKyBzZXBhcmF0b3IgKyAneycgKyBvbGRSZW1haW5pbmdQYXRoICsgJyDihpIgJyArIG5ld1JlbWFpbmluZ1BhdGggKyAnfScgKyBzZXBhcmF0b3IgKyBmaW5hbFN1ZmZpeCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmluYWxQcmVmaXgubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmluYWxQcmVmaXggKyBzZXBhcmF0b3IgKyAneycgKyBvbGRSZW1haW5pbmdQYXRoICsgJyDihpIgJyArIG5ld1JlbWFpbmluZ1BhdGggKyAnfSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmluYWxTdWZmaXgubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3snICsgb2xkUmVtYWluaW5nUGF0aCArICcg4oaSICcgKyBuZXdSZW1haW5pbmdQYXRoICsgJ30nICsgc2VwYXJhdG9yICsgZmluYWxTdWZmaXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9sZEZpbGVuYW1lICsgJyDihpIgJyArIG5ld0ZpbGVuYW1lO1xuICAgIH1cbiAgICBlbHNlIGlmICghaXNEZXZOdWxsTmFtZShuZXdGaWxlbmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIG5ld0ZpbGVuYW1lO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9sZEZpbGVuYW1lO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRIdG1sSWQoZmlsZSkge1xuICAgIHJldHVybiBcImQyaC1cIiArIGhhc2hDb2RlKGZpbGVuYW1lRGlmZihmaWxlKSlcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLnNsaWNlKC02KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWxlSWNvbihmaWxlKSB7XG4gICAgdmFyIHRlbXBsYXRlTmFtZSA9ICdmaWxlLWNoYW5nZWQnO1xuICAgIGlmIChmaWxlLmlzUmVuYW1lKSB7XG4gICAgICAgIHRlbXBsYXRlTmFtZSA9ICdmaWxlLXJlbmFtZWQnO1xuICAgIH1cbiAgICBlbHNlIGlmIChmaWxlLmlzQ29weSkge1xuICAgICAgICB0ZW1wbGF0ZU5hbWUgPSAnZmlsZS1yZW5hbWVkJztcbiAgICB9XG4gICAgZWxzZSBpZiAoZmlsZS5pc05ldykge1xuICAgICAgICB0ZW1wbGF0ZU5hbWUgPSAnZmlsZS1hZGRlZCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZpbGUuaXNEZWxldGVkKSB7XG4gICAgICAgIHRlbXBsYXRlTmFtZSA9ICdmaWxlLWRlbGV0ZWQnO1xuICAgIH1cbiAgICBlbHNlIGlmIChmaWxlLm5ld05hbWUgIT09IGZpbGUub2xkTmFtZSkge1xuICAgICAgICB0ZW1wbGF0ZU5hbWUgPSAnZmlsZS1yZW5hbWVkJztcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlTmFtZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkaWZmSGlnaGxpZ2h0KGRpZmZMaW5lMSwgZGlmZkxpbmUyLCBpc0NvbWJpbmVkLCBjb25maWcpIHtcbiAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHsgY29uZmlnID0ge307IH1cbiAgICB2YXIgX2EgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGVmYXVsdFJlbmRlckNvbmZpZyksIGNvbmZpZyksIG1hdGNoaW5nID0gX2EubWF0Y2hpbmcsIG1heExpbmVMZW5ndGhIaWdobGlnaHQgPSBfYS5tYXhMaW5lTGVuZ3RoSGlnaGxpZ2h0LCBtYXRjaFdvcmRzVGhyZXNob2xkID0gX2EubWF0Y2hXb3Jkc1RocmVzaG9sZCwgZGlmZlN0eWxlID0gX2EuZGlmZlN0eWxlO1xuICAgIHZhciBsaW5lMSA9IGRlY29uc3RydWN0TGluZShkaWZmTGluZTEsIGlzQ29tYmluZWQsIGZhbHNlKTtcbiAgICB2YXIgbGluZTIgPSBkZWNvbnN0cnVjdExpbmUoZGlmZkxpbmUyLCBpc0NvbWJpbmVkLCBmYWxzZSk7XG4gICAgaWYgKGxpbmUxLmNvbnRlbnQubGVuZ3RoID4gbWF4TGluZUxlbmd0aEhpZ2hsaWdodCB8fCBsaW5lMi5jb250ZW50Lmxlbmd0aCA+IG1heExpbmVMZW5ndGhIaWdobGlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9sZExpbmU6IHtcbiAgICAgICAgICAgICAgICBwcmVmaXg6IGxpbmUxLnByZWZpeCxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBsaW5lMS5jb250ZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5ld0xpbmU6IHtcbiAgICAgICAgICAgICAgICBwcmVmaXg6IGxpbmUyLnByZWZpeCxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBsaW5lMi5jb250ZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGRpZmYgPSBkaWZmU3R5bGUgPT09ICdjaGFyJ1xuICAgICAgICA/IGpzRGlmZi5kaWZmQ2hhcnMobGluZTEuY29udGVudCwgbGluZTIuY29udGVudClcbiAgICAgICAgOiBqc0RpZmYuZGlmZldvcmRzV2l0aFNwYWNlKGxpbmUxLmNvbnRlbnQsIGxpbmUyLmNvbnRlbnQpO1xuICAgIHZhciBjaGFuZ2VkV29yZHMgPSBbXTtcbiAgICBpZiAoZGlmZlN0eWxlID09PSAnd29yZCcgJiYgbWF0Y2hpbmcgPT09ICd3b3JkcycpIHtcbiAgICAgICAgdmFyIHJlbW92ZWQgPSBkaWZmLmZpbHRlcihmdW5jdGlvbiAoZWxlbWVudCkgeyByZXR1cm4gZWxlbWVudC5yZW1vdmVkOyB9KTtcbiAgICAgICAgdmFyIGFkZGVkID0gZGlmZi5maWx0ZXIoZnVuY3Rpb24gKGVsZW1lbnQpIHsgcmV0dXJuIGVsZW1lbnQuYWRkZWQ7IH0pO1xuICAgICAgICB2YXIgY2h1bmtzID0gbWF0Y2hlcihhZGRlZCwgcmVtb3ZlZCk7XG4gICAgICAgIGNodW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVuaykge1xuICAgICAgICAgICAgaWYgKGNodW5rWzBdLmxlbmd0aCA9PT0gMSAmJiBjaHVua1sxXS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlzdCA9IGRpc3RhbmNlKGNodW5rWzBdWzBdLCBjaHVua1sxXVswXSk7XG4gICAgICAgICAgICAgICAgaWYgKGRpc3QgPCBtYXRjaFdvcmRzVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWRXb3Jkcy5wdXNoKGNodW5rWzBdWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZFdvcmRzLnB1c2goY2h1bmtbMV1bMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBoaWdobGlnaHRlZExpbmUgPSBkaWZmLnJlZHVjZShmdW5jdGlvbiAoaGlnaGxpZ2h0ZWRMaW5lLCBwYXJ0KSB7XG4gICAgICAgIHZhciBlbGVtVHlwZSA9IHBhcnQuYWRkZWQgPyAnaW5zJyA6IHBhcnQucmVtb3ZlZCA/ICdkZWwnIDogbnVsbDtcbiAgICAgICAgdmFyIGFkZENsYXNzID0gY2hhbmdlZFdvcmRzLmluZGV4T2YocGFydCkgPiAtMSA/ICcgY2xhc3M9XCJkMmgtY2hhbmdlXCInIDogJyc7XG4gICAgICAgIHZhciBlc2NhcGVkVmFsdWUgPSBlc2NhcGVGb3JIdG1sKHBhcnQudmFsdWUpO1xuICAgICAgICByZXR1cm4gZWxlbVR5cGUgIT09IG51bGxcbiAgICAgICAgICAgID8gaGlnaGxpZ2h0ZWRMaW5lICsgXCI8XCIgKyBlbGVtVHlwZSArIGFkZENsYXNzICsgXCI+XCIgKyBlc2NhcGVkVmFsdWUgKyBcIjwvXCIgKyBlbGVtVHlwZSArIFwiPlwiXG4gICAgICAgICAgICA6IFwiXCIgKyBoaWdobGlnaHRlZExpbmUgKyBlc2NhcGVkVmFsdWU7XG4gICAgfSwgJycpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9sZExpbmU6IHtcbiAgICAgICAgICAgIHByZWZpeDogbGluZTEucHJlZml4LFxuICAgICAgICAgICAgY29udGVudDogcmVtb3ZlSW5zRWxlbWVudHMoaGlnaGxpZ2h0ZWRMaW5lKSxcbiAgICAgICAgfSxcbiAgICAgICAgbmV3TGluZToge1xuICAgICAgICAgICAgcHJlZml4OiBsaW5lMi5wcmVmaXgsXG4gICAgICAgICAgICBjb250ZW50OiByZW1vdmVEZWxFbGVtZW50cyhoaWdobGlnaHRlZExpbmUpLFxuICAgICAgICB9LFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZW5kZXItdXRpbHMuanMubWFwIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCAqIGFzIFJlbWF0Y2ggZnJvbSAnLi9yZW1hdGNoJztcbmltcG9ydCAqIGFzIHJlbmRlclV0aWxzIGZyb20gJy4vcmVuZGVyLXV0aWxzJztcbmltcG9ydCB7IExpbmVUeXBlLCB9IGZyb20gJy4vdHlwZXMnO1xuZXhwb3J0IHZhciBkZWZhdWx0U2lkZUJ5U2lkZVJlbmRlcmVyQ29uZmlnID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHJlbmRlclV0aWxzLmRlZmF1bHRSZW5kZXJDb25maWcpLCB7IHJlbmRlck5vdGhpbmdXaGVuRW1wdHk6IGZhbHNlLCBtYXRjaGluZ01heENvbXBhcmlzb25zOiAyNTAwLCBtYXhMaW5lU2l6ZUluQmxvY2tGb3JDb21wYXJpc29uOiAyMDAgfSk7XG52YXIgZ2VuZXJpY1RlbXBsYXRlc1BhdGggPSAnZ2VuZXJpYyc7XG52YXIgYmFzZVRlbXBsYXRlc1BhdGggPSAnc2lkZS1ieS1zaWRlJztcbnZhciBpY29uc0Jhc2VUZW1wbGF0ZXNQYXRoID0gJ2ljb24nO1xudmFyIHRhZ3NCYXNlVGVtcGxhdGVzUGF0aCA9ICd0YWcnO1xudmFyIFNpZGVCeVNpZGVSZW5kZXJlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2lkZUJ5U2lkZVJlbmRlcmVyKGhvZ2FuVXRpbHMsIGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHsgY29uZmlnID0ge307IH1cbiAgICAgICAgdGhpcy5ob2dhblV0aWxzID0gaG9nYW5VdGlscztcbiAgICAgICAgdGhpcy5jb25maWcgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGVmYXVsdFNpZGVCeVNpZGVSZW5kZXJlckNvbmZpZyksIGNvbmZpZyk7XG4gICAgfVxuICAgIFNpZGVCeVNpZGVSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGRpZmZGaWxlcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZGlmZnNIdG1sID0gZGlmZkZpbGVzXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICB2YXIgZGlmZnM7XG4gICAgICAgICAgICBpZiAoZmlsZS5ibG9ja3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZGlmZnMgPSBfdGhpcy5nZW5lcmF0ZUZpbGVIdG1sKGZpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlmZnMgPSBfdGhpcy5nZW5lcmF0ZUVtcHR5RGlmZigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm1ha2VGaWxlRGlmZkh0bWwoZmlsZSwgZGlmZnMpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oJ1xcbicpO1xuICAgICAgICByZXR1cm4gdGhpcy5ob2dhblV0aWxzLnJlbmRlcihnZW5lcmljVGVtcGxhdGVzUGF0aCwgJ3dyYXBwZXInLCB7IGNvbnRlbnQ6IGRpZmZzSHRtbCB9KTtcbiAgICB9O1xuICAgIFNpZGVCeVNpZGVSZW5kZXJlci5wcm90b3R5cGUubWFrZUZpbGVEaWZmSHRtbCA9IGZ1bmN0aW9uIChmaWxlLCBkaWZmcykge1xuICAgICAgICBpZiAodGhpcy5jb25maWcucmVuZGVyTm90aGluZ1doZW5FbXB0eSAmJiBBcnJheS5pc0FycmF5KGZpbGUuYmxvY2tzKSAmJiBmaWxlLmJsb2Nrcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIHZhciBmaWxlRGlmZlRlbXBsYXRlID0gdGhpcy5ob2dhblV0aWxzLnRlbXBsYXRlKGJhc2VUZW1wbGF0ZXNQYXRoLCAnZmlsZS1kaWZmJyk7XG4gICAgICAgIHZhciBmaWxlUGF0aFRlbXBsYXRlID0gdGhpcy5ob2dhblV0aWxzLnRlbXBsYXRlKGdlbmVyaWNUZW1wbGF0ZXNQYXRoLCAnZmlsZS1wYXRoJyk7XG4gICAgICAgIHZhciBmaWxlSWNvblRlbXBsYXRlID0gdGhpcy5ob2dhblV0aWxzLnRlbXBsYXRlKGljb25zQmFzZVRlbXBsYXRlc1BhdGgsICdmaWxlJyk7XG4gICAgICAgIHZhciBmaWxlVGFnVGVtcGxhdGUgPSB0aGlzLmhvZ2FuVXRpbHMudGVtcGxhdGUodGFnc0Jhc2VUZW1wbGF0ZXNQYXRoLCByZW5kZXJVdGlscy5nZXRGaWxlSWNvbihmaWxlKSk7XG4gICAgICAgIHJldHVybiBmaWxlRGlmZlRlbXBsYXRlLnJlbmRlcih7XG4gICAgICAgICAgICBmaWxlOiBmaWxlLFxuICAgICAgICAgICAgZmlsZUh0bWxJZDogcmVuZGVyVXRpbHMuZ2V0SHRtbElkKGZpbGUpLFxuICAgICAgICAgICAgZGlmZnM6IGRpZmZzLFxuICAgICAgICAgICAgZmlsZVBhdGg6IGZpbGVQYXRoVGVtcGxhdGUucmVuZGVyKHtcbiAgICAgICAgICAgICAgICBmaWxlRGlmZk5hbWU6IHJlbmRlclV0aWxzLmZpbGVuYW1lRGlmZihmaWxlKSxcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBmaWxlSWNvbjogZmlsZUljb25UZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICBmaWxlVGFnOiBmaWxlVGFnVGVtcGxhdGUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTaWRlQnlTaWRlUmVuZGVyZXIucHJvdG90eXBlLmdlbmVyYXRlRW1wdHlEaWZmID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmlnaHQ6ICcnLFxuICAgICAgICAgICAgbGVmdDogdGhpcy5ob2dhblV0aWxzLnJlbmRlcihnZW5lcmljVGVtcGxhdGVzUGF0aCwgJ2VtcHR5LWRpZmYnLCB7XG4gICAgICAgICAgICAgICAgY29udGVudENsYXNzOiAnZDJoLWNvZGUtc2lkZS1saW5lJyxcbiAgICAgICAgICAgICAgICBDU1NMaW5lQ2xhc3M6IHJlbmRlclV0aWxzLkNTU0xpbmVDbGFzcyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgU2lkZUJ5U2lkZVJlbmRlcmVyLnByb3RvdHlwZS5nZW5lcmF0ZUZpbGVIdG1sID0gZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBSZW1hdGNoLm5ld01hdGNoZXJGbihSZW1hdGNoLm5ld0Rpc3RhbmNlRm4oZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHJlbmRlclV0aWxzLmRlY29uc3RydWN0TGluZShlLmNvbnRlbnQsIGZpbGUuaXNDb21iaW5lZCkuY29udGVudDsgfSkpO1xuICAgICAgICByZXR1cm4gZmlsZS5ibG9ja3NcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGJsb2NrKSB7XG4gICAgICAgICAgICB2YXIgZmlsZUh0bWwgPSB7XG4gICAgICAgICAgICAgICAgbGVmdDogX3RoaXMubWFrZUhlYWRlckh0bWwoYmxvY2suaGVhZGVyKSxcbiAgICAgICAgICAgICAgICByaWdodDogX3RoaXMubWFrZUhlYWRlckh0bWwoJycpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF90aGlzLmFwcGx5TGluZUdyb3VwcGluZyhibG9jaykuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGV4dExpbmVzID0gX2FbMF0sIG9sZExpbmVzID0gX2FbMV0sIG5ld0xpbmVzID0gX2FbMl07XG4gICAgICAgICAgICAgICAgaWYgKG9sZExpbmVzLmxlbmd0aCAmJiBuZXdMaW5lcy5sZW5ndGggJiYgIWNvbnRleHRMaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYXBwbHlSZW1hdGNoTWF0Y2hpbmcob2xkTGluZXMsIG5ld0xpbmVzLCBtYXRjaGVyKS5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2xkTGluZXMgPSBfYVswXSwgbmV3TGluZXMgPSBfYVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYiA9IF90aGlzLnByb2Nlc3NDaGFuZ2VkTGluZXMoZmlsZS5pc0NvbWJpbmVkLCBvbGRMaW5lcywgbmV3TGluZXMpLCBsZWZ0ID0gX2IubGVmdCwgcmlnaHQgPSBfYi5yaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVIdG1sLmxlZnQgKz0gbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVIdG1sLnJpZ2h0ICs9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY29udGV4dExpbmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0TGluZXMuZm9yRWFjaChmdW5jdGlvbiAobGluZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hID0gcmVuZGVyVXRpbHMuZGVjb25zdHJ1Y3RMaW5lKGxpbmUuY29udGVudCwgZmlsZS5pc0NvbWJpbmVkKSwgcHJlZml4ID0gX2EucHJlZml4LCBjb250ZW50ID0gX2EuY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYiA9IF90aGlzLmdlbmVyYXRlTGluZUh0bWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlbmRlclV0aWxzLkNTU0xpbmVDbGFzcy5DT05URVhULFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyOiBsaW5lLm9sZE51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiByZW5kZXJVdGlscy5DU1NMaW5lQ2xhc3MuQ09OVEVYVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcjogbGluZS5uZXdOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgbGVmdCA9IF9iLmxlZnQsIHJpZ2h0ID0gX2IucmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlSHRtbC5sZWZ0ICs9IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlSHRtbC5yaWdodCArPSByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9sZExpbmVzLmxlbmd0aCB8fCBuZXdMaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9iID0gX3RoaXMucHJvY2Vzc0NoYW5nZWRMaW5lcyhmaWxlLmlzQ29tYmluZWQsIG9sZExpbmVzLCBuZXdMaW5lcyksIGxlZnQgPSBfYi5sZWZ0LCByaWdodCA9IF9iLnJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBmaWxlSHRtbC5sZWZ0ICs9IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVIdG1sLnJpZ2h0ICs9IHJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5rbm93biBzdGF0ZSByZWFjaGVkIHdoaWxlIHByb2Nlc3NpbmcgZ3JvdXBzIG9mIGxpbmVzJywgY29udGV4dExpbmVzLCBvbGRMaW5lcywgbmV3TGluZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZpbGVIdG1sO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYWNjb211bGF0ZWQsIGh0bWwpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGxlZnQ6IGFjY29tdWxhdGVkLmxlZnQgKyBodG1sLmxlZnQsIHJpZ2h0OiBhY2NvbXVsYXRlZC5yaWdodCArIGh0bWwucmlnaHQgfTtcbiAgICAgICAgfSwgeyBsZWZ0OiAnJywgcmlnaHQ6ICcnIH0pO1xuICAgIH07XG4gICAgU2lkZUJ5U2lkZVJlbmRlcmVyLnByb3RvdHlwZS5hcHBseUxpbmVHcm91cHBpbmcgPSBmdW5jdGlvbiAoYmxvY2spIHtcbiAgICAgICAgdmFyIGJsb2NrTGluZXNHcm91cHMgPSBbXTtcbiAgICAgICAgdmFyIG9sZExpbmVzID0gW107XG4gICAgICAgIHZhciBuZXdMaW5lcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2NrLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZGlmZkxpbmUgPSBibG9jay5saW5lc1tpXTtcbiAgICAgICAgICAgIGlmICgoZGlmZkxpbmUudHlwZSAhPT0gTGluZVR5cGUuSU5TRVJUICYmIG5ld0xpbmVzLmxlbmd0aCkgfHxcbiAgICAgICAgICAgICAgICAoZGlmZkxpbmUudHlwZSA9PT0gTGluZVR5cGUuQ09OVEVYVCAmJiBvbGRMaW5lcy5sZW5ndGggPiAwKSkge1xuICAgICAgICAgICAgICAgIGJsb2NrTGluZXNHcm91cHMucHVzaChbW10sIG9sZExpbmVzLCBuZXdMaW5lc10pO1xuICAgICAgICAgICAgICAgIG9sZExpbmVzID0gW107XG4gICAgICAgICAgICAgICAgbmV3TGluZXMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWZmTGluZS50eXBlID09PSBMaW5lVHlwZS5DT05URVhUKSB7XG4gICAgICAgICAgICAgICAgYmxvY2tMaW5lc0dyb3Vwcy5wdXNoKFtbZGlmZkxpbmVdLCBbXSwgW11dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRpZmZMaW5lLnR5cGUgPT09IExpbmVUeXBlLklOU0VSVCAmJiBvbGRMaW5lcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBibG9ja0xpbmVzR3JvdXBzLnB1c2goW1tdLCBbXSwgW2RpZmZMaW5lXV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGlmZkxpbmUudHlwZSA9PT0gTGluZVR5cGUuSU5TRVJUICYmIG9sZExpbmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBuZXdMaW5lcy5wdXNoKGRpZmZMaW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRpZmZMaW5lLnR5cGUgPT09IExpbmVUeXBlLkRFTEVURSkge1xuICAgICAgICAgICAgICAgIG9sZExpbmVzLnB1c2goZGlmZkxpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChvbGRMaW5lcy5sZW5ndGggfHwgbmV3TGluZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBibG9ja0xpbmVzR3JvdXBzLnB1c2goW1tdLCBvbGRMaW5lcywgbmV3TGluZXNdKTtcbiAgICAgICAgICAgIG9sZExpbmVzID0gW107XG4gICAgICAgICAgICBuZXdMaW5lcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBibG9ja0xpbmVzR3JvdXBzO1xuICAgIH07XG4gICAgU2lkZUJ5U2lkZVJlbmRlcmVyLnByb3RvdHlwZS5hcHBseVJlbWF0Y2hNYXRjaGluZyA9IGZ1bmN0aW9uIChvbGRMaW5lcywgbmV3TGluZXMsIG1hdGNoZXIpIHtcbiAgICAgICAgdmFyIGNvbXBhcmlzb25zID0gb2xkTGluZXMubGVuZ3RoICogbmV3TGluZXMubGVuZ3RoO1xuICAgICAgICB2YXIgbWF4TGluZVNpemVJbkJsb2NrID0gTWF0aC5tYXguYXBwbHkobnVsbCwgWzBdLmNvbmNhdChvbGRMaW5lcy5jb25jYXQobmV3TGluZXMpLm1hcChmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS5jb250ZW50Lmxlbmd0aDsgfSkpKTtcbiAgICAgICAgdmFyIGRvTWF0Y2hpbmcgPSBjb21wYXJpc29ucyA8IHRoaXMuY29uZmlnLm1hdGNoaW5nTWF4Q29tcGFyaXNvbnMgJiZcbiAgICAgICAgICAgIG1heExpbmVTaXplSW5CbG9jayA8IHRoaXMuY29uZmlnLm1heExpbmVTaXplSW5CbG9ja0ZvckNvbXBhcmlzb24gJiZcbiAgICAgICAgICAgICh0aGlzLmNvbmZpZy5tYXRjaGluZyA9PT0gJ2xpbmVzJyB8fCB0aGlzLmNvbmZpZy5tYXRjaGluZyA9PT0gJ3dvcmRzJyk7XG4gICAgICAgIHJldHVybiBkb01hdGNoaW5nID8gbWF0Y2hlcihvbGRMaW5lcywgbmV3TGluZXMpIDogW1tvbGRMaW5lcywgbmV3TGluZXNdXTtcbiAgICB9O1xuICAgIFNpZGVCeVNpZGVSZW5kZXJlci5wcm90b3R5cGUubWFrZUhlYWRlckh0bWwgPSBmdW5jdGlvbiAoYmxvY2tIZWFkZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9nYW5VdGlscy5yZW5kZXIoZ2VuZXJpY1RlbXBsYXRlc1BhdGgsICdibG9jay1oZWFkZXInLCB7XG4gICAgICAgICAgICBDU1NMaW5lQ2xhc3M6IHJlbmRlclV0aWxzLkNTU0xpbmVDbGFzcyxcbiAgICAgICAgICAgIGJsb2NrSGVhZGVyOiBibG9ja0hlYWRlcixcbiAgICAgICAgICAgIGxpbmVDbGFzczogJ2QyaC1jb2RlLXNpZGUtbGluZW51bWJlcicsXG4gICAgICAgICAgICBjb250ZW50Q2xhc3M6ICdkMmgtY29kZS1zaWRlLWxpbmUnLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNpZGVCeVNpZGVSZW5kZXJlci5wcm90b3R5cGUucHJvY2Vzc0NoYW5nZWRMaW5lcyA9IGZ1bmN0aW9uIChpc0NvbWJpbmVkLCBvbGRMaW5lcywgbmV3TGluZXMpIHtcbiAgICAgICAgdmFyIGZpbGVIdG1sID0ge1xuICAgICAgICAgICAgcmlnaHQ6ICcnLFxuICAgICAgICAgICAgbGVmdDogJycsXG4gICAgICAgIH07XG4gICAgICAgIHZhciBtYXhMaW5lc051bWJlciA9IE1hdGgubWF4KG9sZExpbmVzLmxlbmd0aCwgbmV3TGluZXMubGVuZ3RoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXhMaW5lc051bWJlcjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgb2xkTGluZSA9IG9sZExpbmVzW2ldO1xuICAgICAgICAgICAgdmFyIG5ld0xpbmUgPSBuZXdMaW5lc1tpXTtcbiAgICAgICAgICAgIHZhciBkaWZmID0gb2xkTGluZSAhPT0gdW5kZWZpbmVkICYmIG5ld0xpbmUgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gcmVuZGVyVXRpbHMuZGlmZkhpZ2hsaWdodChvbGRMaW5lLmNvbnRlbnQsIG5ld0xpbmUuY29udGVudCwgaXNDb21iaW5lZCwgdGhpcy5jb25maWcpXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgcHJlcGFyZWRPbGRMaW5lID0gb2xkTGluZSAhPT0gdW5kZWZpbmVkICYmIG9sZExpbmUub2xkTnVtYmVyICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IF9fYXNzaWduKF9fYXNzaWduKHt9LCAoZGlmZiAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBkaWZmLm9sZExpbmUucHJlZml4LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogZGlmZi5vbGRMaW5lLmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiByZW5kZXJVdGlscy5DU1NMaW5lQ2xhc3MuREVMRVRFX0NIQU5HRVMsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVuZGVyVXRpbHMuZGVjb25zdHJ1Y3RMaW5lKG9sZExpbmUuY29udGVudCwgaXNDb21iaW5lZCkpLCB7IHR5cGU6IHJlbmRlclV0aWxzLnRvQ1NTQ2xhc3Mob2xkTGluZS50eXBlKSB9KSkpLCB7IG51bWJlcjogb2xkTGluZS5vbGROdW1iZXIgfSkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgcHJlcGFyZWROZXdMaW5lID0gbmV3TGluZSAhPT0gdW5kZWZpbmVkICYmIG5ld0xpbmUubmV3TnVtYmVyICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IF9fYXNzaWduKF9fYXNzaWduKHt9LCAoZGlmZiAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBkaWZmLm5ld0xpbmUucHJlZml4LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogZGlmZi5uZXdMaW5lLmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiByZW5kZXJVdGlscy5DU1NMaW5lQ2xhc3MuSU5TRVJUX0NIQU5HRVMsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVuZGVyVXRpbHMuZGVjb25zdHJ1Y3RMaW5lKG5ld0xpbmUuY29udGVudCwgaXNDb21iaW5lZCkpLCB7IHR5cGU6IHJlbmRlclV0aWxzLnRvQ1NTQ2xhc3MobmV3TGluZS50eXBlKSB9KSkpLCB7IG51bWJlcjogbmV3TGluZS5uZXdOdW1iZXIgfSkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmdlbmVyYXRlTGluZUh0bWwocHJlcGFyZWRPbGRMaW5lLCBwcmVwYXJlZE5ld0xpbmUpLCBsZWZ0ID0gX2EubGVmdCwgcmlnaHQgPSBfYS5yaWdodDtcbiAgICAgICAgICAgIGZpbGVIdG1sLmxlZnQgKz0gbGVmdDtcbiAgICAgICAgICAgIGZpbGVIdG1sLnJpZ2h0ICs9IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWxlSHRtbDtcbiAgICB9O1xuICAgIFNpZGVCeVNpZGVSZW5kZXJlci5wcm90b3R5cGUuZ2VuZXJhdGVMaW5lSHRtbCA9IGZ1bmN0aW9uIChvbGRMaW5lLCBuZXdMaW5lKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmdlbmVyYXRlU2luZ2xlSHRtbChvbGRMaW5lKSxcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLmdlbmVyYXRlU2luZ2xlSHRtbChuZXdMaW5lKSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFNpZGVCeVNpZGVSZW5kZXJlci5wcm90b3R5cGUuZ2VuZXJhdGVTaW5nbGVIdG1sID0gZnVuY3Rpb24gKGxpbmUpIHtcbiAgICAgICAgdmFyIGxpbmVDbGFzcyA9ICdkMmgtY29kZS1zaWRlLWxpbmVudW1iZXInO1xuICAgICAgICB2YXIgY29udGVudENsYXNzID0gJ2QyaC1jb2RlLXNpZGUtbGluZSc7XG4gICAgICAgIHJldHVybiB0aGlzLmhvZ2FuVXRpbHMucmVuZGVyKGdlbmVyaWNUZW1wbGF0ZXNQYXRoLCAnbGluZScsIHtcbiAgICAgICAgICAgIHR5cGU6IChsaW5lID09PSBudWxsIHx8IGxpbmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxpbmUudHlwZSkgfHwgcmVuZGVyVXRpbHMuQ1NTTGluZUNsYXNzLkNPTlRFWFQgKyBcIiBkMmgtZW1wdHlwbGFjZWhvbGRlclwiLFxuICAgICAgICAgICAgbGluZUNsYXNzOiBsaW5lICE9PSB1bmRlZmluZWQgPyBsaW5lQ2xhc3MgOiBsaW5lQ2xhc3MgKyBcIiBkMmgtY29kZS1zaWRlLWVtcHR5cGxhY2Vob2xkZXJcIixcbiAgICAgICAgICAgIGNvbnRlbnRDbGFzczogbGluZSAhPT0gdW5kZWZpbmVkID8gY29udGVudENsYXNzIDogY29udGVudENsYXNzICsgXCIgZDJoLWNvZGUtc2lkZS1lbXB0eXBsYWNlaG9sZGVyXCIsXG4gICAgICAgICAgICBwcmVmaXg6IChsaW5lID09PSBudWxsIHx8IGxpbmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxpbmUucHJlZml4KSA9PT0gJyAnID8gJyZuYnNwOycgOiBsaW5lID09PSBudWxsIHx8IGxpbmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxpbmUucHJlZml4LFxuICAgICAgICAgICAgY29udGVudDogbGluZSA9PT0gbnVsbCB8fCBsaW5lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsaW5lLmNvbnRlbnQsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiBsaW5lID09PSBudWxsIHx8IGxpbmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxpbmUubnVtYmVyLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBTaWRlQnlTaWRlUmVuZGVyZXI7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgU2lkZUJ5U2lkZVJlbmRlcmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2lkZS1ieS1zaWRlLXJlbmRlcmVyLmpzLm1hcCIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4zLjFcblxuLypcbk1vZHVsZSBkaWZmbGliIC0tIGhlbHBlcnMgZm9yIGNvbXB1dGluZyBkZWx0YXMgYmV0d2VlbiBvYmplY3RzLlxuXG5GdW5jdGlvbiBnZXRDbG9zZU1hdGNoZXMod29yZCwgcG9zc2liaWxpdGllcywgbj0zLCBjdXRvZmY9MC42KTpcbiAgICBVc2UgU2VxdWVuY2VNYXRjaGVyIHRvIHJldHVybiBsaXN0IG9mIHRoZSBiZXN0IFwiZ29vZCBlbm91Z2hcIiBtYXRjaGVzLlxuXG5GdW5jdGlvbiBjb250ZXh0RGlmZihhLCBiKTpcbiAgICBGb3IgdHdvIGxpc3RzIG9mIHN0cmluZ3MsIHJldHVybiBhIGRlbHRhIGluIGNvbnRleHQgZGlmZiBmb3JtYXQuXG5cbkZ1bmN0aW9uIG5kaWZmKGEsIGIpOlxuICAgIFJldHVybiBhIGRlbHRhOiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGBhYCBhbmQgYGJgIChsaXN0cyBvZiBzdHJpbmdzKS5cblxuRnVuY3Rpb24gcmVzdG9yZShkZWx0YSwgd2hpY2gpOlxuICAgIFJldHVybiBvbmUgb2YgdGhlIHR3byBzZXF1ZW5jZXMgdGhhdCBnZW5lcmF0ZWQgYW4gbmRpZmYgZGVsdGEuXG5cbkZ1bmN0aW9uIHVuaWZpZWREaWZmKGEsIGIpOlxuICAgIEZvciB0d28gbGlzdHMgb2Ygc3RyaW5ncywgcmV0dXJuIGEgZGVsdGEgaW4gdW5pZmllZCBkaWZmIGZvcm1hdC5cblxuQ2xhc3MgU2VxdWVuY2VNYXRjaGVyOlxuICAgIEEgZmxleGlibGUgY2xhc3MgZm9yIGNvbXBhcmluZyBwYWlycyBvZiBzZXF1ZW5jZXMgb2YgYW55IHR5cGUuXG5cbkNsYXNzIERpZmZlcjpcbiAgICBGb3IgcHJvZHVjaW5nIGh1bWFuLXJlYWRhYmxlIGRlbHRhcyBmcm9tIHNlcXVlbmNlcyBvZiBsaW5lcyBvZiB0ZXh0LlxuKi9cblxuXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBEaWZmZXIsIEhlYXAsIElTX0NIQVJBQ1RFUl9KVU5LLCBJU19MSU5FX0pVTkssIFNlcXVlbmNlTWF0Y2hlciwgYXNzZXJ0LCBjb250ZXh0RGlmZiwgZmxvb3IsIGdldENsb3NlTWF0Y2hlcywgbWF4LCBtaW4sIG5kaWZmLCByZXN0b3JlLCB1bmlmaWVkRGlmZiwgX2FueSwgX2FycmF5Q21wLCBfY2FsY3VsYXRlUmF0aW8sIF9jb3VudExlYWRpbmcsIF9mb3JtYXRSYW5nZUNvbnRleHQsIF9mb3JtYXRSYW5nZVVuaWZpZWQsIF9oYXMsXG4gICAgX19pbmRleE9mID0gW10uaW5kZXhPZiB8fCBmdW5jdGlvbihpdGVtKSB7IGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHsgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTsgfSByZXR1cm4gLTE7IH07XG5cbiAgZmxvb3IgPSBNYXRoLmZsb29yLCBtYXggPSBNYXRoLm1heCwgbWluID0gTWF0aC5taW47XG5cbiAgSGVhcCA9IHJlcXVpcmUoJ2hlYXAnKTtcblxuICBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKTtcblxuICBfY2FsY3VsYXRlUmF0aW8gPSBmdW5jdGlvbihtYXRjaGVzLCBsZW5ndGgpIHtcbiAgICBpZiAobGVuZ3RoKSB7XG4gICAgICByZXR1cm4gMi4wICogbWF0Y2hlcyAvIGxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDEuMDtcbiAgICB9XG4gIH07XG5cbiAgX2FycmF5Q21wID0gZnVuY3Rpb24oYSwgYikge1xuICAgIHZhciBpLCBsYSwgbGIsIF9pLCBfcmVmLCBfcmVmMTtcbiAgICBfcmVmID0gW2EubGVuZ3RoLCBiLmxlbmd0aF0sIGxhID0gX3JlZlswXSwgbGIgPSBfcmVmWzFdO1xuICAgIGZvciAoaSA9IF9pID0gMCwgX3JlZjEgPSBtaW4obGEsIGxiKTsgMCA8PSBfcmVmMSA/IF9pIDwgX3JlZjEgOiBfaSA+IF9yZWYxOyBpID0gMCA8PSBfcmVmMSA/ICsrX2kgOiAtLV9pKSB7XG4gICAgICBpZiAoYVtpXSA8IGJbaV0pIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgaWYgKGFbaV0gPiBiW2ldKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGEgLSBsYjtcbiAgfTtcblxuICBfaGFzID0gZnVuY3Rpb24ob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbiAgfTtcblxuICBfYW55ID0gZnVuY3Rpb24oaXRlbXMpIHtcbiAgICB2YXIgaXRlbSwgX2ksIF9sZW47XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBpdGVtcy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgaXRlbSA9IGl0ZW1zW19pXTtcbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgU2VxdWVuY2VNYXRjaGVyID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgU2VxdWVuY2VNYXRjaGVyLm5hbWUgPSAnU2VxdWVuY2VNYXRjaGVyJztcblxuICAgIC8qXG4gICAgICBTZXF1ZW5jZU1hdGNoZXIgaXMgYSBmbGV4aWJsZSBjbGFzcyBmb3IgY29tcGFyaW5nIHBhaXJzIG9mIHNlcXVlbmNlcyBvZlxuICAgICAgYW55IHR5cGUsIHNvIGxvbmcgYXMgdGhlIHNlcXVlbmNlIGVsZW1lbnRzIGFyZSBoYXNoYWJsZS4gIFRoZSBiYXNpY1xuICAgICAgYWxnb3JpdGhtIHByZWRhdGVzLCBhbmQgaXMgYSBsaXR0bGUgZmFuY2llciB0aGFuLCBhbiBhbGdvcml0aG1cbiAgICAgIHB1Ymxpc2hlZCBpbiB0aGUgbGF0ZSAxOTgwJ3MgYnkgUmF0Y2xpZmYgYW5kIE9iZXJzaGVscCB1bmRlciB0aGVcbiAgICAgIGh5cGVyYm9saWMgbmFtZSBcImdlc3RhbHQgcGF0dGVybiBtYXRjaGluZ1wiLiAgVGhlIGJhc2ljIGlkZWEgaXMgdG8gZmluZFxuICAgICAgdGhlIGxvbmdlc3QgY29udGlndW91cyBtYXRjaGluZyBzdWJzZXF1ZW5jZSB0aGF0IGNvbnRhaW5zIG5vIFwianVua1wiXG4gICAgICBlbGVtZW50cyAoUi1PIGRvZXNuJ3QgYWRkcmVzcyBqdW5rKS4gIFRoZSBzYW1lIGlkZWEgaXMgdGhlbiBhcHBsaWVkXG4gICAgICByZWN1cnNpdmVseSB0byB0aGUgcGllY2VzIG9mIHRoZSBzZXF1ZW5jZXMgdG8gdGhlIGxlZnQgYW5kIHRvIHRoZSByaWdodFxuICAgICAgb2YgdGhlIG1hdGNoaW5nIHN1YnNlcXVlbmNlLiAgVGhpcyBkb2VzIG5vdCB5aWVsZCBtaW5pbWFsIGVkaXRcbiAgICAgIHNlcXVlbmNlcywgYnV0IGRvZXMgdGVuZCB0byB5aWVsZCBtYXRjaGVzIHRoYXQgXCJsb29rIHJpZ2h0XCIgdG8gcGVvcGxlLlxuICAgIFxuICAgICAgU2VxdWVuY2VNYXRjaGVyIHRyaWVzIHRvIGNvbXB1dGUgYSBcImh1bWFuLWZyaWVuZGx5IGRpZmZcIiBiZXR3ZWVuIHR3b1xuICAgICAgc2VxdWVuY2VzLiAgVW5saWtlIGUuZy4gVU5JWCh0bSkgZGlmZiwgdGhlIGZ1bmRhbWVudGFsIG5vdGlvbiBpcyB0aGVcbiAgICAgIGxvbmdlc3QgKmNvbnRpZ3VvdXMqICYganVuay1mcmVlIG1hdGNoaW5nIHN1YnNlcXVlbmNlLiAgVGhhdCdzIHdoYXRcbiAgICAgIGNhdGNoZXMgcGVvcGxlcycgZXllcy4gIFRoZSBXaW5kb3dzKHRtKSB3aW5kaWZmIGhhcyBhbm90aGVyIGludGVyZXN0aW5nXG4gICAgICBub3Rpb24sIHBhaXJpbmcgdXAgZWxlbWVudHMgdGhhdCBhcHBlYXIgdW5pcXVlbHkgaW4gZWFjaCBzZXF1ZW5jZS5cbiAgICAgIFRoYXQsIGFuZCB0aGUgbWV0aG9kIGhlcmUsIGFwcGVhciB0byB5aWVsZCBtb3JlIGludHVpdGl2ZSBkaWZmZXJlbmNlXG4gICAgICByZXBvcnRzIHRoYW4gZG9lcyBkaWZmLiAgVGhpcyBtZXRob2QgYXBwZWFycyB0byBiZSB0aGUgbGVhc3QgdnVsbmVyYWJsZVxuICAgICAgdG8gc3luY2hpbmcgdXAgb24gYmxvY2tzIG9mIFwianVuayBsaW5lc1wiLCB0aG91Z2ggKGxpa2UgYmxhbmsgbGluZXMgaW5cbiAgICAgIG9yZGluYXJ5IHRleHQgZmlsZXMsIG9yIG1heWJlIFwiPFA+XCIgbGluZXMgaW4gSFRNTCBmaWxlcykuICBUaGF0IG1heSBiZVxuICAgICAgYmVjYXVzZSB0aGlzIGlzIHRoZSBvbmx5IG1ldGhvZCBvZiB0aGUgMyB0aGF0IGhhcyBhICpjb25jZXB0KiBvZlxuICAgICAgXCJqdW5rXCIgPHdpbms+LlxuICAgIFxuICAgICAgRXhhbXBsZSwgY29tcGFyaW5nIHR3byBzdHJpbmdzLCBhbmQgY29uc2lkZXJpbmcgYmxhbmtzIHRvIGJlIFwianVua1wiOlxuICAgIFxuICAgICAgPj4+IGlzanVuayA9IChjKSAtPiBjIGlzICcgJ1xuICAgICAgPj4+IHMgPSBuZXcgU2VxdWVuY2VNYXRjaGVyKGlzanVuayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncHJpdmF0ZSBUaHJlYWQgY3VycmVudFRocmVhZDsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwcml2YXRlIHZvbGF0aWxlIFRocmVhZCBjdXJyZW50VGhyZWFkOycpXG4gICAgXG4gICAgICAucmF0aW8oKSByZXR1cm5zIGEgZmxvYXQgaW4gWzAsIDFdLCBtZWFzdXJpbmcgdGhlIFwic2ltaWxhcml0eVwiIG9mIHRoZVxuICAgICAgc2VxdWVuY2VzLiAgQXMgYSBydWxlIG9mIHRodW1iLCBhIC5yYXRpbygpIHZhbHVlIG92ZXIgMC42IG1lYW5zIHRoZVxuICAgICAgc2VxdWVuY2VzIGFyZSBjbG9zZSBtYXRjaGVzOlxuICAgIFxuICAgICAgPj4+IHMucmF0aW8oKS50b1ByZWNpc2lvbigzKVxuICAgICAgJzAuODY2J1xuICAgIFxuICAgICAgSWYgeW91J3JlIG9ubHkgaW50ZXJlc3RlZCBpbiB3aGVyZSB0aGUgc2VxdWVuY2VzIG1hdGNoLFxuICAgICAgLmdldE1hdGNoaW5nQmxvY2tzKCkgaXMgaGFuZHk6XG4gICAgXG4gICAgICA+Pj4gZm9yIFthLCBiLCBzaXplXSBpbiBzLmdldE1hdGNoaW5nQmxvY2tzKClcbiAgICAgIC4uLiAgIGNvbnNvbGUubG9nKFwiYVsje2F9XSBhbmQgYlsje2J9XSBtYXRjaCBmb3IgI3tzaXplfSBlbGVtZW50c1wiKTtcbiAgICAgIGFbMF0gYW5kIGJbMF0gbWF0Y2ggZm9yIDggZWxlbWVudHNcbiAgICAgIGFbOF0gYW5kIGJbMTddIG1hdGNoIGZvciAyMSBlbGVtZW50c1xuICAgICAgYVsyOV0gYW5kIGJbMzhdIG1hdGNoIGZvciAwIGVsZW1lbnRzXG4gICAgXG4gICAgICBOb3RlIHRoYXQgdGhlIGxhc3QgdHVwbGUgcmV0dXJuZWQgYnkgLmdldF9tYXRjaGluZ19ibG9ja3MoKSBpcyBhbHdheXMgYVxuICAgICAgZHVtbXksIChsZW4oYSksIGxlbihiKSwgMCksIGFuZCB0aGlzIGlzIHRoZSBvbmx5IGNhc2UgaW4gd2hpY2ggdGhlIGxhc3RcbiAgICAgIHR1cGxlIGVsZW1lbnQgKG51bWJlciBvZiBlbGVtZW50cyBtYXRjaGVkKSBpcyAwLlxuICAgIFxuICAgICAgSWYgeW91IHdhbnQgdG8ga25vdyBob3cgdG8gY2hhbmdlIHRoZSBmaXJzdCBzZXF1ZW5jZSBpbnRvIHRoZSBzZWNvbmQsXG4gICAgICB1c2UgLmdldF9vcGNvZGVzKCk6XG4gICAgXG4gICAgICA+Pj4gZm9yIFtvcCwgYTEsIGEyLCBiMSwgYjJdIGluIHMuZ2V0T3Bjb2RlcygpXG4gICAgICAuLi4gICBjb25zb2xlLmxvZyBcIiN7b3B9IGFbI3thMX06I3thMn1dIGJbI3tiMX06I3tiMn1dXCJcbiAgICAgIGVxdWFsIGFbMDo4XSBiWzA6OF1cbiAgICAgIGluc2VydCBhWzg6OF0gYls4OjE3XVxuICAgICAgZXF1YWwgYVs4OjI5XSBiWzE3OjM4XVxuICAgIFxuICAgICAgU2VlIHRoZSBEaWZmZXIgY2xhc3MgZm9yIGEgZmFuY3kgaHVtYW4tZnJpZW5kbHkgZmlsZSBkaWZmZXJlbmNlciwgd2hpY2hcbiAgICAgIHVzZXMgU2VxdWVuY2VNYXRjaGVyIGJvdGggdG8gY29tcGFyZSBzZXF1ZW5jZXMgb2YgbGluZXMsIGFuZCB0byBjb21wYXJlXG4gICAgICBzZXF1ZW5jZXMgb2YgY2hhcmFjdGVycyB3aXRoaW4gc2ltaWxhciAobmVhci1tYXRjaGluZykgbGluZXMuXG4gICAgXG4gICAgICBTZWUgYWxzbyBmdW5jdGlvbiBnZXRDbG9zZU1hdGNoZXMoKSBpbiB0aGlzIG1vZHVsZSwgd2hpY2ggc2hvd3MgaG93XG4gICAgICBzaW1wbGUgY29kZSBidWlsZGluZyBvbiBTZXF1ZW5jZU1hdGNoZXIgY2FuIGJlIHVzZWQgdG8gZG8gdXNlZnVsIHdvcmsuXG4gICAgXG4gICAgICBUaW1pbmc6ICBCYXNpYyBSLU8gaXMgY3ViaWMgdGltZSB3b3JzdCBjYXNlIGFuZCBxdWFkcmF0aWMgdGltZSBleHBlY3RlZFxuICAgICAgY2FzZS4gIFNlcXVlbmNlTWF0Y2hlciBpcyBxdWFkcmF0aWMgdGltZSBmb3IgdGhlIHdvcnN0IGNhc2UgYW5kIGhhc1xuICAgICAgZXhwZWN0ZWQtY2FzZSBiZWhhdmlvciBkZXBlbmRlbnQgaW4gYSBjb21wbGljYXRlZCB3YXkgb24gaG93IG1hbnlcbiAgICAgIGVsZW1lbnRzIHRoZSBzZXF1ZW5jZXMgaGF2ZSBpbiBjb21tb247IGJlc3QgY2FzZSB0aW1lIGlzIGxpbmVhci5cbiAgICBcbiAgICAgIE1ldGhvZHM6XG4gICAgXG4gICAgICBjb25zdHJ1Y3Rvcihpc2p1bms9bnVsbCwgYT0nJywgYj0nJylcbiAgICAgICAgICBDb25zdHJ1Y3QgYSBTZXF1ZW5jZU1hdGNoZXIuXG4gICAgXG4gICAgICBzZXRTZXFzKGEsIGIpXG4gICAgICAgICAgU2V0IHRoZSB0d28gc2VxdWVuY2VzIHRvIGJlIGNvbXBhcmVkLlxuICAgIFxuICAgICAgc2V0U2VxMShhKVxuICAgICAgICAgIFNldCB0aGUgZmlyc3Qgc2VxdWVuY2UgdG8gYmUgY29tcGFyZWQuXG4gICAgXG4gICAgICBzZXRTZXEyKGIpXG4gICAgICAgICAgU2V0IHRoZSBzZWNvbmQgc2VxdWVuY2UgdG8gYmUgY29tcGFyZWQuXG4gICAgXG4gICAgICBmaW5kTG9uZ2VzdE1hdGNoKGFsbywgYWhpLCBibG8sIGJoaSlcbiAgICAgICAgICBGaW5kIGxvbmdlc3QgbWF0Y2hpbmcgYmxvY2sgaW4gYVthbG86YWhpXSBhbmQgYltibG86YmhpXS5cbiAgICBcbiAgICAgIGdldE1hdGNoaW5nQmxvY2tzKClcbiAgICAgICAgICBSZXR1cm4gbGlzdCBvZiB0cmlwbGVzIGRlc2NyaWJpbmcgbWF0Y2hpbmcgc3Vic2VxdWVuY2VzLlxuICAgIFxuICAgICAgZ2V0T3Bjb2RlcygpXG4gICAgICAgICAgUmV0dXJuIGxpc3Qgb2YgNS10dXBsZXMgZGVzY3JpYmluZyBob3cgdG8gdHVybiBhIGludG8gYi5cbiAgICBcbiAgICAgIHJhdGlvKClcbiAgICAgICAgICBSZXR1cm4gYSBtZWFzdXJlIG9mIHRoZSBzZXF1ZW5jZXMnIHNpbWlsYXJpdHkgKGZsb2F0IGluIFswLDFdKS5cbiAgICBcbiAgICAgIHF1aWNrUmF0aW8oKVxuICAgICAgICAgIFJldHVybiBhbiB1cHBlciBib3VuZCBvbiAucmF0aW8oKSByZWxhdGl2ZWx5IHF1aWNrbHkuXG4gICAgXG4gICAgICByZWFsUXVpY2tSYXRpbygpXG4gICAgICAgICAgUmV0dXJuIGFuIHVwcGVyIGJvdW5kIG9uIHJhdGlvKCkgdmVyeSBxdWlja2x5LlxuICAgICovXG5cblxuICAgIGZ1bmN0aW9uIFNlcXVlbmNlTWF0Y2hlcihpc2p1bmssIGEsIGIsIGF1dG9qdW5rKSB7XG4gICAgICB0aGlzLmlzanVuayA9IGlzanVuaztcbiAgICAgIGlmIChhID09IG51bGwpIHtcbiAgICAgICAgYSA9ICcnO1xuICAgICAgfVxuICAgICAgaWYgKGIgPT0gbnVsbCkge1xuICAgICAgICBiID0gJyc7XG4gICAgICB9XG4gICAgICB0aGlzLmF1dG9qdW5rID0gYXV0b2p1bmsgIT0gbnVsbCA/IGF1dG9qdW5rIDogdHJ1ZTtcbiAgICAgIC8qXG4gICAgICAgICAgQ29uc3RydWN0IGEgU2VxdWVuY2VNYXRjaGVyLlxuICAgICAgXG4gICAgICAgICAgT3B0aW9uYWwgYXJnIGlzanVuayBpcyBudWxsICh0aGUgZGVmYXVsdCksIG9yIGEgb25lLWFyZ3VtZW50XG4gICAgICAgICAgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHNlcXVlbmNlIGVsZW1lbnQgYW5kIHJldHVybnMgdHJ1ZSBpZmYgdGhlXG4gICAgICAgICAgZWxlbWVudCBpcyBqdW5rLiAgTnVsbCBpcyBlcXVpdmFsZW50IHRvIHBhc3NpbmcgXCIoeCkgLT4gMFwiLCBpLmUuXG4gICAgICAgICAgbm8gZWxlbWVudHMgYXJlIGNvbnNpZGVyZWQgdG8gYmUganVuay4gIEZvciBleGFtcGxlLCBwYXNzXG4gICAgICAgICAgICAgICh4KSAtPiB4IGluICcgXFx0J1xuICAgICAgICAgIGlmIHlvdSdyZSBjb21wYXJpbmcgbGluZXMgYXMgc2VxdWVuY2VzIG9mIGNoYXJhY3RlcnMsIGFuZCBkb24ndFxuICAgICAgICAgIHdhbnQgdG8gc3luY2ggdXAgb24gYmxhbmtzIG9yIGhhcmQgdGFicy5cbiAgICAgIFxuICAgICAgICAgIE9wdGlvbmFsIGFyZyBhIGlzIHRoZSBmaXJzdCBvZiB0d28gc2VxdWVuY2VzIHRvIGJlIGNvbXBhcmVkLiAgQnlcbiAgICAgICAgICBkZWZhdWx0LCBhbiBlbXB0eSBzdHJpbmcuICBUaGUgZWxlbWVudHMgb2YgYSBtdXN0IGJlIGhhc2hhYmxlLiAgU2VlXG4gICAgICAgICAgYWxzbyAuc2V0U2VxcygpIGFuZCAuc2V0U2VxMSgpLlxuICAgICAgXG4gICAgICAgICAgT3B0aW9uYWwgYXJnIGIgaXMgdGhlIHNlY29uZCBvZiB0d28gc2VxdWVuY2VzIHRvIGJlIGNvbXBhcmVkLiAgQnlcbiAgICAgICAgICBkZWZhdWx0LCBhbiBlbXB0eSBzdHJpbmcuICBUaGUgZWxlbWVudHMgb2YgYiBtdXN0IGJlIGhhc2hhYmxlLiBTZWVcbiAgICAgICAgICBhbHNvIC5zZXRTZXFzKCkgYW5kIC5zZXRTZXEyKCkuXG4gICAgICBcbiAgICAgICAgICBPcHRpb25hbCBhcmcgYXV0b2p1bmsgc2hvdWxkIGJlIHNldCB0byBmYWxzZSB0byBkaXNhYmxlIHRoZVxuICAgICAgICAgIFwiYXV0b21hdGljIGp1bmsgaGV1cmlzdGljXCIgdGhhdCB0cmVhdHMgcG9wdWxhciBlbGVtZW50cyBhcyBqdW5rXG4gICAgICAgICAgKHNlZSBtb2R1bGUgZG9jdW1lbnRhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbikuXG4gICAgICAqL1xuXG4gICAgICB0aGlzLmEgPSB0aGlzLmIgPSBudWxsO1xuICAgICAgdGhpcy5zZXRTZXFzKGEsIGIpO1xuICAgIH1cblxuICAgIFNlcXVlbmNlTWF0Y2hlci5wcm90b3R5cGUuc2V0U2VxcyA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIC8qIFxuICAgICAgU2V0IHRoZSB0d28gc2VxdWVuY2VzIHRvIGJlIGNvbXBhcmVkLiBcbiAgICAgIFxuICAgICAgPj4+IHMgPSBuZXcgU2VxdWVuY2VNYXRjaGVyKClcbiAgICAgID4+PiBzLnNldFNlcXMoJ2FiY2QnLCAnYmNkZScpXG4gICAgICA+Pj4gcy5yYXRpbygpXG4gICAgICAwLjc1XG4gICAgICAqL1xuICAgICAgdGhpcy5zZXRTZXExKGEpO1xuICAgICAgcmV0dXJuIHRoaXMuc2V0U2VxMihiKTtcbiAgICB9O1xuXG4gICAgU2VxdWVuY2VNYXRjaGVyLnByb3RvdHlwZS5zZXRTZXExID0gZnVuY3Rpb24oYSkge1xuICAgICAgLyogXG4gICAgICBTZXQgdGhlIGZpcnN0IHNlcXVlbmNlIHRvIGJlIGNvbXBhcmVkLiBcbiAgICAgIFxuICAgICAgVGhlIHNlY29uZCBzZXF1ZW5jZSB0byBiZSBjb21wYXJlZCBpcyBub3QgY2hhbmdlZC5cbiAgICAgIFxuICAgICAgPj4+IHMgPSBuZXcgU2VxdWVuY2VNYXRjaGVyKG51bGwsICdhYmNkJywgJ2JjZGUnKVxuICAgICAgPj4+IHMucmF0aW8oKVxuICAgICAgMC43NVxuICAgICAgPj4+IHMuc2V0U2VxMSgnYmNkZScpXG4gICAgICA+Pj4gcy5yYXRpbygpXG4gICAgICAxLjBcbiAgICAgIFxuICAgICAgU2VxdWVuY2VNYXRjaGVyIGNvbXB1dGVzIGFuZCBjYWNoZXMgZGV0YWlsZWQgaW5mb3JtYXRpb24gYWJvdXQgdGhlXG4gICAgICBzZWNvbmQgc2VxdWVuY2UsIHNvIGlmIHlvdSB3YW50IHRvIGNvbXBhcmUgb25lIHNlcXVlbmNlIFMgYWdhaW5zdFxuICAgICAgbWFueSBzZXF1ZW5jZXMsIHVzZSAuc2V0U2VxMihTKSBvbmNlIGFuZCBjYWxsIC5zZXRTZXExKHgpXG4gICAgICByZXBlYXRlZGx5IGZvciBlYWNoIG9mIHRoZSBvdGhlciBzZXF1ZW5jZXMuXG4gICAgICBcbiAgICAgIFNlZSBhbHNvIHNldFNlcXMoKSBhbmQgc2V0U2VxMigpLlxuICAgICAgKi9cbiAgICAgIGlmIChhID09PSB0aGlzLmEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5hID0gYTtcbiAgICAgIHJldHVybiB0aGlzLm1hdGNoaW5nQmxvY2tzID0gdGhpcy5vcGNvZGVzID0gbnVsbDtcbiAgICB9O1xuXG4gICAgU2VxdWVuY2VNYXRjaGVyLnByb3RvdHlwZS5zZXRTZXEyID0gZnVuY3Rpb24oYikge1xuICAgICAgLypcbiAgICAgICAgICBTZXQgdGhlIHNlY29uZCBzZXF1ZW5jZSB0byBiZSBjb21wYXJlZC4gXG4gICAgICBcbiAgICAgICAgICBUaGUgZmlyc3Qgc2VxdWVuY2UgdG8gYmUgY29tcGFyZWQgaXMgbm90IGNoYW5nZWQuXG4gICAgICBcbiAgICAgICAgICA+Pj4gcyA9IG5ldyBTZXF1ZW5jZU1hdGNoZXIobnVsbCwgJ2FiY2QnLCAnYmNkZScpXG4gICAgICAgICAgPj4+IHMucmF0aW8oKVxuICAgICAgICAgIDAuNzVcbiAgICAgICAgICA+Pj4gcy5zZXRTZXEyKCdhYmNkJylcbiAgICAgICAgICA+Pj4gcy5yYXRpbygpXG4gICAgICAgICAgMS4wXG4gICAgICBcbiAgICAgICAgICBTZXF1ZW5jZU1hdGNoZXIgY29tcHV0ZXMgYW5kIGNhY2hlcyBkZXRhaWxlZCBpbmZvcm1hdGlvbiBhYm91dCB0aGVcbiAgICAgICAgICBzZWNvbmQgc2VxdWVuY2UsIHNvIGlmIHlvdSB3YW50IHRvIGNvbXBhcmUgb25lIHNlcXVlbmNlIFMgYWdhaW5zdFxuICAgICAgICAgIG1hbnkgc2VxdWVuY2VzLCB1c2UgLnNldFNlcTIoUykgb25jZSBhbmQgY2FsbCAuc2V0U2VxMSh4KVxuICAgICAgICAgIHJlcGVhdGVkbHkgZm9yIGVhY2ggb2YgdGhlIG90aGVyIHNlcXVlbmNlcy5cbiAgICAgIFxuICAgICAgICAgIFNlZSBhbHNvIHNldFNlcXMoKSBhbmQgc2V0U2VxMSgpLlxuICAgICAgKi9cbiAgICAgIGlmIChiID09PSB0aGlzLmIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5iID0gYjtcbiAgICAgIHRoaXMubWF0Y2hpbmdCbG9ja3MgPSB0aGlzLm9wY29kZXMgPSBudWxsO1xuICAgICAgdGhpcy5mdWxsYmNvdW50ID0gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzLl9jaGFpbkIoKTtcbiAgICB9O1xuXG4gICAgU2VxdWVuY2VNYXRjaGVyLnByb3RvdHlwZS5fY2hhaW5CID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYiwgYjJqLCBlbHQsIGksIGlkeHMsIGluZGljZXMsIGlzanVuaywganVuaywgbiwgbnRlc3QsIHBvcHVsYXIsIF9pLCBfaiwgX2xlbiwgX2xlbjEsIF9yZWY7XG4gICAgICBiID0gdGhpcy5iO1xuICAgICAgdGhpcy5iMmogPSBiMmogPSB7fTtcbiAgICAgIGZvciAoaSA9IF9pID0gMCwgX2xlbiA9IGIubGVuZ3RoOyBfaSA8IF9sZW47IGkgPSArK19pKSB7XG4gICAgICAgIGVsdCA9IGJbaV07XG4gICAgICAgIGluZGljZXMgPSBfaGFzKGIyaiwgZWx0KSA/IGIyaltlbHRdIDogYjJqW2VsdF0gPSBbXTtcbiAgICAgICAgaW5kaWNlcy5wdXNoKGkpO1xuICAgICAgfVxuICAgICAganVuayA9IHt9O1xuICAgICAgaXNqdW5rID0gdGhpcy5pc2p1bms7XG4gICAgICBpZiAoaXNqdW5rKSB7XG4gICAgICAgIF9yZWYgPSBPYmplY3Qua2V5cyhiMmopO1xuICAgICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xuICAgICAgICAgIGVsdCA9IF9yZWZbX2pdO1xuICAgICAgICAgIGlmIChpc2p1bmsoZWx0KSkge1xuICAgICAgICAgICAganVua1tlbHRdID0gdHJ1ZTtcbiAgICAgICAgICAgIGRlbGV0ZSBiMmpbZWx0XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHBvcHVsYXIgPSB7fTtcbiAgICAgIG4gPSBiLmxlbmd0aDtcbiAgICAgIGlmICh0aGlzLmF1dG9qdW5rICYmIG4gPj0gMjAwKSB7XG4gICAgICAgIG50ZXN0ID0gZmxvb3IobiAvIDEwMCkgKyAxO1xuICAgICAgICBmb3IgKGVsdCBpbiBiMmopIHtcbiAgICAgICAgICBpZHhzID0gYjJqW2VsdF07XG4gICAgICAgICAgaWYgKGlkeHMubGVuZ3RoID4gbnRlc3QpIHtcbiAgICAgICAgICAgIHBvcHVsYXJbZWx0XSA9IHRydWU7XG4gICAgICAgICAgICBkZWxldGUgYjJqW2VsdF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmlzYmp1bmsgPSBmdW5jdGlvbihiKSB7XG4gICAgICAgIHJldHVybiBfaGFzKGp1bmssIGIpO1xuICAgICAgfTtcbiAgICAgIHJldHVybiB0aGlzLmlzYnBvcHVsYXIgPSBmdW5jdGlvbihiKSB7XG4gICAgICAgIHJldHVybiBfaGFzKHBvcHVsYXIsIGIpO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgU2VxdWVuY2VNYXRjaGVyLnByb3RvdHlwZS5maW5kTG9uZ2VzdE1hdGNoID0gZnVuY3Rpb24oYWxvLCBhaGksIGJsbywgYmhpKSB7XG4gICAgICAvKiBcbiAgICAgIEZpbmQgbG9uZ2VzdCBtYXRjaGluZyBibG9jayBpbiBhW2Fsby4uLmFoaV0gYW5kIGJbYmxvLi4uYmhpXS4gIFxuICAgICAgXG4gICAgICBJZiBpc2p1bmsgaXMgbm90IGRlZmluZWQ6XG4gICAgICBcbiAgICAgIFJldHVybiBbaSxqLGtdIHN1Y2ggdGhhdCBhW2kuLi5pK2tdIGlzIGVxdWFsIHRvIGJbai4uLmora10sIHdoZXJlXG4gICAgICAgICAgYWxvIDw9IGkgPD0gaStrIDw9IGFoaVxuICAgICAgICAgIGJsbyA8PSBqIDw9IGorayA8PSBiaGlcbiAgICAgIGFuZCBmb3IgYWxsIFtpJyxqJyxrJ10gbWVldGluZyB0aG9zZSBjb25kaXRpb25zLFxuICAgICAgICAgIGsgPj0gaydcbiAgICAgICAgICBpIDw9IGknXG4gICAgICAgICAgYW5kIGlmIGkgPT0gaScsIGogPD0gaidcbiAgICAgIFxuICAgICAgSW4gb3RoZXIgd29yZHMsIG9mIGFsbCBtYXhpbWFsIG1hdGNoaW5nIGJsb2NrcywgcmV0dXJuIG9uZSB0aGF0XG4gICAgICBzdGFydHMgZWFybGllc3QgaW4gYSwgYW5kIG9mIGFsbCB0aG9zZSBtYXhpbWFsIG1hdGNoaW5nIGJsb2NrcyB0aGF0XG4gICAgICBzdGFydCBlYXJsaWVzdCBpbiBhLCByZXR1cm4gdGhlIG9uZSB0aGF0IHN0YXJ0cyBlYXJsaWVzdCBpbiBiLlxuICAgICAgXG4gICAgICA+Pj4gaXNqdW5rID0gKHgpIC0+IHggaXMgJyAnXG4gICAgICA+Pj4gcyA9IG5ldyBTZXF1ZW5jZU1hdGNoZXIoaXNqdW5rLCAnIGFiY2QnLCAnYWJjZCBhYmNkJylcbiAgICAgID4+PiBzLmZpbmRMb25nZXN0TWF0Y2goMCwgNSwgMCwgOSlcbiAgICAgIFsxLCAwLCA0XVxuICAgICAgXG4gICAgICA+Pj4gcyA9IG5ldyBTZXF1ZW5jZU1hdGNoZXIobnVsbCwgJ2FiJywgJ2MnKVxuICAgICAgPj4+IHMuZmluZExvbmdlc3RNYXRjaCgwLCAyLCAwLCAxKVxuICAgICAgWzAsIDAsIDBdXG4gICAgICAqL1xuXG4gICAgICB2YXIgYSwgYiwgYjJqLCBiZXN0aSwgYmVzdGosIGJlc3RzaXplLCBpLCBpc2JqdW5rLCBqLCBqMmxlbiwgaywgbmV3ajJsZW4sIF9pLCBfaiwgX2xlbiwgX3JlZiwgX3JlZjEsIF9yZWYyLCBfcmVmMywgX3JlZjQsIF9yZWY1O1xuICAgICAgX3JlZiA9IFt0aGlzLmEsIHRoaXMuYiwgdGhpcy5iMmosIHRoaXMuaXNianVua10sIGEgPSBfcmVmWzBdLCBiID0gX3JlZlsxXSwgYjJqID0gX3JlZlsyXSwgaXNianVuayA9IF9yZWZbM107XG4gICAgICBfcmVmMSA9IFthbG8sIGJsbywgMF0sIGJlc3RpID0gX3JlZjFbMF0sIGJlc3RqID0gX3JlZjFbMV0sIGJlc3RzaXplID0gX3JlZjFbMl07XG4gICAgICBqMmxlbiA9IHt9O1xuICAgICAgZm9yIChpID0gX2kgPSBhbG87IGFsbyA8PSBhaGkgPyBfaSA8IGFoaSA6IF9pID4gYWhpOyBpID0gYWxvIDw9IGFoaSA/ICsrX2kgOiAtLV9pKSB7XG4gICAgICAgIG5ld2oybGVuID0ge307XG4gICAgICAgIF9yZWYyID0gKF9oYXMoYjJqLCBhW2ldKSA/IGIyalthW2ldXSA6IFtdKTtcbiAgICAgICAgZm9yIChfaiA9IDAsIF9sZW4gPSBfcmVmMi5sZW5ndGg7IF9qIDwgX2xlbjsgX2orKykge1xuICAgICAgICAgIGogPSBfcmVmMltfal07XG4gICAgICAgICAgaWYgKGogPCBibG8pIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaiA+PSBiaGkpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBrID0gbmV3ajJsZW5bal0gPSAoajJsZW5baiAtIDFdIHx8IDApICsgMTtcbiAgICAgICAgICBpZiAoayA+IGJlc3RzaXplKSB7XG4gICAgICAgICAgICBfcmVmMyA9IFtpIC0gayArIDEsIGogLSBrICsgMSwga10sIGJlc3RpID0gX3JlZjNbMF0sIGJlc3RqID0gX3JlZjNbMV0sIGJlc3RzaXplID0gX3JlZjNbMl07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGoybGVuID0gbmV3ajJsZW47XG4gICAgICB9XG4gICAgICB3aGlsZSAoYmVzdGkgPiBhbG8gJiYgYmVzdGogPiBibG8gJiYgIWlzYmp1bmsoYltiZXN0aiAtIDFdKSAmJiBhW2Jlc3RpIC0gMV0gPT09IGJbYmVzdGogLSAxXSkge1xuICAgICAgICBfcmVmNCA9IFtiZXN0aSAtIDEsIGJlc3RqIC0gMSwgYmVzdHNpemUgKyAxXSwgYmVzdGkgPSBfcmVmNFswXSwgYmVzdGogPSBfcmVmNFsxXSwgYmVzdHNpemUgPSBfcmVmNFsyXTtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChiZXN0aSArIGJlc3RzaXplIDwgYWhpICYmIGJlc3RqICsgYmVzdHNpemUgPCBiaGkgJiYgIWlzYmp1bmsoYltiZXN0aiArIGJlc3RzaXplXSkgJiYgYVtiZXN0aSArIGJlc3RzaXplXSA9PT0gYltiZXN0aiArIGJlc3RzaXplXSkge1xuICAgICAgICBiZXN0c2l6ZSsrO1xuICAgICAgfVxuICAgICAgd2hpbGUgKGJlc3RpID4gYWxvICYmIGJlc3RqID4gYmxvICYmIGlzYmp1bmsoYltiZXN0aiAtIDFdKSAmJiBhW2Jlc3RpIC0gMV0gPT09IGJbYmVzdGogLSAxXSkge1xuICAgICAgICBfcmVmNSA9IFtiZXN0aSAtIDEsIGJlc3RqIC0gMSwgYmVzdHNpemUgKyAxXSwgYmVzdGkgPSBfcmVmNVswXSwgYmVzdGogPSBfcmVmNVsxXSwgYmVzdHNpemUgPSBfcmVmNVsyXTtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChiZXN0aSArIGJlc3RzaXplIDwgYWhpICYmIGJlc3RqICsgYmVzdHNpemUgPCBiaGkgJiYgaXNianVuayhiW2Jlc3RqICsgYmVzdHNpemVdKSAmJiBhW2Jlc3RpICsgYmVzdHNpemVdID09PSBiW2Jlc3RqICsgYmVzdHNpemVdKSB7XG4gICAgICAgIGJlc3RzaXplKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gW2Jlc3RpLCBiZXN0aiwgYmVzdHNpemVdO1xuICAgIH07XG5cbiAgICBTZXF1ZW5jZU1hdGNoZXIucHJvdG90eXBlLmdldE1hdGNoaW5nQmxvY2tzID0gZnVuY3Rpb24oKSB7XG4gICAgICAvKlxuICAgICAgICAgIFJldHVybiBsaXN0IG9mIHRyaXBsZXMgZGVzY3JpYmluZyBtYXRjaGluZyBzdWJzZXF1ZW5jZXMuXG4gICAgICBcbiAgICAgICAgICBFYWNoIHRyaXBsZSBpcyBvZiB0aGUgZm9ybSBbaSwgaiwgbl0sIGFuZCBtZWFucyB0aGF0XG4gICAgICAgICAgYVtpLi4uaStuXSA9PSBiW2ouLi5qK25dLiAgVGhlIHRyaXBsZXMgYXJlIG1vbm90b25pY2FsbHkgaW5jcmVhc2luZyBpblxuICAgICAgICAgIGkgYW5kIGluIGouICBpdCdzIGFsc28gZ3VhcmFudGVlZCB0aGF0IGlmXG4gICAgICAgICAgW2ksIGosIG5dIGFuZCBbaScsIGonLCBuJ10gYXJlIGFkamFjZW50IHRyaXBsZXMgaW4gdGhlIGxpc3QsIGFuZFxuICAgICAgICAgIHRoZSBzZWNvbmQgaXMgbm90IHRoZSBsYXN0IHRyaXBsZSBpbiB0aGUgbGlzdCwgdGhlbiBpK24gIT0gaScgb3JcbiAgICAgICAgICBqK24gIT0gaicuICBJT1csIGFkamFjZW50IHRyaXBsZXMgbmV2ZXIgZGVzY3JpYmUgYWRqYWNlbnQgZXF1YWxcbiAgICAgICAgICBibG9ja3MuXG4gICAgICBcbiAgICAgICAgICBUaGUgbGFzdCB0cmlwbGUgaXMgYSBkdW1teSwgW2EubGVuZ3RoLCBiLmxlbmd0aCwgMF0sIGFuZCBpcyB0aGUgb25seVxuICAgICAgICAgIHRyaXBsZSB3aXRoIG49PTAuXG4gICAgICBcbiAgICAgICAgICA+Pj4gcyA9IG5ldyBTZXF1ZW5jZU1hdGNoZXIobnVsbCwgJ2FieGNkJywgJ2FiY2QnKVxuICAgICAgICAgID4+PiBzLmdldE1hdGNoaW5nQmxvY2tzKClcbiAgICAgICAgICBbWzAsIDAsIDJdLCBbMywgMiwgMl0sIFs1LCA0LCAwXV1cbiAgICAgICovXG5cbiAgICAgIHZhciBhaGksIGFsbywgYmhpLCBibG8sIGksIGkxLCBpMiwgaiwgajEsIGoyLCBrLCBrMSwgazIsIGxhLCBsYiwgbWF0Y2hpbmdCbG9ja3MsIG5vbkFkamFjZW50LCBxdWV1ZSwgeCwgX2ksIF9sZW4sIF9yZWYsIF9yZWYxLCBfcmVmMiwgX3JlZjMsIF9yZWY0O1xuICAgICAgaWYgKHRoaXMubWF0Y2hpbmdCbG9ja3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0Y2hpbmdCbG9ja3M7XG4gICAgICB9XG4gICAgICBfcmVmID0gW3RoaXMuYS5sZW5ndGgsIHRoaXMuYi5sZW5ndGhdLCBsYSA9IF9yZWZbMF0sIGxiID0gX3JlZlsxXTtcbiAgICAgIHF1ZXVlID0gW1swLCBsYSwgMCwgbGJdXTtcbiAgICAgIG1hdGNoaW5nQmxvY2tzID0gW107XG4gICAgICB3aGlsZSAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIF9yZWYxID0gcXVldWUucG9wKCksIGFsbyA9IF9yZWYxWzBdLCBhaGkgPSBfcmVmMVsxXSwgYmxvID0gX3JlZjFbMl0sIGJoaSA9IF9yZWYxWzNdO1xuICAgICAgICBfcmVmMiA9IHggPSB0aGlzLmZpbmRMb25nZXN0TWF0Y2goYWxvLCBhaGksIGJsbywgYmhpKSwgaSA9IF9yZWYyWzBdLCBqID0gX3JlZjJbMV0sIGsgPSBfcmVmMlsyXTtcbiAgICAgICAgaWYgKGspIHtcbiAgICAgICAgICBtYXRjaGluZ0Jsb2Nrcy5wdXNoKHgpO1xuICAgICAgICAgIGlmIChhbG8gPCBpICYmIGJsbyA8IGopIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goW2FsbywgaSwgYmxvLCBqXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpICsgayA8IGFoaSAmJiBqICsgayA8IGJoaSkge1xuICAgICAgICAgICAgcXVldWUucHVzaChbaSArIGssIGFoaSwgaiArIGssIGJoaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbWF0Y2hpbmdCbG9ja3Muc29ydChfYXJyYXlDbXApO1xuICAgICAgaTEgPSBqMSA9IGsxID0gMDtcbiAgICAgIG5vbkFkamFjZW50ID0gW107XG4gICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IG1hdGNoaW5nQmxvY2tzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIF9yZWYzID0gbWF0Y2hpbmdCbG9ja3NbX2ldLCBpMiA9IF9yZWYzWzBdLCBqMiA9IF9yZWYzWzFdLCBrMiA9IF9yZWYzWzJdO1xuICAgICAgICBpZiAoaTEgKyBrMSA9PT0gaTIgJiYgajEgKyBrMSA9PT0gajIpIHtcbiAgICAgICAgICBrMSArPSBrMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoazEpIHtcbiAgICAgICAgICAgIG5vbkFkamFjZW50LnB1c2goW2kxLCBqMSwgazFdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgX3JlZjQgPSBbaTIsIGoyLCBrMl0sIGkxID0gX3JlZjRbMF0sIGoxID0gX3JlZjRbMV0sIGsxID0gX3JlZjRbMl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChrMSkge1xuICAgICAgICBub25BZGphY2VudC5wdXNoKFtpMSwgajEsIGsxXSk7XG4gICAgICB9XG4gICAgICBub25BZGphY2VudC5wdXNoKFtsYSwgbGIsIDBdKTtcbiAgICAgIHJldHVybiB0aGlzLm1hdGNoaW5nQmxvY2tzID0gbm9uQWRqYWNlbnQ7XG4gICAgfTtcblxuICAgIFNlcXVlbmNlTWF0Y2hlci5wcm90b3R5cGUuZ2V0T3Bjb2RlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgLyogXG4gICAgICBSZXR1cm4gbGlzdCBvZiA1LXR1cGxlcyBkZXNjcmliaW5nIGhvdyB0byB0dXJuIGEgaW50byBiLlxuICAgICAgXG4gICAgICBFYWNoIHR1cGxlIGlzIG9mIHRoZSBmb3JtIFt0YWcsIGkxLCBpMiwgajEsIGoyXS4gIFRoZSBmaXJzdCB0dXBsZVxuICAgICAgaGFzIGkxID09IGoxID09IDAsIGFuZCByZW1haW5pbmcgdHVwbGVzIGhhdmUgaTEgPT0gdGhlIGkyIGZyb20gdGhlXG4gICAgICB0dXBsZSBwcmVjZWRpbmcgaXQsIGFuZCBsaWtld2lzZSBmb3IgajEgPT0gdGhlIHByZXZpb3VzIGoyLlxuICAgICAgXG4gICAgICBUaGUgdGFncyBhcmUgc3RyaW5ncywgd2l0aCB0aGVzZSBtZWFuaW5nczpcbiAgICAgIFxuICAgICAgJ3JlcGxhY2UnOiAgYVtpMS4uLmkyXSBzaG91bGQgYmUgcmVwbGFjZWQgYnkgYltqMS4uLmoyXVxuICAgICAgJ2RlbGV0ZSc6ICAgYVtpMS4uLmkyXSBzaG91bGQgYmUgZGVsZXRlZC5cbiAgICAgICAgICAgICAgICAgIE5vdGUgdGhhdCBqMT09ajIgaW4gdGhpcyBjYXNlLlxuICAgICAgJ2luc2VydCc6ICAgYltqMS4uLmoyXSBzaG91bGQgYmUgaW5zZXJ0ZWQgYXQgYVtpMS4uLmkxXS5cbiAgICAgICAgICAgICAgICAgIE5vdGUgdGhhdCBpMT09aTIgaW4gdGhpcyBjYXNlLlxuICAgICAgJ2VxdWFsJzogICAgYVtpMS4uLmkyXSA9PSBiW2oxLi4uajJdXG4gICAgICBcbiAgICAgID4+PiBzID0gbmV3IFNlcXVlbmNlTWF0Y2hlcihudWxsLCAncWFieGNkJywgJ2FieWNkZicpXG4gICAgICA+Pj4gcy5nZXRPcGNvZGVzKClcbiAgICAgIFsgWyAnZGVsZXRlJyAgLCAwICwgMSAsIDAgLCAwIF0gLFxuICAgICAgICBbICdlcXVhbCcgICAsIDEgLCAzICwgMCAsIDIgXSAsXG4gICAgICAgIFsgJ3JlcGxhY2UnICwgMyAsIDQgLCAyICwgMyBdICxcbiAgICAgICAgWyAnZXF1YWwnICAgLCA0ICwgNiAsIDMgLCA1IF0gLFxuICAgICAgICBbICdpbnNlcnQnICAsIDYgLCA2ICwgNSAsIDYgXSBdXG4gICAgICAqL1xuXG4gICAgICB2YXIgYWksIGFuc3dlciwgYmosIGksIGosIHNpemUsIHRhZywgX2ksIF9sZW4sIF9yZWYsIF9yZWYxLCBfcmVmMjtcbiAgICAgIGlmICh0aGlzLm9wY29kZXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3Bjb2RlcztcbiAgICAgIH1cbiAgICAgIGkgPSBqID0gMDtcbiAgICAgIHRoaXMub3Bjb2RlcyA9IGFuc3dlciA9IFtdO1xuICAgICAgX3JlZiA9IHRoaXMuZ2V0TWF0Y2hpbmdCbG9ja3MoKTtcbiAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICBfcmVmMSA9IF9yZWZbX2ldLCBhaSA9IF9yZWYxWzBdLCBiaiA9IF9yZWYxWzFdLCBzaXplID0gX3JlZjFbMl07XG4gICAgICAgIHRhZyA9ICcnO1xuICAgICAgICBpZiAoaSA8IGFpICYmIGogPCBiaikge1xuICAgICAgICAgIHRhZyA9ICdyZXBsYWNlJztcbiAgICAgICAgfSBlbHNlIGlmIChpIDwgYWkpIHtcbiAgICAgICAgICB0YWcgPSAnZGVsZXRlJztcbiAgICAgICAgfSBlbHNlIGlmIChqIDwgYmopIHtcbiAgICAgICAgICB0YWcgPSAnaW5zZXJ0JztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFnKSB7XG4gICAgICAgICAgYW5zd2VyLnB1c2goW3RhZywgaSwgYWksIGosIGJqXSk7XG4gICAgICAgIH1cbiAgICAgICAgX3JlZjIgPSBbYWkgKyBzaXplLCBiaiArIHNpemVdLCBpID0gX3JlZjJbMF0sIGogPSBfcmVmMlsxXTtcbiAgICAgICAgaWYgKHNpemUpIHtcbiAgICAgICAgICBhbnN3ZXIucHVzaChbJ2VxdWFsJywgYWksIGksIGJqLCBqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfTtcblxuICAgIFNlcXVlbmNlTWF0Y2hlci5wcm90b3R5cGUuZ2V0R3JvdXBlZE9wY29kZXMgPSBmdW5jdGlvbihuKSB7XG4gICAgICB2YXIgY29kZXMsIGdyb3VwLCBncm91cHMsIGkxLCBpMiwgajEsIGoyLCBubiwgdGFnLCBfaSwgX2xlbiwgX3JlZiwgX3JlZjEsIF9yZWYyLCBfcmVmMztcbiAgICAgIGlmIChuID09IG51bGwpIHtcbiAgICAgICAgbiA9IDM7XG4gICAgICB9XG4gICAgICAvKiBcbiAgICAgIElzb2xhdGUgY2hhbmdlIGNsdXN0ZXJzIGJ5IGVsaW1pbmF0aW5nIHJhbmdlcyB3aXRoIG5vIGNoYW5nZXMuXG4gICAgICBcbiAgICAgIFJldHVybiBhIGxpc3QgZ3JvdXBzIHdpdGggdXB0byBuIGxpbmVzIG9mIGNvbnRleHQuXG4gICAgICBFYWNoIGdyb3VwIGlzIGluIHRoZSBzYW1lIGZvcm1hdCBhcyByZXR1cm5lZCBieSBnZXRfb3Bjb2RlcygpLlxuICAgICAgXG4gICAgICA+Pj4gYSA9IFsxLi4uNDBdLm1hcChTdHJpbmcpXG4gICAgICA+Pj4gYiA9IGEuc2xpY2UoKVxuICAgICAgPj4+IGJbOC4uLjhdID0gJ2knXG4gICAgICA+Pj4gYlsyMF0gKz0gJ3gnXG4gICAgICA+Pj4gYlsyMy4uLjI4XSA9IFtdXG4gICAgICA+Pj4gYlszMF0gKz0gJ3knXG4gICAgICA+Pj4gcyA9IG5ldyBTZXF1ZW5jZU1hdGNoZXIobnVsbCwgYSwgYilcbiAgICAgID4+PiBzLmdldEdyb3VwZWRPcGNvZGVzKClcbiAgICAgIFsgWyBbICdlcXVhbCcgICwgNSAsIDggICwgNSAsIDggXSxcbiAgICAgICAgICBbICdpbnNlcnQnICwgOCAsIDggICwgOCAsIDkgXSxcbiAgICAgICAgICBbICdlcXVhbCcgICwgOCAsIDExICwgOSAsIDEyIF0gXSxcbiAgICAgICAgWyBbICdlcXVhbCcgICAsIDE2ICwgMTkgLCAxNyAsIDIwIF0sXG4gICAgICAgICAgWyAncmVwbGFjZScgLCAxOSAsIDIwICwgMjAgLCAyMSBdLFxuICAgICAgICAgIFsgJ2VxdWFsJyAgICwgMjAgLCAyMiAsIDIxICwgMjMgXSxcbiAgICAgICAgICBbICdkZWxldGUnICAsIDIyICwgMjcgLCAyMyAsIDIzIF0sXG4gICAgICAgICAgWyAnZXF1YWwnICAgLCAyNyAsIDMwICwgMjMgLCAyNiBdIF0sXG4gICAgICAgIFsgWyAnZXF1YWwnICAgLCAzMSAsIDM0ICwgMjcgLCAzMCBdLFxuICAgICAgICAgIFsgJ3JlcGxhY2UnICwgMzQgLCAzNSAsIDMwICwgMzEgXSxcbiAgICAgICAgICBbICdlcXVhbCcgICAsIDM1ICwgMzggLCAzMSAsIDM0IF0gXSBdXG4gICAgICAqL1xuXG4gICAgICBjb2RlcyA9IHRoaXMuZ2V0T3Bjb2RlcygpO1xuICAgICAgaWYgKCFjb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgY29kZXMgPSBbWydlcXVhbCcsIDAsIDEsIDAsIDFdXTtcbiAgICAgIH1cbiAgICAgIGlmIChjb2Rlc1swXVswXSA9PT0gJ2VxdWFsJykge1xuICAgICAgICBfcmVmID0gY29kZXNbMF0sIHRhZyA9IF9yZWZbMF0sIGkxID0gX3JlZlsxXSwgaTIgPSBfcmVmWzJdLCBqMSA9IF9yZWZbM10sIGoyID0gX3JlZls0XTtcbiAgICAgICAgY29kZXNbMF0gPSBbdGFnLCBtYXgoaTEsIGkyIC0gbiksIGkyLCBtYXgoajEsIGoyIC0gbiksIGoyXTtcbiAgICAgIH1cbiAgICAgIGlmIChjb2Rlc1tjb2Rlcy5sZW5ndGggLSAxXVswXSA9PT0gJ2VxdWFsJykge1xuICAgICAgICBfcmVmMSA9IGNvZGVzW2NvZGVzLmxlbmd0aCAtIDFdLCB0YWcgPSBfcmVmMVswXSwgaTEgPSBfcmVmMVsxXSwgaTIgPSBfcmVmMVsyXSwgajEgPSBfcmVmMVszXSwgajIgPSBfcmVmMVs0XTtcbiAgICAgICAgY29kZXNbY29kZXMubGVuZ3RoIC0gMV0gPSBbdGFnLCBpMSwgbWluKGkyLCBpMSArIG4pLCBqMSwgbWluKGoyLCBqMSArIG4pXTtcbiAgICAgIH1cbiAgICAgIG5uID0gbiArIG47XG4gICAgICBncm91cHMgPSBbXTtcbiAgICAgIGdyb3VwID0gW107XG4gICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IGNvZGVzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIF9yZWYyID0gY29kZXNbX2ldLCB0YWcgPSBfcmVmMlswXSwgaTEgPSBfcmVmMlsxXSwgaTIgPSBfcmVmMlsyXSwgajEgPSBfcmVmMlszXSwgajIgPSBfcmVmMls0XTtcbiAgICAgICAgaWYgKHRhZyA9PT0gJ2VxdWFsJyAmJiBpMiAtIGkxID4gbm4pIHtcbiAgICAgICAgICBncm91cC5wdXNoKFt0YWcsIGkxLCBtaW4oaTIsIGkxICsgbiksIGoxLCBtaW4oajIsIGoxICsgbildKTtcbiAgICAgICAgICBncm91cHMucHVzaChncm91cCk7XG4gICAgICAgICAgZ3JvdXAgPSBbXTtcbiAgICAgICAgICBfcmVmMyA9IFttYXgoaTEsIGkyIC0gbiksIG1heChqMSwgajIgLSBuKV0sIGkxID0gX3JlZjNbMF0sIGoxID0gX3JlZjNbMV07XG4gICAgICAgIH1cbiAgICAgICAgZ3JvdXAucHVzaChbdGFnLCBpMSwgaTIsIGoxLCBqMl0pO1xuICAgICAgfVxuICAgICAgaWYgKGdyb3VwLmxlbmd0aCAmJiAhKGdyb3VwLmxlbmd0aCA9PT0gMSAmJiBncm91cFswXVswXSA9PT0gJ2VxdWFsJykpIHtcbiAgICAgICAgZ3JvdXBzLnB1c2goZ3JvdXApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICB9O1xuXG4gICAgU2VxdWVuY2VNYXRjaGVyLnByb3RvdHlwZS5yYXRpbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgLypcbiAgICAgICAgICBSZXR1cm4gYSBtZWFzdXJlIG9mIHRoZSBzZXF1ZW5jZXMnIHNpbWlsYXJpdHkgKGZsb2F0IGluIFswLDFdKS5cbiAgICAgIFxuICAgICAgICAgIFdoZXJlIFQgaXMgdGhlIHRvdGFsIG51bWJlciBvZiBlbGVtZW50cyBpbiBib3RoIHNlcXVlbmNlcywgYW5kXG4gICAgICAgICAgTSBpcyB0aGUgbnVtYmVyIG9mIG1hdGNoZXMsIHRoaXMgaXMgMi4wKk0gLyBULlxuICAgICAgICAgIE5vdGUgdGhhdCB0aGlzIGlzIDEgaWYgdGhlIHNlcXVlbmNlcyBhcmUgaWRlbnRpY2FsLCBhbmQgMCBpZlxuICAgICAgICAgIHRoZXkgaGF2ZSBub3RoaW5nIGluIGNvbW1vbi5cbiAgICAgIFxuICAgICAgICAgIC5yYXRpbygpIGlzIGV4cGVuc2l2ZSB0byBjb21wdXRlIGlmIHlvdSBoYXZlbid0IGFscmVhZHkgY29tcHV0ZWRcbiAgICAgICAgICAuZ2V0TWF0Y2hpbmdCbG9ja3MoKSBvciAuZ2V0T3Bjb2RlcygpLCBpbiB3aGljaCBjYXNlIHlvdSBtYXlcbiAgICAgICAgICB3YW50IHRvIHRyeSAucXVpY2tSYXRpbygpIG9yIC5yZWFsUXVpY2tSYXRpbygpIGZpcnN0IHRvIGdldCBhblxuICAgICAgICAgIHVwcGVyIGJvdW5kLlxuICAgICAgICAgIFxuICAgICAgICAgID4+PiBzID0gbmV3IFNlcXVlbmNlTWF0Y2hlcihudWxsLCAnYWJjZCcsICdiY2RlJylcbiAgICAgICAgICA+Pj4gcy5yYXRpbygpXG4gICAgICAgICAgMC43NVxuICAgICAgICAgID4+PiBzLnF1aWNrUmF0aW8oKVxuICAgICAgICAgIDAuNzVcbiAgICAgICAgICA+Pj4gcy5yZWFsUXVpY2tSYXRpbygpXG4gICAgICAgICAgMS4wXG4gICAgICAqL1xuXG4gICAgICB2YXIgbWF0Y2gsIG1hdGNoZXMsIF9pLCBfbGVuLCBfcmVmO1xuICAgICAgbWF0Y2hlcyA9IDA7XG4gICAgICBfcmVmID0gdGhpcy5nZXRNYXRjaGluZ0Jsb2NrcygpO1xuICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIG1hdGNoID0gX3JlZltfaV07XG4gICAgICAgIG1hdGNoZXMgKz0gbWF0Y2hbMl07XG4gICAgICB9XG4gICAgICByZXR1cm4gX2NhbGN1bGF0ZVJhdGlvKG1hdGNoZXMsIHRoaXMuYS5sZW5ndGggKyB0aGlzLmIubGVuZ3RoKTtcbiAgICB9O1xuXG4gICAgU2VxdWVuY2VNYXRjaGVyLnByb3RvdHlwZS5xdWlja1JhdGlvID0gZnVuY3Rpb24oKSB7XG4gICAgICAvKlxuICAgICAgICAgIFJldHVybiBhbiB1cHBlciBib3VuZCBvbiByYXRpbygpIHJlbGF0aXZlbHkgcXVpY2tseS5cbiAgICAgIFxuICAgICAgICAgIFRoaXMgaXNuJ3QgZGVmaW5lZCBiZXlvbmQgdGhhdCBpdCBpcyBhbiB1cHBlciBib3VuZCBvbiAucmF0aW8oKSwgYW5kXG4gICAgICAgICAgaXMgZmFzdGVyIHRvIGNvbXB1dGUuXG4gICAgICAqL1xuXG4gICAgICB2YXIgYXZhaWwsIGVsdCwgZnVsbGJjb3VudCwgbWF0Y2hlcywgbnVtYiwgX2ksIF9qLCBfbGVuLCBfbGVuMSwgX3JlZiwgX3JlZjE7XG4gICAgICBpZiAoIXRoaXMuZnVsbGJjb3VudCkge1xuICAgICAgICB0aGlzLmZ1bGxiY291bnQgPSBmdWxsYmNvdW50ID0ge307XG4gICAgICAgIF9yZWYgPSB0aGlzLmI7XG4gICAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICAgIGVsdCA9IF9yZWZbX2ldO1xuICAgICAgICAgIGZ1bGxiY291bnRbZWx0XSA9IChmdWxsYmNvdW50W2VsdF0gfHwgMCkgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdWxsYmNvdW50ID0gdGhpcy5mdWxsYmNvdW50O1xuICAgICAgYXZhaWwgPSB7fTtcbiAgICAgIG1hdGNoZXMgPSAwO1xuICAgICAgX3JlZjEgPSB0aGlzLmE7XG4gICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMS5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgICAgZWx0ID0gX3JlZjFbX2pdO1xuICAgICAgICBpZiAoX2hhcyhhdmFpbCwgZWx0KSkge1xuICAgICAgICAgIG51bWIgPSBhdmFpbFtlbHRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG51bWIgPSBmdWxsYmNvdW50W2VsdF0gfHwgMDtcbiAgICAgICAgfVxuICAgICAgICBhdmFpbFtlbHRdID0gbnVtYiAtIDE7XG4gICAgICAgIGlmIChudW1iID4gMCkge1xuICAgICAgICAgIG1hdGNoZXMrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIF9jYWxjdWxhdGVSYXRpbyhtYXRjaGVzLCB0aGlzLmEubGVuZ3RoICsgdGhpcy5iLmxlbmd0aCk7XG4gICAgfTtcblxuICAgIFNlcXVlbmNlTWF0Y2hlci5wcm90b3R5cGUucmVhbFF1aWNrUmF0aW8gPSBmdW5jdGlvbigpIHtcbiAgICAgIC8qXG4gICAgICAgICAgUmV0dXJuIGFuIHVwcGVyIGJvdW5kIG9uIHJhdGlvKCkgdmVyeSBxdWlja2x5LlxuICAgICAgXG4gICAgICAgICAgVGhpcyBpc24ndCBkZWZpbmVkIGJleW9uZCB0aGF0IGl0IGlzIGFuIHVwcGVyIGJvdW5kIG9uIC5yYXRpbygpLCBhbmRcbiAgICAgICAgICBpcyBmYXN0ZXIgdG8gY29tcHV0ZSB0aGFuIGVpdGhlciAucmF0aW8oKSBvciAucXVpY2tSYXRpbygpLlxuICAgICAgKi9cblxuICAgICAgdmFyIGxhLCBsYiwgX3JlZjtcbiAgICAgIF9yZWYgPSBbdGhpcy5hLmxlbmd0aCwgdGhpcy5iLmxlbmd0aF0sIGxhID0gX3JlZlswXSwgbGIgPSBfcmVmWzFdO1xuICAgICAgcmV0dXJuIF9jYWxjdWxhdGVSYXRpbyhtaW4obGEsIGxiKSwgbGEgKyBsYik7XG4gICAgfTtcblxuICAgIHJldHVybiBTZXF1ZW5jZU1hdGNoZXI7XG5cbiAgfSkoKTtcblxuICBnZXRDbG9zZU1hdGNoZXMgPSBmdW5jdGlvbih3b3JkLCBwb3NzaWJpbGl0aWVzLCBuLCBjdXRvZmYpIHtcbiAgICB2YXIgcmVzdWx0LCBzLCBzY29yZSwgeCwgX2ksIF9qLCBfbGVuLCBfbGVuMSwgX3JlZiwgX3Jlc3VsdHM7XG4gICAgaWYgKG4gPT0gbnVsbCkge1xuICAgICAgbiA9IDM7XG4gICAgfVxuICAgIGlmIChjdXRvZmYgPT0gbnVsbCkge1xuICAgICAgY3V0b2ZmID0gMC42O1xuICAgIH1cbiAgICAvKlxuICAgICAgVXNlIFNlcXVlbmNlTWF0Y2hlciB0byByZXR1cm4gbGlzdCBvZiB0aGUgYmVzdCBcImdvb2QgZW5vdWdoXCIgbWF0Y2hlcy5cbiAgICBcbiAgICAgIHdvcmQgaXMgYSBzZXF1ZW5jZSBmb3Igd2hpY2ggY2xvc2UgbWF0Y2hlcyBhcmUgZGVzaXJlZCAodHlwaWNhbGx5IGFcbiAgICAgIHN0cmluZykuXG4gICAgXG4gICAgICBwb3NzaWJpbGl0aWVzIGlzIGEgbGlzdCBvZiBzZXF1ZW5jZXMgYWdhaW5zdCB3aGljaCB0byBtYXRjaCB3b3JkXG4gICAgICAodHlwaWNhbGx5IGEgbGlzdCBvZiBzdHJpbmdzKS5cbiAgICBcbiAgICAgIE9wdGlvbmFsIGFyZyBuIChkZWZhdWx0IDMpIGlzIHRoZSBtYXhpbXVtIG51bWJlciBvZiBjbG9zZSBtYXRjaGVzIHRvXG4gICAgICByZXR1cm4uICBuIG11c3QgYmUgPiAwLlxuICAgIFxuICAgICAgT3B0aW9uYWwgYXJnIGN1dG9mZiAoZGVmYXVsdCAwLjYpIGlzIGEgZmxvYXQgaW4gWzAsIDFdLiAgUG9zc2liaWxpdGllc1xuICAgICAgdGhhdCBkb24ndCBzY29yZSBhdCBsZWFzdCB0aGF0IHNpbWlsYXIgdG8gd29yZCBhcmUgaWdub3JlZC5cbiAgICBcbiAgICAgIFRoZSBiZXN0IChubyBtb3JlIHRoYW4gbikgbWF0Y2hlcyBhbW9uZyB0aGUgcG9zc2liaWxpdGllcyBhcmUgcmV0dXJuZWRcbiAgICAgIGluIGEgbGlzdCwgc29ydGVkIGJ5IHNpbWlsYXJpdHkgc2NvcmUsIG1vc3Qgc2ltaWxhciBmaXJzdC5cbiAgICBcbiAgICAgID4+PiBnZXRDbG9zZU1hdGNoZXMoJ2FwcGVsJywgWydhcGUnLCAnYXBwbGUnLCAncGVhY2gnLCAncHVwcHknXSlcbiAgICAgIFsnYXBwbGUnLCAnYXBlJ11cbiAgICAgID4+PiBLRVlXT1JEUyA9IHJlcXVpcmUoJ2NvZmZlZS1zY3JpcHQnKS5SRVNFUlZFRFxuICAgICAgPj4+IGdldENsb3NlTWF0Y2hlcygnd2hlZWwnLCBLRVlXT1JEUylcbiAgICAgIFsnd2hlbicsICd3aGlsZSddXG4gICAgICA+Pj4gZ2V0Q2xvc2VNYXRjaGVzKCdhY2Nvc3QnLCBLRVlXT1JEUylcbiAgICAgIFsnY29uc3QnXVxuICAgICovXG5cbiAgICBpZiAoIShuID4gMCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIm4gbXVzdCBiZSA+IDA6IChcIiArIG4gKyBcIilcIik7XG4gICAgfVxuICAgIGlmICghKCgwLjAgPD0gY3V0b2ZmICYmIGN1dG9mZiA8PSAxLjApKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3V0b2ZmIG11c3QgYmUgaW4gWzAuMCwgMS4wXTogKFwiICsgY3V0b2ZmICsgXCIpXCIpO1xuICAgIH1cbiAgICByZXN1bHQgPSBbXTtcbiAgICBzID0gbmV3IFNlcXVlbmNlTWF0Y2hlcigpO1xuICAgIHMuc2V0U2VxMih3b3JkKTtcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IHBvc3NpYmlsaXRpZXMubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIHggPSBwb3NzaWJpbGl0aWVzW19pXTtcbiAgICAgIHMuc2V0U2VxMSh4KTtcbiAgICAgIGlmIChzLnJlYWxRdWlja1JhdGlvKCkgPj0gY3V0b2ZmICYmIHMucXVpY2tSYXRpbygpID49IGN1dG9mZiAmJiBzLnJhdGlvKCkgPj0gY3V0b2ZmKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtzLnJhdGlvKCksIHhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0ID0gSGVhcC5ubGFyZ2VzdChyZXN1bHQsIG4sIF9hcnJheUNtcCk7XG4gICAgX3Jlc3VsdHMgPSBbXTtcbiAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSByZXN1bHQubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICBfcmVmID0gcmVzdWx0W19qXSwgc2NvcmUgPSBfcmVmWzBdLCB4ID0gX3JlZlsxXTtcbiAgICAgIF9yZXN1bHRzLnB1c2goeCk7XG4gICAgfVxuICAgIHJldHVybiBfcmVzdWx0cztcbiAgfTtcblxuICBfY291bnRMZWFkaW5nID0gZnVuY3Rpb24obGluZSwgY2gpIHtcbiAgICAvKlxuICAgICAgUmV0dXJuIG51bWJlciBvZiBgY2hgIGNoYXJhY3RlcnMgYXQgdGhlIHN0YXJ0IG9mIGBsaW5lYC5cbiAgICBcbiAgICAgID4+PiBfY291bnRMZWFkaW5nKCcgICBhYmMnLCAnICcpXG4gICAgICAzXG4gICAgKi9cblxuICAgIHZhciBpLCBuLCBfcmVmO1xuICAgIF9yZWYgPSBbMCwgbGluZS5sZW5ndGhdLCBpID0gX3JlZlswXSwgbiA9IF9yZWZbMV07XG4gICAgd2hpbGUgKGkgPCBuICYmIGxpbmVbaV0gPT09IGNoKSB7XG4gICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiBpO1xuICB9O1xuXG4gIERpZmZlciA9IChmdW5jdGlvbigpIHtcblxuICAgIERpZmZlci5uYW1lID0gJ0RpZmZlcic7XG5cbiAgICAvKlxuICAgICAgRGlmZmVyIGlzIGEgY2xhc3MgZm9yIGNvbXBhcmluZyBzZXF1ZW5jZXMgb2YgbGluZXMgb2YgdGV4dCwgYW5kXG4gICAgICBwcm9kdWNpbmcgaHVtYW4tcmVhZGFibGUgZGlmZmVyZW5jZXMgb3IgZGVsdGFzLiAgRGlmZmVyIHVzZXNcbiAgICAgIFNlcXVlbmNlTWF0Y2hlciBib3RoIHRvIGNvbXBhcmUgc2VxdWVuY2VzIG9mIGxpbmVzLCBhbmQgdG8gY29tcGFyZVxuICAgICAgc2VxdWVuY2VzIG9mIGNoYXJhY3RlcnMgd2l0aGluIHNpbWlsYXIgKG5lYXItbWF0Y2hpbmcpIGxpbmVzLlxuICAgIFxuICAgICAgRWFjaCBsaW5lIG9mIGEgRGlmZmVyIGRlbHRhIGJlZ2lucyB3aXRoIGEgdHdvLWxldHRlciBjb2RlOlxuICAgIFxuICAgICAgICAgICctICcgICAgbGluZSB1bmlxdWUgdG8gc2VxdWVuY2UgMVxuICAgICAgICAgICcrICcgICAgbGluZSB1bmlxdWUgdG8gc2VxdWVuY2UgMlxuICAgICAgICAgICcgICcgICAgbGluZSBjb21tb24gdG8gYm90aCBzZXF1ZW5jZXNcbiAgICAgICAgICAnPyAnICAgIGxpbmUgbm90IHByZXNlbnQgaW4gZWl0aGVyIGlucHV0IHNlcXVlbmNlXG4gICAgXG4gICAgICBMaW5lcyBiZWdpbm5pbmcgd2l0aCAnPyAnIGF0dGVtcHQgdG8gZ3VpZGUgdGhlIGV5ZSB0byBpbnRyYWxpbmVcbiAgICAgIGRpZmZlcmVuY2VzLCBhbmQgd2VyZSBub3QgcHJlc2VudCBpbiBlaXRoZXIgaW5wdXQgc2VxdWVuY2UuICBUaGVzZSBsaW5lc1xuICAgICAgY2FuIGJlIGNvbmZ1c2luZyBpZiB0aGUgc2VxdWVuY2VzIGNvbnRhaW4gdGFiIGNoYXJhY3RlcnMuXG4gICAgXG4gICAgICBOb3RlIHRoYXQgRGlmZmVyIG1ha2VzIG5vIGNsYWltIHRvIHByb2R1Y2UgYSAqbWluaW1hbCogZGlmZi4gIFRvIHRoZVxuICAgICAgY29udHJhcnksIG1pbmltYWwgZGlmZnMgYXJlIG9mdGVuIGNvdW50ZXItaW50dWl0aXZlLCBiZWNhdXNlIHRoZXkgc3luY2hcbiAgICAgIHVwIGFueXdoZXJlIHBvc3NpYmxlLCBzb21ldGltZXMgYWNjaWRlbnRhbCBtYXRjaGVzIDEwMCBwYWdlcyBhcGFydC5cbiAgICAgIFJlc3RyaWN0aW5nIHN5bmNoIHBvaW50cyB0byBjb250aWd1b3VzIG1hdGNoZXMgcHJlc2VydmVzIHNvbWUgbm90aW9uIG9mXG4gICAgICBsb2NhbGl0eSwgYXQgdGhlIG9jY2FzaW9uYWwgY29zdCBvZiBwcm9kdWNpbmcgYSBsb25nZXIgZGlmZi5cbiAgICBcbiAgICAgIEV4YW1wbGU6IENvbXBhcmluZyB0d28gdGV4dHMuXG4gICAgXG4gICAgICA+Pj4gdGV4dDEgPSBbJzEuIEJlYXV0aWZ1bCBpcyBiZXR0ZXIgdGhhbiB1Z2x5LlxcbicsXG4gICAgICAuLi4gICAnMi4gRXhwbGljaXQgaXMgYmV0dGVyIHRoYW4gaW1wbGljaXQuXFxuJyxcbiAgICAgIC4uLiAgICczLiBTaW1wbGUgaXMgYmV0dGVyIHRoYW4gY29tcGxleC5cXG4nLFxuICAgICAgLi4uICAgJzQuIENvbXBsZXggaXMgYmV0dGVyIHRoYW4gY29tcGxpY2F0ZWQuXFxuJ11cbiAgICAgID4+PiB0ZXh0MS5sZW5ndGhcbiAgICAgIDRcbiAgICAgID4+PiB0ZXh0MiA9IFsnMS4gQmVhdXRpZnVsIGlzIGJldHRlciB0aGFuIHVnbHkuXFxuJyxcbiAgICAgIC4uLiAgICczLiAgIFNpbXBsZSBpcyBiZXR0ZXIgdGhhbiBjb21wbGV4LlxcbicsXG4gICAgICAuLi4gICAnNC4gQ29tcGxpY2F0ZWQgaXMgYmV0dGVyIHRoYW4gY29tcGxleC5cXG4nLFxuICAgICAgLi4uICAgJzUuIEZsYXQgaXMgYmV0dGVyIHRoYW4gbmVzdGVkLlxcbiddXG4gICAgXG4gICAgICBOZXh0IHdlIGluc3RhbnRpYXRlIGEgRGlmZmVyIG9iamVjdDpcbiAgICBcbiAgICAgID4+PiBkID0gbmV3IERpZmZlcigpXG4gICAgXG4gICAgICBOb3RlIHRoYXQgd2hlbiBpbnN0YW50aWF0aW5nIGEgRGlmZmVyIG9iamVjdCB3ZSBtYXkgcGFzcyBmdW5jdGlvbnMgdG9cbiAgICAgIGZpbHRlciBvdXQgbGluZSBhbmQgY2hhcmFjdGVyICdqdW5rJy5cbiAgICBcbiAgICAgIEZpbmFsbHksIHdlIGNvbXBhcmUgdGhlIHR3bzpcbiAgICBcbiAgICAgID4+PiByZXN1bHQgPSBkLmNvbXBhcmUodGV4dDEsIHRleHQyKVxuICAgICAgWyAnICAxLiBCZWF1dGlmdWwgaXMgYmV0dGVyIHRoYW4gdWdseS5cXG4nLFxuICAgICAgICAnLSAyLiBFeHBsaWNpdCBpcyBiZXR0ZXIgdGhhbiBpbXBsaWNpdC5cXG4nLFxuICAgICAgICAnLSAzLiBTaW1wbGUgaXMgYmV0dGVyIHRoYW4gY29tcGxleC5cXG4nLFxuICAgICAgICAnKyAzLiAgIFNpbXBsZSBpcyBiZXR0ZXIgdGhhbiBjb21wbGV4LlxcbicsXG4gICAgICAgICc/ICAgKytcXG4nLFxuICAgICAgICAnLSA0LiBDb21wbGV4IGlzIGJldHRlciB0aGFuIGNvbXBsaWNhdGVkLlxcbicsXG4gICAgICAgICc/ICAgICAgICAgIF4gICAgICAgICAgICAgICAgICAgICAtLS0tIF5cXG4nLFxuICAgICAgICAnKyA0LiBDb21wbGljYXRlZCBpcyBiZXR0ZXIgdGhhbiBjb21wbGV4LlxcbicsXG4gICAgICAgICc/ICAgICAgICAgKysrKyBeICAgICAgICAgICAgICAgICAgICAgIF5cXG4nLFxuICAgICAgICAnKyA1LiBGbGF0IGlzIGJldHRlciB0aGFuIG5lc3RlZC5cXG4nIF1cbiAgICBcbiAgICAgIE1ldGhvZHM6XG4gICAgXG4gICAgICBjb25zdHJ1Y3RvcihsaW5lanVuaz1udWxsLCBjaGFyanVuaz1udWxsKVxuICAgICAgICAgIENvbnN0cnVjdCBhIHRleHQgZGlmZmVyZW5jZXIsIHdpdGggb3B0aW9uYWwgZmlsdGVycy5cbiAgICAgIGNvbXBhcmUoYSwgYilcbiAgICAgICAgICBDb21wYXJlIHR3byBzZXF1ZW5jZXMgb2YgbGluZXM7IGdlbmVyYXRlIHRoZSByZXN1bHRpbmcgZGVsdGEuXG4gICAgKi9cblxuXG4gICAgZnVuY3Rpb24gRGlmZmVyKGxpbmVqdW5rLCBjaGFyanVuaykge1xuICAgICAgdGhpcy5saW5lanVuayA9IGxpbmVqdW5rO1xuICAgICAgdGhpcy5jaGFyanVuayA9IGNoYXJqdW5rO1xuICAgICAgLypcbiAgICAgICAgICBDb25zdHJ1Y3QgYSB0ZXh0IGRpZmZlcmVuY2VyLCB3aXRoIG9wdGlvbmFsIGZpbHRlcnMuXG4gICAgICBcbiAgICAgICAgICBUaGUgdHdvIG9wdGlvbmFsIGtleXdvcmQgcGFyYW1ldGVycyBhcmUgZm9yIGZpbHRlciBmdW5jdGlvbnM6XG4gICAgICBcbiAgICAgICAgICAtIGBsaW5lanVua2A6IEEgZnVuY3Rpb24gdGhhdCBzaG91bGQgYWNjZXB0IGEgc2luZ2xlIHN0cmluZyBhcmd1bWVudCxcbiAgICAgICAgICAgIGFuZCByZXR1cm4gdHJ1ZSBpZmYgdGhlIHN0cmluZyBpcyBqdW5rLiBUaGUgbW9kdWxlLWxldmVsIGZ1bmN0aW9uXG4gICAgICAgICAgICBgSVNfTElORV9KVU5LYCBtYXkgYmUgdXNlZCB0byBmaWx0ZXIgb3V0IGxpbmVzIHdpdGhvdXQgdmlzaWJsZVxuICAgICAgICAgICAgY2hhcmFjdGVycywgZXhjZXB0IGZvciBhdCBtb3N0IG9uZSBzcGxhdCAoJyMnKS4gIEl0IGlzIHJlY29tbWVuZGVkXG4gICAgICAgICAgICB0byBsZWF2ZSBsaW5lanVuayBudWxsLiBcbiAgICAgIFxuICAgICAgICAgIC0gYGNoYXJqdW5rYDogQSBmdW5jdGlvbiB0aGF0IHNob3VsZCBhY2NlcHQgYSBzdHJpbmcgb2YgbGVuZ3RoIDEuIFRoZVxuICAgICAgICAgICAgbW9kdWxlLWxldmVsIGZ1bmN0aW9uIGBJU19DSEFSQUNURVJfSlVOS2AgbWF5IGJlIHVzZWQgdG8gZmlsdGVyIG91dFxuICAgICAgICAgICAgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIChhIGJsYW5rIG9yIHRhYjsgKipub3RlKio6IGJhZCBpZGVhIHRvIGluY2x1ZGVcbiAgICAgICAgICAgIG5ld2xpbmUgaW4gdGhpcyEpLiAgVXNlIG9mIElTX0NIQVJBQ1RFUl9KVU5LIGlzIHJlY29tbWVuZGVkLlxuICAgICAgKi9cblxuICAgIH1cblxuICAgIERpZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIC8qXG4gICAgICAgICAgQ29tcGFyZSB0d28gc2VxdWVuY2VzIG9mIGxpbmVzOyBnZW5lcmF0ZSB0aGUgcmVzdWx0aW5nIGRlbHRhLlxuICAgICAgXG4gICAgICAgICAgRWFjaCBzZXF1ZW5jZSBtdXN0IGNvbnRhaW4gaW5kaXZpZHVhbCBzaW5nbGUtbGluZSBzdHJpbmdzIGVuZGluZyB3aXRoXG4gICAgICAgICAgbmV3bGluZXMuIFN1Y2ggc2VxdWVuY2VzIGNhbiBiZSBvYnRhaW5lZCBmcm9tIHRoZSBgcmVhZGxpbmVzKClgIG1ldGhvZFxuICAgICAgICAgIG9mIGZpbGUtbGlrZSBvYmplY3RzLiAgVGhlIGRlbHRhIGdlbmVyYXRlZCBhbHNvIGNvbnNpc3RzIG9mIG5ld2xpbmUtXG4gICAgICAgICAgdGVybWluYXRlZCBzdHJpbmdzLCByZWFkeSB0byBiZSBwcmludGVkIGFzLWlzIHZpYSB0aGUgd3JpdGVsaW5lKClcbiAgICAgICAgICBtZXRob2Qgb2YgYSBmaWxlLWxpa2Ugb2JqZWN0LlxuICAgICAgXG4gICAgICAgICAgRXhhbXBsZTpcbiAgICAgIFxuICAgICAgICAgID4+PiBkID0gbmV3IERpZmZlclxuICAgICAgICAgID4+PiBkLmNvbXBhcmUoWydvbmVcXG4nLCAndHdvXFxuJywgJ3RocmVlXFxuJ10sXG4gICAgICAgICAgLi4uICAgICAgICAgICBbJ29yZVxcbicsICd0cmVlXFxuJywgJ2VtdVxcbiddKVxuICAgICAgICAgIFsgJy0gb25lXFxuJyxcbiAgICAgICAgICAgICc/ICBeXFxuJyxcbiAgICAgICAgICAgICcrIG9yZVxcbicsXG4gICAgICAgICAgICAnPyAgXlxcbicsXG4gICAgICAgICAgICAnLSB0d29cXG4nLFxuICAgICAgICAgICAgJy0gdGhyZWVcXG4nLFxuICAgICAgICAgICAgJz8gIC1cXG4nLFxuICAgICAgICAgICAgJysgdHJlZVxcbicsXG4gICAgICAgICAgICAnKyBlbXVcXG4nIF1cbiAgICAgICovXG5cbiAgICAgIHZhciBhaGksIGFsbywgYmhpLCBibG8sIGNydW5jaGVyLCBnLCBsaW5lLCBsaW5lcywgdGFnLCBfaSwgX2osIF9sZW4sIF9sZW4xLCBfcmVmLCBfcmVmMTtcbiAgICAgIGNydW5jaGVyID0gbmV3IFNlcXVlbmNlTWF0Y2hlcih0aGlzLmxpbmVqdW5rLCBhLCBiKTtcbiAgICAgIGxpbmVzID0gW107XG4gICAgICBfcmVmID0gY3J1bmNoZXIuZ2V0T3Bjb2RlcygpO1xuICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIF9yZWYxID0gX3JlZltfaV0sIHRhZyA9IF9yZWYxWzBdLCBhbG8gPSBfcmVmMVsxXSwgYWhpID0gX3JlZjFbMl0sIGJsbyA9IF9yZWYxWzNdLCBiaGkgPSBfcmVmMVs0XTtcbiAgICAgICAgc3dpdGNoICh0YWcpIHtcbiAgICAgICAgICBjYXNlICdyZXBsYWNlJzpcbiAgICAgICAgICAgIGcgPSB0aGlzLl9mYW5jeVJlcGxhY2UoYSwgYWxvLCBhaGksIGIsIGJsbywgYmhpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICBnID0gdGhpcy5fZHVtcCgnLScsIGEsIGFsbywgYWhpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2luc2VydCc6XG4gICAgICAgICAgICBnID0gdGhpcy5fZHVtcCgnKycsIGIsIGJsbywgYmhpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2VxdWFsJzpcbiAgICAgICAgICAgIGcgPSB0aGlzLl9kdW1wKCcgJywgYSwgYWxvLCBhaGkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVua25vdyB0YWcgKFwiICsgdGFnICsgXCIpXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IGcubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICAgICAgbGluZSA9IGdbX2pdO1xuICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBsaW5lcztcbiAgICB9O1xuXG4gICAgRGlmZmVyLnByb3RvdHlwZS5fZHVtcCA9IGZ1bmN0aW9uKHRhZywgeCwgbG8sIGhpKSB7XG4gICAgICAvKlxuICAgICAgICAgIEdlbmVyYXRlIGNvbXBhcmlzb24gcmVzdWx0cyBmb3IgYSBzYW1lLXRhZ2dlZCByYW5nZS5cbiAgICAgICovXG5cbiAgICAgIHZhciBpLCBfaSwgX3Jlc3VsdHM7XG4gICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gX2kgPSBsbzsgbG8gPD0gaGkgPyBfaSA8IGhpIDogX2kgPiBoaTsgaSA9IGxvIDw9IGhpID8gKytfaSA6IC0tX2kpIHtcbiAgICAgICAgX3Jlc3VsdHMucHVzaChcIlwiICsgdGFnICsgXCIgXCIgKyB4W2ldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICB9O1xuXG4gICAgRGlmZmVyLnByb3RvdHlwZS5fcGxhaW5SZXBsYWNlID0gZnVuY3Rpb24oYSwgYWxvLCBhaGksIGIsIGJsbywgYmhpKSB7XG4gICAgICB2YXIgZmlyc3QsIGcsIGxpbmUsIGxpbmVzLCBzZWNvbmQsIF9pLCBfaiwgX2xlbiwgX2xlbjEsIF9yZWY7XG4gICAgICBhc3NlcnQoYWxvIDwgYWhpICYmIGJsbyA8IGJoaSk7XG4gICAgICBpZiAoYmhpIC0gYmxvIDwgYWhpIC0gYWxvKSB7XG4gICAgICAgIGZpcnN0ID0gdGhpcy5fZHVtcCgnKycsIGIsIGJsbywgYmhpKTtcbiAgICAgICAgc2Vjb25kID0gdGhpcy5fZHVtcCgnLScsIGEsIGFsbywgYWhpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpcnN0ID0gdGhpcy5fZHVtcCgnLScsIGEsIGFsbywgYWhpKTtcbiAgICAgICAgc2Vjb25kID0gdGhpcy5fZHVtcCgnKycsIGIsIGJsbywgYmhpKTtcbiAgICAgIH1cbiAgICAgIGxpbmVzID0gW107XG4gICAgICBfcmVmID0gW2ZpcnN0LCBzZWNvbmRdO1xuICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIGcgPSBfcmVmW19pXTtcbiAgICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gZy5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgICAgICBsaW5lID0gZ1tfal07XG4gICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGxpbmVzO1xuICAgIH07XG5cbiAgICBEaWZmZXIucHJvdG90eXBlLl9mYW5jeVJlcGxhY2UgPSBmdW5jdGlvbihhLCBhbG8sIGFoaSwgYiwgYmxvLCBiaGkpIHtcbiAgICAgIC8qXG4gICAgICAgICAgV2hlbiByZXBsYWNpbmcgb25lIGJsb2NrIG9mIGxpbmVzIHdpdGggYW5vdGhlciwgc2VhcmNoIHRoZSBibG9ja3NcbiAgICAgICAgICBmb3IgKnNpbWlsYXIqIGxpbmVzOyB0aGUgYmVzdC1tYXRjaGluZyBwYWlyIChpZiBhbnkpIGlzIHVzZWQgYXMgYVxuICAgICAgICAgIHN5bmNoIHBvaW50LCBhbmQgaW50cmFsaW5lIGRpZmZlcmVuY2UgbWFya2luZyBpcyBkb25lIG9uIHRoZVxuICAgICAgICAgIHNpbWlsYXIgcGFpci4gTG90cyBvZiB3b3JrLCBidXQgb2Z0ZW4gd29ydGggaXQuXG4gICAgICBcbiAgICAgICAgICBFeGFtcGxlOlxuICAgICAgICAgID4+PiBkID0gbmV3IERpZmZlclxuICAgICAgICAgID4+PiBkLl9mYW5jeVJlcGxhY2UoWydhYmNEZWZnaGlKa2xcXG4nXSwgMCwgMSxcbiAgICAgICAgICAuLi4gICAgICAgICAgICAgICAgIFsnYWJjZGVmR2hpamtsXFxuJ10sIDAsIDEpXG4gICAgICAgICAgWyAnLSBhYmNEZWZnaGlKa2xcXG4nLFxuICAgICAgICAgICAgJz8gICAgXiAgXiAgXlxcbicsXG4gICAgICAgICAgICAnKyBhYmNkZWZHaGlqa2xcXG4nLFxuICAgICAgICAgICAgJz8gICAgXiAgXiAgXlxcbicgXVxuICAgICAgKi9cblxuICAgICAgdmFyIGFlbHQsIGFpLCBhaTEsIGFpMiwgYXRhZ3MsIGJlbHQsIGJlc3RSYXRpbywgYmVzdGksIGJlc3RqLCBiaiwgYmoxLCBiajIsIGJ0YWdzLCBjcnVuY2hlciwgY3V0b2ZmLCBlcWksIGVxaiwgaSwgaiwgbGEsIGxiLCBsaW5lLCBsaW5lcywgdGFnLCBfaSwgX2osIF9rLCBfbCwgX2xlbiwgX2xlbjEsIF9sZW4yLCBfbGVuMywgX2xlbjQsIF9tLCBfbiwgX28sIF9yZWYsIF9yZWYxLCBfcmVmMTAsIF9yZWYxMSwgX3JlZjEyLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfcmVmNSwgX3JlZjYsIF9yZWY3LCBfcmVmOCwgX3JlZjk7XG4gICAgICBfcmVmID0gWzAuNzQsIDAuNzVdLCBiZXN0UmF0aW8gPSBfcmVmWzBdLCBjdXRvZmYgPSBfcmVmWzFdO1xuICAgICAgY3J1bmNoZXIgPSBuZXcgU2VxdWVuY2VNYXRjaGVyKHRoaXMuY2hhcmp1bmspO1xuICAgICAgX3JlZjEgPSBbbnVsbCwgbnVsbF0sIGVxaSA9IF9yZWYxWzBdLCBlcWogPSBfcmVmMVsxXTtcbiAgICAgIGxpbmVzID0gW107XG4gICAgICBmb3IgKGogPSBfaSA9IGJsbzsgYmxvIDw9IGJoaSA/IF9pIDwgYmhpIDogX2kgPiBiaGk7IGogPSBibG8gPD0gYmhpID8gKytfaSA6IC0tX2kpIHtcbiAgICAgICAgYmogPSBiW2pdO1xuICAgICAgICBjcnVuY2hlci5zZXRTZXEyKGJqKTtcbiAgICAgICAgZm9yIChpID0gX2ogPSBhbG87IGFsbyA8PSBhaGkgPyBfaiA8IGFoaSA6IF9qID4gYWhpOyBpID0gYWxvIDw9IGFoaSA/ICsrX2ogOiAtLV9qKSB7XG4gICAgICAgICAgYWkgPSBhW2ldO1xuICAgICAgICAgIGlmIChhaSA9PT0gYmopIHtcbiAgICAgICAgICAgIGlmIChlcWkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgX3JlZjIgPSBbaSwgal0sIGVxaSA9IF9yZWYyWzBdLCBlcWogPSBfcmVmMlsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjcnVuY2hlci5zZXRTZXExKGFpKTtcbiAgICAgICAgICBpZiAoY3J1bmNoZXIucmVhbFF1aWNrUmF0aW8oKSA+IGJlc3RSYXRpbyAmJiBjcnVuY2hlci5xdWlja1JhdGlvKCkgPiBiZXN0UmF0aW8gJiYgY3J1bmNoZXIucmF0aW8oKSA+IGJlc3RSYXRpbykge1xuICAgICAgICAgICAgX3JlZjMgPSBbY3J1bmNoZXIucmF0aW8oKSwgaSwgal0sIGJlc3RSYXRpbyA9IF9yZWYzWzBdLCBiZXN0aSA9IF9yZWYzWzFdLCBiZXN0aiA9IF9yZWYzWzJdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGJlc3RSYXRpbyA8IGN1dG9mZikge1xuICAgICAgICBpZiAoZXFpID09PSBudWxsKSB7XG4gICAgICAgICAgX3JlZjQgPSB0aGlzLl9wbGFpblJlcGxhY2UoYSwgYWxvLCBhaGksIGIsIGJsbywgYmhpKTtcbiAgICAgICAgICBmb3IgKF9rID0gMCwgX2xlbiA9IF9yZWY0Lmxlbmd0aDsgX2sgPCBfbGVuOyBfaysrKSB7XG4gICAgICAgICAgICBsaW5lID0gX3JlZjRbX2tdO1xuICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgICAgICB9XG4gICAgICAgIF9yZWY1ID0gW2VxaSwgZXFqLCAxLjBdLCBiZXN0aSA9IF9yZWY1WzBdLCBiZXN0aiA9IF9yZWY1WzFdLCBiZXN0UmF0aW8gPSBfcmVmNVsyXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVxaSA9IG51bGw7XG4gICAgICB9XG4gICAgICBfcmVmNiA9IHRoaXMuX2ZhbmN5SGVscGVyKGEsIGFsbywgYmVzdGksIGIsIGJsbywgYmVzdGopO1xuICAgICAgZm9yIChfbCA9IDAsIF9sZW4xID0gX3JlZjYubGVuZ3RoOyBfbCA8IF9sZW4xOyBfbCsrKSB7XG4gICAgICAgIGxpbmUgPSBfcmVmNltfbF07XG4gICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICB9XG4gICAgICBfcmVmNyA9IFthW2Jlc3RpXSwgYltiZXN0al1dLCBhZWx0ID0gX3JlZjdbMF0sIGJlbHQgPSBfcmVmN1sxXTtcbiAgICAgIGlmIChlcWkgPT09IG51bGwpIHtcbiAgICAgICAgYXRhZ3MgPSBidGFncyA9ICcnO1xuICAgICAgICBjcnVuY2hlci5zZXRTZXFzKGFlbHQsIGJlbHQpO1xuICAgICAgICBfcmVmOCA9IGNydW5jaGVyLmdldE9wY29kZXMoKTtcbiAgICAgICAgZm9yIChfbSA9IDAsIF9sZW4yID0gX3JlZjgubGVuZ3RoOyBfbSA8IF9sZW4yOyBfbSsrKSB7XG4gICAgICAgICAgX3JlZjkgPSBfcmVmOFtfbV0sIHRhZyA9IF9yZWY5WzBdLCBhaTEgPSBfcmVmOVsxXSwgYWkyID0gX3JlZjlbMl0sIGJqMSA9IF9yZWY5WzNdLCBiajIgPSBfcmVmOVs0XTtcbiAgICAgICAgICBfcmVmMTAgPSBbYWkyIC0gYWkxLCBiajIgLSBiajFdLCBsYSA9IF9yZWYxMFswXSwgbGIgPSBfcmVmMTBbMV07XG4gICAgICAgICAgc3dpdGNoICh0YWcpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICAgICAgICBhdGFncyArPSBBcnJheShsYSArIDEpLmpvaW4oJ14nKTtcbiAgICAgICAgICAgICAgYnRhZ3MgKz0gQXJyYXkobGIgKyAxKS5qb2luKCdeJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgICAgICAgYXRhZ3MgKz0gQXJyYXkobGEgKyAxKS5qb2luKCctJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaW5zZXJ0JzpcbiAgICAgICAgICAgICAgYnRhZ3MgKz0gQXJyYXkobGIgKyAxKS5qb2luKCcrJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZXF1YWwnOlxuICAgICAgICAgICAgICBhdGFncyArPSBBcnJheShsYSArIDEpLmpvaW4oJyAnKTtcbiAgICAgICAgICAgICAgYnRhZ3MgKz0gQXJyYXkobGIgKyAxKS5qb2luKCcgJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93IHRhZyAoXCIgKyB0YWcgKyBcIilcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9yZWYxMSA9IHRoaXMuX3Fmb3JtYXQoYWVsdCwgYmVsdCwgYXRhZ3MsIGJ0YWdzKTtcbiAgICAgICAgZm9yIChfbiA9IDAsIF9sZW4zID0gX3JlZjExLmxlbmd0aDsgX24gPCBfbGVuMzsgX24rKykge1xuICAgICAgICAgIGxpbmUgPSBfcmVmMTFbX25dO1xuICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpbmVzLnB1c2goJyAgJyArIGFlbHQpO1xuICAgICAgfVxuICAgICAgX3JlZjEyID0gdGhpcy5fZmFuY3lIZWxwZXIoYSwgYmVzdGkgKyAxLCBhaGksIGIsIGJlc3RqICsgMSwgYmhpKTtcbiAgICAgIGZvciAoX28gPSAwLCBfbGVuNCA9IF9yZWYxMi5sZW5ndGg7IF9vIDwgX2xlbjQ7IF9vKyspIHtcbiAgICAgICAgbGluZSA9IF9yZWYxMltfb107XG4gICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGluZXM7XG4gICAgfTtcblxuICAgIERpZmZlci5wcm90b3R5cGUuX2ZhbmN5SGVscGVyID0gZnVuY3Rpb24oYSwgYWxvLCBhaGksIGIsIGJsbywgYmhpKSB7XG4gICAgICB2YXIgZztcbiAgICAgIGcgPSBbXTtcbiAgICAgIGlmIChhbG8gPCBhaGkpIHtcbiAgICAgICAgaWYgKGJsbyA8IGJoaSkge1xuICAgICAgICAgIGcgPSB0aGlzLl9mYW5jeVJlcGxhY2UoYSwgYWxvLCBhaGksIGIsIGJsbywgYmhpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnID0gdGhpcy5fZHVtcCgnLScsIGEsIGFsbywgYWhpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChibG8gPCBiaGkpIHtcbiAgICAgICAgZyA9IHRoaXMuX2R1bXAoJysnLCBiLCBibG8sIGJoaSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZztcbiAgICB9O1xuXG4gICAgRGlmZmVyLnByb3RvdHlwZS5fcWZvcm1hdCA9IGZ1bmN0aW9uKGFsaW5lLCBibGluZSwgYXRhZ3MsIGJ0YWdzKSB7XG4gICAgICAvKlxuICAgICAgICAgIEZvcm1hdCBcIj9cIiBvdXRwdXQgYW5kIGRlYWwgd2l0aCBsZWFkaW5nIHRhYnMuXG4gICAgICBcbiAgICAgICAgICBFeGFtcGxlOlxuICAgICAgXG4gICAgICAgICAgPj4+IGQgPSBuZXcgRGlmZmVyXG4gICAgICAgICAgPj4+IGQuX3Fmb3JtYXQoJ1xcdGFiY0RlZmdoaUprbFxcbicsICdcXHRhYmNkZWZHaGlqa2xcXG4nLFxuICAgICAgICAgIFsgJy0gXFx0YWJjRGVmZ2hpSmtsXFxuJyxcbiAgICAgICAgICAgICc/IFxcdCBeIF4gIF5cXG4nLFxuICAgICAgICAgICAgJysgXFx0YWJjZGVmR2hpamtsXFxuJyxcbiAgICAgICAgICAgICc/IFxcdCBeIF4gIF5cXG4nIF1cbiAgICAgICovXG5cbiAgICAgIHZhciBjb21tb24sIGxpbmVzO1xuICAgICAgbGluZXMgPSBbXTtcbiAgICAgIGNvbW1vbiA9IG1pbihfY291bnRMZWFkaW5nKGFsaW5lLCAnXFx0JyksIF9jb3VudExlYWRpbmcoYmxpbmUsICdcXHQnKSk7XG4gICAgICBjb21tb24gPSBtaW4oY29tbW9uLCBfY291bnRMZWFkaW5nKGF0YWdzLnNsaWNlKDAsIGNvbW1vbiksICcgJykpO1xuICAgICAgY29tbW9uID0gbWluKGNvbW1vbiwgX2NvdW50TGVhZGluZyhidGFncy5zbGljZSgwLCBjb21tb24pLCAnICcpKTtcbiAgICAgIGF0YWdzID0gYXRhZ3Muc2xpY2UoY29tbW9uKS5yZXBsYWNlKC9cXHMrJC8sICcnKTtcbiAgICAgIGJ0YWdzID0gYnRhZ3Muc2xpY2UoY29tbW9uKS5yZXBsYWNlKC9cXHMrJC8sICcnKTtcbiAgICAgIGxpbmVzLnB1c2goJy0gJyArIGFsaW5lKTtcbiAgICAgIGlmIChhdGFncy5sZW5ndGgpIHtcbiAgICAgICAgbGluZXMucHVzaChcIj8gXCIgKyAoQXJyYXkoY29tbW9uICsgMSkuam9pbignXFx0JykpICsgYXRhZ3MgKyBcIlxcblwiKTtcbiAgICAgIH1cbiAgICAgIGxpbmVzLnB1c2goJysgJyArIGJsaW5lKTtcbiAgICAgIGlmIChidGFncy5sZW5ndGgpIHtcbiAgICAgICAgbGluZXMucHVzaChcIj8gXCIgKyAoQXJyYXkoY29tbW9uICsgMSkuam9pbignXFx0JykpICsgYnRhZ3MgKyBcIlxcblwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsaW5lcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIERpZmZlcjtcblxuICB9KSgpO1xuXG4gIElTX0xJTkVfSlVOSyA9IGZ1bmN0aW9uKGxpbmUsIHBhdCkge1xuICAgIGlmIChwYXQgPT0gbnVsbCkge1xuICAgICAgcGF0ID0gL15cXHMqIz9cXHMqJC87XG4gICAgfVxuICAgIC8qXG4gICAgICBSZXR1cm4gMSBmb3IgaWdub3JhYmxlIGxpbmU6IGlmZiBgbGluZWAgaXMgYmxhbmsgb3IgY29udGFpbnMgYSBzaW5nbGUgJyMnLlxuICAgICAgICBcbiAgICAgIEV4YW1wbGVzOlxuICAgIFxuICAgICAgPj4+IElTX0xJTkVfSlVOSygnXFxuJylcbiAgICAgIHRydWVcbiAgICAgID4+PiBJU19MSU5FX0pVTksoJyAgIyAgIFxcbicpXG4gICAgICB0cnVlXG4gICAgICA+Pj4gSVNfTElORV9KVU5LKCdoZWxsb1xcbicpXG4gICAgICBmYWxzZVxuICAgICovXG5cbiAgICByZXR1cm4gcGF0LnRlc3QobGluZSk7XG4gIH07XG5cbiAgSVNfQ0hBUkFDVEVSX0pVTksgPSBmdW5jdGlvbihjaCwgd3MpIHtcbiAgICBpZiAod3MgPT0gbnVsbCkge1xuICAgICAgd3MgPSAnIFxcdCc7XG4gICAgfVxuICAgIC8qXG4gICAgICBSZXR1cm4gMSBmb3IgaWdub3JhYmxlIGNoYXJhY3RlcjogaWZmIGBjaGAgaXMgYSBzcGFjZSBvciB0YWIuXG4gICAgXG4gICAgICBFeGFtcGxlczpcbiAgICAgID4+PiBJU19DSEFSQUNURVJfSlVOSygnICcpLnNob3VsZC5iZS50cnVlXG4gICAgICB0cnVlXG4gICAgICA+Pj4gSVNfQ0hBUkFDVEVSX0pVTksoJ1xcdCcpLnNob3VsZC5iZS50cnVlXG4gICAgICB0cnVlXG4gICAgICA+Pj4gSVNfQ0hBUkFDVEVSX0pVTksoJ1xcbicpLnNob3VsZC5iZS5mYWxzZVxuICAgICAgZmFsc2VcbiAgICAgID4+PiBJU19DSEFSQUNURVJfSlVOSygneCcpLnNob3VsZC5iZS5mYWxzZVxuICAgICAgZmFsc2VcbiAgICAqL1xuXG4gICAgcmV0dXJuIF9faW5kZXhPZi5jYWxsKHdzLCBjaCkgPj0gMDtcbiAgfTtcblxuICBfZm9ybWF0UmFuZ2VVbmlmaWVkID0gZnVuY3Rpb24oc3RhcnQsIHN0b3ApIHtcbiAgICAvKlxuICAgICAgQ29udmVydCByYW5nZSB0byB0aGUgXCJlZFwiIGZvcm1hdCdcbiAgICAqL1xuXG4gICAgdmFyIGJlZ2lubmluZywgbGVuZ3RoO1xuICAgIGJlZ2lubmluZyA9IHN0YXJ0ICsgMTtcbiAgICBsZW5ndGggPSBzdG9wIC0gc3RhcnQ7XG4gICAgaWYgKGxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIFwiXCIgKyBiZWdpbm5pbmc7XG4gICAgfVxuICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICBiZWdpbm5pbmctLTtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCIgKyBiZWdpbm5pbmcgKyBcIixcIiArIGxlbmd0aDtcbiAgfTtcblxuICB1bmlmaWVkRGlmZiA9IGZ1bmN0aW9uKGEsIGIsIF9hcmcpIHtcbiAgICB2YXIgZmlsZTFSYW5nZSwgZmlsZTJSYW5nZSwgZmlyc3QsIGZyb21kYXRlLCBmcm9tZmlsZSwgZnJvbWZpbGVkYXRlLCBncm91cCwgaTEsIGkyLCBqMSwgajIsIGxhc3QsIGxpbmUsIGxpbmVzLCBsaW5ldGVybSwgbiwgc3RhcnRlZCwgdGFnLCB0b2RhdGUsIHRvZmlsZSwgdG9maWxlZGF0ZSwgX2ksIF9qLCBfaywgX2wsIF9sZW4sIF9sZW4xLCBfbGVuMiwgX2xlbjMsIF9sZW40LCBfbSwgX3JlZiwgX3JlZjEsIF9yZWYyLCBfcmVmMywgX3JlZjQsIF9yZWY1LCBfcmVmNjtcbiAgICBfcmVmID0gX2FyZyAhPSBudWxsID8gX2FyZyA6IHt9LCBmcm9tZmlsZSA9IF9yZWYuZnJvbWZpbGUsIHRvZmlsZSA9IF9yZWYudG9maWxlLCBmcm9tZmlsZWRhdGUgPSBfcmVmLmZyb21maWxlZGF0ZSwgdG9maWxlZGF0ZSA9IF9yZWYudG9maWxlZGF0ZSwgbiA9IF9yZWYubiwgbGluZXRlcm0gPSBfcmVmLmxpbmV0ZXJtO1xuICAgIC8qXG4gICAgICBDb21wYXJlIHR3byBzZXF1ZW5jZXMgb2YgbGluZXM7IGdlbmVyYXRlIHRoZSBkZWx0YSBhcyBhIHVuaWZpZWQgZGlmZi5cbiAgICBcbiAgICAgIFVuaWZpZWQgZGlmZnMgYXJlIGEgY29tcGFjdCB3YXkgb2Ygc2hvd2luZyBsaW5lIGNoYW5nZXMgYW5kIGEgZmV3XG4gICAgICBsaW5lcyBvZiBjb250ZXh0LiAgVGhlIG51bWJlciBvZiBjb250ZXh0IGxpbmVzIGlzIHNldCBieSAnbicgd2hpY2hcbiAgICAgIGRlZmF1bHRzIHRvIHRocmVlLlxuICAgIFxuICAgICAgQnkgZGVmYXVsdCwgdGhlIGRpZmYgY29udHJvbCBsaW5lcyAodGhvc2Ugd2l0aCAtLS0sICsrKywgb3IgQEApIGFyZVxuICAgICAgY3JlYXRlZCB3aXRoIGEgdHJhaWxpbmcgbmV3bGluZS4gIFxuICAgIFxuICAgICAgRm9yIGlucHV0cyB0aGF0IGRvIG5vdCBoYXZlIHRyYWlsaW5nIG5ld2xpbmVzLCBzZXQgdGhlIGxpbmV0ZXJtXG4gICAgICBhcmd1bWVudCB0byBcIlwiIHNvIHRoYXQgdGhlIG91dHB1dCB3aWxsIGJlIHVuaWZvcm1seSBuZXdsaW5lIGZyZWUuXG4gICAgXG4gICAgICBUaGUgdW5pZGlmZiBmb3JtYXQgbm9ybWFsbHkgaGFzIGEgaGVhZGVyIGZvciBmaWxlbmFtZXMgYW5kIG1vZGlmaWNhdGlvblxuICAgICAgdGltZXMuICBBbnkgb3IgYWxsIG9mIHRoZXNlIG1heSBiZSBzcGVjaWZpZWQgdXNpbmcgc3RyaW5ncyBmb3JcbiAgICAgICdmcm9tZmlsZScsICd0b2ZpbGUnLCAnZnJvbWZpbGVkYXRlJywgYW5kICd0b2ZpbGVkYXRlJy5cbiAgICAgIFRoZSBtb2RpZmljYXRpb24gdGltZXMgYXJlIG5vcm1hbGx5IGV4cHJlc3NlZCBpbiB0aGUgSVNPIDg2MDEgZm9ybWF0LlxuICAgIFxuICAgICAgRXhhbXBsZTpcbiAgICBcbiAgICAgID4+PiB1bmlmaWVkRGlmZignb25lIHR3byB0aHJlZSBmb3VyJy5zcGxpdCgnICcpLFxuICAgICAgLi4uICAgICAgICAgICAgICd6ZXJvIG9uZSB0cmVlIGZvdXInLnNwbGl0KCcgJyksIHtcbiAgICAgIC4uLiAgICAgICAgICAgICAgIGZyb21maWxlOiAnT3JpZ2luYWwnXG4gICAgICAuLi4gICAgICAgICAgICAgICB0b2ZpbGU6ICdDdXJyZW50JyxcbiAgICAgIC4uLiAgICAgICAgICAgICAgIGZyb21maWxlZGF0ZTogJzIwMDUtMDEtMjYgMjM6MzA6NTAnLFxuICAgICAgLi4uICAgICAgICAgICAgICAgdG9maWxlZGF0ZTogJzIwMTAtMDQtMDIgMTA6MjA6NTInLFxuICAgICAgLi4uICAgICAgICAgICAgICAgbGluZXRlcm06ICcnXG4gICAgICAuLi4gICAgICAgICAgICAgfSlcbiAgICAgIFsgJy0tLSBPcmlnaW5hbFxcdDIwMDUtMDEtMjYgMjM6MzA6NTAnLFxuICAgICAgICAnKysrIEN1cnJlbnRcXHQyMDEwLTA0LTAyIDEwOjIwOjUyJyxcbiAgICAgICAgJ0BAIC0xLDQgKzEsNCBAQCcsXG4gICAgICAgICcremVybycsXG4gICAgICAgICcgb25lJyxcbiAgICAgICAgJy10d28nLFxuICAgICAgICAnLXRocmVlJyxcbiAgICAgICAgJyt0cmVlJyxcbiAgICAgICAgJyBmb3VyJyBdXG4gICAgKi9cblxuICAgIGlmIChmcm9tZmlsZSA9PSBudWxsKSB7XG4gICAgICBmcm9tZmlsZSA9ICcnO1xuICAgIH1cbiAgICBpZiAodG9maWxlID09IG51bGwpIHtcbiAgICAgIHRvZmlsZSA9ICcnO1xuICAgIH1cbiAgICBpZiAoZnJvbWZpbGVkYXRlID09IG51bGwpIHtcbiAgICAgIGZyb21maWxlZGF0ZSA9ICcnO1xuICAgIH1cbiAgICBpZiAodG9maWxlZGF0ZSA9PSBudWxsKSB7XG4gICAgICB0b2ZpbGVkYXRlID0gJyc7XG4gICAgfVxuICAgIGlmIChuID09IG51bGwpIHtcbiAgICAgIG4gPSAzO1xuICAgIH1cbiAgICBpZiAobGluZXRlcm0gPT0gbnVsbCkge1xuICAgICAgbGluZXRlcm0gPSAnXFxuJztcbiAgICB9XG4gICAgbGluZXMgPSBbXTtcbiAgICBzdGFydGVkID0gZmFsc2U7XG4gICAgX3JlZjEgPSAobmV3IFNlcXVlbmNlTWF0Y2hlcihudWxsLCBhLCBiKSkuZ2V0R3JvdXBlZE9wY29kZXMoKTtcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYxLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICBncm91cCA9IF9yZWYxW19pXTtcbiAgICAgIGlmICghc3RhcnRlZCkge1xuICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgZnJvbWRhdGUgPSBmcm9tZmlsZWRhdGUgPyBcIlxcdFwiICsgZnJvbWZpbGVkYXRlIDogJyc7XG4gICAgICAgIHRvZGF0ZSA9IHRvZmlsZWRhdGUgPyBcIlxcdFwiICsgdG9maWxlZGF0ZSA6ICcnO1xuICAgICAgICBsaW5lcy5wdXNoKFwiLS0tIFwiICsgZnJvbWZpbGUgKyBmcm9tZGF0ZSArIGxpbmV0ZXJtKTtcbiAgICAgICAgbGluZXMucHVzaChcIisrKyBcIiArIHRvZmlsZSArIHRvZGF0ZSArIGxpbmV0ZXJtKTtcbiAgICAgIH1cbiAgICAgIF9yZWYyID0gW2dyb3VwWzBdLCBncm91cFtncm91cC5sZW5ndGggLSAxXV0sIGZpcnN0ID0gX3JlZjJbMF0sIGxhc3QgPSBfcmVmMlsxXTtcbiAgICAgIGZpbGUxUmFuZ2UgPSBfZm9ybWF0UmFuZ2VVbmlmaWVkKGZpcnN0WzFdLCBsYXN0WzJdKTtcbiAgICAgIGZpbGUyUmFuZ2UgPSBfZm9ybWF0UmFuZ2VVbmlmaWVkKGZpcnN0WzNdLCBsYXN0WzRdKTtcbiAgICAgIGxpbmVzLnB1c2goXCJAQCAtXCIgKyBmaWxlMVJhbmdlICsgXCIgK1wiICsgZmlsZTJSYW5nZSArIFwiIEBAXCIgKyBsaW5ldGVybSk7XG4gICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBncm91cC5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgICAgX3JlZjMgPSBncm91cFtfal0sIHRhZyA9IF9yZWYzWzBdLCBpMSA9IF9yZWYzWzFdLCBpMiA9IF9yZWYzWzJdLCBqMSA9IF9yZWYzWzNdLCBqMiA9IF9yZWYzWzRdO1xuICAgICAgICBpZiAodGFnID09PSAnZXF1YWwnKSB7XG4gICAgICAgICAgX3JlZjQgPSBhLnNsaWNlKGkxLCBpMik7XG4gICAgICAgICAgZm9yIChfayA9IDAsIF9sZW4yID0gX3JlZjQubGVuZ3RoOyBfayA8IF9sZW4yOyBfaysrKSB7XG4gICAgICAgICAgICBsaW5lID0gX3JlZjRbX2tdO1xuICAgICAgICAgICAgbGluZXMucHVzaCgnICcgKyBsaW5lKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhZyA9PT0gJ3JlcGxhY2UnIHx8IHRhZyA9PT0gJ2RlbGV0ZScpIHtcbiAgICAgICAgICBfcmVmNSA9IGEuc2xpY2UoaTEsIGkyKTtcbiAgICAgICAgICBmb3IgKF9sID0gMCwgX2xlbjMgPSBfcmVmNS5sZW5ndGg7IF9sIDwgX2xlbjM7IF9sKyspIHtcbiAgICAgICAgICAgIGxpbmUgPSBfcmVmNVtfbF07XG4gICAgICAgICAgICBsaW5lcy5wdXNoKCctJyArIGxpbmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGFnID09PSAncmVwbGFjZScgfHwgdGFnID09PSAnaW5zZXJ0Jykge1xuICAgICAgICAgIF9yZWY2ID0gYi5zbGljZShqMSwgajIpO1xuICAgICAgICAgIGZvciAoX20gPSAwLCBfbGVuNCA9IF9yZWY2Lmxlbmd0aDsgX20gPCBfbGVuNDsgX20rKykge1xuICAgICAgICAgICAgbGluZSA9IF9yZWY2W19tXTtcbiAgICAgICAgICAgIGxpbmVzLnB1c2goJysnICsgbGluZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsaW5lcztcbiAgfTtcblxuICBfZm9ybWF0UmFuZ2VDb250ZXh0ID0gZnVuY3Rpb24oc3RhcnQsIHN0b3ApIHtcbiAgICAvKlxuICAgICAgQ29udmVydCByYW5nZSB0byB0aGUgXCJlZFwiIGZvcm1hdCdcbiAgICAqL1xuXG4gICAgdmFyIGJlZ2lubmluZywgbGVuZ3RoO1xuICAgIGJlZ2lubmluZyA9IHN0YXJ0ICsgMTtcbiAgICBsZW5ndGggPSBzdG9wIC0gc3RhcnQ7XG4gICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgIGJlZ2lubmluZy0tO1xuICAgIH1cbiAgICBpZiAobGVuZ3RoIDw9IDEpIHtcbiAgICAgIHJldHVybiBcIlwiICsgYmVnaW5uaW5nO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIiArIGJlZ2lubmluZyArIFwiLFwiICsgKGJlZ2lubmluZyArIGxlbmd0aCAtIDEpO1xuICB9O1xuXG4gIGNvbnRleHREaWZmID0gZnVuY3Rpb24oYSwgYiwgX2FyZykge1xuICAgIHZhciBmaWxlMVJhbmdlLCBmaWxlMlJhbmdlLCBmaXJzdCwgZnJvbWRhdGUsIGZyb21maWxlLCBmcm9tZmlsZWRhdGUsIGdyb3VwLCBpMSwgaTIsIGoxLCBqMiwgbGFzdCwgbGluZSwgbGluZXMsIGxpbmV0ZXJtLCBuLCBwcmVmaXgsIHN0YXJ0ZWQsIHRhZywgdG9kYXRlLCB0b2ZpbGUsIHRvZmlsZWRhdGUsIF8sIF9pLCBfaiwgX2ssIF9sLCBfbGVuLCBfbGVuMSwgX2xlbjIsIF9sZW4zLCBfbGVuNCwgX20sIF9yZWYsIF9yZWYxLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfcmVmNSwgX3JlZjY7XG4gICAgX3JlZiA9IF9hcmcgIT0gbnVsbCA/IF9hcmcgOiB7fSwgZnJvbWZpbGUgPSBfcmVmLmZyb21maWxlLCB0b2ZpbGUgPSBfcmVmLnRvZmlsZSwgZnJvbWZpbGVkYXRlID0gX3JlZi5mcm9tZmlsZWRhdGUsIHRvZmlsZWRhdGUgPSBfcmVmLnRvZmlsZWRhdGUsIG4gPSBfcmVmLm4sIGxpbmV0ZXJtID0gX3JlZi5saW5ldGVybTtcbiAgICAvKlxuICAgICAgQ29tcGFyZSB0d28gc2VxdWVuY2VzIG9mIGxpbmVzOyBnZW5lcmF0ZSB0aGUgZGVsdGEgYXMgYSBjb250ZXh0IGRpZmYuXG4gICAgXG4gICAgICBDb250ZXh0IGRpZmZzIGFyZSBhIGNvbXBhY3Qgd2F5IG9mIHNob3dpbmcgbGluZSBjaGFuZ2VzIGFuZCBhIGZld1xuICAgICAgbGluZXMgb2YgY29udGV4dC4gIFRoZSBudW1iZXIgb2YgY29udGV4dCBsaW5lcyBpcyBzZXQgYnkgJ24nIHdoaWNoXG4gICAgICBkZWZhdWx0cyB0byB0aHJlZS5cbiAgICBcbiAgICAgIEJ5IGRlZmF1bHQsIHRoZSBkaWZmIGNvbnRyb2wgbGluZXMgKHRob3NlIHdpdGggKioqIG9yIC0tLSkgYXJlXG4gICAgICBjcmVhdGVkIHdpdGggYSB0cmFpbGluZyBuZXdsaW5lLiAgVGhpcyBpcyBoZWxwZnVsIHNvIHRoYXQgaW5wdXRzXG4gICAgICBjcmVhdGVkIGZyb20gZmlsZS5yZWFkbGluZXMoKSByZXN1bHQgaW4gZGlmZnMgdGhhdCBhcmUgc3VpdGFibGUgZm9yXG4gICAgICBmaWxlLndyaXRlbGluZXMoKSBzaW5jZSBib3RoIHRoZSBpbnB1dHMgYW5kIG91dHB1dHMgaGF2ZSB0cmFpbGluZ1xuICAgICAgbmV3bGluZXMuXG4gICAgXG4gICAgICBGb3IgaW5wdXRzIHRoYXQgZG8gbm90IGhhdmUgdHJhaWxpbmcgbmV3bGluZXMsIHNldCB0aGUgbGluZXRlcm1cbiAgICAgIGFyZ3VtZW50IHRvIFwiXCIgc28gdGhhdCB0aGUgb3V0cHV0IHdpbGwgYmUgdW5pZm9ybWx5IG5ld2xpbmUgZnJlZS5cbiAgICBcbiAgICAgIFRoZSBjb250ZXh0IGRpZmYgZm9ybWF0IG5vcm1hbGx5IGhhcyBhIGhlYWRlciBmb3IgZmlsZW5hbWVzIGFuZFxuICAgICAgbW9kaWZpY2F0aW9uIHRpbWVzLiAgQW55IG9yIGFsbCBvZiB0aGVzZSBtYXkgYmUgc3BlY2lmaWVkIHVzaW5nXG4gICAgICBzdHJpbmdzIGZvciAnZnJvbWZpbGUnLCAndG9maWxlJywgJ2Zyb21maWxlZGF0ZScsIGFuZCAndG9maWxlZGF0ZScuXG4gICAgICBUaGUgbW9kaWZpY2F0aW9uIHRpbWVzIGFyZSBub3JtYWxseSBleHByZXNzZWQgaW4gdGhlIElTTyA4NjAxIGZvcm1hdC5cbiAgICAgIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBzdHJpbmdzIGRlZmF1bHQgdG8gYmxhbmtzLlxuICAgIFxuICAgICAgRXhhbXBsZTpcbiAgICAgID4+PiBhID0gWydvbmVcXG4nLCAndHdvXFxuJywgJ3RocmVlXFxuJywgJ2ZvdXJcXG4nXVxuICAgICAgPj4+IGIgPSBbJ3plcm9cXG4nLCAnb25lXFxuJywgJ3RyZWVcXG4nLCAnZm91clxcbiddXG4gICAgICA+Pj4gY29udGV4dERpZmYoYSwgYiwge2Zyb21maWxlOiAnT3JpZ2luYWwnLCB0b2ZpbGU6ICdDdXJyZW50J30pXG4gICAgICBbICcqKiogT3JpZ2luYWxcXG4nLFxuICAgICAgICAnLS0tIEN1cnJlbnRcXG4nLFxuICAgICAgICAnKioqKioqKioqKioqKioqXFxuJyxcbiAgICAgICAgJyoqKiAxLDQgKioqKlxcbicsXG4gICAgICAgICcgIG9uZVxcbicsXG4gICAgICAgICchIHR3b1xcbicsXG4gICAgICAgICchIHRocmVlXFxuJyxcbiAgICAgICAgJyAgZm91clxcbicsXG4gICAgICAgICctLS0gMSw0IC0tLS1cXG4nLFxuICAgICAgICAnKyB6ZXJvXFxuJyxcbiAgICAgICAgJyAgb25lXFxuJyxcbiAgICAgICAgJyEgdHJlZVxcbicsXG4gICAgICAgICcgIGZvdXJcXG4nIF1cbiAgICAqL1xuXG4gICAgaWYgKGZyb21maWxlID09IG51bGwpIHtcbiAgICAgIGZyb21maWxlID0gJyc7XG4gICAgfVxuICAgIGlmICh0b2ZpbGUgPT0gbnVsbCkge1xuICAgICAgdG9maWxlID0gJyc7XG4gICAgfVxuICAgIGlmIChmcm9tZmlsZWRhdGUgPT0gbnVsbCkge1xuICAgICAgZnJvbWZpbGVkYXRlID0gJyc7XG4gICAgfVxuICAgIGlmICh0b2ZpbGVkYXRlID09IG51bGwpIHtcbiAgICAgIHRvZmlsZWRhdGUgPSAnJztcbiAgICB9XG4gICAgaWYgKG4gPT0gbnVsbCkge1xuICAgICAgbiA9IDM7XG4gICAgfVxuICAgIGlmIChsaW5ldGVybSA9PSBudWxsKSB7XG4gICAgICBsaW5ldGVybSA9ICdcXG4nO1xuICAgIH1cbiAgICBwcmVmaXggPSB7XG4gICAgICBpbnNlcnQ6ICcrICcsXG4gICAgICBcImRlbGV0ZVwiOiAnLSAnLFxuICAgICAgcmVwbGFjZTogJyEgJyxcbiAgICAgIGVxdWFsOiAnICAnXG4gICAgfTtcbiAgICBzdGFydGVkID0gZmFsc2U7XG4gICAgbGluZXMgPSBbXTtcbiAgICBfcmVmMSA9IChuZXcgU2VxdWVuY2VNYXRjaGVyKG51bGwsIGEsIGIpKS5nZXRHcm91cGVkT3Bjb2RlcygpO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZjEubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIGdyb3VwID0gX3JlZjFbX2ldO1xuICAgICAgaWYgKCFzdGFydGVkKSB7XG4gICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICBmcm9tZGF0ZSA9IGZyb21maWxlZGF0ZSA/IFwiXFx0XCIgKyBmcm9tZmlsZWRhdGUgOiAnJztcbiAgICAgICAgdG9kYXRlID0gdG9maWxlZGF0ZSA/IFwiXFx0XCIgKyB0b2ZpbGVkYXRlIDogJyc7XG4gICAgICAgIGxpbmVzLnB1c2goXCIqKiogXCIgKyBmcm9tZmlsZSArIGZyb21kYXRlICsgbGluZXRlcm0pO1xuICAgICAgICBsaW5lcy5wdXNoKFwiLS0tIFwiICsgdG9maWxlICsgdG9kYXRlICsgbGluZXRlcm0pO1xuICAgICAgICBfcmVmMiA9IFtncm91cFswXSwgZ3JvdXBbZ3JvdXAubGVuZ3RoIC0gMV1dLCBmaXJzdCA9IF9yZWYyWzBdLCBsYXN0ID0gX3JlZjJbMV07XG4gICAgICAgIGxpbmVzLnB1c2goJyoqKioqKioqKioqKioqKicgKyBsaW5ldGVybSk7XG4gICAgICAgIGZpbGUxUmFuZ2UgPSBfZm9ybWF0UmFuZ2VDb250ZXh0KGZpcnN0WzFdLCBsYXN0WzJdKTtcbiAgICAgICAgbGluZXMucHVzaChcIioqKiBcIiArIGZpbGUxUmFuZ2UgKyBcIiAqKioqXCIgKyBsaW5ldGVybSk7XG4gICAgICAgIGlmIChfYW55KChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgX2osIF9sZW4xLCBfcmVmMywgX3Jlc3VsdHM7XG4gICAgICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBncm91cC5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgICAgICAgIF9yZWYzID0gZ3JvdXBbX2pdLCB0YWcgPSBfcmVmM1swXSwgXyA9IF9yZWYzWzFdLCBfID0gX3JlZjNbMl0sIF8gPSBfcmVmM1szXSwgXyA9IF9yZWYzWzRdO1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaCh0YWcgPT09ICdyZXBsYWNlJyB8fCB0YWcgPT09ICdkZWxldGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgICAgICB9KSgpKSkge1xuICAgICAgICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IGdyb3VwLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xuICAgICAgICAgICAgX3JlZjMgPSBncm91cFtfal0sIHRhZyA9IF9yZWYzWzBdLCBpMSA9IF9yZWYzWzFdLCBpMiA9IF9yZWYzWzJdLCBfID0gX3JlZjNbM10sIF8gPSBfcmVmM1s0XTtcbiAgICAgICAgICAgIGlmICh0YWcgIT09ICdpbnNlcnQnKSB7XG4gICAgICAgICAgICAgIF9yZWY0ID0gYS5zbGljZShpMSwgaTIpO1xuICAgICAgICAgICAgICBmb3IgKF9rID0gMCwgX2xlbjIgPSBfcmVmNC5sZW5ndGg7IF9rIDwgX2xlbjI7IF9rKyspIHtcbiAgICAgICAgICAgICAgICBsaW5lID0gX3JlZjRbX2tdO1xuICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gocHJlZml4W3RhZ10gKyBsaW5lKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmaWxlMlJhbmdlID0gX2Zvcm1hdFJhbmdlQ29udGV4dChmaXJzdFszXSwgbGFzdFs0XSk7XG4gICAgICAgIGxpbmVzLnB1c2goXCItLS0gXCIgKyBmaWxlMlJhbmdlICsgXCIgLS0tLVwiICsgbGluZXRlcm0pO1xuICAgICAgICBpZiAoX2FueSgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIF9sLCBfbGVuMywgX3JlZjUsIF9yZXN1bHRzO1xuICAgICAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICAgICAgZm9yIChfbCA9IDAsIF9sZW4zID0gZ3JvdXAubGVuZ3RoOyBfbCA8IF9sZW4zOyBfbCsrKSB7XG4gICAgICAgICAgICBfcmVmNSA9IGdyb3VwW19sXSwgdGFnID0gX3JlZjVbMF0sIF8gPSBfcmVmNVsxXSwgXyA9IF9yZWY1WzJdLCBfID0gX3JlZjVbM10sIF8gPSBfcmVmNVs0XTtcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2godGFnID09PSAncmVwbGFjZScgfHwgdGFnID09PSAnaW5zZXJ0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICAgICAgfSkoKSkpIHtcbiAgICAgICAgICBmb3IgKF9sID0gMCwgX2xlbjMgPSBncm91cC5sZW5ndGg7IF9sIDwgX2xlbjM7IF9sKyspIHtcbiAgICAgICAgICAgIF9yZWY1ID0gZ3JvdXBbX2xdLCB0YWcgPSBfcmVmNVswXSwgXyA9IF9yZWY1WzFdLCBfID0gX3JlZjVbMl0sIGoxID0gX3JlZjVbM10sIGoyID0gX3JlZjVbNF07XG4gICAgICAgICAgICBpZiAodGFnICE9PSAnZGVsZXRlJykge1xuICAgICAgICAgICAgICBfcmVmNiA9IGIuc2xpY2UoajEsIGoyKTtcbiAgICAgICAgICAgICAgZm9yIChfbSA9IDAsIF9sZW40ID0gX3JlZjYubGVuZ3RoOyBfbSA8IF9sZW40OyBfbSsrKSB7XG4gICAgICAgICAgICAgICAgbGluZSA9IF9yZWY2W19tXTtcbiAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKHByZWZpeFt0YWddICsgbGluZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxpbmVzO1xuICB9O1xuXG4gIG5kaWZmID0gZnVuY3Rpb24oYSwgYiwgbGluZWp1bmssIGNoYXJqdW5rKSB7XG4gICAgaWYgKGNoYXJqdW5rID09IG51bGwpIHtcbiAgICAgIGNoYXJqdW5rID0gSVNfQ0hBUkFDVEVSX0pVTks7XG4gICAgfVxuICAgIC8qXG4gICAgICBDb21wYXJlIGBhYCBhbmQgYGJgIChsaXN0cyBvZiBzdHJpbmdzKTsgcmV0dXJuIGEgYERpZmZlcmAtc3R5bGUgZGVsdGEuXG4gICAgXG4gICAgICBPcHRpb25hbCBrZXl3b3JkIHBhcmFtZXRlcnMgYGxpbmVqdW5rYCBhbmQgYGNoYXJqdW5rYCBhcmUgZm9yIGZpbHRlclxuICAgICAgZnVuY3Rpb25zIChvciBOb25lKTpcbiAgICBcbiAgICAgIC0gbGluZWp1bms6IEEgZnVuY3Rpb24gdGhhdCBzaG91bGQgYWNjZXB0IGEgc2luZ2xlIHN0cmluZyBhcmd1bWVudCwgYW5kXG4gICAgICAgIHJldHVybiB0cnVlIGlmZiB0aGUgc3RyaW5nIGlzIGp1bmsuICBUaGUgZGVmYXVsdCBpcyBudWxsLCBhbmQgaXNcbiAgICAgICAgcmVjb21tZW5kZWQ7IFxuICAgIFxuICAgICAgLSBjaGFyanVuazogQSBmdW5jdGlvbiB0aGF0IHNob3VsZCBhY2NlcHQgYSBzdHJpbmcgb2YgbGVuZ3RoIDEuIFRoZVxuICAgICAgICBkZWZhdWx0IGlzIG1vZHVsZS1sZXZlbCBmdW5jdGlvbiBJU19DSEFSQUNURVJfSlVOSywgd2hpY2ggZmlsdGVycyBvdXRcbiAgICAgICAgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIChhIGJsYW5rIG9yIHRhYjsgbm90ZTogYmFkIGlkZWEgdG8gaW5jbHVkZSBuZXdsaW5lXG4gICAgICAgIGluIHRoaXMhKS5cbiAgICBcbiAgICAgIEV4YW1wbGU6XG4gICAgICA+Pj4gYSA9IFsnb25lXFxuJywgJ3R3b1xcbicsICd0aHJlZVxcbiddXG4gICAgICA+Pj4gYiA9IFsnb3JlXFxuJywgJ3RyZWVcXG4nLCAnZW11XFxuJ11cbiAgICAgID4+PiBuZGlmZihhLCBiKVxuICAgICAgWyAnLSBvbmVcXG4nLFxuICAgICAgICAnPyAgXlxcbicsXG4gICAgICAgICcrIG9yZVxcbicsXG4gICAgICAgICc/ICBeXFxuJyxcbiAgICAgICAgJy0gdHdvXFxuJyxcbiAgICAgICAgJy0gdGhyZWVcXG4nLFxuICAgICAgICAnPyAgLVxcbicsXG4gICAgICAgICcrIHRyZWVcXG4nLFxuICAgICAgICAnKyBlbXVcXG4nIF1cbiAgICAqL1xuXG4gICAgcmV0dXJuIChuZXcgRGlmZmVyKGxpbmVqdW5rLCBjaGFyanVuaykpLmNvbXBhcmUoYSwgYik7XG4gIH07XG5cbiAgcmVzdG9yZSA9IGZ1bmN0aW9uKGRlbHRhLCB3aGljaCkge1xuICAgIC8qXG4gICAgICBHZW5lcmF0ZSBvbmUgb2YgdGhlIHR3byBzZXF1ZW5jZXMgdGhhdCBnZW5lcmF0ZWQgYSBkZWx0YS5cbiAgICBcbiAgICAgIEdpdmVuIGEgYGRlbHRhYCBwcm9kdWNlZCBieSBgRGlmZmVyLmNvbXBhcmUoKWAgb3IgYG5kaWZmKClgLCBleHRyYWN0XG4gICAgICBsaW5lcyBvcmlnaW5hdGluZyBmcm9tIGZpbGUgMSBvciAyIChwYXJhbWV0ZXIgYHdoaWNoYCksIHN0cmlwcGluZyBvZmYgbGluZVxuICAgICAgcHJlZml4ZXMuXG4gICAgXG4gICAgICBFeGFtcGxlczpcbiAgICAgID4+PiBhID0gWydvbmVcXG4nLCAndHdvXFxuJywgJ3RocmVlXFxuJ11cbiAgICAgID4+PiBiID0gWydvcmVcXG4nLCAndHJlZVxcbicsICdlbXVcXG4nXVxuICAgICAgPj4+IGRpZmYgPSBuZGlmZihhLCBiKVxuICAgICAgPj4+IHJlc3RvcmUoZGlmZiwgMSlcbiAgICAgIFsgJ29uZVxcbicsXG4gICAgICAgICd0d29cXG4nLFxuICAgICAgICAndGhyZWVcXG4nIF1cbiAgICAgID4+PiByZXN0b3JlKGRpZmYsIDIpXG4gICAgICBbICdvcmVcXG4nLFxuICAgICAgICAndHJlZVxcbicsXG4gICAgICAgICdlbXVcXG4nIF1cbiAgICAqL1xuXG4gICAgdmFyIGxpbmUsIGxpbmVzLCBwcmVmaXhlcywgdGFnLCBfaSwgX2xlbiwgX3JlZjtcbiAgICB0YWcgPSB7XG4gICAgICAxOiAnLSAnLFxuICAgICAgMjogJysgJ1xuICAgIH1bd2hpY2hdO1xuICAgIGlmICghdGFnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3cgZGVsdGEgY2hvaWNlIChtdXN0IGJlIDEgb3IgMik6IFwiICsgd2hpY2gpO1xuICAgIH1cbiAgICBwcmVmaXhlcyA9IFsnICAnLCB0YWddO1xuICAgIGxpbmVzID0gW107XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBkZWx0YS5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgbGluZSA9IGRlbHRhW19pXTtcbiAgICAgIGlmIChfcmVmID0gbGluZS5zbGljZSgwLCAyKSwgX19pbmRleE9mLmNhbGwocHJlZml4ZXMsIF9yZWYpID49IDApIHtcbiAgICAgICAgbGluZXMucHVzaChsaW5lLnNsaWNlKDIpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxpbmVzO1xuICB9O1xuXG4gIGV4cG9ydHMuX2FycmF5Q21wID0gX2FycmF5Q21wO1xuXG4gIGV4cG9ydHMuU2VxdWVuY2VNYXRjaGVyID0gU2VxdWVuY2VNYXRjaGVyO1xuXG4gIGV4cG9ydHMuZ2V0Q2xvc2VNYXRjaGVzID0gZ2V0Q2xvc2VNYXRjaGVzO1xuXG4gIGV4cG9ydHMuX2NvdW50TGVhZGluZyA9IF9jb3VudExlYWRpbmc7XG5cbiAgZXhwb3J0cy5EaWZmZXIgPSBEaWZmZXI7XG5cbiAgZXhwb3J0cy5JU19MSU5FX0pVTksgPSBJU19MSU5FX0pVTks7XG5cbiAgZXhwb3J0cy5JU19DSEFSQUNURVJfSlVOSyA9IElTX0NIQVJBQ1RFUl9KVU5LO1xuXG4gIGV4cG9ydHMuX2Zvcm1hdFJhbmdlVW5pZmllZCA9IF9mb3JtYXRSYW5nZVVuaWZpZWQ7XG5cbiAgZXhwb3J0cy51bmlmaWVkRGlmZiA9IHVuaWZpZWREaWZmO1xuXG4gIGV4cG9ydHMuX2Zvcm1hdFJhbmdlQ29udGV4dCA9IF9mb3JtYXRSYW5nZUNvbnRleHQ7XG5cbiAgZXhwb3J0cy5jb250ZXh0RGlmZiA9IGNvbnRleHREaWZmO1xuXG4gIGV4cG9ydHMubmRpZmYgPSBuZGlmZjtcblxuICBleHBvcnRzLnJlc3RvcmUgPSByZXN0b3JlO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwidmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcbiAgICByZXR1cm4gcjtcbn07XG5pbXBvcnQgeyBMaW5lVHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZXNjYXBlRm9yUmVnRXhwIH0gZnJvbSAnLi91dGlscyc7XG5mdW5jdGlvbiBnZXRFeHRlbnNpb24oZmlsZW5hbWUsIGxhbmd1YWdlKSB7XG4gICAgdmFyIGZpbGVuYW1lUGFydHMgPSBmaWxlbmFtZS5zcGxpdCgnLicpO1xuICAgIHJldHVybiBmaWxlbmFtZVBhcnRzLmxlbmd0aCA+IDEgPyBmaWxlbmFtZVBhcnRzW2ZpbGVuYW1lUGFydHMubGVuZ3RoIC0gMV0gOiBsYW5ndWFnZTtcbn1cbmZ1bmN0aW9uIHN0YXJ0c1dpdGhBbnkoc3RyLCBwcmVmaXhlcykge1xuICAgIHJldHVybiBwcmVmaXhlcy5yZWR1Y2UoZnVuY3Rpb24gKHN0YXJ0c1dpdGgsIHByZWZpeCkgeyByZXR1cm4gc3RhcnRzV2l0aCB8fCBzdHIuc3RhcnRzV2l0aChwcmVmaXgpOyB9LCBmYWxzZSk7XG59XG52YXIgYmFzZURpZmZGaWxlbmFtZVByZWZpeGVzID0gWydhLycsICdiLycsICdpLycsICd3LycsICdjLycsICdvLyddO1xuZnVuY3Rpb24gZ2V0RmlsZW5hbWUobGluZSwgbGluZVByZWZpeCwgZXh0cmFQcmVmaXgpIHtcbiAgICB2YXIgcHJlZml4ZXMgPSBleHRyYVByZWZpeCAhPT0gdW5kZWZpbmVkID8gX19zcHJlYWRBcnJheXMoYmFzZURpZmZGaWxlbmFtZVByZWZpeGVzLCBbZXh0cmFQcmVmaXhdKSA6IGJhc2VEaWZmRmlsZW5hbWVQcmVmaXhlcztcbiAgICB2YXIgRmlsZW5hbWVSZWdFeHAgPSBsaW5lUHJlZml4XG4gICAgICAgID8gbmV3IFJlZ0V4cChcIl5cIiArIGVzY2FwZUZvclJlZ0V4cChsaW5lUHJlZml4KSArIFwiIFxcXCI/KC4rPylcXFwiPyRcIilcbiAgICAgICAgOiBuZXcgUmVnRXhwKCdeXCI/KC4rPylcIj8kJyk7XG4gICAgdmFyIF9hID0gRmlsZW5hbWVSZWdFeHAuZXhlYyhsaW5lKSB8fCBbXSwgX2IgPSBfYVsxXSwgZmlsZW5hbWUgPSBfYiA9PT0gdm9pZCAwID8gJycgOiBfYjtcbiAgICB2YXIgbWF0Y2hpbmdQcmVmaXggPSBwcmVmaXhlcy5maW5kKGZ1bmN0aW9uIChwKSB7IHJldHVybiBmaWxlbmFtZS5pbmRleE9mKHApID09PSAwOyB9KTtcbiAgICB2YXIgZm5hbWVXaXRob3V0UHJlZml4ID0gbWF0Y2hpbmdQcmVmaXggPyBmaWxlbmFtZS5zbGljZShtYXRjaGluZ1ByZWZpeC5sZW5ndGgpIDogZmlsZW5hbWU7XG4gICAgcmV0dXJuIGZuYW1lV2l0aG91dFByZWZpeC5yZXBsYWNlKC9cXHMrXFxkezR9LVxcZHsyfS1cXGR7Mn0gXFxkezJ9OlxcZHsyfTpcXGR7Mn0oPzpcXC5cXGQrKT8gWystXVxcZHs0fS4qJC8sICcnKTtcbn1cbmZ1bmN0aW9uIGdldFNyY0ZpbGVuYW1lKGxpbmUsIHNyY1ByZWZpeCkge1xuICAgIHJldHVybiBnZXRGaWxlbmFtZShsaW5lLCAnLS0tJywgc3JjUHJlZml4KTtcbn1cbmZ1bmN0aW9uIGdldERzdEZpbGVuYW1lKGxpbmUsIGRzdFByZWZpeCkge1xuICAgIHJldHVybiBnZXRGaWxlbmFtZShsaW5lLCAnKysrJywgZHN0UHJlZml4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShkaWZmSW5wdXQsIGNvbmZpZykge1xuICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkgeyBjb25maWcgPSB7fTsgfVxuICAgIHZhciBmaWxlcyA9IFtdO1xuICAgIHZhciBjdXJyZW50RmlsZSA9IG51bGw7XG4gICAgdmFyIGN1cnJlbnRCbG9jayA9IG51bGw7XG4gICAgdmFyIG9sZExpbmUgPSBudWxsO1xuICAgIHZhciBvbGRMaW5lMiA9IG51bGw7XG4gICAgdmFyIG5ld0xpbmUgPSBudWxsO1xuICAgIHZhciBwb3NzaWJsZU9sZE5hbWUgPSBudWxsO1xuICAgIHZhciBwb3NzaWJsZU5ld05hbWUgPSBudWxsO1xuICAgIHZhciBvbGRGaWxlTmFtZUhlYWRlciA9ICctLS0gJztcbiAgICB2YXIgbmV3RmlsZU5hbWVIZWFkZXIgPSAnKysrICc7XG4gICAgdmFyIGh1bmtIZWFkZXJQcmVmaXggPSAnQEAnO1xuICAgIHZhciBvbGRNb2RlID0gL15vbGQgbW9kZSAoXFxkezZ9KS87XG4gICAgdmFyIG5ld01vZGUgPSAvXm5ldyBtb2RlIChcXGR7Nn0pLztcbiAgICB2YXIgZGVsZXRlZEZpbGVNb2RlID0gL15kZWxldGVkIGZpbGUgbW9kZSAoXFxkezZ9KS87XG4gICAgdmFyIG5ld0ZpbGVNb2RlID0gL15uZXcgZmlsZSBtb2RlIChcXGR7Nn0pLztcbiAgICB2YXIgY29weUZyb20gPSAvXmNvcHkgZnJvbSBcIj8oLispXCI/LztcbiAgICB2YXIgY29weVRvID0gL15jb3B5IHRvIFwiPyguKylcIj8vO1xuICAgIHZhciByZW5hbWVGcm9tID0gL15yZW5hbWUgZnJvbSBcIj8oLispXCI/LztcbiAgICB2YXIgcmVuYW1lVG8gPSAvXnJlbmFtZSB0byBcIj8oLispXCI/LztcbiAgICB2YXIgc2ltaWxhcml0eUluZGV4ID0gL15zaW1pbGFyaXR5IGluZGV4IChcXGQrKSUvO1xuICAgIHZhciBkaXNzaW1pbGFyaXR5SW5kZXggPSAvXmRpc3NpbWlsYXJpdHkgaW5kZXggKFxcZCspJS87XG4gICAgdmFyIGluZGV4ID0gL15pbmRleCAoW1xcZGEtel0rKVxcLlxcLihbXFxkYS16XSspXFxzKihcXGR7Nn0pPy87XG4gICAgdmFyIGJpbmFyeUZpbGVzID0gL15CaW5hcnkgZmlsZXMgKC4qKSBhbmQgKC4qKSBkaWZmZXIvO1xuICAgIHZhciBiaW5hcnlEaWZmID0gL15HSVQgYmluYXJ5IHBhdGNoLztcbiAgICB2YXIgY29tYmluZWRJbmRleCA9IC9eaW5kZXggKFtcXGRhLXpdKyksKFtcXGRhLXpdKylcXC5cXC4oW1xcZGEtel0rKS87XG4gICAgdmFyIGNvbWJpbmVkTW9kZSA9IC9ebW9kZSAoXFxkezZ9KSwoXFxkezZ9KVxcLlxcLihcXGR7Nn0pLztcbiAgICB2YXIgY29tYmluZWROZXdGaWxlID0gL15uZXcgZmlsZSBtb2RlIChcXGR7Nn0pLztcbiAgICB2YXIgY29tYmluZWREZWxldGVkRmlsZSA9IC9eZGVsZXRlZCBmaWxlIG1vZGUgKFxcZHs2fSksKFxcZHs2fSkvO1xuICAgIHZhciBkaWZmTGluZXMgPSBkaWZmSW5wdXRcbiAgICAgICAgLnJlcGxhY2UoL1xcXFwgTm8gbmV3bGluZSBhdCBlbmQgb2YgZmlsZS9nLCAnJylcbiAgICAgICAgLnJlcGxhY2UoL1xcclxcbj8vZywgJ1xcbicpXG4gICAgICAgIC5zcGxpdCgnXFxuJyk7XG4gICAgZnVuY3Rpb24gc2F2ZUJsb2NrKCkge1xuICAgICAgICBpZiAoY3VycmVudEJsb2NrICE9PSBudWxsICYmIGN1cnJlbnRGaWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjdXJyZW50RmlsZS5ibG9ja3MucHVzaChjdXJyZW50QmxvY2spO1xuICAgICAgICAgICAgY3VycmVudEJsb2NrID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzYXZlRmlsZSgpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRGaWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoIWN1cnJlbnRGaWxlLm9sZE5hbWUgJiYgcG9zc2libGVPbGROYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEZpbGUub2xkTmFtZSA9IHBvc3NpYmxlT2xkTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY3VycmVudEZpbGUubmV3TmFtZSAmJiBwb3NzaWJsZU5ld05hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RmlsZS5uZXdOYW1lID0gcG9zc2libGVOZXdOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGN1cnJlbnRGaWxlLm5ld05hbWUpIHtcbiAgICAgICAgICAgICAgICBmaWxlcy5wdXNoKGN1cnJlbnRGaWxlKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50RmlsZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcG9zc2libGVPbGROYW1lID0gbnVsbDtcbiAgICAgICAgcG9zc2libGVOZXdOYW1lID0gbnVsbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3RhcnRGaWxlKCkge1xuICAgICAgICBzYXZlQmxvY2soKTtcbiAgICAgICAgc2F2ZUZpbGUoKTtcbiAgICAgICAgY3VycmVudEZpbGUgPSB7XG4gICAgICAgICAgICBibG9ja3M6IFtdLFxuICAgICAgICAgICAgZGVsZXRlZExpbmVzOiAwLFxuICAgICAgICAgICAgYWRkZWRMaW5lczogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3RhcnRCbG9jayhsaW5lKSB7XG4gICAgICAgIHNhdmVCbG9jaygpO1xuICAgICAgICB2YXIgdmFsdWVzO1xuICAgICAgICBpZiAoY3VycmVudEZpbGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmICgodmFsdWVzID0gL15AQCAtKFxcZCspKD86LFxcZCspPyBcXCsoXFxkKykoPzosXFxkKyk/IEBALiovLmV4ZWMobGluZSkpKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEZpbGUuaXNDb21iaW5lZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG9sZExpbmUgPSBwYXJzZUludCh2YWx1ZXNbMV0sIDEwKTtcbiAgICAgICAgICAgICAgICBuZXdMaW5lID0gcGFyc2VJbnQodmFsdWVzWzJdLCAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgodmFsdWVzID0gL15AQEAgLShcXGQrKSg/OixcXGQrKT8gLShcXGQrKSg/OixcXGQrKT8gXFwrKFxcZCspKD86LFxcZCspPyBAQEAuKi8uZXhlYyhsaW5lKSkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RmlsZS5pc0NvbWJpbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBvbGRMaW5lID0gcGFyc2VJbnQodmFsdWVzWzFdLCAxMCk7XG4gICAgICAgICAgICAgICAgb2xkTGluZTIgPSBwYXJzZUludCh2YWx1ZXNbMl0sIDEwKTtcbiAgICAgICAgICAgICAgICBuZXdMaW5lID0gcGFyc2VJbnQodmFsdWVzWzNdLCAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobGluZS5zdGFydHNXaXRoKGh1bmtIZWFkZXJQcmVmaXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBwYXJzZSBsaW5lcywgc3RhcnRpbmcgaW4gMCEnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb2xkTGluZSA9IDA7XG4gICAgICAgICAgICAgICAgbmV3TGluZSA9IDA7XG4gICAgICAgICAgICAgICAgY3VycmVudEZpbGUuaXNDb21iaW5lZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRCbG9jayA9IHtcbiAgICAgICAgICAgIGxpbmVzOiBbXSxcbiAgICAgICAgICAgIG9sZFN0YXJ0TGluZTogb2xkTGluZSxcbiAgICAgICAgICAgIG9sZFN0YXJ0TGluZTI6IG9sZExpbmUyLFxuICAgICAgICAgICAgbmV3U3RhcnRMaW5lOiBuZXdMaW5lLFxuICAgICAgICAgICAgaGVhZGVyOiBsaW5lLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVMaW5lKGxpbmUpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRGaWxlID09PSBudWxsIHx8IGN1cnJlbnRCbG9jayA9PT0gbnVsbCB8fCBvbGRMaW5lID09PSBudWxsIHx8IG5ld0xpbmUgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBjdXJyZW50TGluZSA9IHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGxpbmUsXG4gICAgICAgIH07XG4gICAgICAgIHZhciBhZGRlZFByZWZpeGVzID0gY3VycmVudEZpbGUuaXNDb21iaW5lZCA/IFsnKyAnLCAnICsnLCAnKysnXSA6IFsnKyddO1xuICAgICAgICB2YXIgZGVsZXRlZFByZWZpeGVzID0gY3VycmVudEZpbGUuaXNDb21iaW5lZCA/IFsnLSAnLCAnIC0nLCAnLS0nXSA6IFsnLSddO1xuICAgICAgICBpZiAoc3RhcnRzV2l0aEFueShsaW5lLCBhZGRlZFByZWZpeGVzKSkge1xuICAgICAgICAgICAgY3VycmVudEZpbGUuYWRkZWRMaW5lcysrO1xuICAgICAgICAgICAgY3VycmVudExpbmUudHlwZSA9IExpbmVUeXBlLklOU0VSVDtcbiAgICAgICAgICAgIGN1cnJlbnRMaW5lLm9sZE51bWJlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGN1cnJlbnRMaW5lLm5ld051bWJlciA9IG5ld0xpbmUrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGFydHNXaXRoQW55KGxpbmUsIGRlbGV0ZWRQcmVmaXhlcykpIHtcbiAgICAgICAgICAgIGN1cnJlbnRGaWxlLmRlbGV0ZWRMaW5lcysrO1xuICAgICAgICAgICAgY3VycmVudExpbmUudHlwZSA9IExpbmVUeXBlLkRFTEVURTtcbiAgICAgICAgICAgIGN1cnJlbnRMaW5lLm9sZE51bWJlciA9IG9sZExpbmUrKztcbiAgICAgICAgICAgIGN1cnJlbnRMaW5lLm5ld051bWJlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRMaW5lLnR5cGUgPSBMaW5lVHlwZS5DT05URVhUO1xuICAgICAgICAgICAgY3VycmVudExpbmUub2xkTnVtYmVyID0gb2xkTGluZSsrO1xuICAgICAgICAgICAgY3VycmVudExpbmUubmV3TnVtYmVyID0gbmV3TGluZSsrO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRCbG9jay5saW5lcy5wdXNoKGN1cnJlbnRMaW5lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZXhpc3RIdW5rSGVhZGVyKGxpbmUsIGxpbmVJZHgpIHtcbiAgICAgICAgdmFyIGlkeCA9IGxpbmVJZHg7XG4gICAgICAgIHdoaWxlIChpZHggPCBkaWZmTGluZXMubGVuZ3RoIC0gMykge1xuICAgICAgICAgICAgaWYgKGxpbmUuc3RhcnRzV2l0aCgnZGlmZicpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZmZMaW5lc1tpZHhdLnN0YXJ0c1dpdGgob2xkRmlsZU5hbWVIZWFkZXIpICYmXG4gICAgICAgICAgICAgICAgZGlmZkxpbmVzW2lkeCArIDFdLnN0YXJ0c1dpdGgobmV3RmlsZU5hbWVIZWFkZXIpICYmXG4gICAgICAgICAgICAgICAgZGlmZkxpbmVzW2lkeCArIDJdLnN0YXJ0c1dpdGgoaHVua0hlYWRlclByZWZpeCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlkeCsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZGlmZkxpbmVzLmZvckVhY2goZnVuY3Rpb24gKGxpbmUsIGxpbmVJbmRleCkge1xuICAgICAgICBpZiAoIWxpbmUgfHwgbGluZS5zdGFydHNXaXRoKCcqJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWVzO1xuICAgICAgICB2YXIgcHJldkxpbmUgPSBkaWZmTGluZXNbbGluZUluZGV4IC0gMV07XG4gICAgICAgIHZhciBueHRMaW5lID0gZGlmZkxpbmVzW2xpbmVJbmRleCArIDFdO1xuICAgICAgICB2YXIgYWZ0ZXJOeHRMaW5lID0gZGlmZkxpbmVzW2xpbmVJbmRleCArIDJdO1xuICAgICAgICBpZiAobGluZS5zdGFydHNXaXRoKCdkaWZmJykpIHtcbiAgICAgICAgICAgIHN0YXJ0RmlsZSgpO1xuICAgICAgICAgICAgdmFyIGdpdERpZmZTdGFydCA9IC9eZGlmZiAtLWdpdCBcIj8oLispXCI/IFwiPyguKylcIj8vO1xuICAgICAgICAgICAgaWYgKCh2YWx1ZXMgPSBnaXREaWZmU3RhcnQuZXhlYyhsaW5lKSkpIHtcbiAgICAgICAgICAgICAgICBwb3NzaWJsZU9sZE5hbWUgPSBnZXRGaWxlbmFtZSh2YWx1ZXNbMV0sIHVuZGVmaW5lZCwgY29uZmlnLmRzdFByZWZpeCk7XG4gICAgICAgICAgICAgICAgcG9zc2libGVOZXdOYW1lID0gZ2V0RmlsZW5hbWUodmFsdWVzWzJdLCB1bmRlZmluZWQsIGNvbmZpZy5zcmNQcmVmaXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGN1cnJlbnRGaWxlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXaGVyZSBpcyBteSBmaWxlICEhIScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudEZpbGUuaXNHaXREaWZmID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWN1cnJlbnRGaWxlIHx8XG4gICAgICAgICAgICAoIWN1cnJlbnRGaWxlLmlzR2l0RGlmZiAmJlxuICAgICAgICAgICAgICAgIGN1cnJlbnRGaWxlICYmXG4gICAgICAgICAgICAgICAgbGluZS5zdGFydHNXaXRoKG9sZEZpbGVOYW1lSGVhZGVyKSAmJlxuICAgICAgICAgICAgICAgIG54dExpbmUuc3RhcnRzV2l0aChuZXdGaWxlTmFtZUhlYWRlcikgJiZcbiAgICAgICAgICAgICAgICBhZnRlck54dExpbmUuc3RhcnRzV2l0aChodW5rSGVhZGVyUHJlZml4KSkpIHtcbiAgICAgICAgICAgIHN0YXJ0RmlsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgobGluZS5zdGFydHNXaXRoKG9sZEZpbGVOYW1lSGVhZGVyKSAmJiBueHRMaW5lLnN0YXJ0c1dpdGgobmV3RmlsZU5hbWVIZWFkZXIpKSB8fFxuICAgICAgICAgICAgKGxpbmUuc3RhcnRzV2l0aChuZXdGaWxlTmFtZUhlYWRlcikgJiYgcHJldkxpbmUuc3RhcnRzV2l0aChvbGRGaWxlTmFtZUhlYWRlcikpKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudEZpbGUgJiZcbiAgICAgICAgICAgICAgICAhY3VycmVudEZpbGUub2xkTmFtZSAmJlxuICAgICAgICAgICAgICAgIGxpbmUuc3RhcnRzV2l0aCgnLS0tICcpICYmXG4gICAgICAgICAgICAgICAgKHZhbHVlcyA9IGdldFNyY0ZpbGVuYW1lKGxpbmUsIGNvbmZpZy5zcmNQcmVmaXgpKSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRGaWxlLm9sZE5hbWUgPSB2YWx1ZXM7XG4gICAgICAgICAgICAgICAgY3VycmVudEZpbGUubGFuZ3VhZ2UgPSBnZXRFeHRlbnNpb24oY3VycmVudEZpbGUub2xkTmFtZSwgY3VycmVudEZpbGUubGFuZ3VhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyZW50RmlsZSAmJlxuICAgICAgICAgICAgICAgICFjdXJyZW50RmlsZS5uZXdOYW1lICYmXG4gICAgICAgICAgICAgICAgbGluZS5zdGFydHNXaXRoKCcrKysgJykgJiZcbiAgICAgICAgICAgICAgICAodmFsdWVzID0gZ2V0RHN0RmlsZW5hbWUobGluZSwgY29uZmlnLmRzdFByZWZpeCkpKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEZpbGUubmV3TmFtZSA9IHZhbHVlcztcbiAgICAgICAgICAgICAgICBjdXJyZW50RmlsZS5sYW5ndWFnZSA9IGdldEV4dGVuc2lvbihjdXJyZW50RmlsZS5uZXdOYW1lLCBjdXJyZW50RmlsZS5sYW5ndWFnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50RmlsZSAmJlxuICAgICAgICAgICAgKGxpbmUuc3RhcnRzV2l0aChodW5rSGVhZGVyUHJlZml4KSB8fFxuICAgICAgICAgICAgICAgIChjdXJyZW50RmlsZS5pc0dpdERpZmYgJiYgY3VycmVudEZpbGUub2xkTmFtZSAmJiBjdXJyZW50RmlsZS5uZXdOYW1lICYmICFjdXJyZW50QmxvY2spKSkge1xuICAgICAgICAgICAgc3RhcnRCbG9jayhsaW5lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudEJsb2NrICYmIChsaW5lLnN0YXJ0c1dpdGgoJysnKSB8fCBsaW5lLnN0YXJ0c1dpdGgoJy0nKSB8fCBsaW5lLnN0YXJ0c1dpdGgoJyAnKSkpIHtcbiAgICAgICAgICAgIGNyZWF0ZUxpbmUobGluZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRvZXNOb3RFeGlzdEh1bmtIZWFkZXIgPSAhZXhpc3RIdW5rSGVhZGVyKGxpbmUsIGxpbmVJbmRleCk7XG4gICAgICAgIGlmIChjdXJyZW50RmlsZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXaGVyZSBpcyBteSBmaWxlICEhIScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodmFsdWVzID0gb2xkTW9kZS5leGVjKGxpbmUpKSkge1xuICAgICAgICAgICAgY3VycmVudEZpbGUub2xkTW9kZSA9IHZhbHVlc1sxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgodmFsdWVzID0gbmV3TW9kZS5leGVjKGxpbmUpKSkge1xuICAgICAgICAgICAgY3VycmVudEZpbGUubmV3TW9kZSA9IHZhbHVlc1sxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgodmFsdWVzID0gZGVsZXRlZEZpbGVNb2RlLmV4ZWMobGluZSkpKSB7XG4gICAgICAgICAgICBjdXJyZW50RmlsZS5kZWxldGVkRmlsZU1vZGUgPSB2YWx1ZXNbMV07XG4gICAgICAgICAgICBjdXJyZW50RmlsZS5pc0RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCh2YWx1ZXMgPSBuZXdGaWxlTW9kZS5leGVjKGxpbmUpKSkge1xuICAgICAgICAgICAgY3VycmVudEZpbGUubmV3RmlsZU1vZGUgPSB2YWx1ZXNbMV07XG4gICAgICAgICAgICBjdXJyZW50RmlsZS5pc05ldyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKHZhbHVlcyA9IGNvcHlGcm9tLmV4ZWMobGluZSkpKSB7XG4gICAgICAgICAgICBpZiAoZG9lc05vdEV4aXN0SHVua0hlYWRlcikge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRGaWxlLm9sZE5hbWUgPSB2YWx1ZXNbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50RmlsZS5pc0NvcHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCh2YWx1ZXMgPSBjb3B5VG8uZXhlYyhsaW5lKSkpIHtcbiAgICAgICAgICAgIGlmIChkb2VzTm90RXhpc3RIdW5rSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEZpbGUubmV3TmFtZSA9IHZhbHVlc1sxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRGaWxlLmlzQ29weSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKHZhbHVlcyA9IHJlbmFtZUZyb20uZXhlYyhsaW5lKSkpIHtcbiAgICAgICAgICAgIGlmIChkb2VzTm90RXhpc3RIdW5rSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEZpbGUub2xkTmFtZSA9IHZhbHVlc1sxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRGaWxlLmlzUmVuYW1lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgodmFsdWVzID0gcmVuYW1lVG8uZXhlYyhsaW5lKSkpIHtcbiAgICAgICAgICAgIGlmIChkb2VzTm90RXhpc3RIdW5rSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEZpbGUubmV3TmFtZSA9IHZhbHVlc1sxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRGaWxlLmlzUmVuYW1lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgodmFsdWVzID0gYmluYXJ5RmlsZXMuZXhlYyhsaW5lKSkpIHtcbiAgICAgICAgICAgIGN1cnJlbnRGaWxlLmlzQmluYXJ5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGN1cnJlbnRGaWxlLm9sZE5hbWUgPSBnZXRGaWxlbmFtZSh2YWx1ZXNbMV0sIHVuZGVmaW5lZCwgY29uZmlnLnNyY1ByZWZpeCk7XG4gICAgICAgICAgICBjdXJyZW50RmlsZS5uZXdOYW1lID0gZ2V0RmlsZW5hbWUodmFsdWVzWzJdLCB1bmRlZmluZWQsIGNvbmZpZy5kc3RQcmVmaXgpO1xuICAgICAgICAgICAgc3RhcnRCbG9jaygnQmluYXJ5IGZpbGUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChiaW5hcnlEaWZmLnRlc3QobGluZSkpIHtcbiAgICAgICAgICAgIGN1cnJlbnRGaWxlLmlzQmluYXJ5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHN0YXJ0QmxvY2sobGluZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKHZhbHVlcyA9IHNpbWlsYXJpdHlJbmRleC5leGVjKGxpbmUpKSkge1xuICAgICAgICAgICAgY3VycmVudEZpbGUudW5jaGFuZ2VkUGVyY2VudGFnZSA9IHBhcnNlSW50KHZhbHVlc1sxXSwgMTApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCh2YWx1ZXMgPSBkaXNzaW1pbGFyaXR5SW5kZXguZXhlYyhsaW5lKSkpIHtcbiAgICAgICAgICAgIGN1cnJlbnRGaWxlLmNoYW5nZWRQZXJjZW50YWdlID0gcGFyc2VJbnQodmFsdWVzWzFdLCAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKHZhbHVlcyA9IGluZGV4LmV4ZWMobGluZSkpKSB7XG4gICAgICAgICAgICBjdXJyZW50RmlsZS5jaGVja3N1bUJlZm9yZSA9IHZhbHVlc1sxXTtcbiAgICAgICAgICAgIGN1cnJlbnRGaWxlLmNoZWNrc3VtQWZ0ZXIgPSB2YWx1ZXNbMl07XG4gICAgICAgICAgICB2YWx1ZXNbM10gJiYgKGN1cnJlbnRGaWxlLm1vZGUgPSB2YWx1ZXNbM10pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCh2YWx1ZXMgPSBjb21iaW5lZEluZGV4LmV4ZWMobGluZSkpKSB7XG4gICAgICAgICAgICBjdXJyZW50RmlsZS5jaGVja3N1bUJlZm9yZSA9IFt2YWx1ZXNbMl0sIHZhbHVlc1szXV07XG4gICAgICAgICAgICBjdXJyZW50RmlsZS5jaGVja3N1bUFmdGVyID0gdmFsdWVzWzFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCh2YWx1ZXMgPSBjb21iaW5lZE1vZGUuZXhlYyhsaW5lKSkpIHtcbiAgICAgICAgICAgIGN1cnJlbnRGaWxlLm9sZE1vZGUgPSBbdmFsdWVzWzJdLCB2YWx1ZXNbM11dO1xuICAgICAgICAgICAgY3VycmVudEZpbGUubmV3TW9kZSA9IHZhbHVlc1sxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgodmFsdWVzID0gY29tYmluZWROZXdGaWxlLmV4ZWMobGluZSkpKSB7XG4gICAgICAgICAgICBjdXJyZW50RmlsZS5uZXdGaWxlTW9kZSA9IHZhbHVlc1sxXTtcbiAgICAgICAgICAgIGN1cnJlbnRGaWxlLmlzTmV3ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgodmFsdWVzID0gY29tYmluZWREZWxldGVkRmlsZS5leGVjKGxpbmUpKSkge1xuICAgICAgICAgICAgY3VycmVudEZpbGUuZGVsZXRlZEZpbGVNb2RlID0gdmFsdWVzWzFdO1xuICAgICAgICAgICAgY3VycmVudEZpbGUuaXNEZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHNhdmVCbG9jaygpO1xuICAgIHNhdmVGaWxlKCk7XG4gICAgcmV0dXJuIGZpbGVzO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGlmZi1wYXJzZXIuanMubWFwIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCAqIGFzIERpZmZQYXJzZXIgZnJvbSAnLi9kaWZmLXBhcnNlcic7XG5pbXBvcnQgKiBhcyBmaWxlTGlzdFByaW50ZXIgZnJvbSAnLi9maWxlLWxpc3QtcmVuZGVyZXInO1xuaW1wb3J0IExpbmVCeUxpbmVSZW5kZXJlciwgeyBkZWZhdWx0TGluZUJ5TGluZVJlbmRlcmVyQ29uZmlnIH0gZnJvbSAnLi9saW5lLWJ5LWxpbmUtcmVuZGVyZXInO1xuaW1wb3J0IFNpZGVCeVNpZGVSZW5kZXJlciwgeyBkZWZhdWx0U2lkZUJ5U2lkZVJlbmRlcmVyQ29uZmlnIH0gZnJvbSAnLi9zaWRlLWJ5LXNpZGUtcmVuZGVyZXInO1xuaW1wb3J0IHsgT3V0cHV0Rm9ybWF0VHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IEhvZ2FuSnNVdGlscyBmcm9tICcuL2hvZ2FuanMtdXRpbHMnO1xuZXhwb3J0IHZhciBkZWZhdWx0RGlmZjJIdG1sQ29uZmlnID0gX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oe30sIGRlZmF1bHRMaW5lQnlMaW5lUmVuZGVyZXJDb25maWcpLCBkZWZhdWx0U2lkZUJ5U2lkZVJlbmRlcmVyQ29uZmlnKSwgeyBvdXRwdXRGb3JtYXQ6IE91dHB1dEZvcm1hdFR5cGUuTElORV9CWV9MSU5FLCBkcmF3RmlsZUxpc3Q6IHRydWUgfSk7XG5leHBvcnQgZnVuY3Rpb24gcGFyc2UoZGlmZklucHV0LCBjb25maWd1cmF0aW9uKSB7XG4gICAgaWYgKGNvbmZpZ3VyYXRpb24gPT09IHZvaWQgMCkgeyBjb25maWd1cmF0aW9uID0ge307IH1cbiAgICByZXR1cm4gRGlmZlBhcnNlci5wYXJzZShkaWZmSW5wdXQsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBkZWZhdWx0RGlmZjJIdG1sQ29uZmlnKSwgY29uZmlndXJhdGlvbikpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGh0bWwoZGlmZklucHV0LCBjb25maWd1cmF0aW9uKSB7XG4gICAgaWYgKGNvbmZpZ3VyYXRpb24gPT09IHZvaWQgMCkgeyBjb25maWd1cmF0aW9uID0ge307IH1cbiAgICB2YXIgY29uZmlnID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGRlZmF1bHREaWZmMkh0bWxDb25maWcpLCBjb25maWd1cmF0aW9uKTtcbiAgICB2YXIgZGlmZkpzb24gPSB0eXBlb2YgZGlmZklucHV0ID09PSAnc3RyaW5nJyA/IERpZmZQYXJzZXIucGFyc2UoZGlmZklucHV0LCBjb25maWcpIDogZGlmZklucHV0O1xuICAgIHZhciBob2dhblV0aWxzID0gbmV3IEhvZ2FuSnNVdGlscyhjb25maWcpO1xuICAgIHZhciBmaWxlTGlzdCA9IGNvbmZpZy5kcmF3RmlsZUxpc3QgPyBmaWxlTGlzdFByaW50ZXIucmVuZGVyKGRpZmZKc29uLCBob2dhblV0aWxzKSA6ICcnO1xuICAgIHZhciBkaWZmT3V0cHV0ID0gY29uZmlnLm91dHB1dEZvcm1hdCA9PT0gJ3NpZGUtYnktc2lkZSdcbiAgICAgICAgPyBuZXcgU2lkZUJ5U2lkZVJlbmRlcmVyKGhvZ2FuVXRpbHMsIGNvbmZpZykucmVuZGVyKGRpZmZKc29uKVxuICAgICAgICA6IG5ldyBMaW5lQnlMaW5lUmVuZGVyZXIoaG9nYW5VdGlscywgY29uZmlnKS5yZW5kZXIoZGlmZkpzb24pO1xuICAgIHJldHVybiBmaWxlTGlzdCArIGRpZmZPdXRwdXQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kaWZmMmh0bWwuanMubWFwIiwiLyohXG5cbiBkaWZmIHY0LjAuMVxuXG5Tb2Z0d2FyZSBMaWNlbnNlIEFncmVlbWVudCAoQlNEIExpY2Vuc2UpXG5cbkNvcHlyaWdodCAoYykgMjAwOS0yMDE1LCBLZXZpbiBEZWNrZXIgPGtwZGVja2VyQGdtYWlsLmNvbT5cblxuQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuUmVkaXN0cmlidXRpb24gYW5kIHVzZSBvZiB0aGlzIHNvZnR3YXJlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmVcbiAgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZVxuICBmb2xsb3dpbmcgZGlzY2xhaW1lci5cblxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4gIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGVcbiAgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyXG4gIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG5cbiogTmVpdGhlciB0aGUgbmFtZSBvZiBLZXZpbiBEZWNrZXIgbm9yIHRoZSBuYW1lcyBvZiBpdHNcbiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0c1xuICBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yXG4gIHdyaXR0ZW4gcGVybWlzc2lvbi5cblxuVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SXG5JTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG5DT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG5EQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG5EQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUlxuSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVFxuT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuQGxpY2Vuc2VcbiovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwuRGlmZiA9IHt9KSk7XG59KHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzKSB7ICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBEaWZmKCkge31cbiAgRGlmZi5wcm90b3R5cGUgPSB7XG4gICAgZGlmZjogZnVuY3Rpb24gZGlmZihvbGRTdHJpbmcsIG5ld1N0cmluZykge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgICAgdmFyIGNhbGxiYWNrID0gb3B0aW9ucy5jYWxsYmFjaztcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuXG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBmdW5jdGlvbiBkb25lKHZhbHVlKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkLCB2YWx1ZSk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IC8vIEFsbG93IHN1YmNsYXNzZXMgdG8gbWFzc2FnZSB0aGUgaW5wdXQgcHJpb3IgdG8gcnVubmluZ1xuXG5cbiAgICAgIG9sZFN0cmluZyA9IHRoaXMuY2FzdElucHV0KG9sZFN0cmluZyk7XG4gICAgICBuZXdTdHJpbmcgPSB0aGlzLmNhc3RJbnB1dChuZXdTdHJpbmcpO1xuICAgICAgb2xkU3RyaW5nID0gdGhpcy5yZW1vdmVFbXB0eSh0aGlzLnRva2VuaXplKG9sZFN0cmluZykpO1xuICAgICAgbmV3U3RyaW5nID0gdGhpcy5yZW1vdmVFbXB0eSh0aGlzLnRva2VuaXplKG5ld1N0cmluZykpO1xuICAgICAgdmFyIG5ld0xlbiA9IG5ld1N0cmluZy5sZW5ndGgsXG4gICAgICAgICAgb2xkTGVuID0gb2xkU3RyaW5nLmxlbmd0aDtcbiAgICAgIHZhciBlZGl0TGVuZ3RoID0gMTtcbiAgICAgIHZhciBtYXhFZGl0TGVuZ3RoID0gbmV3TGVuICsgb2xkTGVuO1xuICAgICAgdmFyIGJlc3RQYXRoID0gW3tcbiAgICAgICAgbmV3UG9zOiAtMSxcbiAgICAgICAgY29tcG9uZW50czogW11cbiAgICAgIH1dOyAvLyBTZWVkIGVkaXRMZW5ndGggPSAwLCBpLmUuIHRoZSBjb250ZW50IHN0YXJ0cyB3aXRoIHRoZSBzYW1lIHZhbHVlc1xuXG4gICAgICB2YXIgb2xkUG9zID0gdGhpcy5leHRyYWN0Q29tbW9uKGJlc3RQYXRoWzBdLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgMCk7XG5cbiAgICAgIGlmIChiZXN0UGF0aFswXS5uZXdQb3MgKyAxID49IG5ld0xlbiAmJiBvbGRQb3MgKyAxID49IG9sZExlbikge1xuICAgICAgICAvLyBJZGVudGl0eSBwZXIgdGhlIGVxdWFsaXR5IGFuZCB0b2tlbml6ZXJcbiAgICAgICAgcmV0dXJuIGRvbmUoW3tcbiAgICAgICAgICB2YWx1ZTogdGhpcy5qb2luKG5ld1N0cmluZyksXG4gICAgICAgICAgY291bnQ6IG5ld1N0cmluZy5sZW5ndGhcbiAgICAgICAgfV0pO1xuICAgICAgfSAvLyBNYWluIHdvcmtlciBtZXRob2QuIGNoZWNrcyBhbGwgcGVybXV0YXRpb25zIG9mIGEgZ2l2ZW4gZWRpdCBsZW5ndGggZm9yIGFjY2VwdGFuY2UuXG5cblxuICAgICAgZnVuY3Rpb24gZXhlY0VkaXRMZW5ndGgoKSB7XG4gICAgICAgIGZvciAodmFyIGRpYWdvbmFsUGF0aCA9IC0xICogZWRpdExlbmd0aDsgZGlhZ29uYWxQYXRoIDw9IGVkaXRMZW5ndGg7IGRpYWdvbmFsUGF0aCArPSAyKSB7XG4gICAgICAgICAgdmFyIGJhc2VQYXRoID0gdm9pZCAwO1xuXG4gICAgICAgICAgdmFyIGFkZFBhdGggPSBiZXN0UGF0aFtkaWFnb25hbFBhdGggLSAxXSxcbiAgICAgICAgICAgICAgcmVtb3ZlUGF0aCA9IGJlc3RQYXRoW2RpYWdvbmFsUGF0aCArIDFdLFxuICAgICAgICAgICAgICBfb2xkUG9zID0gKHJlbW92ZVBhdGggPyByZW1vdmVQYXRoLm5ld1BvcyA6IDApIC0gZGlhZ29uYWxQYXRoO1xuXG4gICAgICAgICAgaWYgKGFkZFBhdGgpIHtcbiAgICAgICAgICAgIC8vIE5vIG9uZSBlbHNlIGlzIGdvaW5nIHRvIGF0dGVtcHQgdG8gdXNlIHRoaXMgdmFsdWUsIGNsZWFyIGl0XG4gICAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGggLSAxXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgY2FuQWRkID0gYWRkUGF0aCAmJiBhZGRQYXRoLm5ld1BvcyArIDEgPCBuZXdMZW4sXG4gICAgICAgICAgICAgIGNhblJlbW92ZSA9IHJlbW92ZVBhdGggJiYgMCA8PSBfb2xkUG9zICYmIF9vbGRQb3MgPCBvbGRMZW47XG5cbiAgICAgICAgICBpZiAoIWNhbkFkZCAmJiAhY2FuUmVtb3ZlKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGlzIHBhdGggaXMgYSB0ZXJtaW5hbCB0aGVuIHBydW5lXG4gICAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGhdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSAvLyBTZWxlY3QgdGhlIGRpYWdvbmFsIHRoYXQgd2Ugd2FudCB0byBicmFuY2ggZnJvbS4gV2Ugc2VsZWN0IHRoZSBwcmlvclxuICAgICAgICAgIC8vIHBhdGggd2hvc2UgcG9zaXRpb24gaW4gdGhlIG5ldyBzdHJpbmcgaXMgdGhlIGZhcnRoZXN0IGZyb20gdGhlIG9yaWdpblxuICAgICAgICAgIC8vIGFuZCBkb2VzIG5vdCBwYXNzIHRoZSBib3VuZHMgb2YgdGhlIGRpZmYgZ3JhcGhcblxuXG4gICAgICAgICAgaWYgKCFjYW5BZGQgfHwgY2FuUmVtb3ZlICYmIGFkZFBhdGgubmV3UG9zIDwgcmVtb3ZlUGF0aC5uZXdQb3MpIHtcbiAgICAgICAgICAgIGJhc2VQYXRoID0gY2xvbmVQYXRoKHJlbW92ZVBhdGgpO1xuICAgICAgICAgICAgc2VsZi5wdXNoQ29tcG9uZW50KGJhc2VQYXRoLmNvbXBvbmVudHMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJhc2VQYXRoID0gYWRkUGF0aDsgLy8gTm8gbmVlZCB0byBjbG9uZSwgd2UndmUgcHVsbGVkIGl0IGZyb20gdGhlIGxpc3RcblxuICAgICAgICAgICAgYmFzZVBhdGgubmV3UG9zKys7XG4gICAgICAgICAgICBzZWxmLnB1c2hDb21wb25lbnQoYmFzZVBhdGguY29tcG9uZW50cywgdHJ1ZSwgdW5kZWZpbmVkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfb2xkUG9zID0gc2VsZi5leHRyYWN0Q29tbW9uKGJhc2VQYXRoLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgZGlhZ29uYWxQYXRoKTsgLy8gSWYgd2UgaGF2ZSBoaXQgdGhlIGVuZCBvZiBib3RoIHN0cmluZ3MsIHRoZW4gd2UgYXJlIGRvbmVcblxuICAgICAgICAgIGlmIChiYXNlUGF0aC5uZXdQb3MgKyAxID49IG5ld0xlbiAmJiBfb2xkUG9zICsgMSA+PSBvbGRMZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBkb25lKGJ1aWxkVmFsdWVzKHNlbGYsIGJhc2VQYXRoLmNvbXBvbmVudHMsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBzZWxmLnVzZUxvbmdlc3RUb2tlbikpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgdHJhY2sgdGhpcyBwYXRoIGFzIGEgcG90ZW50aWFsIGNhbmRpZGF0ZSBhbmQgY29udGludWUuXG4gICAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGhdID0gYmFzZVBhdGg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZWRpdExlbmd0aCsrO1xuICAgICAgfSAvLyBQZXJmb3JtcyB0aGUgbGVuZ3RoIG9mIGVkaXQgaXRlcmF0aW9uLiBJcyBhIGJpdCBmdWdseSBhcyB0aGlzIGhhcyB0byBzdXBwb3J0IHRoZVxuICAgICAgLy8gc3luYyBhbmQgYXN5bmMgbW9kZSB3aGljaCBpcyBuZXZlciBmdW4uIExvb3BzIG92ZXIgZXhlY0VkaXRMZW5ndGggdW50aWwgYSB2YWx1ZVxuICAgICAgLy8gaXMgcHJvZHVjZWQuXG5cblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIChmdW5jdGlvbiBleGVjKCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gVGhpcyBzaG91bGQgbm90IGhhcHBlbiwgYnV0IHdlIHdhbnQgdG8gYmUgc2FmZS5cblxuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICAgIGlmIChlZGl0TGVuZ3RoID4gbWF4RWRpdExlbmd0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFleGVjRWRpdExlbmd0aCgpKSB7XG4gICAgICAgICAgICAgIGV4ZWMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfSkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlIChlZGl0TGVuZ3RoIDw9IG1heEVkaXRMZW5ndGgpIHtcbiAgICAgICAgICB2YXIgcmV0ID0gZXhlY0VkaXRMZW5ndGgoKTtcblxuICAgICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBwdXNoQ29tcG9uZW50OiBmdW5jdGlvbiBwdXNoQ29tcG9uZW50KGNvbXBvbmVudHMsIGFkZGVkLCByZW1vdmVkKSB7XG4gICAgICB2YXIgbGFzdCA9IGNvbXBvbmVudHNbY29tcG9uZW50cy5sZW5ndGggLSAxXTtcblxuICAgICAgaWYgKGxhc3QgJiYgbGFzdC5hZGRlZCA9PT0gYWRkZWQgJiYgbGFzdC5yZW1vdmVkID09PSByZW1vdmVkKSB7XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gY2xvbmUgaGVyZSBhcyB0aGUgY29tcG9uZW50IGNsb25lIG9wZXJhdGlvbiBpcyBqdXN0XG4gICAgICAgIC8vIGFzIHNoYWxsb3cgYXJyYXkgY2xvbmVcbiAgICAgICAgY29tcG9uZW50c1tjb21wb25lbnRzLmxlbmd0aCAtIDFdID0ge1xuICAgICAgICAgIGNvdW50OiBsYXN0LmNvdW50ICsgMSxcbiAgICAgICAgICBhZGRlZDogYWRkZWQsXG4gICAgICAgICAgcmVtb3ZlZDogcmVtb3ZlZFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50cy5wdXNoKHtcbiAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICBhZGRlZDogYWRkZWQsXG4gICAgICAgICAgcmVtb3ZlZDogcmVtb3ZlZFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGV4dHJhY3RDb21tb246IGZ1bmN0aW9uIGV4dHJhY3RDb21tb24oYmFzZVBhdGgsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBkaWFnb25hbFBhdGgpIHtcbiAgICAgIHZhciBuZXdMZW4gPSBuZXdTdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIG9sZExlbiA9IG9sZFN0cmluZy5sZW5ndGgsXG4gICAgICAgICAgbmV3UG9zID0gYmFzZVBhdGgubmV3UG9zLFxuICAgICAgICAgIG9sZFBvcyA9IG5ld1BvcyAtIGRpYWdvbmFsUGF0aCxcbiAgICAgICAgICBjb21tb25Db3VudCA9IDA7XG5cbiAgICAgIHdoaWxlIChuZXdQb3MgKyAxIDwgbmV3TGVuICYmIG9sZFBvcyArIDEgPCBvbGRMZW4gJiYgdGhpcy5lcXVhbHMobmV3U3RyaW5nW25ld1BvcyArIDFdLCBvbGRTdHJpbmdbb2xkUG9zICsgMV0pKSB7XG4gICAgICAgIG5ld1BvcysrO1xuICAgICAgICBvbGRQb3MrKztcbiAgICAgICAgY29tbW9uQ291bnQrKztcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbW1vbkNvdW50KSB7XG4gICAgICAgIGJhc2VQYXRoLmNvbXBvbmVudHMucHVzaCh7XG4gICAgICAgICAgY291bnQ6IGNvbW1vbkNvdW50XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBiYXNlUGF0aC5uZXdQb3MgPSBuZXdQb3M7XG4gICAgICByZXR1cm4gb2xkUG9zO1xuICAgIH0sXG4gICAgZXF1YWxzOiBmdW5jdGlvbiBlcXVhbHMobGVmdCwgcmlnaHQpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuY29tcGFyYXRvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNvbXBhcmF0b3IobGVmdCwgcmlnaHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxlZnQgPT09IHJpZ2h0IHx8IHRoaXMub3B0aW9ucy5pZ25vcmVDYXNlICYmIGxlZnQudG9Mb3dlckNhc2UoKSA9PT0gcmlnaHQudG9Mb3dlckNhc2UoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZUVtcHR5OiBmdW5jdGlvbiByZW1vdmVFbXB0eShhcnJheSkge1xuICAgICAgdmFyIHJldCA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhcnJheVtpXSkge1xuICAgICAgICAgIHJldC5wdXNoKGFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0sXG4gICAgY2FzdElucHV0OiBmdW5jdGlvbiBjYXN0SW5wdXQodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIHRva2VuaXplOiBmdW5jdGlvbiB0b2tlbml6ZSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnNwbGl0KCcnKTtcbiAgICB9LFxuICAgIGpvaW46IGZ1bmN0aW9uIGpvaW4oY2hhcnMpIHtcbiAgICAgIHJldHVybiBjaGFycy5qb2luKCcnKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gYnVpbGRWYWx1ZXMoZGlmZiwgY29tcG9uZW50cywgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIHVzZUxvbmdlc3RUb2tlbikge1xuICAgIHZhciBjb21wb25lbnRQb3MgPSAwLFxuICAgICAgICBjb21wb25lbnRMZW4gPSBjb21wb25lbnRzLmxlbmd0aCxcbiAgICAgICAgbmV3UG9zID0gMCxcbiAgICAgICAgb2xkUG9zID0gMDtcblxuICAgIGZvciAoOyBjb21wb25lbnRQb3MgPCBjb21wb25lbnRMZW47IGNvbXBvbmVudFBvcysrKSB7XG4gICAgICB2YXIgY29tcG9uZW50ID0gY29tcG9uZW50c1tjb21wb25lbnRQb3NdO1xuXG4gICAgICBpZiAoIWNvbXBvbmVudC5yZW1vdmVkKSB7XG4gICAgICAgIGlmICghY29tcG9uZW50LmFkZGVkICYmIHVzZUxvbmdlc3RUb2tlbikge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG5ld1N0cmluZy5zbGljZShuZXdQb3MsIG5ld1BvcyArIGNvbXBvbmVudC5jb3VudCk7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKHZhbHVlLCBpKSB7XG4gICAgICAgICAgICB2YXIgb2xkVmFsdWUgPSBvbGRTdHJpbmdbb2xkUG9zICsgaV07XG4gICAgICAgICAgICByZXR1cm4gb2xkVmFsdWUubGVuZ3RoID4gdmFsdWUubGVuZ3RoID8gb2xkVmFsdWUgOiB2YWx1ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb21wb25lbnQudmFsdWUgPSBkaWZmLmpvaW4odmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbXBvbmVudC52YWx1ZSA9IGRpZmYuam9pbihuZXdTdHJpbmcuc2xpY2UobmV3UG9zLCBuZXdQb3MgKyBjb21wb25lbnQuY291bnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld1BvcyArPSBjb21wb25lbnQuY291bnQ7IC8vIENvbW1vbiBjYXNlXG5cbiAgICAgICAgaWYgKCFjb21wb25lbnQuYWRkZWQpIHtcbiAgICAgICAgICBvbGRQb3MgKz0gY29tcG9uZW50LmNvdW50O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wb25lbnQudmFsdWUgPSBkaWZmLmpvaW4ob2xkU3RyaW5nLnNsaWNlKG9sZFBvcywgb2xkUG9zICsgY29tcG9uZW50LmNvdW50KSk7XG4gICAgICAgIG9sZFBvcyArPSBjb21wb25lbnQuY291bnQ7IC8vIFJldmVyc2UgYWRkIGFuZCByZW1vdmUgc28gcmVtb3ZlcyBhcmUgb3V0cHV0IGZpcnN0IHRvIG1hdGNoIGNvbW1vbiBjb252ZW50aW9uXG4gICAgICAgIC8vIFRoZSBkaWZmaW5nIGFsZ29yaXRobSBpcyB0aWVkIHRvIGFkZCB0aGVuIHJlbW92ZSBvdXRwdXQgYW5kIHRoaXMgaXMgdGhlIHNpbXBsZXN0XG4gICAgICAgIC8vIHJvdXRlIHRvIGdldCB0aGUgZGVzaXJlZCBvdXRwdXQgd2l0aCBtaW5pbWFsIG92ZXJoZWFkLlxuXG4gICAgICAgIGlmIChjb21wb25lbnRQb3MgJiYgY29tcG9uZW50c1tjb21wb25lbnRQb3MgLSAxXS5hZGRlZCkge1xuICAgICAgICAgIHZhciB0bXAgPSBjb21wb25lbnRzW2NvbXBvbmVudFBvcyAtIDFdO1xuICAgICAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV0gPSBjb21wb25lbnRzW2NvbXBvbmVudFBvc107XG4gICAgICAgICAgY29tcG9uZW50c1tjb21wb25lbnRQb3NdID0gdG1wO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBTcGVjaWFsIGNhc2UgaGFuZGxlIGZvciB3aGVuIG9uZSB0ZXJtaW5hbCBpcyBpZ25vcmVkIChpLmUuIHdoaXRlc3BhY2UpLlxuICAgIC8vIEZvciB0aGlzIGNhc2Ugd2UgbWVyZ2UgdGhlIHRlcm1pbmFsIGludG8gdGhlIHByaW9yIHN0cmluZyBhbmQgZHJvcCB0aGUgY2hhbmdlLlxuICAgIC8vIFRoaXMgaXMgb25seSBhdmFpbGFibGUgZm9yIHN0cmluZyBtb2RlLlxuXG5cbiAgICB2YXIgbGFzdENvbXBvbmVudCA9IGNvbXBvbmVudHNbY29tcG9uZW50TGVuIC0gMV07XG5cbiAgICBpZiAoY29tcG9uZW50TGVuID4gMSAmJiB0eXBlb2YgbGFzdENvbXBvbmVudC52YWx1ZSA9PT0gJ3N0cmluZycgJiYgKGxhc3RDb21wb25lbnQuYWRkZWQgfHwgbGFzdENvbXBvbmVudC5yZW1vdmVkKSAmJiBkaWZmLmVxdWFscygnJywgbGFzdENvbXBvbmVudC52YWx1ZSkpIHtcbiAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50TGVuIC0gMl0udmFsdWUgKz0gbGFzdENvbXBvbmVudC52YWx1ZTtcbiAgICAgIGNvbXBvbmVudHMucG9wKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9uZVBhdGgocGF0aCkge1xuICAgIHJldHVybiB7XG4gICAgICBuZXdQb3M6IHBhdGgubmV3UG9zLFxuICAgICAgY29tcG9uZW50czogcGF0aC5jb21wb25lbnRzLnNsaWNlKDApXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjaGFyYWN0ZXJEaWZmID0gbmV3IERpZmYoKTtcbiAgZnVuY3Rpb24gZGlmZkNoYXJzKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNoYXJhY3RlckRpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZU9wdGlvbnMob3B0aW9ucywgZGVmYXVsdHMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGRlZmF1bHRzLmNhbGxiYWNrID0gb3B0aW9ucztcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gb3B0aW9ucykge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgIGRlZmF1bHRzW25hbWVdID0gb3B0aW9uc1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIC8vXG4gIC8vIFJhbmdlcyBhbmQgZXhjZXB0aW9uczpcbiAgLy8gTGF0aW4tMSBTdXBwbGVtZW50LCAwMDgw4oCTMDBGRlxuICAvLyAgLSBVKzAwRDcgIMOXIE11bHRpcGxpY2F0aW9uIHNpZ25cbiAgLy8gIC0gVSswMEY3ICDDtyBEaXZpc2lvbiBzaWduXG4gIC8vIExhdGluIEV4dGVuZGVkLUEsIDAxMDDigJMwMTdGXG4gIC8vIExhdGluIEV4dGVuZGVkLUIsIDAxODDigJMwMjRGXG4gIC8vIElQQSBFeHRlbnNpb25zLCAwMjUw4oCTMDJBRlxuICAvLyBTcGFjaW5nIE1vZGlmaWVyIExldHRlcnMsIDAyQjDigJMwMkZGXG4gIC8vICAtIFUrMDJDNyAgy4cgJiM3MTE7ICBDYXJvblxuICAvLyAgLSBVKzAyRDggIMuYICYjNzI4OyAgQnJldmVcbiAgLy8gIC0gVSswMkQ5ICDLmSAmIzcyOTsgIERvdCBBYm92ZVxuICAvLyAgLSBVKzAyREEgIMuaICYjNzMwOyAgUmluZyBBYm92ZVxuICAvLyAgLSBVKzAyREIgIMubICYjNzMxOyAgT2dvbmVrXG4gIC8vICAtIFUrMDJEQyAgy5wgJiM3MzI7ICBTbWFsbCBUaWxkZVxuICAvLyAgLSBVKzAyREQgIMudICYjNzMzOyAgRG91YmxlIEFjdXRlIEFjY2VudFxuICAvLyBMYXRpbiBFeHRlbmRlZCBBZGRpdGlvbmFsLCAxRTAw4oCTMUVGRlxuXG4gIHZhciBleHRlbmRlZFdvcmRDaGFycyA9IC9eW0EtWmEtelxceEMwLVxcdTAyQzZcXHUwMkM4LVxcdTAyRDdcXHUwMkRFLVxcdTAyRkZcXHUxRTAwLVxcdTFFRkZdKyQvO1xuICB2YXIgcmVXaGl0ZXNwYWNlID0gL1xcUy87XG4gIHZhciB3b3JkRGlmZiA9IG5ldyBEaWZmKCk7XG5cbiAgd29yZERpZmYuZXF1YWxzID0gZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5pZ25vcmVDYXNlKSB7XG4gICAgICBsZWZ0ID0gbGVmdC50b0xvd2VyQ2FzZSgpO1xuICAgICAgcmlnaHQgPSByaWdodC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBsZWZ0ID09PSByaWdodCB8fCB0aGlzLm9wdGlvbnMuaWdub3JlV2hpdGVzcGFjZSAmJiAhcmVXaGl0ZXNwYWNlLnRlc3QobGVmdCkgJiYgIXJlV2hpdGVzcGFjZS50ZXN0KHJpZ2h0KTtcbiAgfTtcblxuICB3b3JkRGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciB0b2tlbnMgPSB2YWx1ZS5zcGxpdCgvKFxccyt8WygpW1xcXXt9J1wiXXxcXGIpLyk7IC8vIEpvaW4gdGhlIGJvdW5kYXJ5IHNwbGl0cyB0aGF0IHdlIGRvIG5vdCBjb25zaWRlciB0byBiZSBib3VuZGFyaWVzLiBUaGlzIGlzIHByaW1hcmlseSB0aGUgZXh0ZW5kZWQgTGF0aW4gY2hhcmFjdGVyIHNldC5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgLy8gSWYgd2UgaGF2ZSBhbiBlbXB0eSBzdHJpbmcgaW4gdGhlIG5leHQgZmllbGQgYW5kIHdlIGhhdmUgb25seSB3b3JkIGNoYXJzIGJlZm9yZSBhbmQgYWZ0ZXIsIG1lcmdlXG4gICAgICBpZiAoIXRva2Vuc1tpICsgMV0gJiYgdG9rZW5zW2kgKyAyXSAmJiBleHRlbmRlZFdvcmRDaGFycy50ZXN0KHRva2Vuc1tpXSkgJiYgZXh0ZW5kZWRXb3JkQ2hhcnMudGVzdCh0b2tlbnNbaSArIDJdKSkge1xuICAgICAgICB0b2tlbnNbaV0gKz0gdG9rZW5zW2kgKyAyXTtcbiAgICAgICAgdG9rZW5zLnNwbGljZShpICsgMSwgMik7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRpZmZXb3JkcyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBnZW5lcmF0ZU9wdGlvbnMob3B0aW9ucywge1xuICAgICAgaWdub3JlV2hpdGVzcGFjZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiB3b3JkRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbiAgfVxuICBmdW5jdGlvbiBkaWZmV29yZHNXaXRoU3BhY2Uob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gd29yZERpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG4gIH1cblxuICB2YXIgbGluZURpZmYgPSBuZXcgRGlmZigpO1xuXG4gIGxpbmVEaWZmLnRva2VuaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIHJldExpbmVzID0gW10sXG4gICAgICAgIGxpbmVzQW5kTmV3bGluZXMgPSB2YWx1ZS5zcGxpdCgvKFxcbnxcXHJcXG4pLyk7IC8vIElnbm9yZSB0aGUgZmluYWwgZW1wdHkgdG9rZW4gdGhhdCBvY2N1cnMgaWYgdGhlIHN0cmluZyBlbmRzIHdpdGggYSBuZXcgbGluZVxuXG4gICAgaWYgKCFsaW5lc0FuZE5ld2xpbmVzW2xpbmVzQW5kTmV3bGluZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgIGxpbmVzQW5kTmV3bGluZXMucG9wKCk7XG4gICAgfSAvLyBNZXJnZSB0aGUgY29udGVudCBhbmQgbGluZSBzZXBhcmF0b3JzIGludG8gc2luZ2xlIHRva2Vuc1xuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzQW5kTmV3bGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBsaW5lID0gbGluZXNBbmROZXdsaW5lc1tpXTtcblxuICAgICAgaWYgKGkgJSAyICYmICF0aGlzLm9wdGlvbnMubmV3bGluZUlzVG9rZW4pIHtcbiAgICAgICAgcmV0TGluZXNbcmV0TGluZXMubGVuZ3RoIC0gMV0gKz0gbGluZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaWdub3JlV2hpdGVzcGFjZSkge1xuICAgICAgICAgIGxpbmUgPSBsaW5lLnRyaW0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldExpbmVzLnB1c2gobGluZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldExpbmVzO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRpZmZMaW5lcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gbGluZURpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spO1xuICB9XG4gIGZ1bmN0aW9uIGRpZmZUcmltbWVkTGluZXMob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBnZW5lcmF0ZU9wdGlvbnMoY2FsbGJhY2ssIHtcbiAgICAgIGlnbm9yZVdoaXRlc3BhY2U6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gbGluZURpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG4gIH1cblxuICB2YXIgc2VudGVuY2VEaWZmID0gbmV3IERpZmYoKTtcblxuICBzZW50ZW5jZURpZmYudG9rZW5pemUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3BsaXQoLyhcXFMuKz9bLiE/XSkoPz1cXHMrfCQpLyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZGlmZlNlbnRlbmNlcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gc2VudGVuY2VEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHZhciBjc3NEaWZmID0gbmV3IERpZmYoKTtcblxuICBjc3NEaWZmLnRva2VuaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnNwbGl0KC8oW3t9OjssXXxcXHMrKS8pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRpZmZDc3Mob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGNzc0RpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBfdHlwZW9mKG9iaik7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gICAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgICAgcmV0dXJuIGFycjI7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gICAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gIH1cblxuICB2YXIgb2JqZWN0UHJvdG90eXBlVG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIganNvbkRpZmYgPSBuZXcgRGlmZigpOyAvLyBEaXNjcmltaW5hdGUgYmV0d2VlbiB0d28gbGluZXMgb2YgcHJldHR5LXByaW50ZWQsIHNlcmlhbGl6ZWQgSlNPTiB3aGVyZSBvbmUgb2YgdGhlbSBoYXMgYVxuICAvLyBkYW5nbGluZyBjb21tYSBhbmQgdGhlIG90aGVyIGRvZXNuJ3QuIFR1cm5zIG91dCBpbmNsdWRpbmcgdGhlIGRhbmdsaW5nIGNvbW1hIHlpZWxkcyB0aGUgbmljZXN0IG91dHB1dDpcblxuICBqc29uRGlmZi51c2VMb25nZXN0VG9rZW4gPSB0cnVlO1xuICBqc29uRGlmZi50b2tlbml6ZSA9IGxpbmVEaWZmLnRva2VuaXplO1xuXG4gIGpzb25EaWZmLmNhc3RJbnB1dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBfdGhpcyRvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICB1bmRlZmluZWRSZXBsYWNlbWVudCA9IF90aGlzJG9wdGlvbnMudW5kZWZpbmVkUmVwbGFjZW1lbnQsXG4gICAgICAgIF90aGlzJG9wdGlvbnMkc3RyaW5naSA9IF90aGlzJG9wdGlvbnMuc3RyaW5naWZ5UmVwbGFjZXIsXG4gICAgICAgIHN0cmluZ2lmeVJlcGxhY2VyID0gX3RoaXMkb3B0aW9ucyRzdHJpbmdpID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoaywgdikge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZFJlcGxhY2VtZW50IDogdjtcbiAgICB9IDogX3RoaXMkb3B0aW9ucyRzdHJpbmdpO1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBKU09OLnN0cmluZ2lmeShjYW5vbmljYWxpemUodmFsdWUsIG51bGwsIG51bGwsIHN0cmluZ2lmeVJlcGxhY2VyKSwgc3RyaW5naWZ5UmVwbGFjZXIsICcgICcpO1xuICB9O1xuXG4gIGpzb25EaWZmLmVxdWFscyA9IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkge1xuICAgIHJldHVybiBEaWZmLnByb3RvdHlwZS5lcXVhbHMuY2FsbChqc29uRGlmZiwgbGVmdC5yZXBsYWNlKC8sKFtcXHJcXG5dKS9nLCAnJDEnKSwgcmlnaHQucmVwbGFjZSgvLChbXFxyXFxuXSkvZywgJyQxJykpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRpZmZKc29uKG9sZE9iaiwgbmV3T2JqLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGpzb25EaWZmLmRpZmYob2xkT2JqLCBuZXdPYmosIG9wdGlvbnMpO1xuICB9IC8vIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyB0aGUgcHJlc2VuY2Ugb2YgY2lyY3VsYXIgcmVmZXJlbmNlcyBieSBiYWlsaW5nIG91dCB3aGVuIGVuY291bnRlcmluZyBhblxuICAvLyBvYmplY3QgdGhhdCBpcyBhbHJlYWR5IG9uIHRoZSBcInN0YWNrXCIgb2YgaXRlbXMgYmVpbmcgcHJvY2Vzc2VkLiBBY2NlcHRzIGFuIG9wdGlvbmFsIHJlcGxhY2VyXG5cbiAgZnVuY3Rpb24gY2Fub25pY2FsaXplKG9iaiwgc3RhY2ssIHJlcGxhY2VtZW50U3RhY2ssIHJlcGxhY2VyLCBrZXkpIHtcbiAgICBzdGFjayA9IHN0YWNrIHx8IFtdO1xuICAgIHJlcGxhY2VtZW50U3RhY2sgPSByZXBsYWNlbWVudFN0YWNrIHx8IFtdO1xuXG4gICAgaWYgKHJlcGxhY2VyKSB7XG4gICAgICBvYmogPSByZXBsYWNlcihrZXksIG9iaik7XG4gICAgfVxuXG4gICAgdmFyIGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChzdGFja1tpXSA9PT0gb2JqKSB7XG4gICAgICAgIHJldHVybiByZXBsYWNlbWVudFN0YWNrW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjYW5vbmljYWxpemVkT2JqO1xuXG4gICAgaWYgKCdbb2JqZWN0IEFycmF5XScgPT09IG9iamVjdFByb3RvdHlwZVRvU3RyaW5nLmNhbGwob2JqKSkge1xuICAgICAgc3RhY2sucHVzaChvYmopO1xuICAgICAgY2Fub25pY2FsaXplZE9iaiA9IG5ldyBBcnJheShvYmoubGVuZ3RoKTtcbiAgICAgIHJlcGxhY2VtZW50U3RhY2sucHVzaChjYW5vbmljYWxpemVkT2JqKTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjYW5vbmljYWxpemVkT2JqW2ldID0gY2Fub25pY2FsaXplKG9ialtpXSwgc3RhY2ssIHJlcGxhY2VtZW50U3RhY2ssIHJlcGxhY2VyLCBrZXkpO1xuICAgICAgfVxuXG4gICAgICBzdGFjay5wb3AoKTtcbiAgICAgIHJlcGxhY2VtZW50U3RhY2sucG9wKCk7XG4gICAgICByZXR1cm4gY2Fub25pY2FsaXplZE9iajtcbiAgICB9XG5cbiAgICBpZiAob2JqICYmIG9iai50b0pTT04pIHtcbiAgICAgIG9iaiA9IG9iai50b0pTT04oKTtcbiAgICB9XG5cbiAgICBpZiAoX3R5cGVvZihvYmopID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGwpIHtcbiAgICAgIHN0YWNrLnB1c2gob2JqKTtcbiAgICAgIGNhbm9uaWNhbGl6ZWRPYmogPSB7fTtcbiAgICAgIHJlcGxhY2VtZW50U3RhY2sucHVzaChjYW5vbmljYWxpemVkT2JqKTtcblxuICAgICAgdmFyIHNvcnRlZEtleXMgPSBbXSxcbiAgICAgICAgICBfa2V5O1xuXG4gICAgICBmb3IgKF9rZXkgaW4gb2JqKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoX2tleSkpIHtcbiAgICAgICAgICBzb3J0ZWRLZXlzLnB1c2goX2tleSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc29ydGVkS2V5cy5zb3J0KCk7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBzb3J0ZWRLZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIF9rZXkgPSBzb3J0ZWRLZXlzW2ldO1xuICAgICAgICBjYW5vbmljYWxpemVkT2JqW19rZXldID0gY2Fub25pY2FsaXplKG9ialtfa2V5XSwgc3RhY2ssIHJlcGxhY2VtZW50U3RhY2ssIHJlcGxhY2VyLCBfa2V5KTtcbiAgICAgIH1cblxuICAgICAgc3RhY2sucG9wKCk7XG4gICAgICByZXBsYWNlbWVudFN0YWNrLnBvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW5vbmljYWxpemVkT2JqID0gb2JqO1xuICAgIH1cblxuICAgIHJldHVybiBjYW5vbmljYWxpemVkT2JqO1xuICB9XG5cbiAgdmFyIGFycmF5RGlmZiA9IG5ldyBEaWZmKCk7XG5cbiAgYXJyYXlEaWZmLnRva2VuaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnNsaWNlKCk7XG4gIH07XG5cbiAgYXJyYXlEaWZmLmpvaW4gPSBhcnJheURpZmYucmVtb3ZlRW1wdHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgZnVuY3Rpb24gZGlmZkFycmF5cyhvbGRBcnIsIG5ld0FyciwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gYXJyYXlEaWZmLmRpZmYob2xkQXJyLCBuZXdBcnIsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlUGF0Y2godW5pRGlmZikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgZGlmZnN0ciA9IHVuaURpZmYuc3BsaXQoL1xcclxcbnxbXFxuXFx2XFxmXFxyXFx4ODVdLyksXG4gICAgICAgIGRlbGltaXRlcnMgPSB1bmlEaWZmLm1hdGNoKC9cXHJcXG58W1xcblxcdlxcZlxcclxceDg1XS9nKSB8fCBbXSxcbiAgICAgICAgbGlzdCA9IFtdLFxuICAgICAgICBpID0gMDtcblxuICAgIGZ1bmN0aW9uIHBhcnNlSW5kZXgoKSB7XG4gICAgICB2YXIgaW5kZXggPSB7fTtcbiAgICAgIGxpc3QucHVzaChpbmRleCk7IC8vIFBhcnNlIGRpZmYgbWV0YWRhdGFcblxuICAgICAgd2hpbGUgKGkgPCBkaWZmc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgbGluZSA9IGRpZmZzdHJbaV07IC8vIEZpbGUgaGVhZGVyIGZvdW5kLCBlbmQgcGFyc2luZyBkaWZmIG1ldGFkYXRhXG5cbiAgICAgICAgaWYgKC9eKFxcLVxcLVxcLXxcXCtcXCtcXCt8QEApXFxzLy50ZXN0KGxpbmUpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gLy8gRGlmZiBpbmRleFxuXG5cbiAgICAgICAgdmFyIGhlYWRlciA9IC9eKD86SW5kZXg6fGRpZmYoPzogLXIgXFx3KykrKVxccysoLis/KVxccyokLy5leGVjKGxpbmUpO1xuXG4gICAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgICBpbmRleC5pbmRleCA9IGhlYWRlclsxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkrKztcbiAgICAgIH0gLy8gUGFyc2UgZmlsZSBoZWFkZXJzIGlmIHRoZXkgYXJlIGRlZmluZWQuIFVuaWZpZWQgZGlmZiByZXF1aXJlcyB0aGVtLCBidXRcbiAgICAgIC8vIHRoZXJlJ3Mgbm8gdGVjaG5pY2FsIGlzc3VlcyB0byBoYXZlIGFuIGlzb2xhdGVkIGh1bmsgd2l0aG91dCBmaWxlIGhlYWRlclxuXG5cbiAgICAgIHBhcnNlRmlsZUhlYWRlcihpbmRleCk7XG4gICAgICBwYXJzZUZpbGVIZWFkZXIoaW5kZXgpOyAvLyBQYXJzZSBodW5rc1xuXG4gICAgICBpbmRleC5odW5rcyA9IFtdO1xuXG4gICAgICB3aGlsZSAoaSA8IGRpZmZzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBfbGluZSA9IGRpZmZzdHJbaV07XG5cbiAgICAgICAgaWYgKC9eKEluZGV4OnxkaWZmfFxcLVxcLVxcLXxcXCtcXCtcXCspXFxzLy50ZXN0KF9saW5lKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKC9eQEAvLnRlc3QoX2xpbmUpKSB7XG4gICAgICAgICAgaW5kZXguaHVua3MucHVzaChwYXJzZUh1bmsoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoX2xpbmUgJiYgb3B0aW9ucy5zdHJpY3QpIHtcbiAgICAgICAgICAvLyBJZ25vcmUgdW5leHBlY3RlZCBjb250ZW50IHVubGVzcyBpbiBzdHJpY3QgbW9kZVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBsaW5lICcgKyAoaSArIDEpICsgJyAnICsgSlNPTi5zdHJpbmdpZnkoX2xpbmUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IC8vIFBhcnNlcyB0aGUgLS0tIGFuZCArKysgaGVhZGVycywgaWYgbm9uZSBhcmUgZm91bmQsIG5vIGxpbmVzXG4gICAgLy8gYXJlIGNvbnN1bWVkLlxuXG5cbiAgICBmdW5jdGlvbiBwYXJzZUZpbGVIZWFkZXIoaW5kZXgpIHtcbiAgICAgIHZhciBmaWxlSGVhZGVyID0gL14oLS0tfFxcK1xcK1xcKylcXHMrKC4qKSQvLmV4ZWMoZGlmZnN0cltpXSk7XG5cbiAgICAgIGlmIChmaWxlSGVhZGVyKSB7XG4gICAgICAgIHZhciBrZXlQcmVmaXggPSBmaWxlSGVhZGVyWzFdID09PSAnLS0tJyA/ICdvbGQnIDogJ25ldyc7XG4gICAgICAgIHZhciBkYXRhID0gZmlsZUhlYWRlclsyXS5zcGxpdCgnXFx0JywgMik7XG4gICAgICAgIHZhciBmaWxlTmFtZSA9IGRhdGFbMF0ucmVwbGFjZSgvXFxcXFxcXFwvZywgJ1xcXFwnKTtcblxuICAgICAgICBpZiAoL15cIi4qXCIkLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgICAgIGZpbGVOYW1lID0gZmlsZU5hbWUuc3Vic3RyKDEsIGZpbGVOYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXhba2V5UHJlZml4ICsgJ0ZpbGVOYW1lJ10gPSBmaWxlTmFtZTtcbiAgICAgICAgaW5kZXhba2V5UHJlZml4ICsgJ0hlYWRlciddID0gKGRhdGFbMV0gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH0gLy8gUGFyc2VzIGEgaHVua1xuICAgIC8vIFRoaXMgYXNzdW1lcyB0aGF0IHdlIGFyZSBhdCB0aGUgc3RhcnQgb2YgYSBodW5rLlxuXG5cbiAgICBmdW5jdGlvbiBwYXJzZUh1bmsoKSB7XG4gICAgICB2YXIgY2h1bmtIZWFkZXJJbmRleCA9IGksXG4gICAgICAgICAgY2h1bmtIZWFkZXJMaW5lID0gZGlmZnN0cltpKytdLFxuICAgICAgICAgIGNodW5rSGVhZGVyID0gY2h1bmtIZWFkZXJMaW5lLnNwbGl0KC9AQCAtKFxcZCspKD86LChcXGQrKSk/IFxcKyhcXGQrKSg/OiwoXFxkKykpPyBAQC8pO1xuICAgICAgdmFyIGh1bmsgPSB7XG4gICAgICAgIG9sZFN0YXJ0OiArY2h1bmtIZWFkZXJbMV0sXG4gICAgICAgIG9sZExpbmVzOiArY2h1bmtIZWFkZXJbMl0gfHwgMSxcbiAgICAgICAgbmV3U3RhcnQ6ICtjaHVua0hlYWRlclszXSxcbiAgICAgICAgbmV3TGluZXM6ICtjaHVua0hlYWRlcls0XSB8fCAxLFxuICAgICAgICBsaW5lczogW10sXG4gICAgICAgIGxpbmVkZWxpbWl0ZXJzOiBbXVxuICAgICAgfTtcbiAgICAgIHZhciBhZGRDb3VudCA9IDAsXG4gICAgICAgICAgcmVtb3ZlQ291bnQgPSAwO1xuXG4gICAgICBmb3IgKDsgaSA8IGRpZmZzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gTGluZXMgc3RhcnRpbmcgd2l0aCAnLS0tJyBjb3VsZCBiZSBtaXN0YWtlbiBmb3IgdGhlIFwicmVtb3ZlIGxpbmVcIiBvcGVyYXRpb25cbiAgICAgICAgLy8gQnV0IHRoZXkgY291bGQgYmUgdGhlIGhlYWRlciBmb3IgdGhlIG5leHQgZmlsZS4gVGhlcmVmb3JlIHBydW5lIHN1Y2ggY2FzZXMgb3V0LlxuICAgICAgICBpZiAoZGlmZnN0cltpXS5pbmRleE9mKCctLS0gJykgPT09IDAgJiYgaSArIDIgPCBkaWZmc3RyLmxlbmd0aCAmJiBkaWZmc3RyW2kgKyAxXS5pbmRleE9mKCcrKysgJykgPT09IDAgJiYgZGlmZnN0cltpICsgMl0uaW5kZXhPZignQEAnKSA9PT0gMCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wZXJhdGlvbiA9IGRpZmZzdHJbaV0ubGVuZ3RoID09IDAgJiYgaSAhPSBkaWZmc3RyLmxlbmd0aCAtIDEgPyAnICcgOiBkaWZmc3RyW2ldWzBdO1xuXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICcrJyB8fCBvcGVyYXRpb24gPT09ICctJyB8fCBvcGVyYXRpb24gPT09ICcgJyB8fCBvcGVyYXRpb24gPT09ICdcXFxcJykge1xuICAgICAgICAgIGh1bmsubGluZXMucHVzaChkaWZmc3RyW2ldKTtcbiAgICAgICAgICBodW5rLmxpbmVkZWxpbWl0ZXJzLnB1c2goZGVsaW1pdGVyc1tpXSB8fCAnXFxuJyk7XG5cbiAgICAgICAgICBpZiAob3BlcmF0aW9uID09PSAnKycpIHtcbiAgICAgICAgICAgIGFkZENvdW50Kys7XG4gICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICctJykge1xuICAgICAgICAgICAgcmVtb3ZlQ291bnQrKztcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJyAnKSB7XG4gICAgICAgICAgICBhZGRDb3VudCsrO1xuICAgICAgICAgICAgcmVtb3ZlQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gSGFuZGxlIHRoZSBlbXB0eSBibG9jayBjb3VudCBjYXNlXG5cblxuICAgICAgaWYgKCFhZGRDb3VudCAmJiBodW5rLm5ld0xpbmVzID09PSAxKSB7XG4gICAgICAgIGh1bmsubmV3TGluZXMgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXJlbW92ZUNvdW50ICYmIGh1bmsub2xkTGluZXMgPT09IDEpIHtcbiAgICAgICAgaHVuay5vbGRMaW5lcyA9IDA7XG4gICAgICB9IC8vIFBlcmZvcm0gb3B0aW9uYWwgc2FuaXR5IGNoZWNraW5nXG5cblxuICAgICAgaWYgKG9wdGlvbnMuc3RyaWN0KSB7XG4gICAgICAgIGlmIChhZGRDb3VudCAhPT0gaHVuay5uZXdMaW5lcykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQWRkZWQgbGluZSBjb3VudCBkaWQgbm90IG1hdGNoIGZvciBodW5rIGF0IGxpbmUgJyArIChjaHVua0hlYWRlckluZGV4ICsgMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlbW92ZUNvdW50ICE9PSBodW5rLm9sZExpbmVzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmVkIGxpbmUgY291bnQgZGlkIG5vdCBtYXRjaCBmb3IgaHVuayBhdCBsaW5lICcgKyAoY2h1bmtIZWFkZXJJbmRleCArIDEpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaHVuaztcbiAgICB9XG5cbiAgICB3aGlsZSAoaSA8IGRpZmZzdHIubGVuZ3RoKSB7XG4gICAgICBwYXJzZUluZGV4KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cblxuICAvLyBJdGVyYXRvciB0aGF0IHRyYXZlcnNlcyBpbiB0aGUgcmFuZ2Ugb2YgW21pbiwgbWF4XSwgc3RlcHBpbmdcbiAgLy8gYnkgZGlzdGFuY2UgZnJvbSBhIGdpdmVuIHN0YXJ0IHBvc2l0aW9uLiBJLmUuIGZvciBbMCwgNF0sIHdpdGhcbiAgLy8gc3RhcnQgb2YgMiwgdGhpcyB3aWxsIGl0ZXJhdGUgMiwgMywgMSwgNCwgMC5cbiAgZnVuY3Rpb24gZGlzdGFuY2VJdGVyYXRvciAoc3RhcnQsIG1pbkxpbmUsIG1heExpbmUpIHtcbiAgICB2YXIgd2FudEZvcndhcmQgPSB0cnVlLFxuICAgICAgICBiYWNrd2FyZEV4aGF1c3RlZCA9IGZhbHNlLFxuICAgICAgICBmb3J3YXJkRXhoYXVzdGVkID0gZmFsc2UsXG4gICAgICAgIGxvY2FsT2Zmc2V0ID0gMTtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXRlcmF0b3IoKSB7XG4gICAgICBpZiAod2FudEZvcndhcmQgJiYgIWZvcndhcmRFeGhhdXN0ZWQpIHtcbiAgICAgICAgaWYgKGJhY2t3YXJkRXhoYXVzdGVkKSB7XG4gICAgICAgICAgbG9jYWxPZmZzZXQrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3YW50Rm9yd2FyZCA9IGZhbHNlO1xuICAgICAgICB9IC8vIENoZWNrIGlmIHRyeWluZyB0byBmaXQgYmV5b25kIHRleHQgbGVuZ3RoLCBhbmQgaWYgbm90LCBjaGVjayBpdCBmaXRzXG4gICAgICAgIC8vIGFmdGVyIG9mZnNldCBsb2NhdGlvbiAob3IgZGVzaXJlZCBsb2NhdGlvbiBvbiBmaXJzdCBpdGVyYXRpb24pXG5cblxuICAgICAgICBpZiAoc3RhcnQgKyBsb2NhbE9mZnNldCA8PSBtYXhMaW5lKSB7XG4gICAgICAgICAgcmV0dXJuIGxvY2FsT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yd2FyZEV4aGF1c3RlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghYmFja3dhcmRFeGhhdXN0ZWQpIHtcbiAgICAgICAgaWYgKCFmb3J3YXJkRXhoYXVzdGVkKSB7XG4gICAgICAgICAgd2FudEZvcndhcmQgPSB0cnVlO1xuICAgICAgICB9IC8vIENoZWNrIGlmIHRyeWluZyB0byBmaXQgYmVmb3JlIHRleHQgYmVnaW5uaW5nLCBhbmQgaWYgbm90LCBjaGVjayBpdCBmaXRzXG4gICAgICAgIC8vIGJlZm9yZSBvZmZzZXQgbG9jYXRpb25cblxuXG4gICAgICAgIGlmIChtaW5MaW5lIDw9IHN0YXJ0IC0gbG9jYWxPZmZzZXQpIHtcbiAgICAgICAgICByZXR1cm4gLWxvY2FsT2Zmc2V0Kys7XG4gICAgICAgIH1cblxuICAgICAgICBiYWNrd2FyZEV4aGF1c3RlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBpdGVyYXRvcigpO1xuICAgICAgfSAvLyBXZSB0cmllZCB0byBmaXQgaHVuayBiZWZvcmUgdGV4dCBiZWdpbm5pbmcgYW5kIGJleW9uZCB0ZXh0IGxlbmd0aCwgdGhlblxuICAgICAgLy8gaHVuayBjYW4ndCBmaXQgb24gdGhlIHRleHQuIFJldHVybiB1bmRlZmluZWRcblxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseVBhdGNoKHNvdXJjZSwgdW5pRGlmZikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICAgIGlmICh0eXBlb2YgdW5pRGlmZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHVuaURpZmYgPSBwYXJzZVBhdGNoKHVuaURpZmYpO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHVuaURpZmYpKSB7XG4gICAgICBpZiAodW5pRGlmZi5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYXBwbHlQYXRjaCBvbmx5IHdvcmtzIHdpdGggYSBzaW5nbGUgaW5wdXQuJyk7XG4gICAgICB9XG5cbiAgICAgIHVuaURpZmYgPSB1bmlEaWZmWzBdO1xuICAgIH0gLy8gQXBwbHkgdGhlIGRpZmYgdG8gdGhlIGlucHV0XG5cblxuICAgIHZhciBsaW5lcyA9IHNvdXJjZS5zcGxpdCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vKSxcbiAgICAgICAgZGVsaW1pdGVycyA9IHNvdXJjZS5tYXRjaCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vZykgfHwgW10sXG4gICAgICAgIGh1bmtzID0gdW5pRGlmZi5odW5rcyxcbiAgICAgICAgY29tcGFyZUxpbmUgPSBvcHRpb25zLmNvbXBhcmVMaW5lIHx8IGZ1bmN0aW9uIChsaW5lTnVtYmVyLCBsaW5lLCBvcGVyYXRpb24sIHBhdGNoQ29udGVudCkge1xuICAgICAgcmV0dXJuIGxpbmUgPT09IHBhdGNoQ29udGVudDtcbiAgICB9LFxuICAgICAgICBlcnJvckNvdW50ID0gMCxcbiAgICAgICAgZnV6ekZhY3RvciA9IG9wdGlvbnMuZnV6ekZhY3RvciB8fCAwLFxuICAgICAgICBtaW5MaW5lID0gMCxcbiAgICAgICAgb2Zmc2V0ID0gMCxcbiAgICAgICAgcmVtb3ZlRU9GTkwsXG4gICAgICAgIGFkZEVPRk5MO1xuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgaHVuayBleGFjdGx5IGZpdHMgb24gdGhlIHByb3ZpZGVkIGxvY2F0aW9uXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGh1bmtGaXRzKGh1bmssIHRvUG9zKSB7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGh1bmsubGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdmFyIGxpbmUgPSBodW5rLmxpbmVzW2pdLFxuICAgICAgICAgICAgb3BlcmF0aW9uID0gbGluZS5sZW5ndGggPiAwID8gbGluZVswXSA6ICcgJyxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBsaW5lLmxlbmd0aCA+IDAgPyBsaW5lLnN1YnN0cigxKSA6IGxpbmU7XG5cbiAgICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJyAnIHx8IG9wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgICAgLy8gQ29udGV4dCBzYW5pdHkgY2hlY2tcbiAgICAgICAgICBpZiAoIWNvbXBhcmVMaW5lKHRvUG9zICsgMSwgbGluZXNbdG9Qb3NdLCBvcGVyYXRpb24sIGNvbnRlbnQpKSB7XG4gICAgICAgICAgICBlcnJvckNvdW50Kys7XG5cbiAgICAgICAgICAgIGlmIChlcnJvckNvdW50ID4gZnV6ekZhY3Rvcikge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdG9Qb3MrKztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIFNlYXJjaCBiZXN0IGZpdCBvZmZzZXRzIGZvciBlYWNoIGh1bmsgYmFzZWQgb24gdGhlIHByZXZpb3VzIG9uZXNcblxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBodW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGh1bmsgPSBodW5rc1tpXSxcbiAgICAgICAgICBtYXhMaW5lID0gbGluZXMubGVuZ3RoIC0gaHVuay5vbGRMaW5lcyxcbiAgICAgICAgICBsb2NhbE9mZnNldCA9IDAsXG4gICAgICAgICAgdG9Qb3MgPSBvZmZzZXQgKyBodW5rLm9sZFN0YXJ0IC0gMTtcbiAgICAgIHZhciBpdGVyYXRvciA9IGRpc3RhbmNlSXRlcmF0b3IodG9Qb3MsIG1pbkxpbmUsIG1heExpbmUpO1xuXG4gICAgICBmb3IgKDsgbG9jYWxPZmZzZXQgIT09IHVuZGVmaW5lZDsgbG9jYWxPZmZzZXQgPSBpdGVyYXRvcigpKSB7XG4gICAgICAgIGlmIChodW5rRml0cyhodW5rLCB0b1BvcyArIGxvY2FsT2Zmc2V0KSkge1xuICAgICAgICAgIGh1bmsub2Zmc2V0ID0gb2Zmc2V0ICs9IGxvY2FsT2Zmc2V0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsb2NhbE9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gLy8gU2V0IGxvd2VyIHRleHQgbGltaXQgdG8gZW5kIG9mIHRoZSBjdXJyZW50IGh1bmssIHNvIG5leHQgb25lcyBkb24ndCB0cnlcbiAgICAgIC8vIHRvIGZpdCBvdmVyIGFscmVhZHkgcGF0Y2hlZCB0ZXh0XG5cblxuICAgICAgbWluTGluZSA9IGh1bmsub2Zmc2V0ICsgaHVuay5vbGRTdGFydCArIGh1bmsub2xkTGluZXM7XG4gICAgfSAvLyBBcHBseSBwYXRjaCBodW5rc1xuXG5cbiAgICB2YXIgZGlmZk9mZnNldCA9IDA7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgaHVua3MubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2h1bmsgPSBodW5rc1tfaV0sXG4gICAgICAgICAgX3RvUG9zID0gX2h1bmsub2xkU3RhcnQgKyBfaHVuay5vZmZzZXQgKyBkaWZmT2Zmc2V0IC0gMTtcblxuICAgICAgZGlmZk9mZnNldCArPSBfaHVuay5uZXdMaW5lcyAtIF9odW5rLm9sZExpbmVzO1xuXG4gICAgICBpZiAoX3RvUG9zIDwgMCkge1xuICAgICAgICAvLyBDcmVhdGluZyBhIG5ldyBmaWxlXG4gICAgICAgIF90b1BvcyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2h1bmsubGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdmFyIGxpbmUgPSBfaHVuay5saW5lc1tqXSxcbiAgICAgICAgICAgIG9wZXJhdGlvbiA9IGxpbmUubGVuZ3RoID4gMCA/IGxpbmVbMF0gOiAnICcsXG4gICAgICAgICAgICBjb250ZW50ID0gbGluZS5sZW5ndGggPiAwID8gbGluZS5zdWJzdHIoMSkgOiBsaW5lLFxuICAgICAgICAgICAgZGVsaW1pdGVyID0gX2h1bmsubGluZWRlbGltaXRlcnNbal07XG5cbiAgICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJyAnKSB7XG4gICAgICAgICAgX3RvUG9zKys7XG4gICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgICBsaW5lcy5zcGxpY2UoX3RvUG9zLCAxKTtcbiAgICAgICAgICBkZWxpbWl0ZXJzLnNwbGljZShfdG9Qb3MsIDEpO1xuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnKycpIHtcbiAgICAgICAgICBsaW5lcy5zcGxpY2UoX3RvUG9zLCAwLCBjb250ZW50KTtcbiAgICAgICAgICBkZWxpbWl0ZXJzLnNwbGljZShfdG9Qb3MsIDAsIGRlbGltaXRlcik7XG4gICAgICAgICAgX3RvUG9zKys7XG4gICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnXFxcXCcpIHtcbiAgICAgICAgICB2YXIgcHJldmlvdXNPcGVyYXRpb24gPSBfaHVuay5saW5lc1tqIC0gMV0gPyBfaHVuay5saW5lc1tqIC0gMV1bMF0gOiBudWxsO1xuXG4gICAgICAgICAgaWYgKHByZXZpb3VzT3BlcmF0aW9uID09PSAnKycpIHtcbiAgICAgICAgICAgIHJlbW92ZUVPRk5MID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHByZXZpb3VzT3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgICAgIGFkZEVPRk5MID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IC8vIEhhbmRsZSBFT0ZOTCBpbnNlcnRpb24vcmVtb3ZhbFxuXG5cbiAgICBpZiAocmVtb3ZlRU9GTkwpIHtcbiAgICAgIHdoaWxlICghbGluZXNbbGluZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgbGluZXMucG9wKCk7XG4gICAgICAgIGRlbGltaXRlcnMucG9wKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhZGRFT0ZOTCkge1xuICAgICAgbGluZXMucHVzaCgnJyk7XG4gICAgICBkZWxpbWl0ZXJzLnB1c2goJ1xcbicpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBsaW5lcy5sZW5ndGggLSAxOyBfaysrKSB7XG4gICAgICBsaW5lc1tfa10gPSBsaW5lc1tfa10gKyBkZWxpbWl0ZXJzW19rXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGluZXMuam9pbignJyk7XG4gIH0gLy8gV3JhcHBlciB0aGF0IHN1cHBvcnRzIG11bHRpcGxlIGZpbGUgcGF0Y2hlcyB2aWEgY2FsbGJhY2tzLlxuXG4gIGZ1bmN0aW9uIGFwcGx5UGF0Y2hlcyh1bmlEaWZmLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB1bmlEaWZmID09PSAnc3RyaW5nJykge1xuICAgICAgdW5pRGlmZiA9IHBhcnNlUGF0Y2godW5pRGlmZik7XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzSW5kZXgoKSB7XG4gICAgICB2YXIgaW5kZXggPSB1bmlEaWZmW2N1cnJlbnRJbmRleCsrXTtcblxuICAgICAgaWYgKCFpbmRleCkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5jb21wbGV0ZSgpO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLmxvYWRGaWxlKGluZGV4LCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gb3B0aW9ucy5jb21wbGV0ZShlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVwZGF0ZWRDb250ZW50ID0gYXBwbHlQYXRjaChkYXRhLCBpbmRleCwgb3B0aW9ucyk7XG4gICAgICAgIG9wdGlvbnMucGF0Y2hlZChpbmRleCwgdXBkYXRlZENvbnRlbnQsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5jb21wbGV0ZShlcnIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHByb2Nlc3NJbmRleCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb2Nlc3NJbmRleCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RydWN0dXJlZFBhdGNoKG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmNvbnRleHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBvcHRpb25zLmNvbnRleHQgPSA0O1xuICAgIH1cblxuICAgIHZhciBkaWZmID0gZGlmZkxpbmVzKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbiAgICBkaWZmLnB1c2goe1xuICAgICAgdmFsdWU6ICcnLFxuICAgICAgbGluZXM6IFtdXG4gICAgfSk7IC8vIEFwcGVuZCBhbiBlbXB0eSB2YWx1ZSB0byBtYWtlIGNsZWFudXAgZWFzaWVyXG5cbiAgICBmdW5jdGlvbiBjb250ZXh0TGluZXMobGluZXMpIHtcbiAgICAgIHJldHVybiBsaW5lcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgIHJldHVybiAnICcgKyBlbnRyeTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBodW5rcyA9IFtdO1xuICAgIHZhciBvbGRSYW5nZVN0YXJ0ID0gMCxcbiAgICAgICAgbmV3UmFuZ2VTdGFydCA9IDAsXG4gICAgICAgIGN1clJhbmdlID0gW10sXG4gICAgICAgIG9sZExpbmUgPSAxLFxuICAgICAgICBuZXdMaW5lID0gMTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGkpIHtcbiAgICAgIHZhciBjdXJyZW50ID0gZGlmZltpXSxcbiAgICAgICAgICBsaW5lcyA9IGN1cnJlbnQubGluZXMgfHwgY3VycmVudC52YWx1ZS5yZXBsYWNlKC9cXG4kLywgJycpLnNwbGl0KCdcXG4nKTtcbiAgICAgIGN1cnJlbnQubGluZXMgPSBsaW5lcztcblxuICAgICAgaWYgKGN1cnJlbnQuYWRkZWQgfHwgY3VycmVudC5yZW1vdmVkKSB7XG4gICAgICAgIHZhciBfY3VyUmFuZ2U7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBwcmV2aW91cyBjb250ZXh0LCBzdGFydCB3aXRoIHRoYXRcbiAgICAgICAgaWYgKCFvbGRSYW5nZVN0YXJ0KSB7XG4gICAgICAgICAgdmFyIHByZXYgPSBkaWZmW2kgLSAxXTtcbiAgICAgICAgICBvbGRSYW5nZVN0YXJ0ID0gb2xkTGluZTtcbiAgICAgICAgICBuZXdSYW5nZVN0YXJ0ID0gbmV3TGluZTtcblxuICAgICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgICBjdXJSYW5nZSA9IG9wdGlvbnMuY29udGV4dCA+IDAgPyBjb250ZXh0TGluZXMocHJldi5saW5lcy5zbGljZSgtb3B0aW9ucy5jb250ZXh0KSkgOiBbXTtcbiAgICAgICAgICAgIG9sZFJhbmdlU3RhcnQgLT0gY3VyUmFuZ2UubGVuZ3RoO1xuICAgICAgICAgICAgbmV3UmFuZ2VTdGFydCAtPSBjdXJSYW5nZS5sZW5ndGg7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIE91dHB1dCBvdXIgY2hhbmdlc1xuXG5cbiAgICAgICAgKF9jdXJSYW5nZSA9IGN1clJhbmdlKS5wdXNoLmFwcGx5KF9jdXJSYW5nZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxpbmVzLm1hcChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICByZXR1cm4gKGN1cnJlbnQuYWRkZWQgPyAnKycgOiAnLScpICsgZW50cnk7XG4gICAgICAgIH0pKSk7IC8vIFRyYWNrIHRoZSB1cGRhdGVkIGZpbGUgcG9zaXRpb25cblxuXG4gICAgICAgIGlmIChjdXJyZW50LmFkZGVkKSB7XG4gICAgICAgICAgbmV3TGluZSArPSBsaW5lcy5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2xkTGluZSArPSBsaW5lcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElkZW50aWNhbCBjb250ZXh0IGxpbmVzLiBUcmFjayBsaW5lIGNoYW5nZXNcbiAgICAgICAgaWYgKG9sZFJhbmdlU3RhcnQpIHtcbiAgICAgICAgICAvLyBDbG9zZSBvdXQgYW55IGNoYW5nZXMgdGhhdCBoYXZlIGJlZW4gb3V0cHV0IChvciBqb2luIG92ZXJsYXBwaW5nKVxuICAgICAgICAgIGlmIChsaW5lcy5sZW5ndGggPD0gb3B0aW9ucy5jb250ZXh0ICogMiAmJiBpIDwgZGlmZi5sZW5ndGggLSAyKSB7XG4gICAgICAgICAgICB2YXIgX2N1clJhbmdlMjtcblxuICAgICAgICAgICAgLy8gT3ZlcmxhcHBpbmdcbiAgICAgICAgICAgIChfY3VyUmFuZ2UyID0gY3VyUmFuZ2UpLnB1c2guYXBwbHkoX2N1clJhbmdlMiwgX3RvQ29uc3VtYWJsZUFycmF5KGNvbnRleHRMaW5lcyhsaW5lcykpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIF9jdXJSYW5nZTM7XG5cbiAgICAgICAgICAgIC8vIGVuZCB0aGUgcmFuZ2UgYW5kIG91dHB1dFxuICAgICAgICAgICAgdmFyIGNvbnRleHRTaXplID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBvcHRpb25zLmNvbnRleHQpO1xuXG4gICAgICAgICAgICAoX2N1clJhbmdlMyA9IGN1clJhbmdlKS5wdXNoLmFwcGx5KF9jdXJSYW5nZTMsIF90b0NvbnN1bWFibGVBcnJheShjb250ZXh0TGluZXMobGluZXMuc2xpY2UoMCwgY29udGV4dFNpemUpKSkpO1xuXG4gICAgICAgICAgICB2YXIgaHVuayA9IHtcbiAgICAgICAgICAgICAgb2xkU3RhcnQ6IG9sZFJhbmdlU3RhcnQsXG4gICAgICAgICAgICAgIG9sZExpbmVzOiBvbGRMaW5lIC0gb2xkUmFuZ2VTdGFydCArIGNvbnRleHRTaXplLFxuICAgICAgICAgICAgICBuZXdTdGFydDogbmV3UmFuZ2VTdGFydCxcbiAgICAgICAgICAgICAgbmV3TGluZXM6IG5ld0xpbmUgLSBuZXdSYW5nZVN0YXJ0ICsgY29udGV4dFNpemUsXG4gICAgICAgICAgICAgIGxpbmVzOiBjdXJSYW5nZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGkgPj0gZGlmZi5sZW5ndGggLSAyICYmIGxpbmVzLmxlbmd0aCA8PSBvcHRpb25zLmNvbnRleHQpIHtcbiAgICAgICAgICAgICAgLy8gRU9GIGlzIGluc2lkZSB0aGlzIGh1bmtcbiAgICAgICAgICAgICAgdmFyIG9sZEVPRk5ld2xpbmUgPSAvXFxuJC8udGVzdChvbGRTdHIpO1xuICAgICAgICAgICAgICB2YXIgbmV3RU9GTmV3bGluZSA9IC9cXG4kLy50ZXN0KG5ld1N0cik7XG4gICAgICAgICAgICAgIHZhciBub05sQmVmb3JlQWRkcyA9IGxpbmVzLmxlbmd0aCA9PSAwICYmIGN1clJhbmdlLmxlbmd0aCA+IGh1bmsub2xkTGluZXM7XG5cbiAgICAgICAgICAgICAgaWYgKCFvbGRFT0ZOZXdsaW5lICYmIG5vTmxCZWZvcmVBZGRzKSB7XG4gICAgICAgICAgICAgICAgLy8gc3BlY2lhbCBjYXNlOiBvbGQgaGFzIG5vIGVvbCBhbmQgbm8gdHJhaWxpbmcgY29udGV4dDsgbm8tbmwgY2FuIGVuZCB1cCBiZWZvcmUgYWRkc1xuICAgICAgICAgICAgICAgIGN1clJhbmdlLnNwbGljZShodW5rLm9sZExpbmVzLCAwLCAnXFxcXCBObyBuZXdsaW5lIGF0IGVuZCBvZiBmaWxlJyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIW9sZEVPRk5ld2xpbmUgJiYgIW5vTmxCZWZvcmVBZGRzIHx8ICFuZXdFT0ZOZXdsaW5lKSB7XG4gICAgICAgICAgICAgICAgY3VyUmFuZ2UucHVzaCgnXFxcXCBObyBuZXdsaW5lIGF0IGVuZCBvZiBmaWxlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaHVua3MucHVzaChodW5rKTtcbiAgICAgICAgICAgIG9sZFJhbmdlU3RhcnQgPSAwO1xuICAgICAgICAgICAgbmV3UmFuZ2VTdGFydCA9IDA7XG4gICAgICAgICAgICBjdXJSYW5nZSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9sZExpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgICAgICBuZXdMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaWZmLmxlbmd0aDsgaSsrKSB7XG4gICAgICBfbG9vcChpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgb2xkRmlsZU5hbWU6IG9sZEZpbGVOYW1lLFxuICAgICAgbmV3RmlsZU5hbWU6IG5ld0ZpbGVOYW1lLFxuICAgICAgb2xkSGVhZGVyOiBvbGRIZWFkZXIsXG4gICAgICBuZXdIZWFkZXI6IG5ld0hlYWRlcixcbiAgICAgIGh1bmtzOiBodW5rc1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlVHdvRmlsZXNQYXRjaChvbGRGaWxlTmFtZSwgbmV3RmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucykge1xuICAgIHZhciBkaWZmID0gc3RydWN0dXJlZFBhdGNoKG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKTtcbiAgICB2YXIgcmV0ID0gW107XG5cbiAgICBpZiAob2xkRmlsZU5hbWUgPT0gbmV3RmlsZU5hbWUpIHtcbiAgICAgIHJldC5wdXNoKCdJbmRleDogJyArIG9sZEZpbGVOYW1lKTtcbiAgICB9XG5cbiAgICByZXQucHVzaCgnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xuICAgIHJldC5wdXNoKCctLS0gJyArIGRpZmYub2xkRmlsZU5hbWUgKyAodHlwZW9mIGRpZmYub2xkSGVhZGVyID09PSAndW5kZWZpbmVkJyA/ICcnIDogJ1xcdCcgKyBkaWZmLm9sZEhlYWRlcikpO1xuICAgIHJldC5wdXNoKCcrKysgJyArIGRpZmYubmV3RmlsZU5hbWUgKyAodHlwZW9mIGRpZmYubmV3SGVhZGVyID09PSAndW5kZWZpbmVkJyA/ICcnIDogJ1xcdCcgKyBkaWZmLm5ld0hlYWRlcikpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaWZmLmh1bmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaHVuayA9IGRpZmYuaHVua3NbaV07XG4gICAgICByZXQucHVzaCgnQEAgLScgKyBodW5rLm9sZFN0YXJ0ICsgJywnICsgaHVuay5vbGRMaW5lcyArICcgKycgKyBodW5rLm5ld1N0YXJ0ICsgJywnICsgaHVuay5uZXdMaW5lcyArICcgQEAnKTtcbiAgICAgIHJldC5wdXNoLmFwcGx5KHJldCwgaHVuay5saW5lcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldC5qb2luKCdcXG4nKSArICdcXG4nO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZVBhdGNoKGZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY3JlYXRlVHdvRmlsZXNQYXRjaChmaWxlTmFtZSwgZmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucyk7XG4gIH1cblxuICBmdW5jdGlvbiBhcnJheUVxdWFsKGEsIGIpIHtcbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5U3RhcnRzV2l0aChhLCBiKTtcbiAgfVxuICBmdW5jdGlvbiBhcnJheVN0YXJ0c1dpdGgoYXJyYXksIHN0YXJ0KSB7XG4gICAgaWYgKHN0YXJ0Lmxlbmd0aCA+IGFycmF5Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhcnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzdGFydFtpXSAhPT0gYXJyYXlbaV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FsY0xpbmVDb3VudChodW5rKSB7XG4gICAgdmFyIF9jYWxjT2xkTmV3TGluZUNvdW50ID0gY2FsY09sZE5ld0xpbmVDb3VudChodW5rLmxpbmVzKSxcbiAgICAgICAgb2xkTGluZXMgPSBfY2FsY09sZE5ld0xpbmVDb3VudC5vbGRMaW5lcyxcbiAgICAgICAgbmV3TGluZXMgPSBfY2FsY09sZE5ld0xpbmVDb3VudC5uZXdMaW5lcztcblxuICAgIGlmIChvbGRMaW5lcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBodW5rLm9sZExpbmVzID0gb2xkTGluZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBodW5rLm9sZExpbmVzO1xuICAgIH1cblxuICAgIGlmIChuZXdMaW5lcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBodW5rLm5ld0xpbmVzID0gbmV3TGluZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBodW5rLm5ld0xpbmVzO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBtZXJnZShtaW5lLCB0aGVpcnMsIGJhc2UpIHtcbiAgICBtaW5lID0gbG9hZFBhdGNoKG1pbmUsIGJhc2UpO1xuICAgIHRoZWlycyA9IGxvYWRQYXRjaCh0aGVpcnMsIGJhc2UpO1xuICAgIHZhciByZXQgPSB7fTsgLy8gRm9yIGluZGV4IHdlIGp1c3QgbGV0IGl0IHBhc3MgdGhyb3VnaCBhcyBpdCBkb2Vzbid0IGhhdmUgYW55IG5lY2Vzc2FyeSBtZWFuaW5nLlxuICAgIC8vIExlYXZpbmcgc2FuaXR5IGNoZWNrcyBvbiB0aGlzIHRvIHRoZSBBUEkgY29uc3VtZXIgdGhhdCBtYXkga25vdyBtb3JlIGFib3V0IHRoZVxuICAgIC8vIG1lYW5pbmcgaW4gdGhlaXIgb3duIGNvbnRleHQuXG5cbiAgICBpZiAobWluZS5pbmRleCB8fCB0aGVpcnMuaW5kZXgpIHtcbiAgICAgIHJldC5pbmRleCA9IG1pbmUuaW5kZXggfHwgdGhlaXJzLmluZGV4O1xuICAgIH1cblxuICAgIGlmIChtaW5lLm5ld0ZpbGVOYW1lIHx8IHRoZWlycy5uZXdGaWxlTmFtZSkge1xuICAgICAgaWYgKCFmaWxlTmFtZUNoYW5nZWQobWluZSkpIHtcbiAgICAgICAgLy8gTm8gaGVhZGVyIG9yIG5vIGNoYW5nZSBpbiBvdXJzLCB1c2UgdGhlaXJzIChhbmQgb3VycyBpZiB0aGVpcnMgZG9lcyBub3QgZXhpc3QpXG4gICAgICAgIHJldC5vbGRGaWxlTmFtZSA9IHRoZWlycy5vbGRGaWxlTmFtZSB8fCBtaW5lLm9sZEZpbGVOYW1lO1xuICAgICAgICByZXQubmV3RmlsZU5hbWUgPSB0aGVpcnMubmV3RmlsZU5hbWUgfHwgbWluZS5uZXdGaWxlTmFtZTtcbiAgICAgICAgcmV0Lm9sZEhlYWRlciA9IHRoZWlycy5vbGRIZWFkZXIgfHwgbWluZS5vbGRIZWFkZXI7XG4gICAgICAgIHJldC5uZXdIZWFkZXIgPSB0aGVpcnMubmV3SGVhZGVyIHx8IG1pbmUubmV3SGVhZGVyO1xuICAgICAgfSBlbHNlIGlmICghZmlsZU5hbWVDaGFuZ2VkKHRoZWlycykpIHtcbiAgICAgICAgLy8gTm8gaGVhZGVyIG9yIG5vIGNoYW5nZSBpbiB0aGVpcnMsIHVzZSBvdXJzXG4gICAgICAgIHJldC5vbGRGaWxlTmFtZSA9IG1pbmUub2xkRmlsZU5hbWU7XG4gICAgICAgIHJldC5uZXdGaWxlTmFtZSA9IG1pbmUubmV3RmlsZU5hbWU7XG4gICAgICAgIHJldC5vbGRIZWFkZXIgPSBtaW5lLm9sZEhlYWRlcjtcbiAgICAgICAgcmV0Lm5ld0hlYWRlciA9IG1pbmUubmV3SGVhZGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQm90aCBjaGFuZ2VkLi4uIGZpZ3VyZSBpdCBvdXRcbiAgICAgICAgcmV0Lm9sZEZpbGVOYW1lID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm9sZEZpbGVOYW1lLCB0aGVpcnMub2xkRmlsZU5hbWUpO1xuICAgICAgICByZXQubmV3RmlsZU5hbWUgPSBzZWxlY3RGaWVsZChyZXQsIG1pbmUubmV3RmlsZU5hbWUsIHRoZWlycy5uZXdGaWxlTmFtZSk7XG4gICAgICAgIHJldC5vbGRIZWFkZXIgPSBzZWxlY3RGaWVsZChyZXQsIG1pbmUub2xkSGVhZGVyLCB0aGVpcnMub2xkSGVhZGVyKTtcbiAgICAgICAgcmV0Lm5ld0hlYWRlciA9IHNlbGVjdEZpZWxkKHJldCwgbWluZS5uZXdIZWFkZXIsIHRoZWlycy5uZXdIZWFkZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldC5odW5rcyA9IFtdO1xuICAgIHZhciBtaW5lSW5kZXggPSAwLFxuICAgICAgICB0aGVpcnNJbmRleCA9IDAsXG4gICAgICAgIG1pbmVPZmZzZXQgPSAwLFxuICAgICAgICB0aGVpcnNPZmZzZXQgPSAwO1xuXG4gICAgd2hpbGUgKG1pbmVJbmRleCA8IG1pbmUuaHVua3MubGVuZ3RoIHx8IHRoZWlyc0luZGV4IDwgdGhlaXJzLmh1bmtzLmxlbmd0aCkge1xuICAgICAgdmFyIG1pbmVDdXJyZW50ID0gbWluZS5odW5rc1ttaW5lSW5kZXhdIHx8IHtcbiAgICAgICAgb2xkU3RhcnQ6IEluZmluaXR5XG4gICAgICB9LFxuICAgICAgICAgIHRoZWlyc0N1cnJlbnQgPSB0aGVpcnMuaHVua3NbdGhlaXJzSW5kZXhdIHx8IHtcbiAgICAgICAgb2xkU3RhcnQ6IEluZmluaXR5XG4gICAgICB9O1xuXG4gICAgICBpZiAoaHVua0JlZm9yZShtaW5lQ3VycmVudCwgdGhlaXJzQ3VycmVudCkpIHtcbiAgICAgICAgLy8gVGhpcyBwYXRjaCBkb2VzIG5vdCBvdmVybGFwIHdpdGggYW55IG9mIHRoZSBvdGhlcnMsIHlheS5cbiAgICAgICAgcmV0Lmh1bmtzLnB1c2goY2xvbmVIdW5rKG1pbmVDdXJyZW50LCBtaW5lT2Zmc2V0KSk7XG4gICAgICAgIG1pbmVJbmRleCsrO1xuICAgICAgICB0aGVpcnNPZmZzZXQgKz0gbWluZUN1cnJlbnQubmV3TGluZXMgLSBtaW5lQ3VycmVudC5vbGRMaW5lcztcbiAgICAgIH0gZWxzZSBpZiAoaHVua0JlZm9yZSh0aGVpcnNDdXJyZW50LCBtaW5lQ3VycmVudCkpIHtcbiAgICAgICAgLy8gVGhpcyBwYXRjaCBkb2VzIG5vdCBvdmVybGFwIHdpdGggYW55IG9mIHRoZSBvdGhlcnMsIHlheS5cbiAgICAgICAgcmV0Lmh1bmtzLnB1c2goY2xvbmVIdW5rKHRoZWlyc0N1cnJlbnQsIHRoZWlyc09mZnNldCkpO1xuICAgICAgICB0aGVpcnNJbmRleCsrO1xuICAgICAgICBtaW5lT2Zmc2V0ICs9IHRoZWlyc0N1cnJlbnQubmV3TGluZXMgLSB0aGVpcnNDdXJyZW50Lm9sZExpbmVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3ZlcmxhcCwgbWVyZ2UgYXMgYmVzdCB3ZSBjYW5cbiAgICAgICAgdmFyIG1lcmdlZEh1bmsgPSB7XG4gICAgICAgICAgb2xkU3RhcnQ6IE1hdGgubWluKG1pbmVDdXJyZW50Lm9sZFN0YXJ0LCB0aGVpcnNDdXJyZW50Lm9sZFN0YXJ0KSxcbiAgICAgICAgICBvbGRMaW5lczogMCxcbiAgICAgICAgICBuZXdTdGFydDogTWF0aC5taW4obWluZUN1cnJlbnQubmV3U3RhcnQgKyBtaW5lT2Zmc2V0LCB0aGVpcnNDdXJyZW50Lm9sZFN0YXJ0ICsgdGhlaXJzT2Zmc2V0KSxcbiAgICAgICAgICBuZXdMaW5lczogMCxcbiAgICAgICAgICBsaW5lczogW11cbiAgICAgICAgfTtcbiAgICAgICAgbWVyZ2VMaW5lcyhtZXJnZWRIdW5rLCBtaW5lQ3VycmVudC5vbGRTdGFydCwgbWluZUN1cnJlbnQubGluZXMsIHRoZWlyc0N1cnJlbnQub2xkU3RhcnQsIHRoZWlyc0N1cnJlbnQubGluZXMpO1xuICAgICAgICB0aGVpcnNJbmRleCsrO1xuICAgICAgICBtaW5lSW5kZXgrKztcbiAgICAgICAgcmV0Lmh1bmtzLnB1c2gobWVyZ2VkSHVuayk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWRQYXRjaChwYXJhbSwgYmFzZSkge1xuICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoL15AQC9tLnRlc3QocGFyYW0pIHx8IC9eSW5kZXg6L20udGVzdChwYXJhbSkpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlUGF0Y2gocGFyYW0pWzBdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWJhc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHByb3ZpZGUgYSBiYXNlIHJlZmVyZW5jZSBvciBwYXNzIGluIGEgcGF0Y2gnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0cnVjdHVyZWRQYXRjaCh1bmRlZmluZWQsIHVuZGVmaW5lZCwgYmFzZSwgcGFyYW0pO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhbTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGVOYW1lQ2hhbmdlZChwYXRjaCkge1xuICAgIHJldHVybiBwYXRjaC5uZXdGaWxlTmFtZSAmJiBwYXRjaC5uZXdGaWxlTmFtZSAhPT0gcGF0Y2gub2xkRmlsZU5hbWU7XG4gIH1cblxuICBmdW5jdGlvbiBzZWxlY3RGaWVsZChpbmRleCwgbWluZSwgdGhlaXJzKSB7XG4gICAgaWYgKG1pbmUgPT09IHRoZWlycykge1xuICAgICAgcmV0dXJuIG1pbmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGV4LmNvbmZsaWN0ID0gdHJ1ZTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1pbmU6IG1pbmUsXG4gICAgICAgIHRoZWlyczogdGhlaXJzXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGh1bmtCZWZvcmUodGVzdCwgY2hlY2spIHtcbiAgICByZXR1cm4gdGVzdC5vbGRTdGFydCA8IGNoZWNrLm9sZFN0YXJ0ICYmIHRlc3Qub2xkU3RhcnQgKyB0ZXN0Lm9sZExpbmVzIDwgY2hlY2sub2xkU3RhcnQ7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9uZUh1bmsoaHVuaywgb2Zmc2V0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9sZFN0YXJ0OiBodW5rLm9sZFN0YXJ0LFxuICAgICAgb2xkTGluZXM6IGh1bmsub2xkTGluZXMsXG4gICAgICBuZXdTdGFydDogaHVuay5uZXdTdGFydCArIG9mZnNldCxcbiAgICAgIG5ld0xpbmVzOiBodW5rLm5ld0xpbmVzLFxuICAgICAgbGluZXM6IGh1bmsubGluZXNcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VMaW5lcyhodW5rLCBtaW5lT2Zmc2V0LCBtaW5lTGluZXMsIHRoZWlyT2Zmc2V0LCB0aGVpckxpbmVzKSB7XG4gICAgLy8gVGhpcyB3aWxsIGdlbmVyYWxseSByZXN1bHQgaW4gYSBjb25mbGljdGVkIGh1bmssIGJ1dCB0aGVyZSBhcmUgY2FzZXMgd2hlcmUgdGhlIGNvbnRleHRcbiAgICAvLyBpcyB0aGUgb25seSBvdmVybGFwIHdoZXJlIHdlIGNhbiBzdWNjZXNzZnVsbHkgbWVyZ2UgdGhlIGNvbnRlbnQgaGVyZS5cbiAgICB2YXIgbWluZSA9IHtcbiAgICAgIG9mZnNldDogbWluZU9mZnNldCxcbiAgICAgIGxpbmVzOiBtaW5lTGluZXMsXG4gICAgICBpbmRleDogMFxuICAgIH0sXG4gICAgICAgIHRoZWlyID0ge1xuICAgICAgb2Zmc2V0OiB0aGVpck9mZnNldCxcbiAgICAgIGxpbmVzOiB0aGVpckxpbmVzLFxuICAgICAgaW5kZXg6IDBcbiAgICB9OyAvLyBIYW5kbGUgYW55IGxlYWRpbmcgY29udGVudFxuXG4gICAgaW5zZXJ0TGVhZGluZyhodW5rLCBtaW5lLCB0aGVpcik7XG4gICAgaW5zZXJ0TGVhZGluZyhodW5rLCB0aGVpciwgbWluZSk7IC8vIE5vdyBpbiB0aGUgb3ZlcmxhcCBjb250ZW50LiBTY2FuIHRocm91Z2ggYW5kIHNlbGVjdCB0aGUgYmVzdCBjaGFuZ2VzIGZyb20gZWFjaC5cblxuICAgIHdoaWxlIChtaW5lLmluZGV4IDwgbWluZS5saW5lcy5sZW5ndGggJiYgdGhlaXIuaW5kZXggPCB0aGVpci5saW5lcy5sZW5ndGgpIHtcbiAgICAgIHZhciBtaW5lQ3VycmVudCA9IG1pbmUubGluZXNbbWluZS5pbmRleF0sXG4gICAgICAgICAgdGhlaXJDdXJyZW50ID0gdGhlaXIubGluZXNbdGhlaXIuaW5kZXhdO1xuXG4gICAgICBpZiAoKG1pbmVDdXJyZW50WzBdID09PSAnLScgfHwgbWluZUN1cnJlbnRbMF0gPT09ICcrJykgJiYgKHRoZWlyQ3VycmVudFswXSA9PT0gJy0nIHx8IHRoZWlyQ3VycmVudFswXSA9PT0gJysnKSkge1xuICAgICAgICAvLyBCb3RoIG1vZGlmaWVkIC4uLlxuICAgICAgICBtdXR1YWxDaGFuZ2UoaHVuaywgbWluZSwgdGhlaXIpO1xuICAgICAgfSBlbHNlIGlmIChtaW5lQ3VycmVudFswXSA9PT0gJysnICYmIHRoZWlyQ3VycmVudFswXSA9PT0gJyAnKSB7XG4gICAgICAgIHZhciBfaHVuayRsaW5lcztcblxuICAgICAgICAvLyBNaW5lIGluc2VydGVkXG4gICAgICAgIChfaHVuayRsaW5lcyA9IGh1bmsubGluZXMpLnB1c2guYXBwbHkoX2h1bmskbGluZXMsIF90b0NvbnN1bWFibGVBcnJheShjb2xsZWN0Q2hhbmdlKG1pbmUpKSk7XG4gICAgICB9IGVsc2UgaWYgKHRoZWlyQ3VycmVudFswXSA9PT0gJysnICYmIG1pbmVDdXJyZW50WzBdID09PSAnICcpIHtcbiAgICAgICAgdmFyIF9odW5rJGxpbmVzMjtcblxuICAgICAgICAvLyBUaGVpcnMgaW5zZXJ0ZWRcbiAgICAgICAgKF9odW5rJGxpbmVzMiA9IGh1bmsubGluZXMpLnB1c2guYXBwbHkoX2h1bmskbGluZXMyLCBfdG9Db25zdW1hYmxlQXJyYXkoY29sbGVjdENoYW5nZSh0aGVpcikpKTtcbiAgICAgIH0gZWxzZSBpZiAobWluZUN1cnJlbnRbMF0gPT09ICctJyAmJiB0aGVpckN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgICAvLyBNaW5lIHJlbW92ZWQgb3IgZWRpdGVkXG4gICAgICAgIHJlbW92YWwoaHVuaywgbWluZSwgdGhlaXIpO1xuICAgICAgfSBlbHNlIGlmICh0aGVpckN1cnJlbnRbMF0gPT09ICctJyAmJiBtaW5lQ3VycmVudFswXSA9PT0gJyAnKSB7XG4gICAgICAgIC8vIFRoZWlyIHJlbW92ZWQgb3IgZWRpdGVkXG4gICAgICAgIHJlbW92YWwoaHVuaywgdGhlaXIsIG1pbmUsIHRydWUpO1xuICAgICAgfSBlbHNlIGlmIChtaW5lQ3VycmVudCA9PT0gdGhlaXJDdXJyZW50KSB7XG4gICAgICAgIC8vIENvbnRleHQgaWRlbnRpdHlcbiAgICAgICAgaHVuay5saW5lcy5wdXNoKG1pbmVDdXJyZW50KTtcbiAgICAgICAgbWluZS5pbmRleCsrO1xuICAgICAgICB0aGVpci5pbmRleCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ29udGV4dCBtaXNtYXRjaFxuICAgICAgICBjb25mbGljdChodW5rLCBjb2xsZWN0Q2hhbmdlKG1pbmUpLCBjb2xsZWN0Q2hhbmdlKHRoZWlyKSk7XG4gICAgICB9XG4gICAgfSAvLyBOb3cgcHVzaCBhbnl0aGluZyB0aGF0IG1heSBiZSByZW1haW5pbmdcblxuXG4gICAgaW5zZXJ0VHJhaWxpbmcoaHVuaywgbWluZSk7XG4gICAgaW5zZXJ0VHJhaWxpbmcoaHVuaywgdGhlaXIpO1xuICAgIGNhbGNMaW5lQ291bnQoaHVuayk7XG4gIH1cblxuICBmdW5jdGlvbiBtdXR1YWxDaGFuZ2UoaHVuaywgbWluZSwgdGhlaXIpIHtcbiAgICB2YXIgbXlDaGFuZ2VzID0gY29sbGVjdENoYW5nZShtaW5lKSxcbiAgICAgICAgdGhlaXJDaGFuZ2VzID0gY29sbGVjdENoYW5nZSh0aGVpcik7XG5cbiAgICBpZiAoYWxsUmVtb3ZlcyhteUNoYW5nZXMpICYmIGFsbFJlbW92ZXModGhlaXJDaGFuZ2VzKSkge1xuICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciByZW1vdmUgY2hhbmdlcyB0aGF0IGFyZSBzdXBlcnNldHMgb2Ygb25lIGFub3RoZXJcbiAgICAgIGlmIChhcnJheVN0YXJ0c1dpdGgobXlDaGFuZ2VzLCB0aGVpckNoYW5nZXMpICYmIHNraXBSZW1vdmVTdXBlcnNldCh0aGVpciwgbXlDaGFuZ2VzLCBteUNoYW5nZXMubGVuZ3RoIC0gdGhlaXJDaGFuZ2VzLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIF9odW5rJGxpbmVzMztcblxuICAgICAgICAoX2h1bmskbGluZXMzID0gaHVuay5saW5lcykucHVzaC5hcHBseShfaHVuayRsaW5lczMsIF90b0NvbnN1bWFibGVBcnJheShteUNoYW5nZXMpKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKGFycmF5U3RhcnRzV2l0aCh0aGVpckNoYW5nZXMsIG15Q2hhbmdlcykgJiYgc2tpcFJlbW92ZVN1cGVyc2V0KG1pbmUsIHRoZWlyQ2hhbmdlcywgdGhlaXJDaGFuZ2VzLmxlbmd0aCAtIG15Q2hhbmdlcy5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBfaHVuayRsaW5lczQ7XG5cbiAgICAgICAgKF9odW5rJGxpbmVzNCA9IGh1bmsubGluZXMpLnB1c2guYXBwbHkoX2h1bmskbGluZXM0LCBfdG9Db25zdW1hYmxlQXJyYXkodGhlaXJDaGFuZ2VzKSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXJyYXlFcXVhbChteUNoYW5nZXMsIHRoZWlyQ2hhbmdlcykpIHtcbiAgICAgIHZhciBfaHVuayRsaW5lczU7XG5cbiAgICAgIChfaHVuayRsaW5lczUgPSBodW5rLmxpbmVzKS5wdXNoLmFwcGx5KF9odW5rJGxpbmVzNSwgX3RvQ29uc3VtYWJsZUFycmF5KG15Q2hhbmdlcykpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uZmxpY3QoaHVuaywgbXlDaGFuZ2VzLCB0aGVpckNoYW5nZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZhbChodW5rLCBtaW5lLCB0aGVpciwgc3dhcCkge1xuICAgIHZhciBteUNoYW5nZXMgPSBjb2xsZWN0Q2hhbmdlKG1pbmUpLFxuICAgICAgICB0aGVpckNoYW5nZXMgPSBjb2xsZWN0Q29udGV4dCh0aGVpciwgbXlDaGFuZ2VzKTtcblxuICAgIGlmICh0aGVpckNoYW5nZXMubWVyZ2VkKSB7XG4gICAgICB2YXIgX2h1bmskbGluZXM2O1xuXG4gICAgICAoX2h1bmskbGluZXM2ID0gaHVuay5saW5lcykucHVzaC5hcHBseShfaHVuayRsaW5lczYsIF90b0NvbnN1bWFibGVBcnJheSh0aGVpckNoYW5nZXMubWVyZ2VkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZsaWN0KGh1bmssIHN3YXAgPyB0aGVpckNoYW5nZXMgOiBteUNoYW5nZXMsIHN3YXAgPyBteUNoYW5nZXMgOiB0aGVpckNoYW5nZXMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbmZsaWN0KGh1bmssIG1pbmUsIHRoZWlyKSB7XG4gICAgaHVuay5jb25mbGljdCA9IHRydWU7XG4gICAgaHVuay5saW5lcy5wdXNoKHtcbiAgICAgIGNvbmZsaWN0OiB0cnVlLFxuICAgICAgbWluZTogbWluZSxcbiAgICAgIHRoZWlyczogdGhlaXJcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluc2VydExlYWRpbmcoaHVuaywgaW5zZXJ0LCB0aGVpcikge1xuICAgIHdoaWxlIChpbnNlcnQub2Zmc2V0IDwgdGhlaXIub2Zmc2V0ICYmIGluc2VydC5pbmRleCA8IGluc2VydC5saW5lcy5sZW5ndGgpIHtcbiAgICAgIHZhciBsaW5lID0gaW5zZXJ0LmxpbmVzW2luc2VydC5pbmRleCsrXTtcbiAgICAgIGh1bmsubGluZXMucHVzaChsaW5lKTtcbiAgICAgIGluc2VydC5vZmZzZXQrKztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbnNlcnRUcmFpbGluZyhodW5rLCBpbnNlcnQpIHtcbiAgICB3aGlsZSAoaW5zZXJ0LmluZGV4IDwgaW5zZXJ0LmxpbmVzLmxlbmd0aCkge1xuICAgICAgdmFyIGxpbmUgPSBpbnNlcnQubGluZXNbaW5zZXJ0LmluZGV4KytdO1xuICAgICAgaHVuay5saW5lcy5wdXNoKGxpbmUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbGxlY3RDaGFuZ2Uoc3RhdGUpIHtcbiAgICB2YXIgcmV0ID0gW10sXG4gICAgICAgIG9wZXJhdGlvbiA9IHN0YXRlLmxpbmVzW3N0YXRlLmluZGV4XVswXTtcblxuICAgIHdoaWxlIChzdGF0ZS5pbmRleCA8IHN0YXRlLmxpbmVzLmxlbmd0aCkge1xuICAgICAgdmFyIGxpbmUgPSBzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleF07IC8vIEdyb3VwIGFkZGl0aW9ucyB0aGF0IGFyZSBpbW1lZGlhdGVseSBhZnRlciBzdWJ0cmFjdGlvbnMgYW5kIHRyZWF0IHRoZW0gYXMgb25lIFwiYXRvbWljXCIgbW9kaWZ5IGNoYW5nZS5cblxuICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJy0nICYmIGxpbmVbMF0gPT09ICcrJykge1xuICAgICAgICBvcGVyYXRpb24gPSAnKyc7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcGVyYXRpb24gPT09IGxpbmVbMF0pIHtcbiAgICAgICAgcmV0LnB1c2gobGluZSk7XG4gICAgICAgIHN0YXRlLmluZGV4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgZnVuY3Rpb24gY29sbGVjdENvbnRleHQoc3RhdGUsIG1hdGNoQ2hhbmdlcykge1xuICAgIHZhciBjaGFuZ2VzID0gW10sXG4gICAgICAgIG1lcmdlZCA9IFtdLFxuICAgICAgICBtYXRjaEluZGV4ID0gMCxcbiAgICAgICAgY29udGV4dENoYW5nZXMgPSBmYWxzZSxcbiAgICAgICAgY29uZmxpY3RlZCA9IGZhbHNlO1xuXG4gICAgd2hpbGUgKG1hdGNoSW5kZXggPCBtYXRjaENoYW5nZXMubGVuZ3RoICYmIHN0YXRlLmluZGV4IDwgc3RhdGUubGluZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgY2hhbmdlID0gc3RhdGUubGluZXNbc3RhdGUuaW5kZXhdLFxuICAgICAgICAgIG1hdGNoID0gbWF0Y2hDaGFuZ2VzW21hdGNoSW5kZXhdOyAvLyBPbmNlIHdlJ3ZlIGhpdCBvdXIgYWRkLCB0aGVuIHdlIGFyZSBkb25lXG5cbiAgICAgIGlmIChtYXRjaFswXSA9PT0gJysnKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Q2hhbmdlcyA9IGNvbnRleHRDaGFuZ2VzIHx8IGNoYW5nZVswXSAhPT0gJyAnO1xuICAgICAgbWVyZ2VkLnB1c2gobWF0Y2gpO1xuICAgICAgbWF0Y2hJbmRleCsrOyAvLyBDb25zdW1lIGFueSBhZGRpdGlvbnMgaW4gdGhlIG90aGVyIGJsb2NrIGFzIGEgY29uZmxpY3QgdG8gYXR0ZW1wdFxuICAgICAgLy8gdG8gcHVsbCBpbiB0aGUgcmVtYWluaW5nIGNvbnRleHQgYWZ0ZXIgdGhpc1xuXG4gICAgICBpZiAoY2hhbmdlWzBdID09PSAnKycpIHtcbiAgICAgICAgY29uZmxpY3RlZCA9IHRydWU7XG5cbiAgICAgICAgd2hpbGUgKGNoYW5nZVswXSA9PT0gJysnKSB7XG4gICAgICAgICAgY2hhbmdlcy5wdXNoKGNoYW5nZSk7XG4gICAgICAgICAgY2hhbmdlID0gc3RhdGUubGluZXNbKytzdGF0ZS5pbmRleF07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1hdGNoLnN1YnN0cigxKSA9PT0gY2hhbmdlLnN1YnN0cigxKSkge1xuICAgICAgICBjaGFuZ2VzLnB1c2goY2hhbmdlKTtcbiAgICAgICAgc3RhdGUuaW5kZXgrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZsaWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgobWF0Y2hDaGFuZ2VzW21hdGNoSW5kZXhdIHx8ICcnKVswXSA9PT0gJysnICYmIGNvbnRleHRDaGFuZ2VzKSB7XG4gICAgICBjb25mbGljdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmxpY3RlZCkge1xuICAgICAgcmV0dXJuIGNoYW5nZXM7XG4gICAgfVxuXG4gICAgd2hpbGUgKG1hdGNoSW5kZXggPCBtYXRjaENoYW5nZXMubGVuZ3RoKSB7XG4gICAgICBtZXJnZWQucHVzaChtYXRjaENoYW5nZXNbbWF0Y2hJbmRleCsrXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1lcmdlZDogbWVyZ2VkLFxuICAgICAgY2hhbmdlczogY2hhbmdlc1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBhbGxSZW1vdmVzKGNoYW5nZXMpIHtcbiAgICByZXR1cm4gY2hhbmdlcy5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGNoYW5nZSkge1xuICAgICAgcmV0dXJuIHByZXYgJiYgY2hhbmdlWzBdID09PSAnLSc7XG4gICAgfSwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBza2lwUmVtb3ZlU3VwZXJzZXQoc3RhdGUsIHJlbW92ZUNoYW5nZXMsIGRlbHRhKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZWx0YTsgaSsrKSB7XG4gICAgICB2YXIgY2hhbmdlQ29udGVudCA9IHJlbW92ZUNoYW5nZXNbcmVtb3ZlQ2hhbmdlcy5sZW5ndGggLSBkZWx0YSArIGldLnN1YnN0cigxKTtcblxuICAgICAgaWYgKHN0YXRlLmxpbmVzW3N0YXRlLmluZGV4ICsgaV0gIT09ICcgJyArIGNoYW5nZUNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRlLmluZGV4ICs9IGRlbHRhO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FsY09sZE5ld0xpbmVDb3VudChsaW5lcykge1xuICAgIHZhciBvbGRMaW5lcyA9IDA7XG4gICAgdmFyIG5ld0xpbmVzID0gMDtcbiAgICBsaW5lcy5mb3JFYWNoKGZ1bmN0aW9uIChsaW5lKSB7XG4gICAgICBpZiAodHlwZW9mIGxpbmUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBteUNvdW50ID0gY2FsY09sZE5ld0xpbmVDb3VudChsaW5lLm1pbmUpO1xuICAgICAgICB2YXIgdGhlaXJDb3VudCA9IGNhbGNPbGROZXdMaW5lQ291bnQobGluZS50aGVpcnMpO1xuXG4gICAgICAgIGlmIChvbGRMaW5lcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKG15Q291bnQub2xkTGluZXMgPT09IHRoZWlyQ291bnQub2xkTGluZXMpIHtcbiAgICAgICAgICAgIG9sZExpbmVzICs9IG15Q291bnQub2xkTGluZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9sZExpbmVzID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdMaW5lcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKG15Q291bnQubmV3TGluZXMgPT09IHRoZWlyQ291bnQubmV3TGluZXMpIHtcbiAgICAgICAgICAgIG5ld0xpbmVzICs9IG15Q291bnQubmV3TGluZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld0xpbmVzID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG5ld0xpbmVzICE9PSB1bmRlZmluZWQgJiYgKGxpbmVbMF0gPT09ICcrJyB8fCBsaW5lWzBdID09PSAnICcpKSB7XG4gICAgICAgICAgbmV3TGluZXMrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvbGRMaW5lcyAhPT0gdW5kZWZpbmVkICYmIChsaW5lWzBdID09PSAnLScgfHwgbGluZVswXSA9PT0gJyAnKSkge1xuICAgICAgICAgIG9sZExpbmVzKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgb2xkTGluZXM6IG9sZExpbmVzLFxuICAgICAgbmV3TGluZXM6IG5ld0xpbmVzXG4gICAgfTtcbiAgfVxuXG4gIC8vIFNlZTogaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2dvb2dsZS1kaWZmLW1hdGNoLXBhdGNoL3dpa2kvQVBJXG4gIGZ1bmN0aW9uIGNvbnZlcnRDaGFuZ2VzVG9ETVAoY2hhbmdlcykge1xuICAgIHZhciByZXQgPSBbXSxcbiAgICAgICAgY2hhbmdlLFxuICAgICAgICBvcGVyYXRpb247XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYW5nZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoYW5nZSA9IGNoYW5nZXNbaV07XG5cbiAgICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcbiAgICAgICAgb3BlcmF0aW9uID0gMTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLnJlbW92ZWQpIHtcbiAgICAgICAgb3BlcmF0aW9uID0gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcGVyYXRpb24gPSAwO1xuICAgICAgfVxuXG4gICAgICByZXQucHVzaChbb3BlcmF0aW9uLCBjaGFuZ2UudmFsdWVdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydENoYW5nZXNUb1hNTChjaGFuZ2VzKSB7XG4gICAgdmFyIHJldCA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFuZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hhbmdlID0gY2hhbmdlc1tpXTtcblxuICAgICAgaWYgKGNoYW5nZS5hZGRlZCkge1xuICAgICAgICByZXQucHVzaCgnPGlucz4nKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLnJlbW92ZWQpIHtcbiAgICAgICAgcmV0LnB1c2goJzxkZWw+Jyk7XG4gICAgICB9XG5cbiAgICAgIHJldC5wdXNoKGVzY2FwZUhUTUwoY2hhbmdlLnZhbHVlKSk7XG5cbiAgICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcbiAgICAgICAgcmV0LnB1c2goJzwvaW5zPicpO1xuICAgICAgfSBlbHNlIGlmIChjaGFuZ2UucmVtb3ZlZCkge1xuICAgICAgICByZXQucHVzaCgnPC9kZWw+Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldC5qb2luKCcnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVzY2FwZUhUTUwocykge1xuICAgIHZhciBuID0gcztcbiAgICBuID0gbi5yZXBsYWNlKC8mL2csICcmYW1wOycpO1xuICAgIG4gPSBuLnJlcGxhY2UoLzwvZywgJyZsdDsnKTtcbiAgICBuID0gbi5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG4gICAgbiA9IG4ucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuICAgIHJldHVybiBuO1xuICB9XG5cbiAgLyogU2VlIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMgb2YgdXNlICovXG5cbiAgZXhwb3J0cy5EaWZmID0gRGlmZjtcbiAgZXhwb3J0cy5kaWZmQ2hhcnMgPSBkaWZmQ2hhcnM7XG4gIGV4cG9ydHMuZGlmZldvcmRzID0gZGlmZldvcmRzO1xuICBleHBvcnRzLmRpZmZXb3Jkc1dpdGhTcGFjZSA9IGRpZmZXb3Jkc1dpdGhTcGFjZTtcbiAgZXhwb3J0cy5kaWZmTGluZXMgPSBkaWZmTGluZXM7XG4gIGV4cG9ydHMuZGlmZlRyaW1tZWRMaW5lcyA9IGRpZmZUcmltbWVkTGluZXM7XG4gIGV4cG9ydHMuZGlmZlNlbnRlbmNlcyA9IGRpZmZTZW50ZW5jZXM7XG4gIGV4cG9ydHMuZGlmZkNzcyA9IGRpZmZDc3M7XG4gIGV4cG9ydHMuZGlmZkpzb24gPSBkaWZmSnNvbjtcbiAgZXhwb3J0cy5kaWZmQXJyYXlzID0gZGlmZkFycmF5cztcbiAgZXhwb3J0cy5zdHJ1Y3R1cmVkUGF0Y2ggPSBzdHJ1Y3R1cmVkUGF0Y2g7XG4gIGV4cG9ydHMuY3JlYXRlVHdvRmlsZXNQYXRjaCA9IGNyZWF0ZVR3b0ZpbGVzUGF0Y2g7XG4gIGV4cG9ydHMuY3JlYXRlUGF0Y2ggPSBjcmVhdGVQYXRjaDtcbiAgZXhwb3J0cy5hcHBseVBhdGNoID0gYXBwbHlQYXRjaDtcbiAgZXhwb3J0cy5hcHBseVBhdGNoZXMgPSBhcHBseVBhdGNoZXM7XG4gIGV4cG9ydHMucGFyc2VQYXRjaCA9IHBhcnNlUGF0Y2g7XG4gIGV4cG9ydHMubWVyZ2UgPSBtZXJnZTtcbiAgZXhwb3J0cy5jb252ZXJ0Q2hhbmdlc1RvRE1QID0gY29udmVydENoYW5nZXNUb0RNUDtcbiAgZXhwb3J0cy5jb252ZXJ0Q2hhbmdlc1RvWE1MID0gY29udmVydENoYW5nZXNUb1hNTDtcbiAgZXhwb3J0cy5jYW5vbmljYWxpemUgPSBjYW5vbmljYWxpemU7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxufSkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAkOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgKiBhcyBSZW1hdGNoIGZyb20gJy4vcmVtYXRjaCc7XG5pbXBvcnQgKiBhcyByZW5kZXJVdGlscyBmcm9tICcuL3JlbmRlci11dGlscyc7XG5pbXBvcnQgeyBMaW5lVHlwZSwgfSBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCB2YXIgZGVmYXVsdExpbmVCeUxpbmVSZW5kZXJlckNvbmZpZyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCByZW5kZXJVdGlscy5kZWZhdWx0UmVuZGVyQ29uZmlnKSwgeyByZW5kZXJOb3RoaW5nV2hlbkVtcHR5OiBmYWxzZSwgbWF0Y2hpbmdNYXhDb21wYXJpc29uczogMjUwMCwgbWF4TGluZVNpemVJbkJsb2NrRm9yQ29tcGFyaXNvbjogMjAwIH0pO1xudmFyIGdlbmVyaWNUZW1wbGF0ZXNQYXRoID0gJ2dlbmVyaWMnO1xudmFyIGJhc2VUZW1wbGF0ZXNQYXRoID0gJ2xpbmUtYnktbGluZSc7XG52YXIgaWNvbnNCYXNlVGVtcGxhdGVzUGF0aCA9ICdpY29uJztcbnZhciB0YWdzQmFzZVRlbXBsYXRlc1BhdGggPSAndGFnJztcbnZhciBMaW5lQnlMaW5lUmVuZGVyZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExpbmVCeUxpbmVSZW5kZXJlcihob2dhblV0aWxzLCBjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHt9OyB9XG4gICAgICAgIHRoaXMuaG9nYW5VdGlscyA9IGhvZ2FuVXRpbHM7XG4gICAgICAgIHRoaXMuY29uZmlnID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGRlZmF1bHRMaW5lQnlMaW5lUmVuZGVyZXJDb25maWcpLCBjb25maWcpO1xuICAgIH1cbiAgICBMaW5lQnlMaW5lUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChkaWZmRmlsZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGRpZmZzSHRtbCA9IGRpZmZGaWxlc1xuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgdmFyIGRpZmZzO1xuICAgICAgICAgICAgaWYgKGZpbGUuYmxvY2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGRpZmZzID0gX3RoaXMuZ2VuZXJhdGVGaWxlSHRtbChmaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpZmZzID0gX3RoaXMuZ2VuZXJhdGVFbXB0eURpZmYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5tYWtlRmlsZURpZmZIdG1sKGZpbGUsIGRpZmZzKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKCdcXG4nKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9nYW5VdGlscy5yZW5kZXIoZ2VuZXJpY1RlbXBsYXRlc1BhdGgsICd3cmFwcGVyJywgeyBjb250ZW50OiBkaWZmc0h0bWwgfSk7XG4gICAgfTtcbiAgICBMaW5lQnlMaW5lUmVuZGVyZXIucHJvdG90eXBlLm1ha2VGaWxlRGlmZkh0bWwgPSBmdW5jdGlvbiAoZmlsZSwgZGlmZnMpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnJlbmRlck5vdGhpbmdXaGVuRW1wdHkgJiYgQXJyYXkuaXNBcnJheShmaWxlLmJsb2NrcykgJiYgZmlsZS5ibG9ja3MubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB2YXIgZmlsZURpZmZUZW1wbGF0ZSA9IHRoaXMuaG9nYW5VdGlscy50ZW1wbGF0ZShiYXNlVGVtcGxhdGVzUGF0aCwgJ2ZpbGUtZGlmZicpO1xuICAgICAgICB2YXIgZmlsZVBhdGhUZW1wbGF0ZSA9IHRoaXMuaG9nYW5VdGlscy50ZW1wbGF0ZShnZW5lcmljVGVtcGxhdGVzUGF0aCwgJ2ZpbGUtcGF0aCcpO1xuICAgICAgICB2YXIgZmlsZUljb25UZW1wbGF0ZSA9IHRoaXMuaG9nYW5VdGlscy50ZW1wbGF0ZShpY29uc0Jhc2VUZW1wbGF0ZXNQYXRoLCAnZmlsZScpO1xuICAgICAgICB2YXIgZmlsZVRhZ1RlbXBsYXRlID0gdGhpcy5ob2dhblV0aWxzLnRlbXBsYXRlKHRhZ3NCYXNlVGVtcGxhdGVzUGF0aCwgcmVuZGVyVXRpbHMuZ2V0RmlsZUljb24oZmlsZSkpO1xuICAgICAgICByZXR1cm4gZmlsZURpZmZUZW1wbGF0ZS5yZW5kZXIoe1xuICAgICAgICAgICAgZmlsZTogZmlsZSxcbiAgICAgICAgICAgIGZpbGVIdG1sSWQ6IHJlbmRlclV0aWxzLmdldEh0bWxJZChmaWxlKSxcbiAgICAgICAgICAgIGRpZmZzOiBkaWZmcyxcbiAgICAgICAgICAgIGZpbGVQYXRoOiBmaWxlUGF0aFRlbXBsYXRlLnJlbmRlcih7XG4gICAgICAgICAgICAgICAgZmlsZURpZmZOYW1lOiByZW5kZXJVdGlscy5maWxlbmFtZURpZmYoZmlsZSksXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZmlsZUljb246IGZpbGVJY29uVGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgZmlsZVRhZzogZmlsZVRhZ1RlbXBsYXRlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTGluZUJ5TGluZVJlbmRlcmVyLnByb3RvdHlwZS5nZW5lcmF0ZUVtcHR5RGlmZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9nYW5VdGlscy5yZW5kZXIoZ2VuZXJpY1RlbXBsYXRlc1BhdGgsICdlbXB0eS1kaWZmJywge1xuICAgICAgICAgICAgY29udGVudENsYXNzOiAnZDJoLWNvZGUtbGluZScsXG4gICAgICAgICAgICBDU1NMaW5lQ2xhc3M6IHJlbmRlclV0aWxzLkNTU0xpbmVDbGFzcyxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBMaW5lQnlMaW5lUmVuZGVyZXIucHJvdG90eXBlLmdlbmVyYXRlRmlsZUh0bWwgPSBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbWF0Y2hlciA9IFJlbWF0Y2gubmV3TWF0Y2hlckZuKFJlbWF0Y2gubmV3RGlzdGFuY2VGbihmdW5jdGlvbiAoZSkgeyByZXR1cm4gcmVuZGVyVXRpbHMuZGVjb25zdHJ1Y3RMaW5lKGUuY29udGVudCwgZmlsZS5pc0NvbWJpbmVkKS5jb250ZW50OyB9KSk7XG4gICAgICAgIHJldHVybiBmaWxlLmJsb2Nrc1xuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYmxvY2spIHtcbiAgICAgICAgICAgIHZhciBsaW5lcyA9IF90aGlzLmhvZ2FuVXRpbHMucmVuZGVyKGdlbmVyaWNUZW1wbGF0ZXNQYXRoLCAnYmxvY2staGVhZGVyJywge1xuICAgICAgICAgICAgICAgIENTU0xpbmVDbGFzczogcmVuZGVyVXRpbHMuQ1NTTGluZUNsYXNzLFxuICAgICAgICAgICAgICAgIGJsb2NrSGVhZGVyOiBibG9jay5oZWFkZXIsXG4gICAgICAgICAgICAgICAgbGluZUNsYXNzOiAnZDJoLWNvZGUtbGluZW51bWJlcicsXG4gICAgICAgICAgICAgICAgY29udGVudENsYXNzOiAnZDJoLWNvZGUtbGluZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF90aGlzLmFwcGx5TGluZUdyb3VwcGluZyhibG9jaykuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGV4dExpbmVzID0gX2FbMF0sIG9sZExpbmVzID0gX2FbMV0sIG5ld0xpbmVzID0gX2FbMl07XG4gICAgICAgICAgICAgICAgaWYgKG9sZExpbmVzLmxlbmd0aCAmJiBuZXdMaW5lcy5sZW5ndGggJiYgIWNvbnRleHRMaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYXBwbHlSZW1hdGNoTWF0Y2hpbmcob2xkTGluZXMsIG5ld0xpbmVzLCBtYXRjaGVyKS5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2xkTGluZXMgPSBfYVswXSwgbmV3TGluZXMgPSBfYVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYiA9IF90aGlzLnByb2Nlc3NDaGFuZ2VkTGluZXMoZmlsZS5pc0NvbWJpbmVkLCBvbGRMaW5lcywgbmV3TGluZXMpLCBsZWZ0ID0gX2IubGVmdCwgcmlnaHQgPSBfYi5yaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVzICs9IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lcyArPSByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbnRleHRMaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dExpbmVzLmZvckVhY2goZnVuY3Rpb24gKGxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSA9IHJlbmRlclV0aWxzLmRlY29uc3RydWN0TGluZShsaW5lLmNvbnRlbnQsIGZpbGUuaXNDb21iaW5lZCksIHByZWZpeCA9IF9hLnByZWZpeCwgY29udGVudCA9IF9hLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lcyArPSBfdGhpcy5nZW5lcmF0ZVNpbmdsZUxpbmVIdG1sKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiByZW5kZXJVdGlscy5DU1NMaW5lQ2xhc3MuQ09OVEVYVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZE51bWJlcjogbGluZS5vbGROdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3TnVtYmVyOiBsaW5lLm5ld051bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAob2xkTGluZXMubGVuZ3RoIHx8IG5ld0xpbmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2IgPSBfdGhpcy5wcm9jZXNzQ2hhbmdlZExpbmVzKGZpbGUuaXNDb21iaW5lZCwgb2xkTGluZXMsIG5ld0xpbmVzKSwgbGVmdCA9IF9iLmxlZnQsIHJpZ2h0ID0gX2IucmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzICs9IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzICs9IHJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5rbm93biBzdGF0ZSByZWFjaGVkIHdoaWxlIHByb2Nlc3NpbmcgZ3JvdXBzIG9mIGxpbmVzJywgY29udGV4dExpbmVzLCBvbGRMaW5lcywgbmV3TGluZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oJ1xcbicpO1xuICAgIH07XG4gICAgTGluZUJ5TGluZVJlbmRlcmVyLnByb3RvdHlwZS5hcHBseUxpbmVHcm91cHBpbmcgPSBmdW5jdGlvbiAoYmxvY2spIHtcbiAgICAgICAgdmFyIGJsb2NrTGluZXNHcm91cHMgPSBbXTtcbiAgICAgICAgdmFyIG9sZExpbmVzID0gW107XG4gICAgICAgIHZhciBuZXdMaW5lcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2NrLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZGlmZkxpbmUgPSBibG9jay5saW5lc1tpXTtcbiAgICAgICAgICAgIGlmICgoZGlmZkxpbmUudHlwZSAhPT0gTGluZVR5cGUuSU5TRVJUICYmIG5ld0xpbmVzLmxlbmd0aCkgfHxcbiAgICAgICAgICAgICAgICAoZGlmZkxpbmUudHlwZSA9PT0gTGluZVR5cGUuQ09OVEVYVCAmJiBvbGRMaW5lcy5sZW5ndGggPiAwKSkge1xuICAgICAgICAgICAgICAgIGJsb2NrTGluZXNHcm91cHMucHVzaChbW10sIG9sZExpbmVzLCBuZXdMaW5lc10pO1xuICAgICAgICAgICAgICAgIG9sZExpbmVzID0gW107XG4gICAgICAgICAgICAgICAgbmV3TGluZXMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWZmTGluZS50eXBlID09PSBMaW5lVHlwZS5DT05URVhUKSB7XG4gICAgICAgICAgICAgICAgYmxvY2tMaW5lc0dyb3Vwcy5wdXNoKFtbZGlmZkxpbmVdLCBbXSwgW11dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRpZmZMaW5lLnR5cGUgPT09IExpbmVUeXBlLklOU0VSVCAmJiBvbGRMaW5lcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBibG9ja0xpbmVzR3JvdXBzLnB1c2goW1tdLCBbXSwgW2RpZmZMaW5lXV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGlmZkxpbmUudHlwZSA9PT0gTGluZVR5cGUuSU5TRVJUICYmIG9sZExpbmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBuZXdMaW5lcy5wdXNoKGRpZmZMaW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRpZmZMaW5lLnR5cGUgPT09IExpbmVUeXBlLkRFTEVURSkge1xuICAgICAgICAgICAgICAgIG9sZExpbmVzLnB1c2goZGlmZkxpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChvbGRMaW5lcy5sZW5ndGggfHwgbmV3TGluZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBibG9ja0xpbmVzR3JvdXBzLnB1c2goW1tdLCBvbGRMaW5lcywgbmV3TGluZXNdKTtcbiAgICAgICAgICAgIG9sZExpbmVzID0gW107XG4gICAgICAgICAgICBuZXdMaW5lcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBibG9ja0xpbmVzR3JvdXBzO1xuICAgIH07XG4gICAgTGluZUJ5TGluZVJlbmRlcmVyLnByb3RvdHlwZS5hcHBseVJlbWF0Y2hNYXRjaGluZyA9IGZ1bmN0aW9uIChvbGRMaW5lcywgbmV3TGluZXMsIG1hdGNoZXIpIHtcbiAgICAgICAgdmFyIGNvbXBhcmlzb25zID0gb2xkTGluZXMubGVuZ3RoICogbmV3TGluZXMubGVuZ3RoO1xuICAgICAgICB2YXIgbWF4TGluZVNpemVJbkJsb2NrID0gTWF0aC5tYXguYXBwbHkobnVsbCwgWzBdLmNvbmNhdChvbGRMaW5lcy5jb25jYXQobmV3TGluZXMpLm1hcChmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS5jb250ZW50Lmxlbmd0aDsgfSkpKTtcbiAgICAgICAgdmFyIGRvTWF0Y2hpbmcgPSBjb21wYXJpc29ucyA8IHRoaXMuY29uZmlnLm1hdGNoaW5nTWF4Q29tcGFyaXNvbnMgJiZcbiAgICAgICAgICAgIG1heExpbmVTaXplSW5CbG9jayA8IHRoaXMuY29uZmlnLm1heExpbmVTaXplSW5CbG9ja0ZvckNvbXBhcmlzb24gJiZcbiAgICAgICAgICAgICh0aGlzLmNvbmZpZy5tYXRjaGluZyA9PT0gJ2xpbmVzJyB8fCB0aGlzLmNvbmZpZy5tYXRjaGluZyA9PT0gJ3dvcmRzJyk7XG4gICAgICAgIHJldHVybiBkb01hdGNoaW5nID8gbWF0Y2hlcihvbGRMaW5lcywgbmV3TGluZXMpIDogW1tvbGRMaW5lcywgbmV3TGluZXNdXTtcbiAgICB9O1xuICAgIExpbmVCeUxpbmVSZW5kZXJlci5wcm90b3R5cGUucHJvY2Vzc0NoYW5nZWRMaW5lcyA9IGZ1bmN0aW9uIChpc0NvbWJpbmVkLCBvbGRMaW5lcywgbmV3TGluZXMpIHtcbiAgICAgICAgdmFyIGZpbGVIdG1sID0ge1xuICAgICAgICAgICAgcmlnaHQ6ICcnLFxuICAgICAgICAgICAgbGVmdDogJycsXG4gICAgICAgIH07XG4gICAgICAgIHZhciBtYXhMaW5lc051bWJlciA9IE1hdGgubWF4KG9sZExpbmVzLmxlbmd0aCwgbmV3TGluZXMubGVuZ3RoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXhMaW5lc051bWJlcjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgb2xkTGluZSA9IG9sZExpbmVzW2ldO1xuICAgICAgICAgICAgdmFyIG5ld0xpbmUgPSBuZXdMaW5lc1tpXTtcbiAgICAgICAgICAgIHZhciBkaWZmID0gb2xkTGluZSAhPT0gdW5kZWZpbmVkICYmIG5ld0xpbmUgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gcmVuZGVyVXRpbHMuZGlmZkhpZ2hsaWdodChvbGRMaW5lLmNvbnRlbnQsIG5ld0xpbmUuY29udGVudCwgaXNDb21iaW5lZCwgdGhpcy5jb25maWcpXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgcHJlcGFyZWRPbGRMaW5lID0gb2xkTGluZSAhPT0gdW5kZWZpbmVkICYmIG9sZExpbmUub2xkTnVtYmVyICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IF9fYXNzaWduKF9fYXNzaWduKHt9LCAoZGlmZiAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBkaWZmLm9sZExpbmUucHJlZml4LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogZGlmZi5vbGRMaW5lLmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiByZW5kZXJVdGlscy5DU1NMaW5lQ2xhc3MuREVMRVRFX0NIQU5HRVMsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVuZGVyVXRpbHMuZGVjb25zdHJ1Y3RMaW5lKG9sZExpbmUuY29udGVudCwgaXNDb21iaW5lZCkpLCB7IHR5cGU6IHJlbmRlclV0aWxzLnRvQ1NTQ2xhc3Mob2xkTGluZS50eXBlKSB9KSkpLCB7IG9sZE51bWJlcjogb2xkTGluZS5vbGROdW1iZXIsIG5ld051bWJlcjogb2xkTGluZS5uZXdOdW1iZXIgfSkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgcHJlcGFyZWROZXdMaW5lID0gbmV3TGluZSAhPT0gdW5kZWZpbmVkICYmIG5ld0xpbmUubmV3TnVtYmVyICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IF9fYXNzaWduKF9fYXNzaWduKHt9LCAoZGlmZiAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBkaWZmLm5ld0xpbmUucHJlZml4LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogZGlmZi5uZXdMaW5lLmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiByZW5kZXJVdGlscy5DU1NMaW5lQ2xhc3MuSU5TRVJUX0NIQU5HRVMsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVuZGVyVXRpbHMuZGVjb25zdHJ1Y3RMaW5lKG5ld0xpbmUuY29udGVudCwgaXNDb21iaW5lZCkpLCB7IHR5cGU6IHJlbmRlclV0aWxzLnRvQ1NTQ2xhc3MobmV3TGluZS50eXBlKSB9KSkpLCB7IG9sZE51bWJlcjogbmV3TGluZS5vbGROdW1iZXIsIG5ld051bWJlcjogbmV3TGluZS5uZXdOdW1iZXIgfSkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmdlbmVyYXRlTGluZUh0bWwocHJlcGFyZWRPbGRMaW5lLCBwcmVwYXJlZE5ld0xpbmUpLCBsZWZ0ID0gX2EubGVmdCwgcmlnaHQgPSBfYS5yaWdodDtcbiAgICAgICAgICAgIGZpbGVIdG1sLmxlZnQgKz0gbGVmdDtcbiAgICAgICAgICAgIGZpbGVIdG1sLnJpZ2h0ICs9IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWxlSHRtbDtcbiAgICB9O1xuICAgIExpbmVCeUxpbmVSZW5kZXJlci5wcm90b3R5cGUuZ2VuZXJhdGVMaW5lSHRtbCA9IGZ1bmN0aW9uIChvbGRMaW5lLCBuZXdMaW5lKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmdlbmVyYXRlU2luZ2xlTGluZUh0bWwob2xkTGluZSksXG4gICAgICAgICAgICByaWdodDogdGhpcy5nZW5lcmF0ZVNpbmdsZUxpbmVIdG1sKG5ld0xpbmUpLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgTGluZUJ5TGluZVJlbmRlcmVyLnByb3RvdHlwZS5nZW5lcmF0ZVNpbmdsZUxpbmVIdG1sID0gZnVuY3Rpb24gKGxpbmUpIHtcbiAgICAgICAgaWYgKGxpbmUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgdmFyIGxpbmVOdW1iZXJIdG1sID0gdGhpcy5ob2dhblV0aWxzLnJlbmRlcihiYXNlVGVtcGxhdGVzUGF0aCwgJ251bWJlcnMnLCB7XG4gICAgICAgICAgICBvbGROdW1iZXI6IGxpbmUub2xkTnVtYmVyIHx8ICcnLFxuICAgICAgICAgICAgbmV3TnVtYmVyOiBsaW5lLm5ld051bWJlciB8fCAnJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmhvZ2FuVXRpbHMucmVuZGVyKGdlbmVyaWNUZW1wbGF0ZXNQYXRoLCAnbGluZScsIHtcbiAgICAgICAgICAgIHR5cGU6IGxpbmUudHlwZSxcbiAgICAgICAgICAgIGxpbmVDbGFzczogJ2QyaC1jb2RlLWxpbmVudW1iZXInLFxuICAgICAgICAgICAgY29udGVudENsYXNzOiAnZDJoLWNvZGUtbGluZScsXG4gICAgICAgICAgICBwcmVmaXg6IGxpbmUucHJlZml4ID09PSAnICcgPyAnJm5ic3A7JyA6IGxpbmUucHJlZml4LFxuICAgICAgICAgICAgY29udGVudDogbGluZS5jb250ZW50LFxuICAgICAgICAgICAgbGluZU51bWJlcjogbGluZU51bWJlckh0bWwsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIExpbmVCeUxpbmVSZW5kZXJlcjtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBMaW5lQnlMaW5lUmVuZGVyZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lLWJ5LWxpbmUtcmVuZGVyZXIuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==