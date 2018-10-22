
var tool = require('./events');

var events = {};

//绑定
//@param {Object} obj 
events.on = function (name, callback) {
    var that = this;
    var data = oftenFunc.get(that, oftenDomFunc.keyName + '.event');
    name = name.toLowerCase();
    data = data || oftenFunc.set(that, oftenDomFunc.keyName + '.event', {});
    data[name] = data[name] || [];
    data[name].push(callback);
    if (oftenDomFunc.event[name]) {
        oftenDomFunc.event[name].on(that, name, callback);
    } else {
        that.addEventListener.apply(that, arguments);
    }
    return that;
};