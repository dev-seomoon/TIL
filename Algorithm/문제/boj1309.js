/* DP, 동물원 */
/* 
arr = [[1,0], [0,1], [0,0], ...]

dp[n][0] = [[n,0]번째 칸에 사자를 배치하는 경우의 수, [n,0]번째 칸에 사자를 배치하지 않는 경우의 수]

dp[0] = 3
dp[1] = 

dp[n][0] = [dp[n-1][1][0] + dp[n-1][], ]

1309 동물원
14712 넴모넴모 (EASY)


2^4 - 1

2의 총 칸수 제곱 - 넴모 4개를 배치할 수 있는 경우의 수

2의 6제곱 - (2 + 2 + )
ㅁㅁㅁ
ㅁㅁㅁ

n,m번째 칸이 비어있는 경우 : 
dp[n][m][0] = dp[n-1][m-1][1] + dp[n-1][m-1][0] + dp[n-1][m][]

n,m번째 칸이 차있는 경우 : 
dp[n][m][1] = dp[n-1][m-1][]
*/
