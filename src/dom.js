
var keyName = '__custom_key_name_dom_' + Date.now() + '__';

function dom(selector) {
    var that = this;



    //自定义事件处理
    that.event = {};
    //css3兼容前缀
    that.browserPrefix = '-webkit- -moz- -o- -ms-'.split(' ');
    //css3兼容列表
    that.browserAttr = 'transform transition animation'.split(' ');
};
//绑定
//@param {Object} obj 
dom.bind = function (el) {
    var that = this;
    for (var name in that) {
        if (!that.hasOwnProperty(name)) {
            el[name] = that[name].bind(el);
        }
    }
    return el;
};
//设置样式
//@param {String} event
dom.css = function () {
    var that = this;
    var data = {};
    var name = arguments[0];
    switch (oftenFunc.isType(name)) {
        case 'string':
            if (arguments[1] === undefined) {
                var style = getComputedStyle(that, arguments[2]);
                if (/^([0-9.]+)px$/i.test(style[name])) {
                    return Number(RegExp.$1);
                }
                return style[name];
            } else {
                data[name] = arguments[1];
            }
            break;
        case 'object': data = name; break;
    }
    Object.keys(data).forEach(function (name) {
        if (oftenDomFunc.browserAttr.indexOf(name) > -1) {
            oftenDomFunc.browserPrefix.forEach(function (prefix) {
                that.style[prefix + name] = data[name];
            });
        }
        that.style[name] = data[name];
    });
    return that;
};

module.exports = dom;