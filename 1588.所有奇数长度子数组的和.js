/*
 * @lc app=leetcode.cn id=1588 lang=javascript
 *
 * [1588] 所有奇数长度子数组的和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let res = []
    let length = arr.length%2 === 0 ? arr.length-1 : arr.length
    for (let len=1;len<=length;len += 2) {
        for (let i=0;i<arr.length+1-len;i++) {
            res.push(arr.slice(i,i+len))
        }
    }
    return res.map(v => v.reduce((a,b) => a+b,0)).reduce((a,b)=> a+b,0)
};
// @lc code=end
