/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let temp = []
    while(head) {
        temp.push(head.val)
        head= head.next
    }
    temp = [...temp.slice(0,m-1), ...temp.slice(m-1,n).reverse(), ...temp.slice(n)]
    let pre = new ListNode(temp.shift())
    let res = pre
    while(temp.length) {
        
        pre.next = new ListNode(temp.shift())
        pre = pre.next
    }
    return res
};
// @lc code=end

