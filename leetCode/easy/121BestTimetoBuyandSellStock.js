/**

  날짜 : 2022.12.01
  난이도 : Easy
  제목 : 121. Best Time to Buy and Sell Stock
  URL : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

*/

/**
1. 최솟값 최댓값을 구하는 것이 아니라 모든 차이를 구한 다음 그 중 최소를 구해야하는 것 같다.
(너무 거저먹으려고 했던 듯)

 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  let min = prices[0];

  for(let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i - 1]);
    profit = Math.max(prices[i] - min, profit);
  }

  return profit;
}

// 다른 사람의 풀이인데 괜찮아서 들고옴!
var maxProfit = function(prices) {
  let profit = 0;
  let min = prices[0];

  for(let i = 0; i < prices.length; i++) {
    if(prices[i] < min) {
      min = prices[i];
    } else if ((prices[i] - min) > profit) { // else if를 사용하는 게 맞음
      profit = prices[i] - min;
    }
  }
  return profit;
}


/*
var maxProfit = function(prices) {

  let buyPrices = prices.slice(0, prices.length - 1);
  let minPrice = Math.min(...prices);
  let index = prices.indexOf(minPrice) + 1;
  let salePrices = prices.slice(index);

  if(!salePrices.length) {
    return 0;
  }

  let maxPrice = Math.max(...salePrices);

  return maxPrice - minPrice;
};
*/