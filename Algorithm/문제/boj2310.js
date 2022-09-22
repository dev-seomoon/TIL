var fs = require("fs");

var input = fs.readFileSync("/dev/stdin").toString().split("\n");

let T = 0;
while (Number(input[T]) !== 0) {
  // for test cases
  let N = Number(input[T]);
  var graph = Array(N + 1).fill({});
  const visited = Array(N + 1).fill(false);
  T++;

  // get input
  for (let i = T; i < T + N; i++) {
    let line = input[i].split(" ");
    let type = line.shift();
    line = line.map(Number);
    let money = line.shift();

    graph[i - T + 1] = { type, money, adjs: [] };

    for (let j = 0; j < line.length; j++) {
      if (line[j] === 0) break;
      graph[i - T + 1].adjs.push(line[j]);
    }
  }

  // dfs

  const dfs = (v, money) => {
    const room = graph[v];

    if (room.type === "T" && money < room.money) return;
    else if (room.type === "T" && money >= room.money) {
      money -= room.money;
    } else if (room.type === "L" && money < room.money) {
      money = room.money;
    }
    visited[v] = true;
    room.adjs.forEach((roomNumber) => {
      if (!visited[roomNumber]) dfs(roomNumber, money);
    });
  };

  dfs(1, 0);

  visited[N] ? console.log("Yes") : console.log("No");

  T += N;
}
