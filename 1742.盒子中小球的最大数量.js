/*
 * @lc app=leetcode.cn id=1742 lang=typescript
 *
 * [1742] 盒子中小球的最大数量
 */
// @lc code=start
function countBalls(lowLimit, highLimit) {
    var obj = {};
    for (var i = lowLimit; i <= highLimit; i++) {
        var current = i.toString().split("").reduce(function (a, b) { return a + Number(b); }, 0);
        obj[current] = obj[current] ? obj[current] + 1 : 1;
    }
    return Math.max.apply(Math, Object.values(obj));
}
;
// @lc code=end
