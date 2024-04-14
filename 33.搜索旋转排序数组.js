/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // return nums.indexOf(target)
    let l = 0, r = nums.length - 1, mid = Math.floor((l+r)/2)

   while(l <= r) {
    // console.log(nums[l], nums[mid], nums[r])
    if (nums[mid] === target) {
        return mid
    }
    if (nums[mid] >= nums[l]) {
        // 左边有序
        if (nums[l] <= target && nums[mid] > target) {
            // 在左边
            r = mid - 1
        } else {
            l = mid + 1
            // 在右边
        }
    } else {
        // 右边有序
        if (nums[mid] < target && nums[r] >= target) {
            // 在右边
            l = mid + 1
        } else {
            // 在左边
            r = mid - 1
        }
    }
    mid = Math.floor((l+r)/2)
   }
   return -1
};
// @lc code=end

// console.log(search([1], 0))