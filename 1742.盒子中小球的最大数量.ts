/*
 * @lc app=leetcode.cn id=1742 lang=typescript
 *
 * [1742] 盒子中小球的最大数量
 */

// @lc code=start
function countBalls(lowLimit: number, highLimit: number): number {
    let obj: any = {}
    for (let i = lowLimit; i <= highLimit;i++) {
        const current = i.toString().split("").reduce((a,b) => a + Number(b), 0)
        obj[current] = obj[current] ? obj[current] + 1 : 1
    }

    return Math.max(...(Object.values(obj) as number[]))
};
// @lc code=end