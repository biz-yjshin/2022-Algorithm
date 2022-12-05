/**

  날짜 : 2022.12.05
  난이도 : Easy
  제목 : 205. Isomorphic Strings
  URL : https://leetcode.com/problems/isomorphic-strings/
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    let a = new Map();
    let b = new Map();

    for (let i = 0; i < s.length; i++) {
        if (a.has(s[i])) {
            if (a.get(s[i]) !== t[i]) {
                return false;
            }
        } else {
            a.set(s[i], t[i]);
        }

        if (b.has(t[i])) {
            if (b.get(t[i]) !== s[i]) {
                return false;
            }
        } else {
            b.set(t[i], s[i]);
        }
    }
    return true;
};