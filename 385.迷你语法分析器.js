/*
 * @lc app=leetcode.cn id=385 lang=javascript
 *
 * [385] 迷你语法分析器
 */

// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
 var deserialize = function(s) {
    let dummpy = new NestedInteger();
    const layer = [];
    layer.push(dummpy);
    if(s[0] !== '[') { dummpy.setInteger(s) ; return dummpy};
    let str = '';
    for (var i = 1; i < s.length; i++) {
      if (s[i] === ',') {
          if(str !== ''){
              let a = new NestedInteger();
              a.setInteger(str);
              layer[layer.length-1].add(a);
          }
        str = '';
      } else if (s[i] === '[') {
        const a = new NestedInteger();
        layer[layer.length-1].add(a);
        layer.push(a);
  
      } else if (s[i] === ']') {
        if (str !== '') {
          let a = new NestedInteger();
          a.setInteger(str);
          layer[layer.length-1].add(a);
        }
        layer.pop();
        str = '';
      } else {
        str += s[i];
      }
    }
    return dummpy;
  };

// console.log(deserialize('324'))
// @lc code=end

