let arr = [3,1,5,7,3,1,2,7,8,9]

/**第一重种实现，仅能得到最长递增子序列的长度
 * 时间复杂度O(n^2)
 * 空间复杂度O(n) 使用了一个dp数组
 * @param arr
 */
function diff (arr:number[]) {
    let dp = new Array(arr.length).fill(1)
    for (let i = 1; i < arr.length; i++) { // 从第二个数开始
        for (let j = 0; j < i; j++) { // 从第一个数开始
            if (arr[i] > arr[j]) { // 如果当前数大于前面的数
                dp[i] = Math.max(dp[i], dp[j] + 1) // 当前数的最长递增子序列为前面的数的最长递增子序列+1
            }
        }
    }
    console.log(dp)
    console.log(Math.max(...dp))
}

diff(arr)

/**第二重种实现，得到最长递增子序列的值
 * 时间复杂度O(n^2)
 * 空间复杂度O(n^2) 使用了一个dp二维数组
 * @param arr
 */
function diffWithValue (arr:number[]) {
    let dp = [[arr[0]]] // 以第一个数为结尾的最长递增子序列

    for (let i = 1; i < arr.length; i++) {
        _diff(arr[i])
    }
    function _diff(num:number){ // 计算以num为结尾的最长递增子序列
        for (let i = dp.length - 1; i >= 0; i--) {
            const line = dp[i]
            const tail = line[line.length - 1]
            if (num > tail) { // 如果num大于当前行的最后一个数
                dp.push([...line, num])
                break;
            }
            if(num < tail && i === 0){ // 如果num小于当前行的最后一个数，并且是第一行
                dp[i] = [num]
            }
        }
    }
    return dp[dp.length - 1]
}

console.log(diffWithValue(arr));

function lengthOfLIS(nums: number[]): number {
    const tails: number[] = []; // tails数组用于存储递增子序列的尾部元素

    for (const num of nums) {
        let left = 0;
        let right = tails.length;

        // 使用二分查找在tails数组中找到第一个大于等于当前元素的位置
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // 如果当前元素大于tails数组中的最大值，则将其添加到tails数组的末尾
        if (right === tails.length) {
            tails.push(num);
        } else {
            tails[right] = num;
        }
    }

    return tails.length; // 返回tails数组的长度作为最长递增子序列的长度
}


console.log(lengthOfLIS(arr));