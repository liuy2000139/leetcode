/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.arr = nums.sort((a,b) => b-a)
    this.current = null
    this.k = k
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.arr = [val, ...this.arr].sort((a,b) => b-a)
    this.current = this.arr[this.k-1]
    return this.current
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

