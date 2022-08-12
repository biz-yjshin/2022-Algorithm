/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    if(list1.val == null && list2.val == null) {
        return null;
    } else if(list1.val == null) {
        return list2;
    } else if(list2.val == null) {
        return list1;
    }
    
    let curList = new ListNode(undefined, undefined);
  
    do {
        let nextList = new ListNode(undefined, undefined);
        if(list1.val < list2.val) {
            nextList.val =  nextList.val ? nextList.val : list1.val;
            list1.val = list1.next.val;
            list1.next = list1.next.next;
        } else {
            nextList.val =  nextList.val ? nextList.val : list2.val;
            list2.val = list2.next.val;
            list2.next = list2.next.next;
        }
        curList.next = nextList;
    } while(list1.next == null && list2.next == null);
    curList.val = curList.next
    return curList;
  };