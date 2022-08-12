/**

 날짜 : 2022.03.16
 난이도 : Easy
 제목 : Valid Parentheses
 URL : https://leetcode.com/problems/longest-common-prefix/

 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const brackets = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
   let temp = '';
    
    for(let i = 0; i < s.length ; i++) {
        if(brackets[s[i]]) {
            temp +=  brackets[s[i]];
        } else {
            if(temp && temp.charAt(temp.length - 1) == s[i]) {
                temp = temp.slice(0, -1);
            } else {
                return false;
            }
        }
    } 
    return temp.length == 0 ? true : false;
};