/*
 * @lc app=leetcode.cn id=1672 lang=javascript
 *
 * [1672] 最富有客户的资产总量
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return accounts.map(v => v.reduce((a,b) => a+b,0)).sort((a,b) => b-a)[0]
};
// @lc code=end

