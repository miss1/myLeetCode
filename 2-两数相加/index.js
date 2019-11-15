/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    return getResult(l1, l2, null);
};

//递归寻找下一个节点，值相加，注意进位
var getResult = function (l1, l2, prev) {
    let next1 = l1;
    let next2 = l2;
    let val1 = 0, val2 = 0;

    if (l1 !== null){
        val1 = l1.val;
        next1 = l1.next;
    }
    if (l2 !== null){
        val2 = l2.val;
        next2 = l2.next;
    }
    let newNode = new ListNode(val1 + val2);
    if (prev !== null){
        if (prev.val >= 10){
            prev.val %= 10;
            newNode.val += 1;
        }
    }
    if (next1 !== null || next2 !== null){
        newNode.next = getResult(next1, next2, newNode);
    }else if (newNode.val >= 10){
        newNode.next = getResult(next1, next2, newNode);
    }
    return newNode;
};
