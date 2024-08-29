/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


const fn = (root) => {
  if (!root) return []

  let left = fn(root.left)
  let right = fn(root.right)


  return [...left, root, ...right]
}
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  if (!root) return root
  const list = fn(root)

  const list2 = list.map(v => v.val).sort((a,b) => a - b)

  

  let nodes = []
  list.map((v,i) => {
    if (v.val !== list2[i]) {
      nodes.push(v)
    }
  })


  

  const [a,b] = nodes
  let val = a.val
  a.val = b.val
  b.val = val
  return root
};