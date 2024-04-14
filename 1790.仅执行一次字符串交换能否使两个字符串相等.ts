/*
 * @lc app=leetcode.cn id=1790 lang=typescript
 *
 * [1790] 仅执行一次字符串交换能否使两个字符串相等
 */

// @lc code=start
function areAlmostEqual(s1: string, s2: string): boolean {
    const s1s = s1.split("").sort().join("")
    const s2s = s2.split("").sort().join("")
    if (s1s === s2s) {
        let count = 0
        for (let i = 0; i < s1.length;i++) {
            if (s1[i] !== s2[i]) count++
        }
        return count === 0 || count === 2

    }
    return false
};
// @lc code=end

