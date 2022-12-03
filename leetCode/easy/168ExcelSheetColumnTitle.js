/**

  날짜 : 2022.12.03
  난이도 : Easy
  제목 : 168. Excel Sheet Column Title
  URL : https://leetcode.com/problems/excel-sheet-column-title/

*/

/**
 * @param {number} columnNumber
 * @return {string}
 */
 var convertToTitle = function(columnNumber) {
  let tmp = 0;
  let res = '';
  while (columnNumber > 0) {
    tmp = columnNumber % 26;
    if (tmp === 0) tmp = 26;
    res = getChar(tmp) + res;
    columnNumber = (columnNumber - tmp) / 26;
  }
  return res;
};

let getChar = function (columnNumber) {
  let start = 'A'.charCodeAt(0);
  return String.fromCharCode(start + columnNumber - 1);
};