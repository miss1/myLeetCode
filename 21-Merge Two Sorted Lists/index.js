function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let newList = new ListNode(0);
  let p = newList;
  while (l1 && l2) {
    let node;
    if (l1.val < l2.val) {
      node = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      node = new ListNode(l2.val);
      l2 = l2.next;
    }
    p.next = node;
    p = p.next;
  }
  p.next = l1 ? l1 : l2;
  return newList.next;
};
