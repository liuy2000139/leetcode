/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉K位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if (num.length <= k) return '0'
    // if (k === 0) {
    //     while(num[0] === '0') {
    //         num = num.slice(1)
    //     }
    //     return num || '0'
    // }
    // let min = num.slice(1)
    // for (let i=0;i<num.length;i++) {
    //     let current = num.slice(0, i) + num.slice(i+1)
    //     if (min > current) {
    //         min = current
    //     }
    // }
    // return removeKdigits(min.toString(), k-1)
    for (let i = 0; i < k; i++) {
        let idx = 0;
        for (let j = 1; j < num.length && num[j] >= num[j-1]; j++) {
            idx = j;
        }
        num = num.slice(0, idx) + num.slice(idx+1)
        while (num.length > 1 && num[0] == '0') {
            num = num.slice(1)
        }
    }
    return num.toString() || '0';

};
// @lc code=end

// console.log(removeKdigits('10', 2))