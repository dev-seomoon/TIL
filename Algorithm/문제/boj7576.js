/* BFS, 토마토 */
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

const [m, n] = input[0].split(" ").map(Number);

const box = new Array(n);
const visited = new Array(n);
for (let i = 0; i < n; i++) {
  box[i] = input[i + 1].split(" ").map(Number);
  visited[i] = new Array(m).fill(false);
}

const q = new CircularQueue(10000);
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (box[i][j] === 1) {
      q.enqueue([i, j, 0]);
      console.log(i, j, 0);
      let lastDist = 0;
      while (!q.isEmpty()) {
        let [y, x, dist] = q.dequeue();
        console.log(y, x, dist);
        lastDist = dist;
        if (x < 0 || x >= m || y >= n || y < 0 || box[y][x] === -1) {
          continue;
        }
        box[y][x] = 1;

        q.enqueue([x - 1, y, dist + 1]);
        q.enqueue([x + 1, y, dist + 1]);
        q.enqueue([x, y - 1, dist + 1]);
        q.enqueue([x, y + 1, dist + 1]);
      }
    }
  }
}

let notRipe = false;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (box[i][j] === 0) notRipe = true;
  }
}

console.log(box);

notRipe ? console.log(-1) : console.log(lastDist);
