// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    const fn = (val, left, right) => {
        return {
            val,
            left: buildTree(left, left),
            right: buildTree(left, right),
        }
    }

    const root = preorder.shift()
    const index = inorder.indexOf(root)
    const left = inorder.slice(0, index)
    const right = inorder.slice(index+1)
    return fn(root, left, right)

};
// @lc code=end