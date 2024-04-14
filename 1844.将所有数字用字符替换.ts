/*
 * @lc app=leetcode.cn id=1844 lang=typescript
 *
 * [1844] 将所有数字用字符替换
 */

// @lc code=start
function replaceDigits(s: string): string {
    const arr: string[] = s.split("")
    for (let i = 1;i < arr.length;i = i + 2) {
        const current = String.fromCharCode(arr[i - 1].charCodeAt(0) + Number(arr[i]))
        arr[i] = current
    }
    return arr.join("")
};
// @lc code=end

