/**

  날짜 : 2022.03.11
  난이도 : Easy
  제목 : Palindrome Number
  URL : https://leetcode.com/problems/palindrome-number/

*/


/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  let charNum = (x).toString();
  let len = charNum.length;
  let arr = [];
  let verArr = [];
  
  for(let i = 0; i < len ; i++) {
      arr.push(charNum.substring(i, i+1));
  }
  
  verArr = Object.assign([],arr).reverse();
  
  for(let i = 0; i < arr.length ; i++) {
       if(arr[i] !== verArr[i]) {
          return false;
      }
  }
  return true;    
};