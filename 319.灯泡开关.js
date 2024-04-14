/*
 * @lc app=leetcode.cn id=319 lang=javascript
 *
 * [319] 灯泡开关
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    let arr = []
    for (let i=0;i<n;i++) {
        arr.push(false)
    }
    for (let i=0;i<n;i++) {
        arr = arr.map((v,index) => {
            if ((index+1)%(i+1) === 0) {
                return !v
            } else {
                return v
            }
        })
    }
    return arr.filter(v => v).length
};
// @lc code=end

// console.log(bulbSwitch(3))