/**

  날짜 : 2022.12.02
  난이도 : Easy
  제목 : 136. Single Number
  URL : https://leetcode.com/problems/single-number/

*/

/**

  1. 숫자가 중복되어 나오면 배열에서 해당 숫자들을 삭제한다. -> 그러면 마지막에 한 숫자만 남지 않을까?
  2. 이중 중첩으로 푸는 것이 아니라 lastIndex로 같은지 다른 지 판단하면 더 빠르지 않을까? 같으면 return

 */

/**
 * @param {number[]} nums
 * @return {number}
*/
var singleNumber = function(nums) {
  let len = nums.length;
  for(let i = 0 ; i < len ; i++) {
    let firstIndex = nums.indexOf(nums[i]);
    let lastIndex = nums.lastIndexOf(nums[i]);
    if(firstIndex == lastIndex) {
      return nums[i];
    }
  }
  return 0;
};


// 참고 코드
// ^연산자 : 비트 배타적 논리합
// 비트가 같으면 0, 다르면 1이 되는 XOR 연산을 통해 쌍이 아닌 값을 뽑아 낼 수 있습니다.
// ((2^2)^(1^1)^(4^4)^(5)) => (0^0^0^5) => 5.
/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  let ans = nums[0];
  for (let i=1; i < nums.length; i++){
      ans = ans^nums[i];
  }
  return ans;
};