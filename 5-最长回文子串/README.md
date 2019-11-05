题目：

给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
链接：https://leetcode-cn.com/problems/longest-palindromic-substring/

题解：

思路：先给字符串的间隔处都插入#符号（方便处理类似'abba'这种情况）；然后遍历字符串，以每一个字符
为中心，向两边扩散，比较中心两边对应的字符是否相等，相等则添加到preRes中，不相等则暂存最大长度的preRes，
继续以下一个字符为中心，寻找结果

