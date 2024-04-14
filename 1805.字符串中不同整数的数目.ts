/*
 * @lc app=leetcode.cn id=1805 lang=typescript
 *
 * [1805] 字符串中不同整数的数目
 */

// @lc code=start
function numDifferentIntegers(word: string): number {
    if (!/\d/g.test(word)) return 0
    const arr: string[] = word.replace(/[a-zA-Z]+/g, " ").trim().split(" ").map((t: string) => t.replace(/^0+/, ""))
    return new Set(arr).size
};
// @lc code=end

