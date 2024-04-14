/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let res = [1]
    let idx = [0,0,0]

    const getMin = (arr) => {
        return arr.indexOf(Math.min(Math.min(arr[0], arr[1]), arr[2]))
    }

    while(res.length < n){
        const arr = [res[idx[0]]*2,res[idx[1]]*3,res[idx[2]]*5]
        const minIdx = getMin(arr)
        idx[minIdx]++
        if (!res.includes(arr[minIdx])) {
            res.push(arr[minIdx])
        }
    }
    return res[res.length-1]
};
// @lc code=end

// console.log(nthUglyNumber(1690))