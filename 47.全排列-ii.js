/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = []
    let deal = (arr, path) => {
        if (arr.length === nums.length) {
            let str = arr.toString()
            if (!res.includes(str)) {
                res.push(str)
            } else {
                return false
            }
        } else {
            for (let i=0;i<nums.length;i++) {
                if (!path.includes(i)) {
                    deal([...arr, nums[i]], [...path,i])
                }
            }
        }
    }
    deal([], [])
    return res.map(v => v.split(','))
};
// @lc code=end

// console.log(permuteUnique([1,3,2]))