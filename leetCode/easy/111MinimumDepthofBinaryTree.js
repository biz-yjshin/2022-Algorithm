/**

  날짜 : 2022.11.28
  난이도 : Easy
  제목 : 111. Minimum Depth of Binary Tree
  URL : https://leetcode.com/problems/minimum-depth-of-binary-tree/

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
 * @return {number}
 */

 var minDepth = function(root) {
  if (!root) return 0;
  let leftDep = minDepth(root.left);
  let rightDep = minDepth(root.right);
  return 1 + (Math.min(leftDep, rightDep) || Math.max(leftDep, rightDep));
};

// 아래 코드로 풀었을 때 1이 나왔을 때가 문제였다.
// 그래서 다른 사람들의 코드를 살펴보다가 +1을 한 부분을 앞으로 빼고 0이면 max 를 가져와줬다.
// max로 가져오는 것까지는 생각했지만 이 +1을 빼낸다는 것과 min == 1 로 풀려고 했던 점....성장하자..
//  var minDepth = function(root) {
//   if (!root) return 0;
//   return Math.min(minDepth(root.left) + 1, minDepth(root.right) + 1);
// };