/*
 * @lc app=leetcode.cn id=289 lang=javascript
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let a=[],b=[],c=[],d=[],temp = []
    for (let i=0;i<board.length;i++) {
        for (let j=0;j<board[i].length;j++) {
            // if (i === 0) {
            //     temp = [board[i+1][j],board[i][j-1],board[i][j+1],board[i+1][j-1],board[i+1][j+1]].filter(v => v === 1)
            // } else if (i === board.length-1) {
            //     temp = [board[i-1][j],board[i][j-1],board[i][j+1],board[i-1][j-1],board[i-1][j+1]].filter(v => v === 1)
            // } else {
            //     temp = [board[i-1][j],board[i+1][j],board[i][j-1],board[i][j+1],board[i-1][j-1],board[i-1][j+1],board[i+1][j-1],board[i+1][j+1]].filter(v => v === 1)
            // }
            temp = [(board[i-1] || [])[j],(board[i+1] || [])[j],board[i][j-1],board[i][j+1],(board[i-1]||[])[j-1],(board[i-1]||[])[j+1],(board[i+1]||[])[j-1],(board[i+1]||[])[j+1]].filter(v => v === 1)
            if (board[i][j] === 0) {
                if (temp.length === 3) {
                    d.push(`${i}-${j}`)
                }
            } else {
                if (temp.length < 2) {
                    a.push(`${i}-${j}`)
                } else if (temp.length === 2 || temp.length === 3) {
                    b.push(`${i}-${j}`)
                } else if (temp.length > 3) {
                    c.push(`${i}-${j}`)
                }
            }
        }
    }
    // console.log(a,b,c,d)
    for (let i=0;i<board.length;i++) {
        for (let j=0;j<board[i].length;j++) {
            let str = `${i}-${j}`
            if (a.includes(str)) {
                board[i][j] = 0
            } else if (b.includes(str)) {
                board[i][j] = 1
            } else if (c.includes(str)) {
                board[i][j] = 0
            } else if (d.includes(str)) {
                board[i][j] = 1
            }
        }
    }
};
// @lc code=end
