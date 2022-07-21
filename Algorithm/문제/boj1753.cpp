/* 최단 경로 - 다익스트라 알고리즘 */

/*

dist[] : 시작점에서 각 정점까지의 거리 테이블 -> [0, inf, inf, ...] 로 초기화
d[i][j] : 정점 i에서 정점 j로 가는 거리

0번 정점에서 k번 정점으로 가는 거리 : 
dist[0] + d[0][k]
= (~0번 정점까지의 거리 + 0번 정점에서 k번 정점까지의 거리)

dist[0] + d[0][k] < dist[k]이면 
dist[k] = dist[0] + d[0][k]

아직 방문하지 않은 정점 중에서 d[i][j]가 가장 작은 정점부터 방문
(이 과정에서 최소 힙 활용)

*/

#include <iostream>
using namespace std;
int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int V; // 정점의 개수
  int E; // 간선의 개수
  int K; // 시작 정점의 번호
  cin >> V >> E >> K;

  int dist[V];
  int d[V][V];

  for (int i = 0; i < V; i++)
    for (int j = 0; j < V; j++)
      d[i][j] = 0;

  for (int i = 0; i < E; i++) {
    int u, v, w;
    cin >> u >> v >> w;
    d[u][v] = w;
  }

  
}