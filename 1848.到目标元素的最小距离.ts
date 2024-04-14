/*
 * @lc app=leetcode.cn id=1848 lang=typescript
 *
 * [1848] 到目标元素的最小距离
 */

// @lc code=start
function getMinDistance(nums: number[], target: number, start: number): number {
    let res: number = Infinity
    for (let i = 0;i<nums.length;i++) {
        if (nums[i] === target) {
            const base = Math.abs(i - start)
            if (res > base) {
                res = base
            }
        }
    }
    return res
};
// @lc code=end

