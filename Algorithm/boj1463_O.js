const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => parseInt(v))
const N = input[0]

const dp = Array(N + 1).fill(0)
dp[1] = 0
dp[2] = 1
dp[3] = 1
for (let i = 4; i < dp.length; i++) {
  dp[i] = dp[i - 1] + 1
  if (i % 2 === 0) 
    dp[i] = Math.min(dp[i], dp[i / 2] + 1)
  if (i % 3 === 0)
    dp[i] = Math.min(dp[i], dp[i / 3] + 1)
}

console.log(dp[N])