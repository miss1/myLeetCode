Subject: [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

eg:

Input: head = [3,2,0,-4], pos = 1

Output: true

Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Answer: 
用一快一慢两个指针遍历链表，如果指针能够相逢，就返回true;遍历结束后，还没相逢就返回false。
(一快一慢，只要存在环，并且循环次数足够，就一定能重逢)


