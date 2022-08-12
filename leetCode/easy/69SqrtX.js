/**

  날짜 : 2022.06.20
  난이도 : Easy
  제목 : 69. Sqrt(x)
  URL : https://leetcode.com/problems/sqrtx/

*/

/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
  if(x <= 1) {
    return x;
  }
  for(let i = 1; i <= x ; i++) {
    let mult = i * i;
    if(mult == x) {
      return i;
    } else if(x < mult) {
      return i - 1;
    }
  }
};