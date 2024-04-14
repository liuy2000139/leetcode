
/*
 * @lc app=leetcode.cn id=223 lang=javascript
 *
 * [223] 矩形面积
 */

// @lc code=start
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */

var computeArea = function(A, B, C, D, E, F, G, H) {
    let sum = (C-A) * (D-B) + (G-E) * (H-F)
    let temp = 0
    if (C <= E || A >= G || B >= H || F >= D) {
        temp = 0
    } else {
        temp = (Math.min(H,D) - Math.max(B,F)) * (Math.min(C,G)-Math.max(E,A))
        if (temp<0) {
            temp = 0- temp
        }
    }
    return sum - temp
};

// @lc code=end

// console.log(computeArea(0, 0, 0, 0, -1, -1, 1, 1))