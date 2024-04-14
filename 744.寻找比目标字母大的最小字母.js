/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    if (target >= letters[letters.length - 1]) return letters[0]
    while(letters.length) {
        let s = letters.shift()
        if (s > target) return s
    }
};
// @lc code=end

console.log(nextGreatestLetter(["c", "f", "j"],'c'))