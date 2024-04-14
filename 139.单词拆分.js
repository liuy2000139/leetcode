/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 function wordBreak(s, wordDict) {
     let dp = [true]
     for (let i=1;i<=s.length;i++) {
         for (let j=0;j<i;j++) {
             let current = s.slice(j, j+i)
             if (dp[j] && wordDict.find(v => v === current)) {
                 dp[i] = true
                 break
             }
         }
     }
     console.log(dp)
     return dp[s.length-1]
};
// @lc code=end
console.log(wordBreak('applepenapple', ["apple","pen"]));
// console.log(wordBreak('applepenapple', ["apple", "pen"]));
// console.log(wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]));
// console.log(wordBreak('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab', ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa"]));