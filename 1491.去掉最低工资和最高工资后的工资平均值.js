/*
 * @lc app=leetcode.cn id=1491 lang=javascript
 *
 * [1491] 去掉最低工资和最高工资后的工资平均值
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary.sort((a,b) => a-b)
    return salary.slice(1, salary.length-1).reduce((a,b) => a+b,0)/(salary.length-2)
};
// @lc code=end
console.log(average([1,2,3,4]))
