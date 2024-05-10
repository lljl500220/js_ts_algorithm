let arr = [1, 2, 3]

const createProxy = (obj: any) => {
    if (Object.prototype.toString.call(obj) === '[object Object]') {
        return new Proxy(obj, {})
    } else {
        let Obj = {
            value: obj
        }
        return new Proxy(Obj, {})
    }
}

let newArr = createProxy(arr)
arr.push(4)
console.log(newArr) // [1, 2, 3, 4]