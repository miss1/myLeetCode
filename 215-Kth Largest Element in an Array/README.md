Subject: [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)

Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

eg:

Input: nums = [3,2,1,5,6,4], k = 2

Output: 5

Answer: 
1、用堆：构建一个最小堆，并依次把数组的值插入堆中；当堆的容量超过k，就删除堆顶。插入结束后，堆顶就是第k个最大元素。

2、用sort将数组逆序排序，k-1下标就是第k个最大元素
