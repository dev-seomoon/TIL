var fs = require('fs')

var input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number)

// graph input 처리

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
