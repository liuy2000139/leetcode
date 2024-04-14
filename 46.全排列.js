/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []
    let deal = (arr) => {
        if (arr.length === nums.length) {
            res.push(arr)
        } else {
            for (let i=0;i<nums.length;i++) {
                if (!arr.includes(nums[i])) {
                    deal([...arr, nums[i]])
                }
            }
        }
    }
    deal([])
    return res
};
// @lc code=end

// console.log(permute([0,-1,1]))