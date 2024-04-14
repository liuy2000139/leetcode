/*
 * @lc app=leetcode.cn id=1128 lang=javascript
 *
 * [1128] 等价多米诺骨牌对的数量
 */

// @lc code=start
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let count = 0
    dominoes = dominoes.map(v => {
        return v.sort((a,b) => a-b).join(' ')
    })
    for (let i=0;i<dominoes.length-1;i++) {
        for (let j=i+1;j<dominoes.length;j++) {
            if (dominoes[i] === dominoes[j]) {
                count++
            }
        }
    }
    return count
};
// @lc code=end

