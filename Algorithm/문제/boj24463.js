/* DFS, BFS 미로 */
var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = [];
const visited = new Array(n);
for (let i = 0; i < n; i++) {
  visited[i] = new Array(m).fill({ visited: false, prev: [] });
}

let start, end;

for (let i = 0; i < n; i++) {
  const el = input[i + 1].split("");
  graph.push(el.map((l) => (l === "." ? "@" : l)));
  if (el[0] === ".") {
    start = [i, 0];
  }
  if (el[m - 1] === ".") {
    end = [i, m - 1];
  }
}

// bfs
const q = [start];
while (q.length) {
  let [y, x] = q.shift();
  if (x < 0 || y < 0 || x > m - 1 || y > n - 1 || visited[y][x]) {
    continue;
  }

  if (end[0] === y && end[1] === x) {
    break;
  }

  visited[y][x] = true;

  q.push([y - 1, x]);
  q.push([y, x - 1]);
  q.push([y, x + 1]);
  q.push([y + 1, x]);
}

// backtracking
const backtracking = (end) => {
  backtracking(end[2]);
};

console.log(graph.map((el) => el.join("")).join("\n"));

/*
[미로 최단 경로 DFS 와 BFS 비교](https://velog.io/@tsi0521/%EB%AF%B8%EB%A1%9C-%EC%B5%9C%EB%8B%A8-%EA%B2%BD%EB%A1%9C-DFS-%EC%99%80-BFS-%EB%B9%84%EA%B5%90)
*/
