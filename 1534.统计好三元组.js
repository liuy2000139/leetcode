/*
 * @lc app=leetcode.cn id=1534 lang=javascript
 *
 * [1534] 统计好三元组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let res = []
    for (let i=0;i<arr.length-2;i++) {
        for(let j=i+1;j<arr.length-1;j++) {
            for (let k=j+1;k<arr.length;k++) {
                if (
                    Math.abs(arr[i] - arr[j]) <= a
                    && Math.abs(arr[j] - arr[k]) <= b
                    && Math.abs(arr[i] - arr[k]) <= c
                ) {
                    res.push([arr[i], arr[j], arr[k]])
                }
            }
        }
    }
    return res.length
};
// @lc code=end
console.log(countGoodTriplets([3,0,1,1,9,7],7,2,3))
