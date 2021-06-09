// 去重
const arr = [1, 1, 2, 2];
const arr2 = [...new Set(arr)]; // [1, 2]

// 判断某元素是否在集合中
const set = new Set(arr);
const has = set.has(3);  // false

// 求交集
const set2 = new Set([2, 3]);
const set3 = new Set([...set].filter(item => set2.has(item)));
