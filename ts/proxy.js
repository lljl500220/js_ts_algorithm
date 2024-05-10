"use strict";
const obj = {
    count: 0
};
const proxy = new Proxy(obj, {
    get(target, key, receiver) {
        console.log(`getting ${key.toString()}!`);
        //如果key不在target中，添加key到target中
        if (!(key in target)) {
            target[key] = undefined;
        }
        return Reflect.get(target, key, receiver);
    },
    set(target, property, newValue, receiver) {
        console.log(`setting ${property.toString()}!`);
        if (!(property in target)) {
            target[property] = undefined;
        }
        return true;
    }
});
proxy.a = 1;
console.log(proxy.a);
