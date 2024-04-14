/*
 * @lc app=leetcode.cn id=1752 lang=typescript
 *
 * [1752] 检查数组是否经排序和轮转得到
 */

// @lc code=start
function check(nums: number[]): boolean {
    const origin = [...nums].sort((a,b) => a-b).toString()
    return [...nums, ...nums].toString().includes(origin)
};
// @lc code=end

