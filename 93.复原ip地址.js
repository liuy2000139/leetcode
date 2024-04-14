/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let res = []
    const fn = (str, arr = []) => {
        // const remain = str.slice(arr.join('').length)
        if (arr.length > 4) {
            return false
        }
        if (str.length === 0 && arr.length === 4) {
            res.push(arr.join('.'))
            return true
        }
        if (str[0] === '0') {
            fn(str.slice(1), [...arr, '0'])
        } else {
            for (let i=1;i<=str.length;i++) {
                if (str.slice(0, i) <= 255) {
                    fn(str.slice(i), [...arr, str.slice(0, i)])
                }
            }
        }
    }
    fn(s)

    return res
};
// @lc code=end

// console.log(restoreIpAddresses('101023'))