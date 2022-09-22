class CircularQueue {
  constructor(size) {
    this.element = [];
    this.size = size;
    this.length = 0;
    this.front = 0;
    this.back = -1;
  }
  isEmpty() {
    return this.length == 0;
  }
  enqueue(element) {
    if (this.length >= this.size) throw new Error("Maximum length exceeded");
    this.back++;
    this.element[this.back % this.size] = element;
    this.length++;
  }
  dequeue() {
    if (this.isEmpty()) throw new Error("No elements in the queue");
    const value = this.getFront();
    this.element[this.front % this.size] = null;
    this.front++;
    this.length--;
    return value;
  }
  getFront() {
    if (this.isEmpty()) throw new Error("No elements in the queue");
    return this.element[this.front % this.size];
  }
  clear() {
    this.element = new Array();
    this.length = 0;
    this.back = 0;
    this.front = -1;
  }
}

var fs = require("fs");

var input = fs.readFileSync("/dev/stdin").toString().split("\n");

var line = 0;
const t = Number(input[line]);
line++;

// bfs

/*
최단 경로 구하기 : 

가중치가 있을 때는 다익스트라 알고리즘, 
가중치가 없을 때는 BFS
*/

for (let i = 0; i < t; i++) {
  const N = Number(input[line]);
  const visited = new Array(N);
  for (let j = 0; j < N; j++) {
    visited[j] = new Array(N).fill(false);
  }
  line++;
  const start = input[line].split(" ").map(Number);
  line++;
  const end = input[line].split(" ").map(Number);
  line++;

  const q = new CircularQueue(10000);
  q.enqueue([...start, 0]);
  while (!q.isEmpty()) {
    let [y, x, count] = q.dequeue();
    if (x < 0 || x >= N || y < 0 || y >= N || visited[y][x]) {
      continue;
    }

    visited[y][x] = true;

    if (end[0] === y && end[1] === x) {
      console.log(count);
      break;
    }

    q.enqueue([y - 2, x - 1, count + 1]);
    q.enqueue([y - 2, x + 1, count + 1]);
    q.enqueue([y - 1, x - 2, count + 1]);
    q.enqueue([y - 1, x + 2, count + 1]);
    q.enqueue([y + 1, x - 2, count + 1]);
    q.enqueue([y + 1, x + 2, count + 1]);
    q.enqueue([y + 2, x - 1, count + 1]);
    q.enqueue([y + 2, x + 1, count + 1]);
  }
}
