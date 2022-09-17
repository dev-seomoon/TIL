/* DFS와 BFS */
var fs = require('fs')

var input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [n, m, v] = input[0].split(' ').map(Number)
let graph = new Array(n + 1)
for (let i = 0; i < graph.length; i++) {
  graph[i] = []
}
for (let i = 0; i < m; i++) {
  let [from, to] = input[i + 1].split(' ').map(Number)
  graph[from].push(to)
  graph[to].push(from)
}
graph.forEach((el) => el.sort((a, b) => a - b))

// 입력 완료
const visited = new Array(n + 1).fill(false)
const dfsResult = []
const bfsResult = []

const dfs = (v) => {
  if (visited[v]) return
  visited[v] = true
  dfsResult.push(v)
  graph[v].forEach((adj) => dfs(adj))
}

const bfs = () => {
  visited.fill(0)
  const Q = [v]
  while (Q.length > 0) {
    let curr = Q.shift()
    if (visited[curr]) continue
    visited[curr] = true
    bfsResult.push(curr)
    graph[curr].forEach((adj) => {
      if (!visited[adj]) {
        Q.push(adj)
      }
    })
  }
}

dfs(v)
bfs()
console.log(dfsResult.join(' '))
console.log(bfsResult.join(' '))
