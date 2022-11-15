/**

  날짜 : 2022.07.05 | 2022.10.11
  난이도 : Easy
  제목 : 94. Binary Tree Inorder Traversal
  URL : https://leetcode.com/problems/binary-tree-inorder-traversal/

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function (root) {
  let output = [];
  inorderDfs(root, output);
  return output;
};

function inorderDfs(tree, output) {
  if (tree === null) {
    return;
  }
  inorderDfs(tree.left, output);
  output.push(tree.val);
  inorderDfs(tree.right, output);
}