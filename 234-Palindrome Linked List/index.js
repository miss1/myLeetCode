/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // 求链表长度
  let p = head;
  let length = 0;
  while (p != null) {
    length += 1;
    p = p.next;
  }
  // 获取中间节点
  let mid = head;
  for (let i = 0; i < Math.ceil(length / 2); i++) {
    mid = mid.next;
  }
  // 从中间节点开始反转
  let p1 = mid;
  let p2 = null;
  while (p1) {
    let tmp = p1.next;
    p1.next = p2;
    p2 = p1;
    p1 = tmp;
  }
  // 比较前半段和反转后的后半段是否相同
  while (p2 != null) {
    if (p2.val === head.val) {
      p2 = p2.next;
      head = head.next;
    } else {
      return false;
    }
  }
  return true;
};
