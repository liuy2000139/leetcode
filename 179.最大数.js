/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    for (let i=0;i<nums.length-1;i++) {
        for (let j=i+1;j<nums.length;j++) {
            if (`${nums[i]}${nums[j]}` < `${nums[j]}${nums[i]}`){
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }

        }
    }
    let res = nums.join('')
    if (res == 0) return '0'
    return res
};
// @lc code=end
// console.log(largestNumber([3,30,34,5,9]))
