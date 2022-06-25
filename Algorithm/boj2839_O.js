const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => parseInt(v))
const N = input[0]


const dp = Array(N + 1).fill(-1)
dp[3] = 1
dp[5] = 1

for (let i = 6; i < dp.length; i++) {
  const a = dp[i - 3] + 1
  const b = dp[i - 5] + 1
  if (a && b) dp[i] = Math.min(a, b)
  else if (a) dp[i] = a
  else if (b) dp[i] = b
  else dp[i] = -1
}

console.log(dp[N])