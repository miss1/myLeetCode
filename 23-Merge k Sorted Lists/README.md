Subject: [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

eg:

Input: lists = [[1,4,5],[1,3,4],[2,6]]

Output: [1,1,2,3,4,4,5,6]

Answer: 
用堆，用lists中的每个链表生成一个最小堆。弹出堆顶接到输出链表中。并将堆顶链表的next插入到堆中。直到堆中的元素为空。



