/*
 * @lc app=leetcode.cn id=338 lang=typescript
 *
 * [338] 比特位计数
 */



// @lc code=start
function countBits(n: number): number[] {
    // const fn = (n: number) => {
    //     if (n <= 1) return `${n}`
    //     let res = ""
    //     let base = n
    //     while(base > 1) {
    //         res += fn(Math.floor(base / 2))
    //         base = base % 2
    //     }
    //     res += base
    
    //     return res
    // }
    let res: string[] = []
    for (let i = 0;i<=n;i++) {
        res.push(i.toString(2))
    }
    return res.map((t) => t.split("").filter((v) => v === "1").length)

};
// @lc code=end
