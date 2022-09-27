var fs = require("fs");

// max 2500, 50 o(nm)
var [doc, word] = fs.readFileSync("/dev/stdin").toString().split("\n");

let i = 0;
let count = 0;
while (i < doc.length) {
  const firstIndex = doc.indexOf(word, i);
  if (firstIndex > -1) {
    i = firstIndex;
    i += word.length;
    count++;
  } else {
    i++;
  }
}

console.log(count);
