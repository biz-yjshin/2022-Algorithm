/**

  날짜 : 2022.12.03
  난이도 : Easy
  제목 : 171. Excel Sheet Column Number
  URL : https://leetcode.com/problems/majority-element/

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  let sum = 0;
  let exp = 0;
  for(let i = columnTitle.length -1 ; i >= 0 ; i--){
      let char = columnTitle.charCodeAt(i) - 64;
      sum += char * Math.pow(26, exp++);
  }
  return sum; 
};