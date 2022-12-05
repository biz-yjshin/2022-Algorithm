/**

  날짜 : 2022.12.05
  난이도 : Easy
  제목 : 217. Contains Duplicate
  URL : https://leetcode.com/problems/contains-duplicate/
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let set = new Set(nums);
    return set.size !== nums.length;
};