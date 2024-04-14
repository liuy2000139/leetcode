/*
 * @lc app=leetcode.cn id=811 lang=javascript
 *
 * [811] 子域名访问计数
 */

// @lc code=start
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let res = {}
    for (let i=0;i<cpdomains.length;i++) {
        let base = cpdomains[i].split(' ')
        let arr = base[1].split('.')
        let num = base[0]
        while(arr.length) {
            let v = arr.join('.')
            res[v] = res[v] ? parseInt(res[v]) + parseInt(num) : parseInt(num)
            arr.shift()
        }
    }
    res = Object.entries(res).map(v => {
        return [v[1], v[0]].join(' ')
    })
    return res
};
// @lc code=end
console.log(subdomainVisits(["9001 discuss.leetcode.com"]))
