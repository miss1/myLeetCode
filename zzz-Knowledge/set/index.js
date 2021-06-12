// 去重
const arr = [1, 1, 2, 2];
const arr2 = [...new Set(arr)]; // [1, 2]

// 判断某元素是否在集合中
const set = new Set(arr);
const has = set.has(3);  // false

// 求交集
const set2 = new Set([2, 3]);
const set3 = new Set([...set].filter(item => set2.has(item)));

// 求差集
const set4 = new Set([...set].filter(item => !set2.has(item)));

let mySet = new Set();
// 添加
mySet.add(1);
mySet.add(5);
mySet.add('test');
mySet.add({a: 1, b: 2});
// 删除
mySet.delete(5);
// 遍历
for (let item of mySet) console.log(item);
for (let item of mySet.keys()) console.log(item);
for (let item of mySet.values()) console.log(item);
for (let [key, value] of mySet.entries()) console.log(key, value);  // key === value
// 转数组
const myArr = [...mySet];
const myArr2 = Array.from(mySet);
