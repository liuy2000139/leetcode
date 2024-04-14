/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    if ([...new Set(nums)].length === 1) return 0
    nums.sort((a,b) => a-b)
    let num = 0
    for (let i=0;i<nums.length-1;i++) {
        if (nums[i+1] - nums[i] === 1) {
            let temp = nums.find(v => v - nums[i] > 1)
            let idx = nums.indexOf(nums[i])
            if (temp !== undefined) {
                let index = nums.indexOf(temp)
                num = num < index - idx ? index - idx : num
            } else {
                num = nums.length - idx > num ? nums.length - idx : num
            }
        }
    }
    return num
};
// @lc code=end

console.log(111, findLHS([3,3,3,1,-2,2,1,2,3,2,-2,1,1,3,2,3,-3,0,3,2,0,3,2]))