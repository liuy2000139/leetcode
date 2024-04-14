/*
 * @lc app=leetcode.cn id=970 lang=javascript
 *
 * [970] 强整数
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    let res = []
    let i=0
    if (y === 1 && x !== 1) {
        while(Math.pow(x,i)+1 <= bound) {
            res.push(Math.pow(x,i) + 1)
            i++
        }
    } else if (x === 1 && y !== 1) {
        while(Math.pow(y,i)+1 <= bound) {
            res.push(Math.pow(y,i) + 1)
            i++
        }
    } else if (x === y && x === 1) {
        if (bound >=2) return [2]
        else return []
    } else {
        while(Math.pow(x,i) <= bound) {
            let j=0
            while(Math.pow(x,i) + Math.pow(y,j) <= bound) {
                res.push(Math.pow(x,i) + Math.pow(y,j))
                
                j++
            }
    
            i++
        }
    }
    

    return [...new Set(res)]
};
// @lc code=end
console.log(powerfulIntegers(1,1,2))
