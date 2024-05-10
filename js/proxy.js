let obj = {
    name:'luolj',
    age:18
}

let proxyName = obj.name

Object.defineProperty(obj,'name',{
    get(){
        return proxyName
    },
    set(newValue){
        proxyName = newValue
        console.log('名称已经被修改为：'+newValue)
    }
})

console.log(obj.name)
obj.name = 'luolj2'
console.log(obj.name)