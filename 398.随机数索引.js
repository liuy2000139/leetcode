/*
 * @lc app=leetcode.cn id=398 lang=javascript
 *
 * [398] 随机数索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    let obj = {}
    nums.map((v, i) => {
        obj[v] = obj[v] ? obj[v].concat(i) : [i]
    })
    this.obj = obj
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    const arr = this.obj[target]
    const length = arr.length

    const index = Math.floor(Math.random() * length)
    return arr[index]
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
// @lc code=end

// let sol = new Solution([1,2,3,3,3])
// sol.pick(3)
// sol.pick(3)
// sol.pick(3)