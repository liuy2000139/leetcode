/*
 * @lc app=leetcode.cn id=881 lang=javascript
 *
 * [881] 救生艇
 */

// @lc code=start
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let res = 0
    let len = people.length

    people = people.filter(v => v < limit) 

    res += len - people.length

    for (let i=0;i<people.length && people[i] !== null;i++) {
        let index = people.findIndex((v, idx) => limit - v === )
    }

};
// @lc code=end

