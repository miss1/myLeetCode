Subject: [Path Sum](https://leetcode.com/problems/path-sum/)

Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

eg:

Input: [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22

Output: true

Answer: 
使用深度优先遍历，记录根节点到当前节点的总和。当遇到叶子节点时，判断总和是否等于targetSum。


