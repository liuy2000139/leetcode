/*
 * @lc app=leetcode.cn id=1656 lang=javascript
 *
 * [1656] 设计有序流
 */

// @lc code=start
/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.pts = 1
    this.arr = []
    this.arr[n+1] = null
};

/** 
 * @param {number} id 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(id, value) {
    this.arr[id] = value
    let res = []
    if (this.arr[this.pts]) {
        for (let i=this.pts;i<this.arr.length-1;i++) {
            if (this.arr[i]) {
                res.push(this.arr[i])
            } else {
                this.pts = i
                break
            }
        }
    }
    return res
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */
// @lc code=end

