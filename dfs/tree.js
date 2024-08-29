function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)

}

// const list = [5,4,8,11,null,13,4,7,2,null,null,5,1]
const generateTree = (list = []) => {
  let root = new TreeNode(list.shift())
  let nodes = [root]

  while(list.length) {
    let temp = nodes.map(node => {
      let val = list.shift()
      if (val !== null) {
        node.left = new TreeNode(val)
      } else {
        node.left = null
      }
      val = list.shift()
      if (val !== null) {
        node.right = new TreeNode(val)
      } else {
        node.right = null
      }
      return [node.left, node.right].filter(item => item !== null)
    })
    nodes = temp.flat()
  }
  
  return root
}

// console.log(generateTree(list))
module.exports = generateTree