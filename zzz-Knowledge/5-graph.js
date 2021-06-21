// 图
const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
};

// 深度优先遍历
const visited = new Set();
const dfs = (n) => {
  console.log(n);
  visited.add(n);
  graph[n].forEach(c => {
    if (!visited.has(c)) {
      dfs(c);
    }
  })
};

// 广度优先遍历
const bfs = (start) => {
  const visited2 = new Set();
  visited2.add(start);
  const q = [start];
  while (q.length) {
    const n = q.shift();
    console.log(n);
    graph[n].forEach(c => {
      if (!visited2.has(c)) {
        q.push(c);
        visited2.add(c);
      }
    })
  }
};

dfs(2); // 2,0,1,3
bfs(2); // 2,0,3,1
