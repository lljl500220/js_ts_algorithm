const obj = {name:'zhangsan',age:18}
console.log(obj.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

//__proto__与prototype的区别
//__proto__是每个对象都有的属性，而prototype是函数对象才有的属性
//__proto__是对象与构造函数之间的桥梁，通过__proto__可以访问到构造函数的prototype属性

//举例
function Person(name,age){
    this.name = name
    this.age = age
}
Person.prototype.say = function(){
    console.log('hello')
}
const p = new Person('zhangsan',18)
console.log(p.__proto__ === Person.prototype)
console.log(Person.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
