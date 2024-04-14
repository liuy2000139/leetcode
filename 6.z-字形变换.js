/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (s.length <= 1) return s
    if (numRows === 1) return s
    let res = []
    s = s.split('')
    for (let j =0;s.length > 0;j++) {
        for (let i=0;i<numRows;i++) {
            res[i] = res[i] ? res[i] : []
            if (j%(numRows-1) === 0 ) {
                res[i][j]=s.shift()
            } else if ((i+j)%(numRows-1) === 0) {
                res[i][j] = s.shift()
            } else {
                res[i][j] = ''
            }
            // console.log(s, res)
        }
    }
    return res.map(v => v.filter(v => v !== '').join('')).join('')
};
// @lc code=end

// console.log(convert('LEETCODEISHIRING', 3))