/*
 * @lc app=leetcode.cn id=1669 lang=javascript
 *
 * [1669] 合并两个链表
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
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let pos = list1
    let pos1 = null
    let pos2 = null
    for (let i=0;i<=b;i++) {{
        if (i === a-1) {
            pos1 = pos
        }
        if (i===b) {
            pos2 = pos
        }
        pos = pos.next
    }}
    pos1.next = list2
    let pos3 = pos1.next
    while(pos3.next) {
        pos3 =pos3.next
    }
    pos3.next = pos2.next
    return list1

};
// @lc code=end

