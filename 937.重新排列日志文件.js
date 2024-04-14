/*
 * @lc app=leetcode.cn id=937 lang=javascript
 *
 * [937] 重新排列日志文件
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let a = [], b = []
    logs.forEach(v => {
        let arr = v.split(' ')
        if (!arr[1].match(/\d/g)) {
            a.push(arr)
        } else {
            b.push(v)
        }
    })
    a.sort((q,w) => {
        if (q.slice(1).join(' ') === w.slice(1).join(' ')) {
            return q[1] > w[1] ? 1 : -1
        } else {
            return q.slice(1).join(' ') > w.slice(1).join(' ') ? 1 : -1
        }
    })
    a = [...a].map(v => v.join(' '))
    return [...a, ...b]
};
// @lc code=end

// console.log(reorderLogFiles(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]))