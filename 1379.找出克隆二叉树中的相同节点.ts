/*
 * @lc app=leetcode.cn id=1379 lang=typescript
 *
 * [1379] 找出克隆二叉树中的相同节点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function getTargetCopy(original: TreeNode | null, cloned: TreeNode | null, target: TreeNode | null): TreeNode | null {
    // if (cloned === null) return null
    // if (cloned.val === target.val) return cloned
    // return getTargetCopy(original, cloned.left, target) || 
    // getTargetCopy(original, cloned.right, target)
    if (!original) return null
    if (original === target) return cloned
    return getTargetCopy(original.left, cloned.left, target) || 
    getTargetCopy(original.right, cloned.right, target)
};
// @lc code=end

