/*
 * @lc app=leetcode.cn id=661 lang=javascript
 *
 * [661] 图片平滑器
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    let len = M.length
    let jLen = M[0].length
    M.push([...new Array(jLen)].map(v=> v = +!!v))
    M.unshift([...new Array(jLen)].map(v=> v = +!!v))
    M = M.map(v => {
        return [0, ...v, 0]
    })
    let arr = [...M.map(v => [...v])]
    console.log(arr)
    for (let i=1;i<len+1;i++) {
        for (let j=1;j<jLen+1;j++) {
            let sum = (M[i-1][j-1] + 
                M[i-1][j] + 
                M[i-1][j+1] + 
                M[i][j-1] + 
                M[i][j] + 
                M[i][j+1] +
                M[i+1][j-1] + 
                M[i+1][j] + 
                M[i+1][j+1])
            let count = 9
            if (len === 1 || jLen == 1) {
                if (len === 1 && jLen === 1) {
                    count = 1
                }
                if (len ===1 && jLen !== 1) {
                    if (j ===1 || j === jLen) {
                        count = 2
                    } else {
                        count = 3
                    }
                }
                if (jLen === 1 && len !== 1) {
                    if (i ===1 || i === len) {
                        count = 2
                    } else {
                        count = 3
                    }
                }
            } else {
                if (i === 1 || i === len) {
                    if (j ===1 || j === jLen) {
                        count = 4
                    } else {
                        count = 6
                    }
                } else {
                    if (j ===1 || j === jLen) {
                        count = 6
                    } else {
                        count = 9
                    }
                }
            }
            
            console.log(sum, count)
            arr[i][j] = Math.floor(sum/count)
        }
    }
    arr.pop()
    arr.shift()
    arr = arr.map(v => {
        v.pop()
        v.shift()
        return v
    })
    return arr
};
// @lc code=end

console.log(imageSmoother([[3], [2]]))