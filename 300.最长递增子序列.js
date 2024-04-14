
/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let res = 0
    const fn = (pre, rest) => {
        let last = pre[pre.length-1]
        let arr = rest.filter(v => v > last)
        if (arr.length === 0) {
            res = Math.max(res, pre.length)
            return true
        }
        // console.log(last, arr)
        for (let i=0;i<arr.length;i++) {
            fn([...pre, arr[i]], arr.slice(i+1))
        }
        
    }
    for (let i=0;i<nums.length;i++) {
        fn([nums[i]], nums.slice(i+1))
    }
    return res
};
// @lc code=end

// console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))