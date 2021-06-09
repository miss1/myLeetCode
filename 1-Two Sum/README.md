Subject: [Two Sum](https://leetcode.com/problems/two-sum/)

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

eg:

Input: nums = [2,7,11,15], target = 9

Output: [0,1]

Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Answer: 
使用map，遍历数组，查找map里有没有符合条件的值，有的话，直接返回结果，没有的话，将数组的值为key，下标为value存起来。


