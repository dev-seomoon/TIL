#include <bits/stdc++.h>
using namespace std;

int arr[10000001];

// O(n)
bool f(int h, int N, int M) {
  int sum = 0;
  for (int i = 0; i < N; i++) {
    sum += arr[N] - h;
  }
  return sum >= M;
}

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int N, M;
  cin >> N >> M;
  for (int i = 0; i < N; i++) {
    cin >> arr[i];
  }

  // binary search
  int lowest = 0, highest = 1000000000;

  
}

// cin >> n;
// cout << result;