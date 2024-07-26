import {json} from "express";

function longestPalindrome(s: string): string {
    // 首先分析一下，在一个字符串s中，如何确定 s[i,j]是一个回文子串，它一定能满足 s[i+1,j-1]是回文子串，且si = sj
    let max = 1
    let n = s.length
    let start = 0
    let end = 0
    let dp = new Array(n).fill(0).map(() => new Array(n).fill(undefined))
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (s[j] === s[i] && (i - j <= 2 || dp[j + 1][i - 1])) {
                dp[i][j] = true
                if (i-j>max){
                    max = i-j
                    start = j
                    end = i
                }
            }
        }
    }

    return s.slice(start,end+1)
}
