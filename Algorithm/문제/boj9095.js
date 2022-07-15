const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(v => parseInt(v))

const len = input[0]

input.slice(1, len + 1).forEach((N) => {
  const dp = Array(N + 1).fill(0)
  dp[1] = 1
  dp[2] = 2
  dp[3] = 3
  for (let i = 4; i < dp.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] * dp[2] + dp[i - 3] * dp[3]
  }
  console.log(dp[N])
})