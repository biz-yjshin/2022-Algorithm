/**

  날짜 : 2022.12.04
  난이도 : Easy
  제목 : 203. Remove Linked List Elements
  URL : https://leetcode.com/problems/remove-linked-list-elements/
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
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
  let tempHead = new ListNode(-1);
     tempHead.next = head;
     head = tempHead;
     while(tempHead.next !== null){
         if(tempHead.next.val === val){
             tempHead.next = tempHead.next.next;
         } else {
             tempHead = tempHead.next;
         }
     }
     return head.next;  
 };