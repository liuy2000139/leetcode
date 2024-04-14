/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const fn = (i,j, s, db = []) => {
        // console.log(i,j,s, db)
        if (db.includes(`${i}-${j}`)) {
            return false
        }
        db = [...db,`${i}-${j}`]
        if (s.length === 0) {
            return true
        }
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) {
            return false
        }
        if (board[i][j] === s[0]) {
            // db.push(...[
            //     `${i}-${j-1}`,
            //     `${i}-${j+1}`,
            //     `${i-1}-${j}`,
            //     `${i+1}-${j}`
            // ])
            return fn(i, j+1, s.slice(1), db) ||
            fn(i, j-1, s.slice(1), db) || 
            fn(i+1, j, s.slice(1), db) || 
            fn(i-1, j, s.slice(1), db)
        } else {
            return false
        }
    }
    for (let i=0;i<board.length;i++) {
        for (let j=0;j<board[i].length;j++) {
            if (fn(i,j,word)) {
                return true
            }
        }
    }
    
    return false
};

// @lc code=end

// console.log(exist([["a","b"],["c","d"]], 'acdb'))