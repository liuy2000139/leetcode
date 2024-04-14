/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l = [], r= []
    while(l1) {
        l.push(l1.val)
        l1 = l1.next
    }
    while(l2) {
        r.push(l2.val)

        l2 = l2.next
    }
    let len = Math.max(l.length,r.length)
    l = l.fill(0, l.length, len)
    r = r.fill(0, r.length, len)
    let sum = []
    let rest = 0
    for (let i=0;i<len;i++) {
        let a = (l[i] || 0) + (r[i] || 0)
        sum.push((a+rest)%10)
        rest = Math.floor((a+rest)/10)

    }
    if (rest) sum.push(rest)
    
    let deal = list => {
        if (list.length) {
            return {
                val: list.shift(),
                next: deal(list)
            }
        } else {
            return null
        }
    }
    return {
        val: sum.shift(),
        next: deal(sum)
    }
};
// @lc code=end