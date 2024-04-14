/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const check = (root, key) => {
    if (root === null) return null
    if (root.val === key) return root
    return check(root.left, key) || check(root.right, key)
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let qwe = root
    while(qwe) {
        if (qwe.val > p.val && qwe.val > q.val) {
            qwe = qwe.left
        } else if (qwe.val < p.val && qwe.val < q.val) {
            qwe = qwe.right
        } else {
            return qwe
        }
    }
    
};
// @lc code=end

