/*
 * @lc app=leetcode.cn id=495 lang=typescript
 *
 * [495] 提莫攻击
 */

// @lc code=start
function findPoisonedDuration(timeSeries: number[], duration: number): number {
    let res: number = timeSeries.length * duration

    for (let i=1;i<timeSeries.length;i++) {
        if (timeSeries[i] - timeSeries[i-1] < duration) {
            res -= duration - (timeSeries[i] - timeSeries[i-1])
        }
    }
    

    return res
};
// @lc code=end

// console.log(findPoisonedDuration([1,2,3,4,5], 5))