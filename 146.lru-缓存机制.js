/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.cache = []
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const index = this.cache.findIndex(v => v[0] === key)
    const item = this.cache[index]
    if (index === -1) return -1
    else {
        this.cache.splice(index, 1)
        this.cache.push([key, item[1]])
        return item[1]
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const index = this.cache.findIndex(v => v[0] === key)
    if (index !== -1) this.cache.splice(index, 1)

    if (this.cache.length === this.capacity) {
        this.cache.shift()
    }
    this.cache.push([key, value])
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

