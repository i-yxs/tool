'use strict';

var dom = require('./dom');

var ChainedPathReg = /([^.\[\]]+)|(?=\[)(\d+)(?=\])/g;

var tool = {};
//获取对象的值
//@param {Object} obj 
//@param {String} path (可选) 属性名or链式路径
tool.get = function (obj, path) {
    var res;
    path = path || '';
    path.split('.').every(function (item) {
        while (res = ChainedPathReg.exec(item)) {
            if (obj === null || obj === undefined) {
                return obj = undefined, false;
            } else {
                obj = obj[res[1]];
            }
        }
        return true;
    });
    return obj;
};
//设置对象的值
//@param {Object} obj 
//@param {String} path  链式路径
//@param {Any}    value 设置的值
tool.set = function (obj, path, value) {
    var res, prev, temp;
    var reg1 = /\d+/;
    path = path || '';
    path.split('.').forEach(function (item) {
        while (res = ChainedPathReg.exec(item)) {
            if (temp) {
                //匹配到的值为数字则是数组，否则为对象
                if (reg1.test(res[1]) && tool.isType(temp[prev]) !== 'array') {
                    temp[prev] = [];
                } else if (tool.isType(temp[prev]) !== 'object') {
                    temp[prev] = {};
                }
                temp = temp[prev];
            } else {
                temp = obj;
            }
            prev = res[1];
        }
    });
    return temp[prev] = value;
};
//克隆对象
//@param {Object}  obj 
//@param {Boolean} isDepth (可选) 是否深度克隆
tool.clone = function (obj, isDepth) {
    var newobj;
    switch (tool.isType(obj)) {
        case 'array':
            newobj = []; break;
        case 'object':
            newobj = {};
            break;
        default:
            return obj;
    }
    Object.keys(obj).forEach(function (name) {
        if (isDepth) {
            newobj[name] = tool.clone(obj[name], isDepth);
        } else {
            newobj[name] = obj[name];
        }
    });
    return newobj;
};
//类型判断，返回类型字符串
//@param {Any}    obj 
//@param {String} name (可选) 比较类型是否相同，返回Boolean值
tool.isType = function (obj, name) {
    var toString = Object.prototype.toString.call(obj).toLowerCase();
    if (name) {
        return toString === '[object ' + name.toLowerCase() + ']';
    } else {
        return /^\[object (\w+)\]$/.exec(toString)[1];
    }
};
//数组去重
//@param {Array}  list 数组对象
//@param {String} path (可选) 链式路径
tool.unique = function (list, path) {
    var value;
    var nList = [];
    var tList = [];
    list.forEach(function (item) {
        value = tool.get(item, path);
        if (tList.indexOf(value) === -1) {
            nList.push(item);
        }
        tList.push(value);
    });
    return nList;
};
//对象继承
//@param {Object}  heres   继承者对象
//@param {Object}  beheres 被继承者对象
//@param {Boolean} isAll   (可选) 如果继承者对象某个属性不为空，是否继续替换该属性
//@param {Boolean} isDepth (可选) 是否深度继承
tool.extend = function (heres, beheres, isAll, isDepth) {
    Object.keys(byheres).forEach(function (name) {
        if (!isAll && heres[name] !== undefined) {
            return;
        }
        if (isDepth) {
            switch (tool.isType(byheres[name])) {
                case 'array':
                    if (tool.isType(heres[name]) !== 'array') {
                        heres[name] = [];
                    }
                    tool.extend(heres[name], byheres[name], isAll, isDepth);
                    break;
                case 'object':
                    if (tool.isType(heres[name]) !== 'object') {
                        heres[name] = {};
                    }
                    tool.extend(heres[name], byheres[name], isAll, isDepth);
                    break;
                default:
                    heres[name] = byheres[name];
                    break;
            }
        } else {
            heres[name] = byheres[name];
        }
    });
    return heres;
};
//数组检索
//@param {Array}  list  数组对象
//@param {Any}    value 检索的值
//@param {String} path  (可选) 链式路径
tool.indexOf = function (list, value, path) {
    var index = -1;
    list.forEach(function (item, i) {
        if (value === tool.get(item, path)) {
            index = i;
        }
    });
    return index;
};
//获取url指定参数名的值
//@param {String} url  (可选) url字符串，当arguments长度小于2时，默认为location.href
//@param {String} name 参数名
tool.getParams = function () {
    var url, name;
    if (arguments.length < 2) {
        url = location.href;
        name = arguments[0];
    } else {
        url = arguments[0];
        name = arguments[1];
    }
    if (new RegExp('[?&]' + name + '=([^&=]+)', 'i').exec(url)) {
        return RegExp.$1;
    }
    return '';
};
//对象转url参数字符串
//@param {String} obj 转换的对象
tool.toUrlParams = function (obj) {
    var search = '';
    Object.keys(obj).forEach(function (name, index) {
        if (obj[name] !== undefined) {
            search += index ? '&' : '';
            search += name + '=' + obj[name];
        }
    });
    return search;
};
//url参数字符串转对象
//@param {String} url (可选) url字符串，默认为location.href
tool.toUrlObject = function () {
    var url = arguments[0] || location.href;
    var index = url.indexOf('?');
    var jsons = {};
    if (index > -1) {
        var search = url.substr(index + 1, url.length).split('&');
        search.forEach(function (item) {
            var strs = item.split('=');
            jsons[strs[0] || ''] = decodeURI(strs[1] || '');
        });
    }
    return jsons;
};
//操作Cookie
tool.cookie = {
    //获取Cookie
    //@param {String} name 项名称
    get: function (name) {
        var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        if (arr = document.cookie.match(reg)) {
            return unescape(arr[2]);
        }
    },
    //设置Cookie
    //@param {String} name  项名称
    //@param {Any}    value 项名称的值
    //@param {Number} exp   (可选) 失效的时间，以小时为单位，默认为24小时
    set: function (name, value, exp) {
        var date = new Date();
        exp = (exp || 24) * 60 * 60 * 1000;
        date.setTime(date.getTime() + exp);
        document.cookie = name + '=' + escape(value) + ';expires=' + date.toGMTString();
    },
    //删除cookie
    //@param {String} name  项名称
    del: function (name) {
        var exp = new Date();
        var cval = this.getCookie(name);
        exp.setTime(0);
        if (cval != null) {
            document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
        }
    },
};
//操作LocalStorage
tool.localStorage = {
    //获取localStorage值，exp以小时为单位
    //@param {String} name  项名称
    //@param {Number} exp   (可选) 失效的时间，以小时为单位，默认无限时间
    get: function (name, exp) {
        var data = JSON.parse(localStorage.getItem(name));
        if (data && data.startdate) {
            exp = (exp && exp * 60 * 60 * 1000) || Infinity;
            if (Date.now() - data.startdate <= exp) {
                return JSON.parse(data.context);
            }
        }
        return null;
    },
    //设置localStorage值
    //@param {String} name  项名称
    //@param {Any}    value 项名称的值
    set: function (name, value) {
        localStorage.setItem(name, JSON.stringify({ context: value, startdate: Date.now() }));
    },
};

tool.dom = dom;

module.exports = tool;