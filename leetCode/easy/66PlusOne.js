/**

  날짜 : 2022.06.15
  난이도 : Easy
  제목 : 66. Plus One
  URL : https://leetcode.com/problems/plus-one/

*/


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let index = digits.length - 1;
  digits[index] += 1;

  if(digits[index] < 10) {
    return digits;
  } else {
    return roundUpNumber(digits, index);
  }
};

function roundUpNumber(digits, index) {
  let quotient = digits[index] / 10;
  let remainder = digits[index] % 10;

  if(index == 0) {
    digits[index] = remainder;
    digits.unshift(quotient);
  } else {
    digits[index - 1] += quotient;
    digits[index] = remainder;
  
    if(digits[index - 1] >= 10) {
      digits = roundUpNumber(digits, index - 1);
    }
  }
  return digits;
}

// 다른 사람들 풀이를 보니 더 효율적으로 풀어서 다른 코드들도 함께 작성

/** 
// Accepted Solutions Runtime Distribution

var plusOne = function(digits) {
    const str = digits.reduce((a, b) => `${a}${b}`);
    const bInt = BigInt(str);
    return (bInt+1n).toString().split('');
};
*/

/** 
// Accepted Solutions Memory Distribution

var plusOne = function(digits) {
  let r = digits.toString(10).split(',').reduce((a,b)=>a+b)
  r = BigInt(r)+1n
   
  return r.toString(10).split('')
};
*/

/**
// 내 마음에 들었던 풀이

var plusOne = function(digits) {
    const str = digits.join('')
    let sum = BigInt(str)+1n;
    return sum.toString().split('');
};
 */