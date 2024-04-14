/*
 * @lc app=leetcode.cn id=1608 lang=javascript
 *
 * [1608] 特殊数组的特征值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    let res = -1
    nums.sort((a,b) => a-b)
    for (let i=0;i<=nums.length && res === -1;i++) {
        if (nums.filter(v => v >= i).length === i) {
            res = i
        }
    }
    return res
};
// @lc code=end
let test = [3,5]
console.log(specialArray(test));