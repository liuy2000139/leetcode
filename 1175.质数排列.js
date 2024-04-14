/*
 * @lc app=leetcode.cn id=1175 lang=javascript
 *
 * [1175] 质数排列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
    if (n <=1) return 1
    let arr = []
    for (let i=1;i<=n;i++) {
        if (isPrimeNum(i)) arr.push(i)
    }
    let rest = n - arr.length
    let max = Math.max(rest, arr.length)
    let base = [BigInt('0'), BigInt('1')]
    for (let i=2;i<=max;i++) {
        let number = base[i-1] * BigInt(i.toString())
        base.push(BigInt(number))
    }
    let count = base[rest] * base[arr.length]
    let a = (Math.pow(10, 9) + 7).toString()
    return parseInt(count%BigInt(a))
};
function isPrimeNum(num){
    return !/^.?$|^(..+?)\1+$/.test(Array(num + 1).join('1'))
}
// @lc code=end
console.log(numPrimeArrangements(100))
