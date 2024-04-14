/*
 * @lc app=leetcode.cn id=788 lang=javascript
 *
 * [788] 旋转数字
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    console.log(N);
    let res = []
    let base = ['0', '1', '2', '5', '6', '8', '9']
    let base2 = ['2', '5', '6', '9']
    
    for (let i=1;i<=N;i++) {
        let num = i.toString().split('')
        console.log(num);
        if (num.every(v => base.includes(v)) && num.some(v => base2.includes(v))) {
            res.push(num.join())
        }

    }
    return res.length
};
// @lc code=end

console.log(rotatedDigits(857))