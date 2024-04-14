/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // let len = nums.length - 1
    // let dp = []
    // for (let i=0;i<=len;i++) {
    //     if (i === 0) {
    //         dp[0] = 0
    //     } else if (i === 1) {
    //         dp[i] = 1
    //     } else {
    //         let current = nums[len-i]
    //         let min = Infinity
    //         if (nums[len-i] >= i) {
    //             dp[i] = 1
    //         } else {
    //             for (let j=1;j<=current;j++) {
    //                 min = Math.min(min, 1 + dp[i-j])
    //             }
    //             dp[i] = min
    //         }
            
    //     }
    // }

    // return dp.pop()
    let res = 0
    let p = 0,q=1
    while(q<nums.length) {
        let max = 0
        for (let i=p;i<q;i++) {
            max = Math.max(max, i + nums[i])
        }
        p = q
        q = max + 1
        res++
    }
    return res
};
// @lc code=end
// console.log(jump([5,6,4,4,6,9,4,4,7,4,4,8,2,6,8,1,5,9,6,5,2,7,9,7,9,6,9,4,1,6,8,8,4,4,2,0,3,8,5]))
