/* 최대 힙 */

/*
x > 0 ? push(x)
x == 0 ? pop()
*/

#include <iostream>
using namespace std;

int arr[100001];

void push(int n, int &size) {
  arr[++size] = n;
  int curr = size;
  
  while (curr >= 2) {
    // 자식이 부모보다 크면
    if (arr[curr] > arr[curr >> 1]) {
      int tmp = arr[curr];
      arr[curr] = arr[curr >> 1];
      arr[curr >> 1] = tmp;
      curr = curr >> 1;
    } else {
      break;
    }
  }
}

void pop(int &size) {
  if (size == 0) {
    cout << 0 << '\n';
    return;
  }
  int max = arr[1];
  arr[1] = arr[size];
  size--;
  int curr = 1;
  while (curr * 2 <= size) {
    int biggerIndex = curr * 2;
    if (curr * 2 + 1 <= size) {
      if (arr[curr * 2] < arr[curr * 2 + 1])
        biggerIndex = curr * 2 + 1;
    }
    if (arr[biggerIndex] > arr[curr]) {
      int tmp = arr[curr];
      arr[curr] = arr[biggerIndex];
      arr[biggerIndex] = tmp;
      curr = biggerIndex;
    }
    else break;
  }
  cout << max << '\n';
}

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int n;
  cin >> n;

  int size = 0;
  for (int i = 0; i < n; i++) {
    int x;
    cin >> x;
    if (x > 0) push(x, size);
    else pop(size);
  }
}