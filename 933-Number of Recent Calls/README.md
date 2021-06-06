Subject: [Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/)

GYou have a RecentCounter class which counts the number of recent requests within a certain time frame.
 
Implement the RecentCounter class:

RecentCounter() Initializes the counter with zero recent requests.
int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.

eg:

Input
`[[], [1], [100], [3001], [3002]]`

Output
`[null, 1, 2, 3, 3]`

~~~~
输入[[], [1], [100], [3001], [3002]]，说明一共有[1], [100], [3001], [3002]四个请求，分别在1毫秒、100毫秒、3001毫秒、3002毫秒
其实是要求时间在[t - 3000, t]时间内的请求数
ping(1) --> [-2999, 1]之间只有1个请求 [1]
ping(100) --> [-2900, 100]之间有2个请求 [1], [100]
ping(3001) --> [1, 3001]之间有3个请求 [1], [100], [3001]
ping(3002) --> [2, 3001]之间有3个请求 [100], [3001], [3002]
所以输出是[null, 1, 2, 3, 3]
~~~~

Answer: 
使用队列，先进先出。每次有新请求push进来时，将队列头部不在[t - 3000, t]时间内的请求清空出去。这时队列长度即是所求请求数

Runtime: 408 ms, Memory: 56.7 MB


