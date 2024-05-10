"use strict";
class FrequencyTracker {
    constructor() {
        this.frequencyMap = new Map();
        this.countMap = new Map();
    }
    add(number) {
        if (!this.frequencyMap.has(number)) { // 如果没有这个数字，就初始化为0
            this.frequencyMap.set(number, 0); // 出现次数初始化为0
            this.countMap.set(0, (this.countMap.get(0) || 0) + 1); // 次数为0的值初始化为0
        }
        const oldFrequency = this.frequencyMap.get(number); // 获取原来的次数 ！表示不为空
        this.countMap.set(oldFrequency, (this.countMap.get(oldFrequency) || 0) - 1); // 原来的次数减一
        this.frequencyMap.set(number, oldFrequency + 1); // 更新次数
        this.countMap.set(oldFrequency + 1, (this.countMap.get(oldFrequency + 1) || 0) + 1); // 更新次数
    }
    deleteOne(number) {
        if (!this.frequencyMap.has(number)) { // 如果没有这个数字，就返回
            return;
        }
        const oldFrequency = this.frequencyMap.get(number); // 获取原来的次数 ！表示不为空
        this.countMap.set(oldFrequency, (this.countMap.get(oldFrequency) || 0) - 1); // 原来的次数减一
        this.frequencyMap.set(number, oldFrequency - 1); // 更新次数
        this.countMap.set(oldFrequency - 1, (this.countMap.get(oldFrequency - 1) || 0) + 1); // 更新次数
    }
    hasFrequency(frequency) {
        return (this.countMap.get(frequency) || 0) > 0;
    }
}
