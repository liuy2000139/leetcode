/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let res = []
    for (let i=0;i<numbers.length-1;i++){
        for(let j=i+1;j<numbers.length;j++) {
            if (numbers[i] + numbers[j] === target) {
                res = [i+1,j+1]
            }
        }
    }
    return res
};
// @lc code=end

