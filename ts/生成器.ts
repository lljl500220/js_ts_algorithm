let obj = {
    name: '小黑子',
    age: 18,
}
Object.defineProperty(obj,'sex',{
    value:'坤'
})

// 定义一个观察者函数，用于将对象转换为响应式
function observe(obj:any) {
    if (!obj || typeof obj !== 'object') {
        return;
    }

    // 遍历对象的所有属性
    Object.keys(obj).forEach(key => {
        let internalValue = obj[key];

        // 对每个属性递归地调用 observe 函数，实现深度观察
        observe(internalValue);

        // 使用 Object.defineProperty 方法定义 getter 和 setter
        Object.defineProperty(obj, key, {
            get() {
                console.log('访问了属性', key);
                return internalValue;
            },
            set(newValue) {
                console.log('设置了属性', key, '新值为', newValue);
                internalValue = newValue;
            }
        });
    });
}

// 示例数据对象
const data = {
    name: 'Vue',
    age: 2
};

// 将数据对象转换为响应式
observe(data);

// 访问属性会触发 getter
console.log(data.name); // 输出 "访问了属性 name"

// 修改属性会触发 setter
data.age = 3; // 输出 "设置了属性 age 新值为 3"


// 通过 Proxy 实现响应式
function observeProxy(obj:any) {
    return new Proxy(obj, {
        get(target, key, receiver) {
            console.log('访问了属性', key);
            return Reflect.get(target, key, receiver);
        },
        set(target, key, value, receiver) {
            console.log('设置了属性', key, '新值为', value);
            return Reflect.set(target, key, value, receiver);
        }
    });
}

