/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const getIdx = num => {
    if (num < 3) return 0
    if (num < 6) return 3
    if (num < 9) return 6
}
let count = 0

const getList = (i, j, board, dp, nums) => {
    const row = board[i]
    const col = board.map(t => t[j])
    const gridRowIdx = getIdx(i)
    const gridColIdx = getIdx(j)
    const grid = board.slice(gridRowIdx, gridRowIdx + 3).map(t => t.slice(gridColIdx, gridColIdx + 3))
    let selected = []
    dp.forEach((t, idx) => {
        if (t[0] === i || t[1] === j) {
            selected.push(nums[idx])
        }
    })
    const list = [row, col, grid, selected].flat(2).filter(t => t !== ".").map(t => +t)
    return [...new Set(list)]
}

const updateDp = (i, dp, nums) => {

}
var solveSudoku = board => {
    const dp = []
    const nums = []
    const baseNums = [1,2,3,4,5,6,7,8,9]
    for (let i=0;i<9;i++) {
        for(let j=0;j<9;j++) {
            if (board[i][j] === ".") {
                dp.push([i, j])
            }
        }
    }
    for (let k=0;k<dp.length;k++) {
        console.log(k)
        // console.log(k, dp, nums.join(" "))
        const [i,j] = dp[k]
        const list = getList(i,j, board, dp, nums)
        if (list.length === 9) {
            let prevIdx = k-1
            while (prevIdx >= 0) {
                let prevNum = nums[prevIdx]
                const prevList = getList(dp[prevIdx][0], dp[prevIdx][1], board, dp, nums)
                if (prevList.length === 9) {
                    prevIdx--
                } else {
                    const find = baseNums.find(t => t > prevNum && !prevList.includes(t))
                    if (!find) {
                        prevIdx--
                    } else {
                        nums.splice(prevIdx, 99)
                        nums.push(find)
                    }
                }
            }
            k = prevIdx

        } else {
            const find = baseNums.find(t => !list.includes(t)) 
            nums.push(find)
        }
    }
    console.log(dp)
    console.log(nums.join(" "))
}
console.time("task")
const input = [
    // ["5","3","4","6","7","8","9","1","2"],
    [".",".",".",".",".",".",".",".","."],
    [".","7","2","1","9","5","3","4","8"],
    [".","9","8","3","4","2","5","6","7"],
    ["8","5","9","7","6","1","4","2","3"],
    ["4","2","6","8","5","3","7","9","1"],
    ["7","1","3","9","2","4","8","5","6"],
    ["9","6","1","5","3","7","2","8","4"],
    ["2","8","7","4","1","9","6","3","5"],
    ["3","4","5","2","8","6","1","7","9"]
]
// const input = [
//     ["5","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]
// ]
solveSudoku(input)
console.timeEnd("task")
input.forEach(t => {
    // console.log(t.join(" "))
})