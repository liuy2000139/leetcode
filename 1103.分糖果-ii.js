/*
 * @lc app=leetcode.cn id=1103 lang=javascript
 *
 * [1103] 分糖果 II
 */

// @lc code=start
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let res = []
    res[num_people-1] = 0
    res.fill(0)
    let index = 0
    while(candies) {
        let cur = candies >= index + 1 ? index + 1 : candies
        res[index%num_people] = res[index%num_people] ? res[index%num_people] + cur : cur
        candies = candies - cur
        index++
    }
    return res
};
// @lc code=end

// console.log(distributeCandies(600,40))