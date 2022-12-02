/**

  날짜 : 2022.12.02
  난이도 : Easy
  제목 : 141. Linked List Cycle
  URL : https://leetcode.com/problems/linked-list-cycle/

*/

/*
 솔직하게 이해가 안되는 문제..
 왜 2번 순회랑 1번 순회를 같이하여 겹치는 지 파악
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  let slow = head;
  let fast = head;
  while (slow && fast) {
    slow = slow.next;
    fast = fast.next ? fast.next.next : undefined;
    if (slow === fast) return true;
  }
  return false;
};
