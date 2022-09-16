#include <bits/stdc++.h>
using namespace std;


int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int arr[501][501];
  int dp[501][501];

  int n;
  cin >> n;
  for (int i = 1; i <= n + 1; i++) {
    for (int j = 1; j <= i + 1; j++) {
      int tmp;
      cin >> tmp;
      arr[i][j] = tmp;
    }
  }
  
  for (int i = 1; i <= n + 2; i++) {
    for (int j = 1; j <= i + 2; j++) {
      if (j == 0)
        arr[i][j] += arr[i-1][0];
      else if (i == j)
        arr[i][j] += arr[i-1][j-1];
      else
        arr[i][j] = (arr[i-1][j-1] > arr[i-1][j] ? arr[i-1][j-1] : arr[i-1][j]);
    }
  }

  int max = 0;
  for (int i = 1; i <= n+2; i++) {
    if (arr[n+1][i] > max)
      max = arr[n+1][i];
  }

  cout << max;

  return 0;
}

// cin >> n;
// cout << result;