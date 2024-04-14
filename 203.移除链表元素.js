/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let node = head
    if (node === null) return null
    while(node && node.val === val) {
        if (node.next === null) {
            return null
        } else {
            node.val = node.next.val
            node.next = node.next.next
        }
        
    }
    while(node && node.next) {
        if (node.next.val === val) {
            node.next = node.next.next
        } else {
            node = node.next
        }
    }
    return head
};
// @lc code=end

