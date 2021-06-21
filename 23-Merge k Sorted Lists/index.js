class MinHeap {
  constructor () {
    this.heap = []
  }
  swap (i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  getParentIndex (i) {
    return (i - 1) >> 1;
  }
  getLeftIndex (i) {
    return i * 2 + 1
  }
  getRightIndex (i) {
    return i * 2 + 2
  }
  shiftUp (index) {
    if (index === 0) { return; }
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex].val > this.heap[index].val) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown (index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[leftIndex] && this.heap[leftIndex].val < this.heap[index].val) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] && this.heap[rightIndex].val < this.heap[index].val) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  insert (node) {
    this.heap.push(node);
    this.shiftUp(this.heap.length - 1)
  }
  pop () {
    let head = this.heap[0];
    if (this.heap.length === 1) {
      this.heap.pop();
    } else {
      this.heap[0] = this.heap.pop();
      this.shiftDown(0);
    }
    return head;
  }
  peek () {
    return this.heap[0];
  }
  size () {
    return this.heap.length
  }
}

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const h = new MinHeap();
  let node = new ListNode(0);
  for (let i = 0; i < lists.length; i++) {
    if (lists[i]) {
      h.insert(lists[i]);
    }
  }
  let p = node;
  while (h.size() > 0) {
    let curNode = h.pop();
    p.next = new ListNode(curNode.val);
    p = p.next;
    if (curNode.next) {
      h.insert(curNode.next);
    }
  }
  return node.next;
};
