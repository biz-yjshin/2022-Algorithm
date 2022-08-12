/**

  날짜 : 2022.06.17
  난이도 : Easy
  제목 : 67. Add Binary
  URL : https://leetcode.com/problems/add-binary/

*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
*/
var addBinary = function(a, b) {
    let bigA = BigInt(`0b${a}`);
    let bigB = BigInt(`0b${b}`);
    return (bigA + bigB).toString(2);
};

/**
* 설명
2진수(binary): 0b (숫자 0과 알파벳 b)
8진수(octal):   0o (숫자 0과 알파벳 o)
16진수(hexadeciaml): 0x (숫자 0과 알파벳 x) 

 */