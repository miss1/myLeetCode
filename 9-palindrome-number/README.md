Subject: Palindrome Number

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
Follow up: Could you solve it without converting the integer to a string?

Link: https://leetcode.com/problems/palindrome-number/

Answer: Split the integer into an array by taking the remainder calculation.

eg
````
let x = 12321
let arr = [1,2,3,2,1]
arr[0] === arr[4] -> true
arr[1] === arr[3] -> true
true

or

let x = 1031
let arr = [1,3,0,1]
arr[0] === arr[3] -> true
arr[1] === arr[2] -> false
false

````

Runtime: 200 ms, Memory: 48.3 MB

