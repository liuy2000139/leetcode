/*
 * @lc app=leetcode.cn id=1854 lang=typescript
 *
 * [1854] 人口最多的年份
 */

// @lc code=start
function maximumPopulation(logs: number[][]): number {
    let arr: number[] = []
    for (let i = 0;i<logs.length;i++) {
        for (let base = logs[i][0];base<logs[i][1];base++) {
            arr[base] = (arr[base] || 0) + 1
        }
    }
    
    const max = arr.filter((a) => Boolean(a)).sort((a,b) => b-a)[0]
    return arr.findIndex((a) => a === max)
};
// @lc code=end

