const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => parseInt(v))
const n = input[0]

const cache = []

cache[3] = 

for (let i = 3; i <= n; i++) {
  cache[i] = Math.min(cache[i - 3] + 1, cache[i - 5] + 1)
}

console.log(cache[n])