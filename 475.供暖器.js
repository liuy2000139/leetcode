/*
 * @lc app=leetcode.cn id=475 lang=javascript
 *
 * [475] 供暖器
 */

// @lc code=start
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    let r = 0
    if (heaters.length === 1) {
        return Math.max(heaters[0] - 1, houses.length - heaters[0])
    }
    for (let i=0;i<heaters.length - 1;i++) {
        let base = heaters[i+1] - heaters[i] - 1
        r = Math.max(r, Math.ceil(base/2))
    }
    return r
};
// @lc code=end

