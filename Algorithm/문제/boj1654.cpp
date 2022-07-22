#include <bits/stdc++.h>
using namespace std;

long long getLansunCount(long long *arr, long long K, long long mid) {
  long long count = 0;
  for (long long i = 0; i < K; i++) {
    count += (arr[i] / mid);
  }
  return count;
}

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  long long K, N;
  cin >> K >> N;

  long long arr[K];
  long long max = 0;
  for (long long i = 0; i < K; i++) {
    long long length;
    cin >> length;
    if (length > max) max = length;
    arr[i] = length;
  }

  long long left, right, mid;
  left = 1;
  right = max;
  mid = (left + right + 1) / 2;
  while (left < right) {
    long long count = getLansunCount(arr, K, mid);
    if (count < N) {
      right = mid - 1;
    }
    else {
      left = mid;
    }
    mid = (left + right + 1) / 2;
  }
  cout << left;
}

// cin >> n;
// cout << result;