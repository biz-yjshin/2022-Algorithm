/**

  날짜 : 2022.04.22
  난이도 : Easy
  제목 : 27. Remove Element
  URL : https://leetcode.com/problems/remove-element/

*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let index = 0;
  while(index > -1) {
    index = nums.indexOf(val);
    if(index !== -1) {
      nums.splice(index, 1);
    }
  }
};