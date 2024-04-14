/*
 * @lc app=leetcode.cn id=1758 lang=typescript
 *
 * [1758] 生成交替二进制字符串的最少操作数
 */

// @lc code=start
function minOperations(s: string): number {
    const first = s[0]
    const dealStr = (base: string) => {
        let count = 0
        for (let i=0;i < s.length;i++) {
            if (i%2 === 0) {
                if (s[i] !== base) {
                    count += 1
                }
            } else {
                if (s[i] === base) {
                    count += 1
                }
            }
        }
        return count
    }
    return Math.min(dealStr(first[0]), dealStr(first[0] === "0" ? "1" : "0"))
};
// @lc code=end

