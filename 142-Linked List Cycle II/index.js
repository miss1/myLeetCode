/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
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
  if (meetingNode == null) {
    return null;
  }
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
