/*
 * @lc app=leetcode.cn id=1763 lang=typescript
 *
 * [1763] 最长的美好子字符串
 */

// @lc code=start
function longestNiceSubstring(s: string): string {
    const deal = (str: string) => {
        let arr = [...new Set((str.toLowerCase() + str.toUpperCase()).split(""))]
        return arr.every(t => str.includes(t))
    }
    let res = ""
    if (s.length <= 1) return res
    for (let i=0;i<s.length;i++) {
        for (let j = s.length - 1;j > i;j--) {
            if (deal(s.slice(i, j + 1))) {
                if (res.length < j - i + 1) {
                    res = s.slice(i, j + 1)
                }
                
            }
        }
    }
    return res
};
// @lc code=end

