题目：

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

题解：

思路：遍历字符串，获取每一个字符；判断该字符在不在新字符串astr中，如果不在，则将该字符添加到astr，并且记录下astr的最大长度；
如果字符已经在astr中了，则先记录下astr的最大长度，再将字符添加到astr，然后将astr从该字符第一次存在的位置开始截取；
遍历结束记录下的最大长度便是所需值；

例：

s="ababc"  astr=""  num=0

1): a -> 不在astr中 -> astr="a",num=1

2): b -> 不在astr中 -> astr="ab",num=2

3): a ->   在astr中 -> num=2, astr="aba", -> astr="ba"

4): b ->   在astr中 -> num=2, astr="bab", -> astr="ab"

5): c -> 不在astr中 -> astr="abc",num=3



