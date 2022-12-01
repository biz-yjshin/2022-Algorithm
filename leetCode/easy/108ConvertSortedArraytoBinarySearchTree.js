/**

  날짜 : 2022.11.30
  난이도 : Easy
  제목 : 108. Convert Sorted Array to Binary Search Tree
  URL : https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

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
* @param {number[]} nums
* @return {TreeNode}
*/
var sortedArrayToBST = function(nums) {
  if(!nums.length){
    return null;
  }
  // 정렬된 배열의 가운데 값
  let mid = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[mid]); 
  
  // left와 right모두 진행한다.
  root.left = sortedArrayToBST(nums.slice(0,mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
};

// 좀 더 직관적이진 않지만 코드를 더 줄일 수 있을 것 같아서 같이 메모

// var sortedArrayToBST = function(nums) {
//   if(!nums.length){
//     return null;
//   }

//   // 정렬된 배열의 가운데 값
//   let mid = Math.floor(nums.length / 2);

//   return new TreeNode(nums[mid], sortedArrayToBST(nums.slice(0,mid)), sortedArrayToBST(nums.slice(mid + 1)));
// };