/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = {}

    for (let i=0;i<strs.length;i++) {
        let str = strs[i].split('').sort().toString()
        res[str] = res[str] ? res[str].concat(strs[i]) : [strs[i]]
    }
    return Object.values(res)
};
// @lc code=end

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))