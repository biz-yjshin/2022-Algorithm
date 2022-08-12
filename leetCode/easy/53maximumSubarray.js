/**

  날짜 : 2022.06.10
  난이도 : Easy
  제목 : 53. Maximum Subarray
  URL : https://leetcode.com/problems/maximum-subarray/

*/

/*
// 이렇게 할 경우 시간 초과
var maxSubArray = function(nums) {
  let sumArray = []; 
  if(nums.length == 0) {
    return 0;
  } if(nums.length == 1) {
    return nums[0];
  } 
  
  for(let i = 0; i < nums.length ; i++) {
    let sum = 0;
    for(let j = i; j < nums.length ; j++) {
      sum += nums[j];
      sumArray.push(sum);
    }
    sum = 0;
  }

  return sumArray.reduce((max, v) => max > v ? max : v);
};
*/

var maxSubArray = function(nums) {
  let sumArray = []; 
  if(nums.length == 0) {
    return 0;
  } if(nums.length == 1) {
    return nums[0];
  }

  let max = nums.reduce((max, v) => max > v ? max : v);
  let index = max.findIndex(max);
  let sum = max;

  for(let i = index + 1; i < nums.length ; i++) {
    sum += nums[i];
    sumArray.push(sum);
  }
  
  sum = max;
  for(let i = index + 1; i < nums.length ; i++) {
    sum += nums[i];
    sumArray.push(sum);
  }

  
  return sumArray.reduce((max, v) => max > v ? max : v);
};