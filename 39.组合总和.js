/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let getSum = arr => arr.reduce((a,b) => a+b)
var combinationSum = function(candidates, target) {
    candidates.sort((a,b) => a-b)
    let res = []
    let deal = (arr, base) => {
        if (getSum(arr) > target) {
            return false
        }
        if (getSum(arr) === target) {
            res.push([...arr])
            return false
        }

        for (let i=base;i<candidates.length;i++) {
            if (getSum(arr) + candidates[i] > target) {
                return false
            } else if (getSum(arr) + candidates[i] === target) {
                res.push([...arr, candidates[i]])
                return false
            } else {

                deal([...arr, candidates[i]],i)

            }
        }
    }
    for (let i=0;i<candidates.length;i++) {
        deal([candidates[i]], i)
    }
    return res
};
// @lc code=end

// console.log(combinationSum([2,3,6,7],7))