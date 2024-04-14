/*
 * @lc app=leetcode.cn id=999 lang=javascript
 *
 * [999] 可以被一步捕获的棋子数
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let ri = board.findIndex(v => v.includes('R'))
    let ci = board[ri].indexOf('R')
    let count = 0
    let r = board[ri],c = board.map(v => v[ci])
    for (let i=ci;i>=0;i--) {
        if (r[i] === 'p') {
            count++
            // console.log(1)
            break
        } else if (r[i] === 'B') {
            break
        }
    }
    for (let i=ci+1;i<8;i++) {
        if (r[i] === 'p') {
            count++
            // console.log(2)
            break
        } else if (r[i] === 'B') {
            break
        }
    }
    for (let i=ri;i>=0;i--) {
        if (c[i] === 'p') {
            count++
            // console.log(3)
            break
        } else if (c[i] === 'B') {
            break
        }
    }
    for (let i=ri+1;i<8;i++) {
        if (c[i] === 'p') {
            count++
            // console.log(4)
            break
        } else if (c[i] === 'B') {
            break
        }
    }
    return count
};
// @lc code=end

