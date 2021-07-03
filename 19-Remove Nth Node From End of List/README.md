Subject: [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

Given the head of a linked list, remove the nth node from the end of the list and return its head.

eg:

Input: head = [1,2,3,4,5], n = 2

Output: [1,2,3,5]

Answer: 

链表，先遍历链表，得到链表的长度。再移动指针遍历链表，删除第length - n个节点

