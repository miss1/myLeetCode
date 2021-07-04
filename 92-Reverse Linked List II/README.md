Subject: [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)

Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

eg:

Input: head = [1,2,3,4,5], left = 2, right = 4

Output: [1,4,3,2,5]

Answer: 
将链表按left和right的位置分成前中后三部分，反转中间部分链表，然后将三部分链表拼接，返回结果。


