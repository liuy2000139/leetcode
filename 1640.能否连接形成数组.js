/*
 * @lc app=leetcode.cn id=1640 lang=javascript
 *
 * [1640] 能否连接形成数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    let res = true
    for(let i=0;i<arr.length && res;i++) {
        let item = pieces.find(v => v[0] === arr[i])
        if (item) {
            let len = item.length
            if (item.join(',')!== arr.slice(i, i+len).join(',')) {
                res = false
            }
            i += len-1
        } else {
            return false
        }
    }
    return res
};
// @lc code=end

console.log(canFormArray([49,18,16], [[16,18,49]]))
