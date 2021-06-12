Subject: [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

eg:

Input: root = [3,9,20,null,null,15,7]

Output: 3

Answer: 
求最大深度，使用深度优先遍历

在深度优先遍历中，记录每个节点所在的层级，找出最大的层级即可。


