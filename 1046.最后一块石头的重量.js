/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let getMaxes = arr => {
        let list = [...arr].sort((a,b) => b-a)
        return list.slice(0, 2)
    }
    while(stones.length > 1) {
        let [a,b] = getMaxes(stones)
        if (a === b) {
            stones.splice(stones.indexOf(a), 1)
            stones.splice(stones.indexOf(b), 1)
        } else if (a > b) {
            stones[stones.indexOf(a)] = a-b
            stones.splice(stones.indexOf(b), 1)
        } else {
            stones[stones.indexOf(b)] = b-a
            stones.splice(stones.indexOf(a), 1)
        }
    }
    return stones
};
// @lc code=end

// console.log(lastStoneWeight([1,3]))