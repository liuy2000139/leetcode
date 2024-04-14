/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head, fast = head
    while(fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    let left = head, right = slow.next
    slow.next = null

    let pre = head, sec = right
    let temp = []
    let pos = right
    while(pos) {
        temp.unshift(pos)
        pos = pos.next
    }
    while(pre) {
        let next = pre.next
        pre.next = temp.shift() || null
        if (pre.next) {
            pre.next.next = next
            pre = pre.next.next
        } else {
            pre = pre.next
        }
        
        
    }
};
// @lc code=end

