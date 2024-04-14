/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let res = []
    while(n > 0) {
        res.unshift(
            n%15 === 0 ? 'FizzBuzz' :
                n%5 === 0 ? 'Buzz' : 
                    n%3 === 0 ? 'Fizz' : n.toString()
        )
        n--
    }

    return res
};
// @lc code=end

