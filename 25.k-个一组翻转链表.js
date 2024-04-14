/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {ListNode} tail
 * @return {ListNode}
 */
 const reverseLink = (head, tail) => {
    let stack = []
    while(head) {
        stack.push(head)
        head = head.next
    }
    let res = new ListNode()
    let p = res
    while(stack.length) {
        p.next = stack.pop()
        p = p.next
    }
    p.next = tail
    return res.next
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var reverseKGroup = function(head, k) {
    let temp = head
    let count = 0
    while(temp) {
        count++
        temp = temp.next
    }
    if (count < k) return head
    temp = head
    count = k
    let next = null
    while(count > 1) {
        temp = temp.next
        count--
    }
    if (temp) {
        next = temp.next
        temp.next = null
    }
    
    const res = reverseLink(head, reverseKGroup(next, k))
    return res
};
// @lc code=end

