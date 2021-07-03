/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let length = 0;
  let p = head;
  while (p != null) {
    length += 1;
    p = p.next;
  }
  if (length - n - 1 < 0) {
    return head.next;
  }
  let current = head;
  for (let i = 0; i < length - n - 1; i++) {
    current = current.next;
  }
  current.next = current.next.next;
  return head;
};

