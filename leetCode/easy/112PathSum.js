/**

  날짜 : 2022.11.29
  난이도 : Easy
  제목 : 112. Path Sum
  URL : https://leetcode.com/problems/path-sum/

*/

// 트리에서 dfs를 구하는 것을 잘 코드로 짠다는 것은 생각보다 어렵구만..! 그래도 하다보면 늘겠지

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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    if(!root.left && !root.right && root.val == targetSum) return true;
    
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};