var fs = require('fs')

var input = fs.readFileSync('/dev/stdin').toString().split('\n')

const n = Number(input[0])

const stones = input[1].split(' ').map(v => Number(v))

const result = stones.reduce((acc, stone) => acc^stone, 0)

console.log(result === 0 ? 'cubelover' : 'koosaga')