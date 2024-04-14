/*
 * @lc app=leetcode.cn id=1773 lang=javascript
 *
 * [1773] 统计匹配检索规则的物品数量
 */

// @lc code=start
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    return items.filter(v => {
        if (ruleKey === 'type') return v[0] === ruleValue
        if (ruleKey === 'color') return v[1] === ruleValue
        if (ruleKey === 'name') return v[2] === ruleValue
    }).length
};
// @lc code=end

