/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let p = digits.length - 1
  while(p >= 0) {
    console.log(p)
    if (digits[p] !== 9) {
      digits[p] += 1
      return digits
    } else {
      digits[p] = 0
      if (p === 0) {
        digits.unshift(1)
      }
      p--
    }
  }
  return digits
  // const length = digits.length;
  // for(let i = length - 1; i>=0;i--) {
  //   if (digits[i] !== 9) {
  //     digits[i] += 1;
  //     break;
  //   } else {
  //     digits[i] = 0;
  //     if (i === 0) {
  //       digits.unshift(1)
  //     }
  //   }
  // }
  // return digits;
};
// @lc code=end
// console.log(plusOne([9,9]))