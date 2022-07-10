const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const [N, M] = input[0].split(' ').map((v) => Number(v))

const dp = Array.from(Array(N), () => new Array(M).fill(0))

const candies = Array.from(Array(N), () => new Array(M + 1).fill(0)).map((_, i) =>
  input[i + 1].split(' ').map((v) => Number(v)),
)

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    dp[i][j] =
      candies[i][j] +
      Math.max(i > 0 ? dp[i - 1][j] : 0, j > 0 ? dp[i][j - 1] : 0, i > 0 && j > 0 ? dp[i - 1][j - 1] : 0)
  }
}

console.log(dp[N - 1][M - 1])
/*
1 2 3 ... N
2
3
...
N

오른쪽, 아래, 대각선 오른쪽 아래로 이동 가능
각 칸에 있는 사탕을 전부 가져갈 수 있음
준규가 1,1에서 n,m으로 갈 때 가져올 수 있는 사탕 개수의 최대값

dp[n][m] = (n, m)칸까지 왔을 때 가질 수 있는 최대 사탕 개수

dp[1][1] = 1
dp[1][2] = 3
dp[2][1] = 1
 
dp[n][m] = max(dp[n - 1][m], dp[n][m - 1], dp[n - 1][m - 1]) + candies[n][m]

*/
