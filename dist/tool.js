(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("tool", [], factory);
	else if(typeof exports === 'object')
		exports["tool"] = factory();
	else
		root["tool"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("﻿\r\nvar keyName = '__custom_key_name_dom_' + Date.now() + '__';\r\n\r\nfunction dom(selector) {\r\n    var that = this;\r\n\r\n\r\n\r\n    //自定义事件处理\r\n    that.event = {};\r\n    //css3兼容前缀\r\n    that.browserPrefix = '-webkit- -moz- -o- -ms-'.split(' ');\r\n    //css3兼容列表\r\n    that.browserAttr = 'transform transition animation'.split(' ');\r\n};\r\n//绑定\r\n//@param {Object} obj \r\ndom.bind = function (el) {\r\n    var that = this;\r\n    for (var name in that) {\r\n        if (!that.hasOwnProperty(name)) {\r\n            el[name] = that[name].bind(el);\r\n        }\r\n    }\r\n    return el;\r\n};\r\n//设置样式\r\n//@param {String} event\r\ndom.css = function () {\r\n    var that = this;\r\n    var data = {};\r\n    var name = arguments[0];\r\n    switch (oftenFunc.isType(name)) {\r\n        case 'string':\r\n            if (arguments[1] === undefined) {\r\n                var style = getComputedStyle(that, arguments[2]);\r\n                if (/^([0-9.]+)px$/i.test(style[name])) {\r\n                    return Number(RegExp.$1);\r\n                }\r\n                return style[name];\r\n            } else {\r\n                data[name] = arguments[1];\r\n            }\r\n            break;\r\n        case 'object': data = name; break;\r\n    }\r\n    Object.keys(data).forEach(function (name) {\r\n        if (oftenDomFunc.browserAttr.indexOf(name) > -1) {\r\n            oftenDomFunc.browserPrefix.forEach(function (prefix) {\r\n                that.style[prefix + name] = data[name];\r\n            });\r\n        }\r\n        that.style[name] = data[name];\r\n    });\r\n    return that;\r\n};\r\n\r\nmodule.exports = dom;\n\n//# sourceURL=webpack://tool/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("﻿__webpack_require__(/*! ./tool */ \"./src/tool.js\");\n\n//# sourceURL=webpack://tool/./src/index.js?");

/***/ }),

/***/ "./src/tool.js":
/*!*********************!*\
  !*** ./src/tool.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("﻿\r\n\r\nvar dom = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\r\n\r\nvar ChainedPathReg = /([^.\\[\\]]+)|(?=\\[)(\\d+)(?=\\])/g;\r\n\r\nvar tool = {};\r\n//获取对象的值\r\n//@param {Object} obj \r\n//@param {String} path (可选) 属性名or链式路径\r\ntool.get = function (obj, path) {\n    var res;\n    path = path || '';\n    path.split('.').every(function (item) {\n        while (res = ChainedPathReg.exec(item)) {\n            if (obj === null || obj === undefined) {\n                return obj = undefined, false;\r\n            } else {\n                obj = obj[res[1]];\r\n            }\r\n        }\n        return true;\n    });\n    return obj;\r\n};\r\n//设置对象的值\r\n//@param {Object} obj \r\n//@param {String} path  链式路径\r\n//@param {Any}    value 设置的值\r\ntool.set = function (obj, path, value) {\n    var res, prev, temp;\n    var reg1 = /\\d+/;\n    path = path || '';\n    path.split('.').forEach(function (item) {\n        while (res = ChainedPathReg.exec(item)) {\n            if (temp) {\n                //匹配到的值为数字则是数组，否则为对象\n                if (reg1.test(res[1]) && tool.isType(temp[prev]) !== 'array') {\n                    temp[prev] = [];\r\n                } else if (tool.isType(temp[prev]) !== 'object') {\n                    temp[prev] = {};\r\n                }\n                temp = temp[prev];\r\n            } else {\n                temp = obj;\r\n            }\n            prev = res[1];\r\n        }\n    });\n    return temp[prev] = value;\r\n};\r\n//克隆对象\r\n//@param {Object}  obj \r\n//@param {Boolean} isDepth (可选) 是否深度克隆\r\ntool.clone = function (obj, isDepth) {\r\n    var newobj;\n    switch (tool.isType(obj)) {\r\n        case 'array':\n            newobj = []; break;\r\n        case 'object':\n            newobj = {};\n            break;\r\n        default:\n            return obj;\r\n    }\n    Object.keys(obj).forEach(function (name) {\r\n        if (isDepth) {\n            newobj[name] = tool.clone(obj[name], isDepth);\n        } else {\n            newobj[name] = obj[name];\r\n        }\r\n    });\r\n    return newobj;\r\n};\r\n//类型判断，返回类型字符串\r\n//@param {Any}    obj \r\n//@param {String} name (可选) 比较类型是否相同，返回Boolean值\r\ntool.isType = function (obj, name) {\r\n    var toString = Object.prototype.toString.call(obj).toLowerCase();\r\n    if (name) {\r\n        return toString === '[object ' + name.toLowerCase() + ']';\r\n    } else {\r\n        return /^\\[object (\\w+)\\]$/.exec(toString)[1];\r\n    }\r\n};\r\n//数组去重\r\n//@param {Array}  list 数组对象\r\n//@param {String} path (可选) 链式路径\r\ntool.unique = function (list, path) {\r\n    var value;\r\n    var nList = [];\r\n    var tList = [];\r\n    list.forEach(function (item) {\r\n        value = tool.get(item, path);\r\n        if (tList.indexOf(value) === -1) {\r\n            nList.push(item);\r\n        }\n        tList.push(value);\r\n    });\r\n    return nList;\r\n};\r\n//对象继承\r\n//@param {Object}  heres   继承者对象\r\n//@param {Object}  beheres 被继承者对象\r\n//@param {Boolean} isAll   (可选) 如果继承者对象某个属性不为空，是否继续替换该属性\r\n//@param {Boolean} isDepth (可选) 是否深度继承\r\ntool.extend = function (heres, beheres, isAll, isDepth) {\r\n    Object.keys(byheres).forEach(function (name) {\r\n        if (!isAll && heres[name] !== undefined) {\n            return;\n        }\n        if (isDepth) {\n            switch (tool.isType(byheres[name])) {\n                case 'array':\n                    if (tool.isType(heres[name]) !== 'array') {\n                        heres[name] = [];\r\n                    }\n                    tool.extend(heres[name], byheres[name], isAll, isDepth);\n                    break;\n                case 'object':\n                    if (tool.isType(heres[name]) !== 'object') {\n                        heres[name] = {};\r\n                    }\n                    tool.extend(heres[name], byheres[name], isAll, isDepth);\n                    break;\n                default:\n                    heres[name] = byheres[name];\n                    break;\r\n            }\r\n        } else {\n            heres[name] = byheres[name];\r\n        }\r\n    });\n    return heres;\r\n};\r\n//数组检索\r\n//@param {Array}  list  数组对象\r\n//@param {Any}    value 检索的值\r\n//@param {String} path  (可选) 链式路径\r\ntool.indexOf = function (list, value, path) {\r\n    var index = -1;\r\n    list.forEach(function (item, i) {\r\n        if (value === tool.get(item, path)) {\r\n            index = i;\r\n        }\r\n    });\r\n    return index;\r\n};\r\n//获取url指定参数名的值\r\n//@param {String} url  (可选) url字符串，当arguments长度小于2时，默认为location.href\r\n//@param {String} name 参数名\r\ntool.getParams = function () {\r\n    var url, name;\r\n    if (arguments.length < 2) {\r\n        url = location.href;\r\n        name = arguments[0];\r\n    } else {\r\n        url = arguments[0];\r\n        name = arguments[1];\r\n    }\r\n    if (new RegExp('[?&]' + name + '=([^&=]+)', 'i').exec(url)) {\r\n        return RegExp.$1;\r\n    }\r\n    return '';\r\n};\r\n//对象转url参数字符串\r\n//@param {String} obj 转换的对象\r\ntool.toUrlParams = function (obj) {\r\n    var search = '';\r\n    Object.keys(obj).forEach(function (name, index) {\r\n        if (obj[name] !== undefined) {\r\n            search += index ? '&' : '';\r\n            search += name + '=' + obj[name];\r\n        }\r\n    });\r\n    return search;\r\n};\r\n//url参数字符串转对象\r\n//@param {String} url (可选) url字符串，默认为location.href\r\ntool.toUrlObject = function () {\r\n    var url = arguments[0] || location.href;\r\n    var index = url.indexOf('?');\r\n    var jsons = {};\r\n    if (index > -1) {\r\n        var search = url.substr(index + 1, url.length).split('&');\r\n        search.forEach(function (item) {\r\n            var strs = item.split('=');\r\n            jsons[strs[0] || ''] = decodeURI(strs[1] || '');\r\n        });\r\n    }\r\n    return jsons;\r\n};\r\n//操作Cookie\r\ntool.cookie = {\r\n    //获取Cookie\r\n    //@param {String} name 项名称\r\n    get: function (name) {\r\n        var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');\r\n        if (arr = document.cookie.match(reg)) {\r\n            return unescape(arr[2]);\r\n        }\r\n    },\n    //设置Cookie\r\n    //@param {String} name  项名称\r\n    //@param {Any}    value 项名称的值\r\n    //@param {Number} exp   (可选) 失效的时间，以小时为单位，默认为24小时\r\n    set: function (name, value, exp) {\n        var date = new Date();\n        exp = (exp || 24) * 60 * 60 * 1000;\r\n        date.setTime(date.getTime() + exp);\r\n        document.cookie = name + '=' + escape(value) + ';expires=' + date.toGMTString();\r\n    },\r\n    //删除cookie\r\n    //@param {String} name  项名称\r\n    del: function (name) {\r\n        var exp = new Date();\r\n        var cval = this.getCookie(name);\r\n        exp.setTime(0);\r\n        if (cval != null) {\r\n            document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();\r\n        }\r\n    },\n};\r\n//操作LocalStorage\ntool.localStorage = {\n    //获取localStorage值，exp以小时为单位\r\n    //@param {String} name  项名称\r\n    //@param {Number} exp   (可选) 失效的时间，以小时为单位，默认无限时间\n    get: function (name, exp) {\n        var data = JSON.parse(localStorage.getItem(name));\n        if (data && data.startdate) {\n            exp = (exp && exp * 60 * 60 * 1000) || Infinity;\r\n            if (Date.now() - data.startdate <= exp) {\n                return JSON.parse(data.context);\r\n            }\r\n        }\n        return null;\r\n    },\n    //设置localStorage值\r\n    //@param {String} name  项名称\r\n    //@param {Any}    value 项名称的值\n    set: function (name, value) {\r\n        localStorage.setItem(name, JSON.stringify({ context: value, startdate: Date.now() }));\r\n    },\n};\r\n\r\ntool.dom = dom;\r\n\r\nmodule.exports = tool;\n\n//# sourceURL=webpack://tool/./src/tool.js?");

/***/ })

/******/ });
});