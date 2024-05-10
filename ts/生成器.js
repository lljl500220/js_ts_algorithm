"use strict";
function* createFibonacciGenerator() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b]; // 这行代码等价于：let temp = a; a = b; b = temp + b;
    }
}
const fibonacciGenerator = createFibonacciGenerator();
for (let number of fibonacciGenerator) {
    console.log(number);
}
