/**

  날짜 : 2022.06.15
  난이도 : Easy
  제목 : 58. Length of Last Word
  URL : https://leetcode.com/problems/length-of-last-word/

*/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let strArr = s.trim().split(' ');
    return strArr[strArr.length - 1].length;
};
