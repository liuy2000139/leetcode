/*
 * @lc app=leetcode.cn id=1394 lang=javascript
 *
 * [1394] 找出数组中的幸运数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let res = {}

    for(let i of arr) {
        if (res[i]) res[i]++
        else res[i] = 1
    }

    let array = []
    for (let key in res) {
        if (res.hasOwnProperty(key) && key == res[key]) array.push(key)
    }

    if (array.length) {
        return array.sort((a,b) => b-a)[0]
    } else {
        return -1
    }
};
// @lc code=end

