Subject: [Delete Node in a Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list/)

Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

It is guaranteed that the node to be deleted is not a tail node in the list.

eg:

Input: head = [4,5,1,9], node = 5

Output: [4,1,9]

Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

Answer: 
将给定的被删除节点的下个节点值赋值给给定节点，再将给定节点的下个节点删除


