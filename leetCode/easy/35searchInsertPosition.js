/**

  날짜 : 2022.06.09
  난이도 : Easy
  제목 : 35. Search Insert Position
  URL : https://leetcode.com/problems/search-insert-position/

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  for(let i = 0; i < nums.length ; i++) {
    let pre = nums[i];
    let next = nums[i + 1];

    if(target <= pre) {
      return i;
    }
    if(pre < target && target < next) {
      return i + 1;
    }
  }
  return nums.length;
};
