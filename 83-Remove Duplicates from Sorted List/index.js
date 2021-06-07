/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let p = head;
  while (p) {
    let next = p.next;
    while (next && p.val === next.val) {
      p.next = next.next;
      next = p.next;
    }
    p = p.next;
  }
  return head;
};
