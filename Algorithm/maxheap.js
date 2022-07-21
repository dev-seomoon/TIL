// max heap 구현하기

var queue = Array(1000).fill(0)
var size = 0

const push = (n) => {
  queue[++size] = n;
  var cur = size;

  while (cur >= 2) {
    if (queue[cur] > queue[cur >> 1]) {
      var temp = queue[cur >> 1]
      queue[cur >> 1] = queue[cur]
      queue[cur] = temp
      cur = cur >> 1
    } else break;
  }
}

const pop = () => {
  var max = queue[1];

  queue[1] = queue[size];
  size--;
  var cur = 1;

  while (cur * 2 <= size) {
    // 자식이 더 크면
    var bigger
    // 오른쪽 자식이 있으면
    if (cur * 2 + 1 <= size && queue[cur * 2] < queue[cur * 2 + 1]) {
      bigger = cur * 2 + 1
    } else 
    bigger = cur * 2
    if (queue[bigger] > queue[cur]) {
      var tmp = queue[bigger]
      queue[bigger] = queue[cur]
      queue[cur] = tmp
      cur = bigger
    }
    else break;
  }
  return max;
}

var input = [5, -1, 3, 1, 6, 7, -66, 100, 23, -222222, 3222];

input.forEach(
  v => push(v)
)
console.log(queue)

input.forEach(() => console.log(pop()))