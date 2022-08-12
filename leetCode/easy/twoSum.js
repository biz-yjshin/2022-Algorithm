/**

  날짜 : 2022.03.10
  난이도 : Easy
  제목 : Two Sum
  URL : https://leetcode.com/problems/two-sum/

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let output = [];
  for(let i = 0; i < nums.length; i++) {
      for(let j = 1; j < nums.length; j++) {
          if(i !== j && nums[i] + nums[j] === target) {
              output.push(i);
              output.push(j);
              return output;
          }
      }
  }
};