/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let getSum = arr => arr.reduce((a,b) => a+b)
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => a-b)
    let res = new Set()
    let deal = (arr, base) => {
        if (getSum(arr) > target) {
            return false
        }
        if (getSum(arr) === target) {
            res.add(arr.join(','))
            return false
        }

        for (let i=base;i<candidates.length;i++) {
            if (getSum(arr) + candidates[i] > target) {
                return false
            } else if (getSum(arr) + candidates[i] === target) {
                res.add([...arr, candidates[i]].join(','))
                return false
            } else {
                deal([...arr, candidates[i]],i+1)

            }
        }
    }
    for (let i=0;i<candidates.length;i++) {
        deal([candidates[i]], i+1)
    }
    return [...res].map(v => v.split(','))
};
// @lc code=end

// console.log(combinationSum2([10,1,2,7,6,1,5], 8))