Subject: [Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

eg:

Input: head = [1,1,2]

Output: [1,2]

Answer: 
遍历链表，拿当前节点跟下一节点比较，值相等时删除下一节点，继续比较。直到下一节点跟当前节点不相等时，继续遍历。


