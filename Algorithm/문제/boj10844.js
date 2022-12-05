const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

const N = input[0];

var dp = new Array(N + 1);

for (var i = 0; i < dp.length; i++) {
  dp[i] = new Array(10).fill(0);
}

for (let i = 0; i <= 9; i++) {
  dp[1][i] = i;
}

console.log(dp);

for (let n = 1; n <= N; n++) {
  for (let l = 0; l <= 9; l++) {
    if (l === 0) dp[n][l] = dp[n - 1][l + 1];
    else if (l === 9) dp[n][l] = dp[n - 1][l - 1];
    else dp[n][l] = dp[n - 1][l - 1] + dp[n - 1][l + 1];
  }
}

console.log(dp[N][9]);
