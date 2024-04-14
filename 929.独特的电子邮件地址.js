/*
 * @lc app=leetcode.cn id=929 lang=javascript
 *
 * [929] 独特的电子邮件地址
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let res = []

    emails.forEach(v => {
        v = v.split('@')
        v[0] = v[0].replace(/(\.)|(\+.*)/g, '')
        let str = v.join('@')
        if (!res.includes(str)) {
            res.push(str)
        }
    })
    return res.length

};
// @lc code=end

// console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]))