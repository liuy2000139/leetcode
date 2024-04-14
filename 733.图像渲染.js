/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let temp = image[sr][sc]
    let deal = (i, j) => {
        if (i< image.length && i>=0 && j< image[i].length && j>=0 && image[i][j] === temp && image[i][j] !== newColor) {
            image[i][j] = newColor
            deal(i-1, j)
            deal(i+1, j)
            deal(i, j-1)
            deal(i, j+1)
        }
    }

    deal(sr, sc)
    return image
};
// @lc code=end

