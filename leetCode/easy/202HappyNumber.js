/**

  날짜 : 2022.12.05
  난이도 : Easy
  제목 : 202. Happy Number
  URL : https://leetcode.com/problems/happy-number/

*/

/**
 * @param {number} n
 * @return {boolean}
 */
 var  isHappy = function (n) {
  let answer = true;
  let check = [];
  n = n.toString();

  function recursive(num) {
    if (check.indexOf(Number(num)) !== -1) {
      return (answer = false);
    }
    check.push(Number(num));
    if (num === "1") {
      return;
    }
    let sum = 0;
    num = num.split("");

    num.forEach((v) => {
      let num = Number(v);
      sum += num * num;
    });

    recursive(sum.toString());
  }
  recursive(n);
  return answer;
};