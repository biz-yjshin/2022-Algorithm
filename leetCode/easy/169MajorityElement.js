/**

  날짜 : 2022.12.03
  난이도 : Easy
  제목 : 169. Majority Element
  URL : https://leetcode.com/problems/majority-element/

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};