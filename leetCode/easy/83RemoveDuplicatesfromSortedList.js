/**

  날짜 : 2022.07.01
  난이도 : Easy
  제목 : 83. Remove Duplicates from Sorted List
  URL : https://leetcode.com/problems/remove-duplicates-from-sorted-list/

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
  if(!head) return null;

  let prev = head, next = head.next;

  while(next) {
    if(prev.val === next.val) {
      prev.next = next.next;
    } else {
      prev = next;
    }
    next = next.next;
  }
  
  return head;
};