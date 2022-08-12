/**

  날짜 : 2022.06.30
  난이도 : Easy
  제목 : 70. Climbing Stairs
  URL : https://leetcode.com/problems/climbing-stairs/

*/

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
  let dp = [];
  dp[0] = 1;
  dp[1] = 1;
  
  for(let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};