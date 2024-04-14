/*
 * @lc app=leetcode.cn id=1370 lang=javascript
 *
 * [1370] 上升下降字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let obj = {}
    let res =''
    for (let str of s) {
        if (obj[str]) obj[str]++
        else obj[str] = 1
    }
    let arr = Object.entries(obj).sort((a,b) => {
        if (a[0] <= b[0]) {
            return -1
        } else {
            return 1
        }
    })
    console.log(arr)
    arr = arr.reverse()
    while(arr.some(v => v[1])) {
        arr = arr.reverse()
        res += arr.filter(v => v[1]).map(v => v[0]).join('')
        arr.forEach(v => {
            if (v[1] > 0) {
                v[1]--
            }
        })
    }
    return res
    
};
// @lc code=end

