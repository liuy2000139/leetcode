/*
 * @lc app=leetcode.cn id=1837 lang=typescript
 *
 * [1837] K 进制表示下的各位数字总和
 */

// @lc code=start
function sumBase(n: number, k: number): number {
    let str = ""
    while(n) {
        str = n % k + str
        n = Math.floor(n/k)
    }
    return str.split("").reduce((a, b) => a + Number(b), 0)
};
// @lc code=end

