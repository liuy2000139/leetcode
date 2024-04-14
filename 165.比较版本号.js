/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    version1 = version1.split('.').map(v => parseInt(v))
    version2 = version2.split('.').map(v => parseInt(v))

    while(version1.length || version2.length) {
        if (version1.length === 0) {
            if (version2.every(v => v === 0)) {
                return 0
            } else {
                return -1
            }
        } 
        if (version2.length === 0) {
            if (version1.every(v => v === 0)) {
                return 0
            } else {
                return 1
            }
        }
        const a = version1.shift(), b = version2.shift()
        if (a > b) {
            return 1
        } else if (a < b) {
            return -1
        }
    }
    return 0
};
// @lc code=end
// console.log(compareVersion('1.0.1', '1'))
