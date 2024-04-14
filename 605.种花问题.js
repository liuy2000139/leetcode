/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (n === 0) return true

    if (flowerbed.length === 1 && flowerbed[0] === 0 && n === 1) return true
    
    for(let i=0;i<flowerbed.length;i++) {
        // console.log(i,flowerbed[i-1],flowerbed[i],flowerbed[i+1]);
        if (!flowerbed[i-1] && !flowerbed[i] && !flowerbed[i+1]) {
            n = n-1
            flowerbed[i] = 1
        }
    }
    return n <= 0
};
// @lc code=end
// console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2))
