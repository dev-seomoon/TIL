/* 트리의 부모 찾기, DFS */
var fs = require('fs')

var input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])

const graph = new Array(n + 1)
for (let i = 0; i < graph.length; i++) {
  graph[i] = []
}

for (let i = 0; i < n - 1; i++) {
  let [from, to] = input[i + 1].split(' ').map(Number)
  graph[from].push(to)
  graph[to].push(from)
}

graph.forEach((el) => el.sort((a, b) => a - b))

const parent = []
const visited = new Array(n + 1).fill(false)

const dfs = (v) => {
  visited[v] = true
  graph[v].forEach((adj) => {
    if (!visited[adj]) {
      parent[adj] = v
      dfs(adj)
    }
  })
}

dfs(1)
let result = ''
for (let i = 2; i < parent.length; i++) {
  result += parent[i] + '\n'
}

console.log(result)
