/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  // 快慢指针，获取到相遇节点
  let p1 = head;
  let p2 = head;
  let meetingNode = null;
  while (p1 && p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 === p2) {
      meetingNode = p1;
      break;
    }
  }
  // 不能相遇，没有环
  if (meetingNode == null) {
    return null;
  }
  // 在头部相遇
  if (head === meetingNode) {
    return head;
  }
  while (head) {
    if (head.next === meetingNode.next) {
      return head.next;
    } else {
      head = head.next;
      meetingNode = meetingNode.next;
    }
  }
};
