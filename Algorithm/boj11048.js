const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const [N, M] = input[0].split(' ').map((v) => Number(v))

const map = Array(N).fill()
const candies = Array(N)
  .fill()
  .map((_, i) => input[i + 1].split(' ').map((v) => Number(v)))

console.log(N, M, candies)

/*
1 2 3 ... N
2
3
...
N

오른쪽, 아래, 대각선 오른쪽 아래로 이동 가능
각 칸에 있는 사탕을 전부 가져갈 수 있음
준규가 1,1에서 n,m으로 갈 때 가져올 수 있는 사탕 개수의 최대값

1,1 -> 1,1 : (1,1)
1,1 -> 1,2 : ()

*/
