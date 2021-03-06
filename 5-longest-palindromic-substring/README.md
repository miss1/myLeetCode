题目：

给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

链接：https://leetcode-cn.com/problems/longest-palindromic-substring/

题解：

思路1：

先给字符串的间隔处都插入#符号（方便处理类似'abba'这种情况）；然后遍历字符串，以每一个字符
为中心，向两边扩散，比较中心两边对应的字符是否相等，相等则添加到preRes中，不相等则暂存最大长度的preRes，
继续以下一个字符为中心，寻找结果

index.js中实现，执行用时：272ms，内存消耗：51.3MB

思路2：

对思路1的优化，也是中心扩散法。对于'bbb'或者'bbbb'这种情况的处理，不再插入特殊符号，而是将
这些多个相连在一起的相同字符，合在一起当做中心点，向两边扩散，记录下两边边界值的下标；找到
边界值下标间隔最长的一个记录，用来截取字符串，即是所求值。

index2.js中实现，执行用时：84ms，内存消耗：36.6MB

____

Subject: Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

Link: https://leetcode.com/problems/longest-palindromic-substring/

Answer:

Runtime: 144ms, Memory: 42.7MB




