/*
 * @lc app=leetcode.cn id=1812 lang=javascript
 *
 * [1812] 判断国际象棋棋盘中一个格子的颜色
 */

// @lc code=start
/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let arr1 = ['a', 'c', 'e', 'g'], arr2 = ['b', 'd', 'f', 'h']

    if (arr1.includes(coordinates[0])) {
        return coordinates[1] % 2 === 0
    } else {
        return coordinates[1] % 2 === 1
    }
};
// @lc code=end

