/*
 * @lc app=leetcode.cn id=415 lang=typescript
 *
 * [415] 字符串相加
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
    let res: string = ''

    const length = Math.max(num1.length, num2.length)
    let i: number = num1.length,
        j: number = num2.length,
        t: number = 0 
    while(i > 0 || j > 0 || t !== 0) {
        const sum: number = parseInt(num1[i]) + parseInt(num2[j]) + t
        t = sum >= 10 ? 1 : 0
        const x: number = sum % 10
        res += x
        i--
        j--
    }
    console.log(res)
    

    return res
};
addStrings('12', '3445')
// @lc code=end

