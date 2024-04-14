/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (nums.length === 0) return 0
    let res = []
    for (let i=0;i<nums.length-1;i++) {
        let temp = [nums[i]]
        for (let j=i;j<nums.length;j++) {
            if (nums[j+1] > nums[j]) {
                temp.push(nums[j+1])
                i++
            }
            else break
        }
        if (temp.length > res.length) res = temp
    }
    return res.length || 1
};
// @lc code=end

console.log(findLengthOfLCIS([1,3,5,4,2,3,4,5]))