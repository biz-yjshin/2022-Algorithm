/**

  날짜 : 2022.03.14
  난이도 : Easy
  제목 : Roman to Integer
  URL : https://leetcode.com/problems/roman-to-integer/

 */

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  let sum = 0;
  
  for(let i = 0; i < s.length ; i++) {
      let num1 = getIntToRoman(s[i]);
      let num2 = getIntToRoman(s[i + 1]);
      if(num1 < num2) {
          sum += num2 - num1;
          i++;
      } else {
          sum += num1;
      }
  }
  
  return sum;
};


function getIntToRoman(romanChar) {
  switch(romanChar) {
      case 'I':
          return 1;
      case 'V':
          return 5;
      case 'X':
          return 10;
      case 'L':
          return 50;
      case 'C':
          return 100;
      case 'D':
          return 500;
      case 'M':
          return 1000;
      default:
          return 0;
  }
}