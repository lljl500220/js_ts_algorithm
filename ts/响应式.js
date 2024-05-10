"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ref = void 0;
var ref = function (value) {
    var obj = {
        value: value
    };
    return new Proxy(obj, {
        get: function (target, key, receiver) {
            console.log('访问了属性', key);
            return Reflect.get(target, key, receiver);
        },
        set: function (target, p, newValue, receiver) {
            console.log('设置了属性', p, '新值为', newValue);
            return Reflect.set(target, p, newValue, receiver);
        }
    });
};
exports.ref = ref;
var a = (0, exports.ref)('坤');
console.log(a.value);
a.value = '坤坤';
console.log(a.value);
