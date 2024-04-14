/*
 * @lc app=leetcode.cn id=365 lang=javascript
 *
 * [365] 水壶问题
 */

// @lc code=start
/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function(jug1Capacity, jug2Capacity, targetCapacity) {
    
    let min = Math.min(jug1Capacity, jug2Capacity)
    let max = Math.max(jug1Capacity, jug2Capacity)
    if (max + min < targetCapacity) {
        return false
    }
    while(max%min!==0) {
        let temp = max%min
        max = min
        min = temp
    }
    return targetCapacity%min === 0
};
// @lc code=end
// console.log(canMeasureWater(2,6, 5))
