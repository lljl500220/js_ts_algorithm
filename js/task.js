function processTask(...tasks) {
    let isRunning = false // 是否正在执行任务
    let i = 0 // 任务索引
    let result = [] // 任务结果
    return {
        start: function () {
            return new Promise(async (resolve) => {
                if (isRunning) {
                    return;
                }
                isRunning = true
                while (i < tasks.length) {
                    result.push(await tasks[i]())
                    i++
                    if (!isRunning) {
                        return;
                    }
                }
                isRunning = false
                resolve(result)
            })
        },

        pause: function () {
            isRunning = false
        }    
    }
}

//写一个测试用例

let task1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 1000)
    })
}

let task2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 1000)
    })
}

let task3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3)
        }, 1000)
    })
}

let task4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4)
        }, 1000)
    })
}

const { start, pause } = processTask(task1, task2, task3, task4)

console.log(new Date().getSeconds())
start().then(res => {
    console.log(res)
})

setTimeout(() => {
    pause()
},2500)

setTimeout(() => {
    start().then(res => {
        console.log(new Date().getSeconds())
        console.log(res)
    })
},5000)