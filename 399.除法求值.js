/*
 * @lc app=leetcode.cn id=399 lang=javascript
 *
 * [399] 除法求值
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let set = new Set(equations.toString().split(','))
    console.log(set)
    let res = []
    queries.map(v => {
        if (set.has(v[1]) && set.has(v[0])) {

            let left = equations.find(t => t[0] === v[0])
            let right = equations.find(t => t[1] === v[1])
            if (left.length && right.length) {
                let item = null
                for (let i=0;i<left.length && !item;i++) {
                    
                }
            } else {
                res.push(-1)
            }
        } else {
            res.push(-1)
        }
    })
};
// @lc code=end
calcEquation(
    [["a","b"],["b","c"],["bc","cd"]], 
    [1.5,2.5,5.0],
    [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
)
