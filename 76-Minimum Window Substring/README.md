Subject: [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.

eg:

Input: s = "ADOBECODEBANC", t = "ABC"

Output: "BANC"

Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Answer: 
先找出所有的包含t的子串，找出长度最小的那个字串
1、用双指针维护一个滑动窗口
2、移动右指针，找到包含t的子串，移动左指针，尽量减少包含t的子串的长度
（使用字典存储需要寻找的字符）



