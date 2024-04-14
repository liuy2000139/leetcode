/*
 * @lc app=leetcode.cn id=1413 lang=javascript
 *
 * [1413] 逐步求和得到正数的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let val = 1
    let flag = false
    while(!flag) {
        let arr = [...nums]
        for (let i=0;i<nums.length;i++) {
            arr[i] += i === 0 ? val : arr[i-1]
        }
        if (arr.every(v => v>=1)) {
            flag = true
        } else {
            val++
        }
    }
    return val
};
// @lc code=end
console.log(minStartValue([-3,2,-3,4,2]))
