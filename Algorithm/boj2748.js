var fs = require('fs')

var input = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => parseInt(v))
var n = input[0]

function fibo(n) {
    if (n < 2) return n
    var cache = []
    cache[0] = 0
    cache[1] = 1

    for (let i = 2; i <= n; i++) {
        cache[i] = BigInt(cache[i - 1]) + BigInt(cache[i - 2])
    }
    
    return cache[n].toString()
}

console.log(fibo(n))