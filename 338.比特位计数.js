/*
 * @lc app=leetcode.cn id=338 lang=typescript
 *
 * [338] 比特位计数
 */
var fn = function (n) {
    if (n <= 1)
        return "" + n;
    var res = "";
    var base = n;
    while (base > 1) {
        res += fn(Math.floor(base / 2));
        base = base % 2;
    }
    res += base;
    return res;
};
// @lc code=start
function countBits(n) {
    var res = [];
    for (var i = 0; i <= n; i++) {
        res.push(fn(i));
    }
    return res.map(function (t) { return t.split("").filter(function (v) { return v === "1"; }).length; });
}
;
// @lc code=end
console.log(countBits(2));
