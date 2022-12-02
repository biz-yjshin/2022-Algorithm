/**

  날짜 : 2022.12.02
  난이도 : Easy
  제목 : 125. Valid Palindrome
  URL : https://leetcode.com/problems/valid-palindrome/

*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  let str = s.toLowerCase(); // 소문자로 변환
  let regex = /[^a-z0-9]/g; // 소문자와 숫자가 아닌 문자열을 선택하는 정규식
  let regexStr = str.replace(regex, "");
  let arrStr = [...regexStr]; // 문자열을 배열로 변환
  let len = arrStr.length;
  let mid = Math.floor(len / 2);

  for(let i = 0; i < mid ; i++) { // i, j로 변수명을 작성했는데 left, right로 작성하면 더 좋았을 것 같다.
        let j = len - i - 1;
      if(arrStr[i] !== arrStr[j]) {
        return false;
      }
  }
  return true;
};