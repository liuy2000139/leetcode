/*
 * @lc app=leetcode.cn id=306 lang=javascript
 *
 * [306] 累加数
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    const fn = (str, arr=[]) => {
        const len = arr.length
        if (arr.length >=3 && arr[len-1] !== arr[len-2] + arr[len-3]) {
            return false
        }
        if (str.length === 0 && arr.length >= 3) {
            return true
        }
        for (let i=0;i<str.length;i++) {
            let current = str.slice(0, i+1)
            if (current[0] === '0' && current.length !== 1) {
                continue
            }
            arr.push(parseInt(current))
            if (fn(str.slice(i+1), arr)) {
                return true
            }
            arr.pop()
        }
        return false
    }
    return fn(num, [])





};
// @lc code=end

