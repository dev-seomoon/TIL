var fs = require('fs')

var input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((str) => str.split(' '))

const [N, S] = input[0]
const nums = input[1]

/*

부분수열 : 주어진 수열의 일부 항을 원래 순서대로 나열하여 얻을 수 있는 수열


문제
N개의 정수로 이루어진 수열이 있을 때, 크기가 양수인 부분수열 중에서 그 수열의 원소를 다 더한 값이 S가 되는 경우의 수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 정수의 개수를 나타내는 N과 정수 S가 주어진다. (1 ≤ N ≤ 20, |S| ≤ 1,000,000) 둘째 줄에 N개의 정수가 빈 칸을 사이에 두고 주어진다. 주어지는 정수의 절댓값은 100,000을 넘지 않는다.

출력
첫째 줄에 합이 S가 되는 부분수열의 개수를 출력한다.

예제 입력 1 
5 0
-7 -3 -2 5 8
예제 출력 1 
1


1) 첫번째 방법 - 조합 구하기
수열로 만들 수 있는 모든 조합 구하고, 각 조합의 sum 구해서 S와 비교하며 카운팅
(브루트포스, 완전탐색 방식)

O(2^20) ?

DFS, 재귀호출로 짜는 것이 효율적

*/
