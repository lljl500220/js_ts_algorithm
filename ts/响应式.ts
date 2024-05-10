export const ref = <T>(value:T) => {
    const obj = {
        value:value
    }
    return new Proxy(obj,{
        get(target,key,receiver){
            console.log('访问了属性',key)
            return Reflect.get(target,key,receiver)
        },

        set(target: object, p: string | symbol, newValue: any, receiver: any): boolean {
            console.log('设置了属性', p, '新值为', newValue);
            return Reflect.set(target, p, newValue, receiver);
        }
    })
}
let a = ref('坤')
console.log(a.value)
a.value = '坤坤'
console.log(a.value)