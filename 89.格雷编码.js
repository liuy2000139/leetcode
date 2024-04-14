/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let res = []
    // for(let i = 0; i < 1<<n; ++i) {
    //     res.push(i ^ i>>1);
    // }
    let arr = '0'.repeat(n).split('')
    res.push('0'.repeat(n))
    for(let i=1;i<Math.pow(2,n);i++) {
        if (i%2 === 1) {
            arr[arr.length-1] = arr[arr.length-1] === '0' ? '1' : '0'
        } else {
            let index = arr.lastIndexOf('1')
            if (index > 0) {
                arr[index-1] = arr[index-1] === '1' ? '0' : '1'
            }
        }
        res.push(arr.join(''))
    }
    return res.map(v => parseInt(v,2))
};
// @lc code=end

// console.log(grayCode(3))