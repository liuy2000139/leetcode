/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start

var RecentCounter = function() {
    this.arr = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    while(this.arr.length) {
        if (this.arr[0] < t-3000 || this.arr[0] > t) {
            this.arr.shift()
        } else {
            break
        }
    }
    
    this.arr.push(t)

    return this.arr.length
}
/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end
// let a = new RecentCounter()
// console.log(a.ping())
