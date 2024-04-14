/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 *
 * https://leetcode-cn.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (50.52%)
 * Likes:    261
 * Dislikes: 0
 * Total Accepted:    58.7K
 * Total Submissions: 115.6K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 
 * 本题中，一棵高度平衡二叉树定义为：
 * 
 * 
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 * 
 * 
 * 示例 1:
 * 
 * 给定二叉树 [3,9,20,null,null,15,7]
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7  
 * 
 * 返回 true 。
 * 
 * 示例 2:
 * 
 * 给定二叉树 [1,2,2,3,3,null,null,4,4]
 * 
 * ⁠      1
 * ⁠     / \
 * ⁠    2   2
 * ⁠   / \
 * ⁠  3   3
 * ⁠ / \
 * ⁠4   4
 * 
 * 
 * 返回 false 。
 * 
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let res = true
    if (!root) {
        return true
    }
    res = Math.abs(getDeep(root.left) - getDeep(root.right)) <= 1
    res = res && isBalanced(root.left) && isBalanced(root.right)
    return res
};
var getDeep = function(node) {
    let deep = 1
    if (node === null) {
        return 1
    } else {
        deep += Math.max(getDeep(node.left), getDeep(node.right))
    }
    return deep
}
// @lc code=end

const root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: {
                val: 4, left: null, right: null
            },
            right: {
                val: 4, left: null, right: null
            }
        },
        right: {
            val: 3, left: null, right: null
        }
    },
    right: {
        val: 2, left: null, right: null
    }
}