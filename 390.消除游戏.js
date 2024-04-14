/*
 * @lc app=leetcode.cn id=390 lang=javascript
 *
 * [390] 消除游戏
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    let toRight = true
    let res = 1
    let step = 1

    while(n > 1) {
        if (toRight) {
            res += step
            toRight = false
        } else {
            if (n%2 === 1) {
                res += step
            }
            toRight = true
        }
        step *= 2
        n = Math.floor(n/2)
    }
    return res
    // 
    // while(arr.length > 1) {
    //     let len = arr.length
    //     if (toRight) {
    //         arr = arr.filter((v, i) => i%2 === 1)
    //         toRight = false
    //     } else {
    //         arr = arr.filter((v, i) => i%2 === len%2)
    //         toRight = true
    //     }
    // }
    // return arr[0]
};
// @lc code=end

// console.log(lastRemaining(10000000))