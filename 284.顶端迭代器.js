/*
 * @lc app=leetcode.cn id=284 lang=javascript
 *
 * [284] 顶端迭代器
 */

// @lc code=start
/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
    let arr = []
    while(iterator.hasNext()) {
        arr.push(iterator.next())
    }
    this.arr = arr
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
    const t = this.arr[0]
    return t
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
    let t = this.arr.shift()
    return t
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
    return this.arr.length > 0
};

/** 
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
// @lc code=end

