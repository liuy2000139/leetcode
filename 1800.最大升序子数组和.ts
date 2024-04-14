/*
 * @lc app=leetcode.cn id=1800 lang=typescript
 *
 * [1800] 最大升序子数组和
 */

// @lc code=start
function maxAscendingSum(nums: number[]): number {
    let base = nums[0]
    let arr: number[] = []
    for (let i = 1; i < nums.length;i++) {
        if (nums[i] > nums[i - 1]) {
            base += nums[i]
        } else {
            arr.push(base)
            base = nums[i]
        }
    }
    arr.push(base)
    return arr.sort((a,b) => b - a)[0]
};
// @lc code=end

