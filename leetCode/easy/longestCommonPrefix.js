/**

  날짜 : 2022.03.15
  난이도 : Easy
  제목 : Longest Common Prefix
  URL : https://leetcode.com/problems/longest-common-prefix/

 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let comPrefix = strs[0];
  
  for(let i = 1 ; i < strs.length ; i++) {
      for(let j = 0 ; j < comPrefix.length ; j++) {
          if(comPrefix[j] !== strs[i][j]) {
              comPrefix = comPrefix.substring(0, j);
          }
      }
  }
  return comPrefix;
};