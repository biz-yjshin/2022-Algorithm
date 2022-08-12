/**

  날짜 : 2022.07.05
  난이도 : Easy
  제목 : 88. Merge Sorted Array
  URL : https://leetcode.com/problems/merge-sorted-array/

*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  if(n == 0) return;

  // 불필요한 배열 요소 제거
  nums1.splice(m, nums1.length);
  nums2.splice(n, nums2.length);

  for(let i = 0; i < m + n ; i++) {
    if(nums2[0] < nums1[i]) {
      nums1.splice(i, 0, nums2[0]);
      nums2.shift(); // 제일 앞에 배열 요소 삭제
      n--;
      m++;
    }

    // nums1을 전부 비교하였음에도 nums2가 있는 경우
    // 즉 nums1의 가장 큰 수보다 nums2의 요소가 더 큰 수가 있는 경우
    if(n > 0 && m == i) {
      nums1.push(nums2[0]);
      nums2.shift(); // 제일 앞에 배열 요소 삭제
      n--;
      m++;
    }
  }
};