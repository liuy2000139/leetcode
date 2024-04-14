/*
 * @lc app=leetcode.cn id=1859 lang=typescript
 *
 * [1859] 将句子排序
 */

// @lc code=start
function sortSentence(s: string): string {
    let res: string[] = []
    let arr: string[] = s.split(" ")
    for (let i = 0; i < arr.length; i++) {
        res[Number(arr[i].charAt(arr[i].length-1))] = arr[i].slice(0, -1)
    }
    return res.slice(1).join(" ")
};
// @lc code=end

