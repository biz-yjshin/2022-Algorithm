/**

  날짜 : 2022.12.04
  난이도 : Easy
  제목 : 191. Number of 1 Bits
  URL : https://leetcode.com/problems/number-of-1-bits/

*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
  return n.toString(2).split("0").join("").length;
};