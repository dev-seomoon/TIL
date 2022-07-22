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
#include <queue>
#include <vector>
using namespace std;
const int MAX_V = 20000;
typedef pair<int,int> P;
int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int V; // 정점의 개수
  int E; // 간선의 개수
  int K; // 시작 정점의 번호
  cin >> V >> E >> K;

  int dist[MAX_V];
  int visited[MAX_V] = {0,};
  vector<P> adjs[MAX_V];
  // <data-type, container, 오름차순 정렬(기본값: 내림차순)>
  priority_queue<P, vector<P>, greater<P>> pq;

  // adjs[u] : [v, w]
  // u에 인접한 정점 : [v(정점 번호), w(u->v까지의 거리)]
  for (int i = 0; i < E; i++) {
    int u, v, w;
    cin >> u >> v >> w;
    adjs[u - 1].push_back(P(v - 1, w));
  }
  fill(dist, dist+V, 1000000000);

  // K >= 1이기 때문에 인덱스로 사용하기 위해 1 감소시키기
  K--;

  /*
    아직 방문하지 않은 정점들 중에서 dist 값이 제일 작은 정점을 찾아 방문하기 : 
    V가 20,000이기 때문에 그냥 반복문으로 찾으면 4억번의 연산 -> 시간 초과
    => 최소 힙을 활용해 logV로 연산해야 함
  */

  // 시작 정점 K에서 자기자신까지의 거리는 0
  dist[K] = 0;

  // 최소 힙에 (0, K) 추가 : (최단경로, 정점번호)
  pq.push(P(0, K));
  while (!pq.empty()) {
    int curr;
    curr = pq.top().second;
    pq.pop();
    while (!pq.empty() && visited[curr]) {
      curr = pq.top().second;
      pq.pop();
    }
    if (visited[curr]) break;

    visited[curr] = true;
    for (P p: adjs[curr]) {
      int next = p.first;
      int d = p.second;
      if (dist[next] > dist[curr] + d) {
        dist[next] = dist[curr] + d;
        pq.push(P(dist[next], next));
      }
    }
  }

  for (int i = 0; i < V; i++) {
    if (dist[i] == 1000000000) cout << "INF" << '\n';
    else cout << dist[i] << '\n';
  }

}