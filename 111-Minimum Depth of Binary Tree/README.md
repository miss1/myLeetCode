Subject: [Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/)

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

eg:

Input: root = [3,9,20,null,null,15,7]

Output: 2

Answer: 
求最小深度，使用广度优先遍历

遍历到第一个叶子节点时，返回当前深度即可。


