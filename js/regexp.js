const obj = {
    count: 0,
}

const proxy = new Proxy(obj, {
    get: function (target, propKey, receiver) {
        return Reflect.get(target, propKey, receiver)
    },
    set: function (target, propKey, value, receiver) {
        return Reflect.set(target, propKey, value, receiver)
    }
})

obj.a = 1
console.log(obj.a)
console.log(proxy.a)

Reflect.set(obj,'a','a')
console.log(obj)