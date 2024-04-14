/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.arr = [...nums]
    this.origin = [...nums]
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.arr = this.origin
    return this.arr
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let arr = [this.arr[0]]
    let len = this.arr.length
    for (let i=1;i<len;i++) {
        if (Math.random() > 0.5) {
            let random = Math.floor(Math.random() * 10) % arr.length
            let temp = arr[random]
            arr[random] = this.arr[i]
            arr.push(temp)
        } else {
            arr.push(this.arr[i])
        }
    }
    this.arr = arr
    return this.arr
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end

