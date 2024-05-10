let canvas: HTMLCanvasElement = document.querySelector('canvas')!; // !表示不为空断言
let ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
canvas.width = screen.availWidth;
canvas.height = screen.availHeight;

let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890qwertyuiopasdfghjklzxcvbnm'

let Arr = Array(Math.ceil(canvas.width / 10)).fill(0)

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const rain =  () => {
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height); // 填充矩形
    Arr.forEach(function (y, index) {
        let text = str[Math.floor(Math.random() * str.length)]; // 随机字符
        ctx.fillStyle = getRandomColor(); // 随机颜色
        ctx.fillText(text, index * 10, y * 10); // 填充文本
        if (y * 10 > canvas.height || Math.random() > 0.95) { // 超出屏幕高度或者随机数大于0.95
            Arr[index] = 0; // 重置
        } else {
            Arr[index]++; // 增加 y 值
        }
    });
};
setInterval(rain, 40);