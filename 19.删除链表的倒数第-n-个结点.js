/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let len = 0
    let p = head
    while(p) {
        len++
        p = p.next
    }
    if (len === 1) return null
    if (len === n) return head.next
    p = head
    let current = 1
    while(current < len - n) {
        p = p.next
        current++
    }
    p.next = p.next.next
    return head
};
// @lc code=end

