Subject: [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

eg:

Input: l1 = [1,2,4], l2 = [1,3,4]

Output: [1,1,2,3,4,4]

Answer: 
对比两个链表的表头，将小的那个数插入新链表。并将该数从原链表中删除。循环对比表头，直到其中一个链表为空。



