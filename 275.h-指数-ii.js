/*
 * @lc app=leetcode.cn id=275 lang=javascript
 *
 * [275] H 指数 II
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a,b) => a-b)
    for (let i=0;i<citations.length;i++) {
        let h = citations.length-i
        if (citations[i] >= h) {
            return h
        }
    }
    return 0
};
// @lc code=end

