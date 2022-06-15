var fs = require('fs')

var input = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => parseInt(v))

console.log(input[0] + input[1])