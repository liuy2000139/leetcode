/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3) return false
    let base = null
    for (let i = 1;i<arr.length-1;i++) {
        if (arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
            base = i
            break
        } else if (arr[i] <= arr[i-1]) {
            base = null
            break
        }
    }
    // console.log(base)
    if (base === null) return false
    let rest = arr.slice(base)
    if (rest.length !== new Set(rest).size) return false
    return rest.join(' ') === rest.sort((a,b) => b-a).join(' ')
};
// @lc code=end

// console.log(validMountainArray([0,1, 1,2,4,2,1]))