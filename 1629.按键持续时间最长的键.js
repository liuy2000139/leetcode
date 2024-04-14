/*
 * @lc app=leetcode.cn id=1629 lang=javascript
 *
 * [1629] 按键持续时间最长的键
 */

// @lc code=start
/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let times = releaseTimes.map((v,i) => {
        if (i) {
            return v - releaseTimes[i-1]
        } else {
            return v
        }
    })
    let max = [...times].sort((a,b) => b-a)[0]
    let keys = keysPressed.split('').filter((v, i) => times[i] === max).sort()
    return keys[keys.length - 1]
};
// @lc code=end

console.log(slowestKey([12,23,36,46,62], 'spuda'));
