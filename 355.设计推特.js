/*
 * @lc app=leetcode.cn id=355 lang=javascript
 *
 * [355] 设计推特
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Twitter = function() {
    this.hash = {}
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    userId = userId + ''

    this.hash[userId] = this.hash[userId] || {
        list: [],
        follows: []
    }
    this.hash[userId].list.push({
        twitter: tweetId + '',
        time: +new Date()
    })
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    userId = userId + ''
    let list = []
    let ids = [userId, ...this.hash[userId].follows]
    for (let key in this.hash) {
        if (ids.includes(key)) {
            list.push(...this.hash[key].list)
        }
    }
    return list.sort((a,b) => a.time - b.time).map(v => v.twitter)
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    this.hash[userId] = this.hash[userId] || {
        list: [],
        follows: []
    }
    this.hash[userId].follows.push(followeeId + '')
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    this.hash[followerId] = this.hash[followerId] || {
        list: [],
        follows: []
    }
    const index = this.hash[followerId].follows.indexOf(followeeId + '')
    if (index !== -1) {
        this.hash[followerId].follows.splice(index, 1)
    }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end

