Subject: [Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/)

Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3

Output: Intersected at '8'

Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

Answer: 

解法1：分别获取两个链表的长度。先遍历较长的那个链表，直到两个链表长度相等时，再同时遍历两个链表，并比较两个链表节点是否相同。

解法2：遍历比较两个链表，当链表遍历到尾部时，将当前指针赋值给另一个链表。继续比较。（这样当较长的链表遍历完时，两个链表的长度差也抵消了）

