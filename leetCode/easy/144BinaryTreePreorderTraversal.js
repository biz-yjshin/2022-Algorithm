/**

  날짜 : 2022.12.02
  난이도 : Easy
  제목 : 144. Binary Tree Preorder Traversal
  URL : https://leetcode.com/problems/binary-tree-preorder-traversal/

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
 var preorderTraversal = function(root) {
  let res = [];
  getTree(root, res);
  return res;
};

let getTree = function (root, res) {
  if (!root) return;
  res.push(root.val);
  getTree(root.left, res);
  getTree(root.right, res);
};