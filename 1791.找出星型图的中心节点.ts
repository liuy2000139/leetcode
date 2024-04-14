/*
 * @lc app=leetcode.cn id=1791 lang=typescript
 *
 * [1791] 找出星型图的中心节点
 */

// @lc code=start
function findCenter(edges: number[][]): number {
    let arr: number[] = []
    for (let i = 0; i < edges.length;i++) {
        arr[edges[i][0]] = (arr[edges[i][0]] || 0) + 1
        arr[edges[i][1]] = (arr[edges[i][1]] || 0) + 1
    }
    return arr.findIndex((t: number) => t === edges.length)
};
// @lc code=end

