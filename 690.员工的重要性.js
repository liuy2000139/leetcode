/*
 * @lc app=leetcode.cn id=690 lang=javascript
 *
 * [690] 员工的重要性
 */

// @lc code=start
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let p = employees.find(v => v.id === id)
    return p.importance + p.subordinates.map(v => GetImportance(employees, v)).reduce((a,b) => a+b,0)
};


// @lc code=end
console.log(GetImportance([
    { id: 1, importance: 2, subordinates: [ 2 ] },
    { id: 2, importance: 3, subordinates: [] }
  ],2))
