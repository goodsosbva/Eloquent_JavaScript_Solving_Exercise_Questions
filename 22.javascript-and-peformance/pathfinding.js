function createNode(label) {
  return { label, edges: [] };
}

function connect(a, b) {
  a.edges.push(b);
  b.edges.push(a);
}

function findPath(start, goal) {
  let paths = [[start]];

  for (let path of paths) {
    let current = path[path.length - 1];
    if (current === goal) return path;

    for (let neighbor of current.edges) {
      let visited = paths.some((p) => p[p.length - 1] === neighbor);
      if (!visited) paths.push([...path, neighbor]);
    }
  }

  return null;
}

function treeGraph(depth, branches) {
  let graph = [];
  let count = 0;

  function buildNode(d) {
    let node = createNode(count++);
    graph.push(node);
    if (d > 0) {
      for (let i = 0; i < branches; i++) {
        connect(node, buildNode(d - 1));
      }
    }
    return node;
  }

  buildNode(depth);
  return graph;
}

// 테스트
let tree = treeGraph(2, 2);
console.log(tree);
let path1 = findPath(tree[0], tree[tree.length - 1]);
console.log("경로:", path1?.map((n) => n.label).join(" -> "));

let cyclicTree = treeGraph(2, 2);
connect(cyclicTree[1], cyclicTree[2]);
let path2 = findPath(cyclicTree[0], cyclicTree[3]);
console.log("순환 그래프 경로:", path2?.map((n) => n.label).join(" -> "));

// 최적화된 findPath 함수
function findPathOptimized(start, goal) {
  let work = [[start]];
  let seen = new Set([start]);

  for (let i = 0; i < work.length; i++) {
    let path = work[i];
    let current = path[path.length - 1];

    if (current === goal) {
      return path;
    }

    for (let neighbor of current.edges) {
      if (!seen.has(neighbor)) {
        seen.add(neighbor);
        work.push(path.concat([neighbor]));
      }
    }
  }

  return null;
}

// 시간 측정
console.log("\n=== 시간 측정 ===");
let graph = treeGraph(6, 6);

let startTime1 = Date.now();
let result1 = findPath(graph[0], graph[graph.length - 1]);
let endTime1 = Date.now();
console.log("원본 함수 - 경로 길이:", result1?.length);
console.log("원본 함수 - 실행 시간:", (endTime1 - startTime1) / 1000, "초");

let startTime2 = Date.now();
let result2 = findPathOptimized(graph[0], graph[graph.length - 1]);
let endTime2 = Date.now();
console.log("최적화 함수 - 경로 길이:", result2?.length);
console.log("최적화 함수 - 실행 시간:", (endTime2 - startTime2) / 1000, "초");
console.log(
  "개선율:",
  ((endTime1 - startTime1) / (endTime2 - startTime2)).toFixed(2),
  "배"
);

export { createNode, connect, findPath, findPathOptimized, treeGraph };
