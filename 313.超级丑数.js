/*
 * @lc app=leetcode.cn id=313 lang=javascript
 *
 * [313] 超级丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    let res = [1]
    let obj = {}
    let idx = []
    for (let i=0;i<primes.length;i++) {
        idx.push(0)
    }

    const getMin = (arr) => {
        return [...arr].sort((a,b) => a-b)[0]
    }

    while(res.length < n){
        const arr = primes.map((v,i) => res[idx[i]] * v)
        const min = getMin(arr)
        const minIndex = arr.indexOf(min)
        idx[minIndex]++
        if (!obj[arr[minIndex]]) {
            res.push(arr[minIndex])
            obj[arr[minIndex]] = 1
        }
    }
    return res[res.length-1]
};
// @lc code=end
// console.log(nthSuperUglyNumber(12, [2,7,13,19]))
