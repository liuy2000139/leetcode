/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    // let res = {}
    // nums.sort((a,b) => a-b)
    // let len = nums.length
    // for (let i=0;i<len-3;i++) {
    //     for (let j=i+1;j<len-2;j++) {
    //         let z=len-1
    //         for (let k = j+1;k<z;k++) {
    //             let key = [nums[i],nums[j],nums[k],nums[z]].join(',')
    //             if (nums[i] + nums[j] + nums[k] + nums[z] < target) {
    //             }
    //             while((nums[i]+nums[j]+nums[k]+nums[z]) > target && k<z) {
    //                 z--
    //             }
    //             if (k>=z) break

    //             key = [nums[i],nums[j],nums[k],nums[z]].join(',')
    //             if (nums[i] + nums[j] + nums[k] + nums[z] === target) {
    //                 res[key] = 1
    //             }
    //         }
    //     }
    // }
    // return Object.keys(res).map(v => v.split(','))
    // const res = []
    // if (nums.length < 4) return []
    // nums.sort((a,b) => a-b)
    // for (let a = 0; a < nums.length - 3; a++) {
    //     if (nums[a] > target) continue
    //     for (let b = a + 1;b < nums.length - 2;b++) {
    //         if (nums[a] + nums[b] > target) continue
    //         for (let c = b+1;c<nums.length - 1;c++) {
    //             if (nums[a] + nums[b] + nums[c] > target) continue
    //             const diff = target - (nums[a] + nums[b] + nums[c])
    //             const idx = nums.lastIndexOf(diff)
    //             if (idx > c) {
    //                 res.push([nums[a], nums[b], nums[c], nums[idx]])
    //             }
    //         }
    //     }
    // }
    // return res

    const res = []
    const temp = {}
    if (nums.length < 4) return []
    nums.sort((a,b) => a-b)
    for (let a = 0; a < nums.length - 3; a++) {
        // if (nums[a] * 4 > target) continue
        for (let b = a + 1;b < nums.length - 2;b++) {
            // if (nums[a] + nums[b] * 3 > target) continue
            let l = b + 1, r = nums.length - 1
            while(l < r) {
                // if (nums[a] + nums[b] + nums[l] * 2 > target) break
                const current = [nums[a], nums[b], nums[l], nums[r]]
                const sum = nums[a] + nums[b] + nums[l] + nums[r]
                if (sum === target) {
                    if (!temp[current.join(",")]) {
                        temp[current.join(",")] = 1
                        res.push(current)
                    }
                    l++
                } else if (sum < target) {
                    l++
                } else {
                    r--
                }
            }
        }
    }
    return res
}
// @lc code=end

// console.log(fourSum([1,0,-1,0,-2,2], 0))
// console.log(fourSum([1,-2,-5,-4,-3,3,3,5], -11))