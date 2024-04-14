/*
 * @lc app=leetcode.cn id=292 lang=javascript
 *
 * [292] Nim 游戏
 *
 * https://leetcode-cn.com/problems/nim-game/description/
 *
 * algorithms
 * Easy (69.78%)
 * Likes:    287
 * Dislikes: 0
 * Total Accepted:    41.6K
 * Total Submissions: 59.7K
 * Testcase Example:  '4'
 *
 * 你和你的朋友，两个人一起玩 Nim 游戏：桌子上有一堆石头，每次你们轮流拿掉 1 - 3 块石头。 拿掉最后一块石头的人就是获胜者。你作为先手。
 * 
 * 你们是聪明人，每一步都是最优解。 编写一个函数，来判断你是否可以在给定石头数量的情况下赢得游戏。
 * 
 * 示例:
 * 
 * 输入: 4
 * 输出: false 
 * 解释: 如果堆中有 4 块石头，那么你永远不会赢得比赛；
 * 因为无论你拿走 1 块、2 块 还是 3 块石头，最后一块石头总是会被你的朋友拿走。
 * 
 * 
 */

/**
 * 
 * 面对4的整数倍的人永远无法翻身，
 * 你拿N根对手就会拿4-N根，
 * 保证每回合共减4根，
 * 你永远对面4倍数，直到4. 相反，
 * 如果最开始不是4倍数，你可以拿掉刚好剩下4倍数根，
 * 让他永远对面4倍数 
 */
 // @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    if (n%4 === 0) return false
    else return true
};
// @lc code=end

