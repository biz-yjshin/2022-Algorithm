/**

  날짜 : 2022.04.19
  난이도 : Easy
  제목 : Remove Duplicates from Sorted Array
  URL : https://leetcode.com/problems/remove-duplicates-from-sorted-array/

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
  let len = nums.length;
  let index = 1;

  for(let i = 1 ; i < len ; i++) {
    if(nums[index] == nums[index - 1]) {
      nums.splice(index, 1);
    } else {
      nums[index - 1] = nums[index];
      index++;
    }
  }
};
