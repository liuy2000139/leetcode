/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let m = board.length, n = board[0].length
    let temp = []
    let done = new Set()
    for (let i=0;i<m;i++) {
        for (let j=0;j<n;j++) {
            let key = `${i}-${j}`
            if (i ===0 || i === m-1 || j === 0 || j === n-1) {
                if (board[i][j] === 'O') {
                    !temp.includes(key) && temp.push(key)
                }
            }
        }
    }
    while(temp.length) {
        let current = temp.shift()
        done.add(current)
        const [x,y] = current.split('-').map(v => parseInt(v))
        const xys = [
            [x-1, y],
            [x+1, y],
            [x, y-1],
            [x, y+1]
        ].filter(v => v[0] >= 0 && v[0] < m && v[1] >= 0 && v[1] < n)
        xys.forEach(t => {
            let key = `${t[0]}-${t[1]}`
            if (board[t[0]][t[1]] === 'O' && !done.has(key)) {
                !temp.includes(key) && temp.push(key)
                done.add(key)
            }
        })
    }
    for (let i=0;i<m;i++) {
        for (let j=0;j<n;j++) {
            let key = `${i}-${j}`
            if (!done.has(key)) {
                board[i][j] = 'X'
            }
        }
    }
    // console.log(board)
};
// @lc code=end

// solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]])