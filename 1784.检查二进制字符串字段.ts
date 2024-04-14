/*
 * @lc app=leetcode.cn id=1784 lang=typescript
 *
 * [1784] 检查二进制字符串字段
 */

// @lc code=start
function checkOnesSegment(s: string): boolean {
    const base: string = s.split("").filter((t: string) => t === "1").join("")
    return s.includes(base)
};
// @lc code=end

