/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let base = [0, 0, 0]
    let flag = true
    while(bills.length && flag) {
        let item = bills.shift()
        if (item === 5) {
            base[0]++
        } else if (item === 10) {
            if (base[0]) {
                base[0]--
                base[1]++
            } else {
                flag = false
            }
        } else {
            if (base[1]) {
                if (base[0]) {
                    base[2]++
                    base[0]--
                    base[1]--
                } else {
                    flag = false
                }
            } else {
                if (base[0] >= 3) {
                    base[0] -= 3
                    base[2]++
                } else {
                    flag = false
                }
            }
        }
    }
    return flag
};
// @lc code=end

console.log(lemonadeChange([5,5,5,10,5,5,10,20,20,20]));