#include <bits/stdc++.h>
using namespace std;
int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int S;
  cin >> S;

  int sum = 0;
  for (int i = 1; i < 300000; i++) {
    sum += i;
    if (sum > S) {
      cout << i - 1;
      break;
    }
  }
}

// cin >> n;
// cout << result;