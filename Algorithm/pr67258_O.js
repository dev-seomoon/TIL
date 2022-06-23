function solution(gems) {
  var answer = [1, gems.length];
  const count = new Set(gems).size;
  const map = new Map();
  gems.forEach((gem, idx) => {
    map.delete(gem);
    map.set(gem, idx);
    if (map.size === count) {
      const curr = [map.values().next().value + 1, idx + 1];
      if (curr[1] - curr[0] < answer[1] - answer[0]) answer = curr;
    }
  });
  return answer;
}

console.log(
  solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"])
);
console.log(solution(["AA", "AB", "AC", "AA", "AC"]));
console.log(solution(["XYZ", "XYZ", "XYZ"]));
console.log(solution([("ZZZ", "YYY", "NNNN", "YYY", "BBB")]));

/*
진열된 모든 종류의 보석을 적어도 1개 이상 포함하는 가장 짧은 구간을 찾아서 구매

진열대의 3번부터 7번까지 5개의 보석을 구매하면 모든 종류의 보석을 적어도 하나 이상씩 포함하게 됩니다.

가장 짧은 구간이 여러 개라면 시작 진열대 번호가 가장 작은 구간을 return

슬라이딩 윈도우 알고리즘
*/
