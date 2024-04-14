/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let res = {
        'A': 0,
        'B': 1
    }
    for (let i=0;i<guess.length;i++) {
        if (guess[i] === secret[i]) {
            res['A']++
        } else {
            if (secret.lastIndexOf(guess[i] > i)) {
                res['B']++
            }
        }
    }
    return Object.entries(res).map(v => {
        return v[1] + v[0]
    }).join('')
};
// @lc code=end

