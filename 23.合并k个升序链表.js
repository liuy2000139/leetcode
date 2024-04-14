/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 var mergeTwoLists = function(list1, list2) {
    let res = {}
    let p = res
    if (!list1 && !list2) return null
    while(list1 && list2) {
        if (list1.val <= list2.val) {
            p.next = list1
            list1 = list1.next
        } else {
            p.next = list2
            list2 = list2.next
        }
        p = p.next
    }
    if (list1) p.next = list1
    if (list2) p.next = list2
    return res.next
};
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    lists = lists.filter(el => !!el)
    if (!lists.length) return null
    let res = lists[0]
    for (let i = 1; i< lists.length;i++) {
        res = mergeTwoLists(res, lists[i])
    }
    return res
    
};
// @lc code=end

