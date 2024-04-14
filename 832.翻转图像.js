/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 翻转图像
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    return A.map(v => {
        let arr = v.map(t => t === 1 ? 0 : 1)
        return arr.reverse()
    })
};
// @lc code=end

