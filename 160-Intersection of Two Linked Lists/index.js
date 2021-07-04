/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  // 获取两个链表的长度
  let p1 = headA;
  let length1 = 0;
  while (p1) {
    length1 += 1;
    p1 = p1.next;
  }
  let p2 = headB;
  let length2 = 0;
  while (p2) {
    length2 += 1;
    p2 = p2.next;
  }
  // 先遍历较长的链表，直到两个链表长度相等
  let pA = headA;
  let pB = headB;
  if (length1 > length2) {
    for (let i = 0; i < length1 - length2; i++) {
      pA = pA.next;
    }
  } else {
    for (let i = 0; i < length2 - length1; i++) {
      pB = pB.next;
    }
  }
  // 比较两个等长链表，获取相交点
  while (pA) {
    if (pA === pB) {
      return pA;
    }
    pA = pA.next;
    pB = pB.next;
  }
  return null;
};
