/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1比特与2比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let flag = true
    for(let i=0;i<bits.length-1;i++) {
        if (bits[i] === 0) {

        } else {
            if (i === bits.length -2)  flag = false
            else i++
        }
    }
    return flag && (bits[bits.length-1] === 0)
};
// @lc code=end
console.log(isOneBitCharacter([1,0,0]))
