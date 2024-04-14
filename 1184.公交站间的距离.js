/*
 * @lc app=leetcode.cn id=1184 lang=javascript
 *
 * [1184] 公交站间的距离
 */

// @lc code=start
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    let len = distance.length
    distance = [...distance, ...distance]
    let l=0,r=0
    for (let i=(start<destination ? start+len : start);i<destination+len;i++) {
        l += distance[i]
    }
    for (let i=(start>destination ? start : start+len);i>destination;i--) {
        r += distance[i-1]
    }
    return Math.min(l,r)
    // return [l,r]
};
// @lc code=end
// console.log(distanceBetweenBusStops([7,10,1,12,11,14,5,0],7,2))
