//Link https://leetcode.com/problems/reverse-linked-list/
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
 var reverseList = function(head) {
    let tail = null;
    while (head) {
        const next = head.next;
        head.next = tail;
        tail = head;
        head = next;
    }
    //head will be returned when list was empty otherwise tail will be the head of the reversed list
    return tail || head;
};