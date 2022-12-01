/**

  날짜 : 2022.11.30
  난이도 : Easy
  제목 : 118. Pascal's Triangle
  URL : https://leetcode.com/problems/pascals-triangle/

*/

/**
* @param {number} numRows
* @return {number[][]}
*/
var generate = function(numRows) {
  if(numRows == 1) return [[1]];
  if(numRows == 2) return [[1], [1, 1]];
  
  let result = [[1], [1,1]];
  
  for(let i = 2; i < numRows; i++){
      let arr = [1];
      let prev = result[i - 1];
      let len = prev.length;
      for(let j = 0; j < len-1; j++){
          arr.push(prev[j] + prev[j + 1]);
      }
      arr.push(1);
      result.push(arr);
  }
  return result;
};
