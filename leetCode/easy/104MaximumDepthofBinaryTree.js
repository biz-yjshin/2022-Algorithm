/**

  날짜 : 2022.11.28
  난이도 : Easy
  제목 : 104. Maximum Depth of Binary Tree
  URL : https://leetcode.com/problems/maximum-depth-of-binary-tree/

*/

/**
 * 
 * 1. 처음 생각하였을 때 root노드에서 오른쪽, 왼쪽 트리의 depth를 구하면 되겠다!라고 생각했다.
 * 2. 코딩을 하고 보니 오른쪽 트리에서도 오른쪽, 왼쪽 트리의 depth가 다를 수 있다는 것을 test case에서 생각했다...
 * 3. 그럼 어떻게? 
 * 4. 어떻게든 값만 있으면 되는 거잖아? 그러면 left & right를 비교하여서 있는 값으로 가는 건데 둘 다 값이 있을 경우에는? 어디로 가야하는데?
 * 5. 문제 풀이를 봄...
 *   : root가 null일 경우에 0을 반환해주고 아닐 경우에는 1을 더해준 다음 max를 구해준다. 보다 간단하게 생각해보자..
 * 
 * */

 var maxDepth = function(root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};

// var maxDepth = function(root) {
//     if(root === undefined || root === null) {
//       return 0;
//     }
//     let leftSubTree = root.left;
//     let rightSubTree = root.right;
//     let leftDepth = getTreeDepth(leftSubTree, 1, 1);
//     let rightDepth = getTreeDepth(rightSubTree, 1, 1);

//     return leftDepth > rightDepth ? leftDepth : rightDepth;
// };

// function getTreeDepth(subTree, leftDepth, rightDepth) {
//   if(subTree === null || subTree.val === null) {
//     return leftDepth > rightDepth ? leftDepth : rightDepth;
//   }

//   let leftSubTree = subTree.left;
//   let rightSubTree = subTree.right;

//   leftDepth = getTreeDepth(leftSubTree, leftDepth + 1, rightDepth + 1);
//   rightDepth = getTreeDepth(rightSubTree, leftDepth + 1, rightDepth + 1);

//   return leftDepth > rightDepth ? leftDepth : rightDepth;
// }