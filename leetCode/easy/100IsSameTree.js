/**

  날짜 : 2022.11.17
  난이도 : Easy
  제목 : 100. Same Tree
  URL : https://leetcode.com/problems/same-tree/

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * @param {TreeNode} p
//  * @param {TreeNode} q
//  * @return {boolean}
//  */
//  var isSameTree = function(p, q) {
//   return isSameItem(p, q);
// };

// function isSameItem(xTree, yTree) {
//   let isSameLeft = true;
//   let isSameRight = true;

//   if(xTree.val !== yTree.val) {
//     return false;
//   } else {
//     isSameLeft = isSameItem(xTree.left, yTree.left);
//     if(isSameLeft) {
//       isSameRight = isSameItem(xTree.right, yTree.right);
//     }
//   }
//   return isSameRight;
// }

/*
* @param {TreeNode} p
* @param {TreeNode} q
* @return {boolean}
*/
// val을 비교할 필요없이 마지막 자식 노드가 같은 걸로 구별하기 그 전에 다르면  false로 return
var isSameTree = function(p, q) {
   if (p == null && q == null) return true;
   if (p == null || q == null) return false;
   if (p.val != q.val) return false;
   
   return isSameTree(p.left, q.left)
   && isSameTree(p.right, q.right)
};