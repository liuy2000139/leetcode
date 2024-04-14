/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
    let arr = []
    while(head) {
        arr.push(head.val)
        head = head.next
    }
    arr.splice(0-n, 1)
    let deal = () => {
        if (arr.length) {
            return {
                val: arr.shift(),
                next: deal()
            }
        } else {
            return null
        }
    }
    return arr.length ? deal() : null

};
// @lc code=end
