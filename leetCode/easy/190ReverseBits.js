/**

  날짜 : 2022.12.04
  난이도 : Easy
  제목 : 190. Reverse Bits
  URL : https://leetcode.com/problems/reverse-bits/

*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
  let reversedArray = n.toString(2).split("").reverse()
  while(reversedArray.length <32){ reversedArray.push('0')}
  return parseInt(reversedArray.join(""),2);
};