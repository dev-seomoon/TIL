const getDiff = (strA, strB) => {
  let diff = 0;
  for (let i = 0; i < strA.length; i++) {
    if (strA[i] !== strB[i]) diff++;
  }
  return diff;
};

function solution(begin, target, words) {
  if (!words.find((w) => w === target)) {
    return 0;
  }

  const Q = [[begin, 0]];

  while (Q.length) {
    [word, depth] = Q.shift();

    for (const toChange of words) {
      if (getDiff(word, toChange) === 1) {
        if (toChange === target) return depth + 1;
        else Q.push([toChange, depth + 1]);
      }
    }
  }
}
