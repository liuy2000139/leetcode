/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [[]]

    let deal = (arr, index) => {
        res.push([...arr, nums[index]])
        for (let i=index+1;i<nums.length;i++) {
            deal([...arr, nums[index]], i)
        }
    }
    for (let i=0;i<nums.length;i++) {
        deal([], i)
    }
    return res
};
// @lc code=end

// console.log(subsets([1,2,3]))