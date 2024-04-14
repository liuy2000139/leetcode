/*
 * @lc app=leetcode.cn id=1598 lang=javascript
 *
 * [1598] 文件夹操作日志搜集器
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let count = 0
    while(logs.length) {
        let item = logs.shift()
        if (item === './') {

        } else if (item === '../') {
            count = count > 0 ? count - 1 : 0
        } else {
            count++
        }
    }
    return count
};
// @lc code=end

console.log(minOperations(["d1/","d2/","../","d21/","./"]))