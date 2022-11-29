/**

  날짜 : 2022.11.29
  난이도 : Easy
  제목 : 110. Balanced Binary Tree
  URL : https://leetcode.com/problems/balanced-binary-tree/

*/

// Height Balanced = 높이 균형 이진 트리 : 모든 노드의 두 하위 트리 깊이가 둘 이상 차이가 나지 않는 이진 트리이다. (각 옆에 있는 오른쪽, 왼쪽 노드의 높이를 말한다.)

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
 * @return {boolean}
 */
 var isBalanced = function (root) {
  let flag = true;

  let getDepth = (tree, height) => {
    if(!node) {
      return 0;
    }

    let leftHeight = getDepth(tree.left, height + 1);
    let rightHeight = getDepth(tree.right, height + 1);

    if(Math.abs(rightHeight - leftHeight) > 1) {
      flag = false;
    }
    return Math.max(leftHeight, rightHeight) + 1;
  };

  getDepth(tree, 0);

  return flag;
};