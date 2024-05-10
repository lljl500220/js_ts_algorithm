async function executeTasks(tasks) {
    const results = []; // 用于存储每个任务的结果
    const promises = []; // 用于存储每个任务的 Promise

    // 同时启动所有异步任务，并按照它们在数组中的原始顺序处理结果
    tasks.forEach((task, index) => {
        const promise = task().then(result => {
            results[index] = result;
        });
        promises.push(promise);
    });

    // 等待所有任务完成
    await Promise.all(promises);

    // 按照任务在数组中的原始顺序显示结果
    results.forEach(result => {
        console.log(result);
    });
}

// 示例用法
async function task1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task 1 finished"), 2000);
    });
}

async function task2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task 2 finished"), 1000);
    });
}

async function task3() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task 3 finished"), 3000);
    });
}

const tasks = [task1, task2, task3];
executeTasks(tasks);
