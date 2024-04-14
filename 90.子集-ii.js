/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a-b)
    const res = []
    let deal = (arr) => {
        let str = arr.join(',')
        if (!res.includes(str)) {
            res.push(str)
        }
        if (arr.length > 1) {
            for (let i=0;i<arr.length;i++) {
                let arr2 = [...arr]
                arr2.splice(i, 1)
                deal(arr2)
            }
        }

    }
    deal(nums)
    return [[], ...res.map(v => v.split(','))]
};
// @lc code=end
