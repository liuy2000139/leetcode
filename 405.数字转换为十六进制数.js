/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num == 0) return "0";
    let hex = "0123456789abcdef", ans = "";
    while(num && ans.length < 8){
        ans = hex[num & 0xf] + ans;
        num >>=  4; 
    }
    return ans;
};
// @lc code=end

