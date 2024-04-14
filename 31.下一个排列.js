/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    // 如果已经是最大了，返回最小的
    if (nums.toString() === [...nums].sort((a,b) => b-a).toString()) {
        nums.sort((a,b) => a-b)
    } else {
        for (let i=nums.length-1;i>0;i--) {
            if (nums[i] > nums[i-1]) {
                let min = Math.min(...nums.slice(i).filter(v => v>nums[i-1]))
                let index = nums.lastIndexOf(min);
                [nums[i-1],nums[index]] = [nums[index], nums[i-1]]
                let arr = nums.splice(i, nums.length)
                nums.splice(i,0,...arr.sort((a,b) => a-b))
                break
            }
        }
    }
    

};
// @lc code=end

// console.log(nextPermutation([4,2,0,2,3,2,0]))
// console.log(nextPermutation([1,3,2]))
// console.log(nextPermutation([5,4,7,5,3,2]))