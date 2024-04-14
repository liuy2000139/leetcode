/*
 * @lc app=leetcode.cn id=1796 lang=typescript
 *
 * [1796] 字符串中第二大的数字
 */

// @lc code=start
function secondHighest(s: string): number {
    if (!/\d/.test(s)) return -1
    const arr: number[] = s.match(/\d/g)!.map((t: string) => Number(t)).sort((a,b) => b - a)
    return [...new Set(arr)][1] ?? -1

};
// @lc code=end

