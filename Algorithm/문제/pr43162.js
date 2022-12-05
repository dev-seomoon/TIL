function solution(n, computers) {
  var components = 0;

  const visited = new Array(n).fill(false);

  const dfs = (node) => {
    visited[node] = true;
    const adjs = computers[node];
    for (let i = 0; i < adjs.length; i++) {
      if (!visited[i]) dfs(i);
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      components++;
    }
  }
  return components;
}
