/*
 * @lc app=leetcode.cn id=1496 lang=javascript
 *
 * [1496] 判断路径是否相交
 */

// @lc code=start
/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    path = path.split('')
    return  path.map((t,i) => {
        let n=0,s=0,w=0,e=0
        let arr = path.slice(i)
        while(arr.length) {
            let v = arr.shift()
            if (v === 'N') {
                if (s>0) s--
                else n++
            }
            if (v === 'S') {
                if (n>0) n--
                else s++
            }
            if (v === 'W') {
                if (e>0) e--
                else w++
            }
            if (v === 'E') {
                if (w>0) w--
                else e++
            }
            if (n+s+e+w === 0) return 0
        }
        return n+s+w+e
    })
    .some(v => v===0)
};
// @lc code=end

console.log(isPathCrossing('NESWW'))