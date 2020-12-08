题目：字符串转换整数 (atoi)

请你来实现一个 atoi 函数，使其能将字符串转换成整数。

链接：https://leetcode-cn.com/problems/string-to-integer-atoi/

题解：

思路：遍历字符串，判断每个字符是否是数字类型，是的话将字符拼接到新字符串中，不是的话，直接跳出循环。
然后使用一元正号运算符将新字符串转换成Number类型。最后判断数值边界，返回结果。注意对开头空格和正负号的判断。

____

Subject: String to Integer (atoi)

Implement atoi which converts a string to an integer.

Link: https://leetcode.com/problems/string-to-integer-atoi/

Answer: Traverse the string to determine whether each character is a number type, 
if yes, splice the characters into the new string, if not, jump out of the loop directly.
Then use the unary positive operator to convert the new string to the Number type.
Finally, determine the boundary of the number, and then return the result.
Tip: Pay attention to the judgment of spaces and positive and negative signs at the beginning of a string.

Runtime: 92ms, Memory: 40.9MB 

