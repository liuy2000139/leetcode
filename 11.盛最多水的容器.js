/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // let res = 0
    // for (let i = 0; i< height.length - 1;i++) {
    //     let base = null
    //     for (let j = height.length - 1;j>i;j--) {
    //         if (base) {
    //             if (Math.max(...height.slice(i+1, j+1)) < height[base]) {
    //                 break
    //             }
    //             if (height[j] <= height[base]) {
    //                 continue
    //             }
    //         }
            
    //         const current = (j - i) * Math.min(height[i], height[j])
    //         if (current > res) {
                
    //             res = current
    //             base = j
    //         }
    //     }
    // }
    // return res
    let l = 0, r = height.length - 1
    let res = Math.min(height[l], height[r]) * (r - l)
    while(l < r) {
        if (height[r] < height[l]) {
            r--
        } else {
            l++
        }

        const sum = Math.min(height[l], height[r]) * (r - l)
        if (sum >= res) {
            res = sum
        }
    }
    return res
};
// @lc code=end

// console.log(maxArea([1,1000,1000,6,2,5,4,8,3,7]))