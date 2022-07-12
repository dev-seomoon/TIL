const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => parseInt(v))
const N = input[0]
