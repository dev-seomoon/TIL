/* MooTube, DFS */
var fs = require("fs");

var input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, q] = input[0].split(" ").map(Number);

const arr = new Array(n + 1);
const visited = new Array(n + 1);
for (let i = 0; i < n + 1; i++) {
  arr[i] = [];
}

for (var i = 0; i < n - 1; i++) {
  let [p, q, r] = input[i + 1].split(" ").map(Number);
  arr[p].push([q, r]);
  arr[q].push([p, r]);
}

const bfs = (k, v) => {
  let count = 0;
  visited.fill(false);
  const Q = [v];
  visited[v] = true;
  while (Q.length) {
    let curr = Q.shift();
    arr[curr].forEach((adj) => {
      if (!visited[adj[0]] && adj[1] >= k) {
        Q.push(adj[0]);
        count++;
        visited[adj[0]] = true;
      }
    });
  }
  return count;
};

for (let j = i; j < i + q; j++) {
  let [k, v] = input[j + 1].split(" ").map(Number);
  console.log(bfs(k, v));
}

/*

정점: 동영상, 1부터 n까지
n-1개의 동영상 쌍의 usado가 주어짐
임의의 두 쌍의 동영상 사이의 usado : 경로의 모든 연결들의 usado 중 최솟값으로

주어진 동영상에 대해 usado가 k이상인 동영상의 개수 구하기

입력에서 주어진 정점 v를 시작으로 그래프 순회하기
-> 모든 정점의 v와의 유사도 구하기
-> 유사도가 k 이상인 정점의 개수 출력하기
*/
