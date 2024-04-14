/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    return [nums.indexOf(target), nums.lastIndexOf(target)]
    // let l = 0,r = nums.length - 1, mid = Math.floor((l+r)/2)
    // if (nums[l] > target) {
    //     return [-1, -1]
    // }
    // if (nums[r] < target) {
    //     return [-1, -1]
    // }

    // let lb = -1
    // while (l <= r) {
    //     if (nums[l] === target) {
    //         lb = l
    //         break 
    //     } else {
    //         if (nums[mid] === target) {
    //             r = mid
    //         } else if (nums[mid] > target) {
    //             r = mid - 1
    //         } else if (nums[mid] < target) {
    //             l = mid + 1
    //         }
    //         mid = Math.floor((l+r)/2)
    //     }
    // }
    // let rb = -1
    // l = 0,r = nums.length - 1, mid = Math.floor((l+r)/2)
    // while (l <= r) {
    //     console.log(nums[l], nums[mid], nums[r])
    //     if (nums[r] === target) {
    //         rb = r
    //         break
    //     } else {
    //         if (nums[mid] === target) {
    //             l = mid
    //         } else if (nums[mid] > target) {
    //             r = mid - 1
    //         } else if (nums[mid] < target) {
    //             l = mid + 1
    //         }
    //         mid = Math.floor((l+r)/2)
    //     }
    // }
    // return [lb, rb]
};
// @lc code=end

console.log(searchRange([1,2,3,3,3,3,4,5,9], 3))
// console.log(searchRange([5,7,7,8,8,10], 8))