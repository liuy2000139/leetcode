/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
     path = path.split('/').filter(v => v !== '')
     let arr = []

     while(path.length) {
         let item = path.shift()
         if (item === '.') {

         } else if (item === '..') {
             arr.pop()
         } else {
             arr.push(item)
         }
     }
     return '/' + arr.join('/')
};
// @lc code=end

// console.log(simplifyPath("/a//b////c/d//././/.."))