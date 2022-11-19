/**

  날짜 : 2022.11.19
  난이도 : Easy
  제목 : 101. Symmetric Tree
  URL : https://leetcode.com/problems/symmetric-tree/

*/

var isSymmetric = function(root) {
  const leftSubTree = root.left;
  const rightSubTree = root.right;

  return checkIsMirrorTree(leftSubTree, rightSubTree);

  function checkIsMirrorTree(leftSubTree, rightSubTree) {
    if (!leftSubTree && !rightSubTree) {
      return true;
    }

    if (leftSubTree && !rightSubTree) {
      return false;
    }

    if (rightSubTree && !leftSubTree) {
      return false;
    }

    if (leftSubTree.val !== rightSubTree.val) {
      return false;
    }

    if (!checkIsMirrorTree(leftSubTree.left, rightSubTree.right)){
      return false;
    }

    if (!checkIsMirrorTree(leftSubTree.right, rightSubTree.left)) {
      return false;
    }

    return true;
  }
};