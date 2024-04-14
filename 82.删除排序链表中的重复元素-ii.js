/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const str = JSON.stringify(head)
    let p = head
    if (!head) {
        return head
    }
    let count = {}
    while(head) {
        count[head.val] = count[head.val] || 0
        count[head.val]++
        head = head.next
    }
    while(p && count[p.val] > 1) {
        p = p.next
    }
    if (!p) return p
    let q = p
    while(p.next) {
        if (count[p.next.val] > 1) {
            p.next = p.next.next
        } else {
            p = p.next
        }
    }
    return q
};
// @lc code=end

