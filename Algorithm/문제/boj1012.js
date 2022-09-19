/* 유기농 배추, DFS 컴포넌트 개수 구하기 */

// DFS 풀이 -> 런타임 에러
// m=50, n=50, k=2500일 때 재귀의 깊이기 2500까지 깊어짐
/*
var fs = require('fs')

var input = fs.readFileSync('/dev/stdin').toString().split('\n')

const T = Number(input[0])
let first = 1
for (let i = 0; i < T; i++) {
  let [m, n, k] = input[first].split(' ').map(Number)
  first++

  const map = new Array(n)
  for (let i = 0; i < map.length; i++) {
    map[i] = new Array(m).fill(0)
  }

  const visited = new Array(n)
  for (let i = 0; i < visited.length; i++) {
    visited[i] = new Array(m).fill(0)
  }

  for (let i = first; i < first + k; i++) {
    let [x, y] = input[i].split(' ').map(Number)
    map[y][x] = 1
  }
  //x >= 1, y >= 1
  const dfs = (y, x) => {
    visited[y][x] = 1
    if (x > 0 && map[y][x - 1] && !visited[y][x - 1]) dfs(y, x - 1)
    if (map[y][x + 1] && !visited[y][x + 1]) dfs(y, x + 1)
    if (y > 0 && map[y - 1][x] && !visited[y - 1][x]) dfs(y - 1, x)
    if (map[y + 1][x] && !visited[y + 1][x]) dfs(y + 1, x)
  }

  let components = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] && !visited[i][j]) {
        dfs(i, j)
        components++
      }
    }
  }

  console.log(components)

  first += k
}
*/

/* BFS 풀이 */
var fs = require('fs')

var input = fs.readFileSync('/dev/stdin').toString().split('\n')

const T = Number(input[0])
let first = 1
for (let i = 0; i < T; i++) {
  let [m, n, k] = input[first].split(' ').map(Number)
  first++

  const map = new Array(n)
  for (let i = 0; i < map.length; i++) {
    map[i] = new Array(m).fill(0)
  }

  const visited = new Array(n)
  for (let i = 0; i < visited.length; i++) {
    visited[i] = new Array(m).fill(0)
  }

  for (let i = first; i < first + k; i++) {
    let [x, y] = input[i].split(' ').map(Number)
    map[y][x] = 1
  }
  //x >= 1, y >= 1
  const bfs = (y, x) => {
    const q = [[y, x]]
    while (q.length) {
      let [y, x] = q.shift()
      visited[y][x] = 1
      if (x > 0 && map[y][x - 1] && !visited[y][x - 1]) q.push([y, x - 1])
      if (x < m - 1 && map[y][x + 1] && !visited[y][x + 1]) q.push([y, x + 1])
      if (y > 0 && map[y - 1][x] && !visited[y - 1][x]) q.push([y - 1][x])
      if (y < n - 1 && map[y + 1][x] && !visited[y + 1][x]) q.push([y + 1, x])
    }
  }

  let components = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] && !visited[i][j]) {
        bfs(i, j)
        components++
      }
    }
  }

  console.log(components)

  first += k
}
