/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  let len = 0;
  let len2 = 0;
  let p = head;
  let h = null;
  // 获取前面部分链表h，p为中间部分链表的头
  while (p && len < left - 1) {
    len += 1;
    len2 += 1;
    h = p;
    p = p.next;
  }
  // 获取尾部链表的头p2
  let p2 = p;
  while (p2 && len2 < right) {
    len2 += 1;
    p2 = p2.next;
  }
  // 反转中间链表，并将反转后的链表指向尾部链表。获得新链表p2
  while (p && len < right) {
    let tmp = p.next;
    p.next = p2;
    p2 = p;
    p = tmp;
    len += 1;
  }
  // 拼接头部链表，获得最终结果
  if (left !== 1) {
    h.next = p2;
    return head;
  } else {
    return p2;
  }
};
