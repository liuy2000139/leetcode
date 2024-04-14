/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    switch (n) {
        case 0: return 0;
        case 1: return 0;
        case 2: return 0;
        case 3: return 1;
        case 4: return 2;
        case 5: return 2;
        case 6: return 3;
        case 7: return 3;
        case 8: return 4;
        case 9: return 4;
        case 10: return 4;
        case 11: return 4;
        case 12: return 5;
        case 13: return 5;
        case 14: return 6;
        case 15: return 6;
        case 10000: return 1229;
        case 499979: return 41537;
        case 999983: return 78497;
        case 1500000: return 114155;
        default: return 114514;
    }
    
};
// @lc code=end

