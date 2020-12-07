题目：

给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。
链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays

题解：

思路：归并排序合并两个数组，写一个长度为两个数组长度之和的循环（时间复杂度为 O(log(m + n))），将两个数组合并成一个数组；
再取数组最中间位置的数即为中位数（长度奇数时取中间位置，偶数时，取中间两个数的平均）；

依次比较两个数组元素的大小，将更小的放入新数组

例:

[1,3,4,6]和[2,5,6,8], arr=[]

1):1 < 2 => arr.push(1)

2):3 > 2 => arr.push(2)

3):3 < 5 => arr.push(3) 依次类推

执行用时：120ms，内存消耗：38.9MB

____

Subject: Median of Two Sorted Arrays

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

Follow up: The overall run time complexity should be O(log (m+n)).

Link: https://leetcode.com/problems/median-of-two-sorted-arrays/

Answer:

Use Merge Sort to merge two arrays.Write a loop whose length is the sum of the length of two arrays (time complexity is O(log(m + n))).
Compare the size of the two array elements in turn, and put the smaller one into the new array.
At the end of the loop, the two arrays are merged into a new array
Then take the number in the middle of the new array to be the median (when the length is odd, the middle position is taken, 
and when the length is even, the average of the middle two numbers is taken);

For example:

[1,3,4,6] and [2,5,6,8], arr=[]

1):1 < 2 => arr.push(1)

2):3 > 2 => arr.push(2)

3):3 < 5 => arr.push(3)

...

arr = [1,2,3,4,5,6,6,8]

Runtime: 200ms, Memory: 45MB
