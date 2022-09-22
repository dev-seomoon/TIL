/* DFS, BFS 미로 */
var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = [];
const visited = new Array(n + 1).fill([]);
for (let i = 0; i < n; i++) {
  graph.push(input[i + 1].split(""));
}

const bfs = (y, x) => {
  const q = [[y, x]];
  while (q.length) {
    let [y, x] = q.shift();
    visited[y][x] = true;
  }
};

/*
[미로 최단 경로 DFS 와 BFS 비교](https://velog.io/@tsi0521/%EB%AF%B8%EB%A1%9C-%EC%B5%9C%EB%8B%A8-%EA%B2%BD%EB%A1%9C-DFS-%EC%99%80-BFS-%EB%B9%84%EA%B5%90)
*/
