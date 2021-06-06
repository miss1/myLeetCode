Subject: [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1.Open brackets must be closed by the same type of brackets.
2.Open brackets must be closed in the correct order.

Answer: 

用栈，后进先出;遍历字符串，每个字符跟栈尾比较，匹配的，栈pop，不匹配则push进栈。最后判断栈是否为空。

Use stack,Iterate over the string,Compare characters and end of stack.
If it matches, pop out of the stack, otherwise, push into the stack.
Finally, determine whether the stack is empty

Runtime: 92 ms, Memory: 39.8 MB


