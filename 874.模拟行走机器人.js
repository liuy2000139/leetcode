/*
 * @lc app=leetcode.cn id=874 lang=javascript
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    let max = 0
    let x = 0, y = 0
    let dx = [0, 1, 0, -1], dy = [1, 0, -1, 0]
    let dir = 0
    while(commands.length) {
        let current = commands.shift()
        if (current === -1) {
            dir = (dir + 1) % 4
        } else if (current === -2) {
            dir = (dir + 3) % 4
        } else {
            for (let i=0;i<current;i++) {
                let nx = x + dx[dir], ny = y + dy[dir]
                if (obstacles.find(v => v[0] === nx && v[1] === ny)) {
                    x = nx - dx[dir]
                    y = ny - dy[dir]
                    max = Math.max(max, x*x+y*y)
                    break
                } else {
                    x = nx
                    y = ny
                    max = Math.max(max, x*x+y*y)
                }
            }
        }
        // console.log(pos)
    }
    return max
};
// @lc code=end

// console.log(robotSim([4,-1,4,-2,4], [[2,4]]))