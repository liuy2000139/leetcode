/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let l = new ListNode(), r = new ListNode, a = l, b = r
    while(head) {
        if (head.val < x) {
            l.next = head
            l = l.next
        } else {
            r.next = head
            r = r.next
        }
        head = head.next
    }
    r.next = null
    l.next = b.next
    return a.next
};
// @lc code=end

