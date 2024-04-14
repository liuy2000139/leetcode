/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let str = []
    let idx = null
    for(let i=0;i<list1.length;i++) {
        if (list2.includes(list1[i])) {
            if (idx === null) {
                idx = i + list2.indexOf(list1[i])
                str = [list1[i]]
            } else {
                if (i + list2.indexOf(list1[i]) === idx) {
                    str.push(list1[i])
                }
                if (i + list2.indexOf(list1[i]) < idx) {
                    str = [list1[i]]
                    idx = i + list2.indexOf(list1[i])
                }
            }
        }
    }
    return str
};
// @lc code=end

