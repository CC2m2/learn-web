/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * FAILED!!!
 * 没有考虑环怎么判断
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

let graph = new Map(); //用邻接表存储有向图 [顶点:[入度]]
let visited = new Set(); //存储已经访问过的顶点
let degree = new Map(); //存储顶点的入度 [入度数：[顶点]]

var canFinish = function (numCourses, prerequisites) {
  //建立邻接表
  for (let [v, e] of prerequisites) {
    if (graph.has(v)) {
      let edges = graph.get(v);
      edges.push(e);
      graph.set(v, edges);
    } else {
      graph.set(v, [e]);
    }
  }

  //统计各顶点的入度
  let maxDegree = 0;
  for (let [key, value] of graph) {
    if (degree.has(value)) {
      let vertices = degree.get(value);
      vertices.push(key);
      degree.set(value.length, key);
    } else {
      degree.set(value.length, [key]);
      maxDegree = Math.max(maxDegree, value.length);
    }
  }

  //DFS 遍历所有入度为0的顶点
  let queue = []; //DFS序列队列
  queue = queue.concat(degree.get(maxDegree));
  while(queue.length) {
    let vertex = queue.shift();
    if (!visited.has(vertex)) {
      let key = Number(vertex);
      if (graph.get(key)){
        queue = queue.concat(graph.get(key));
      }
      visited.add(vertex);     
    }
  }

  if (visited.size === numCourses) {
    return true;
  } else {
    return false;
  }
};

//test
console.log(canFinish(2, [[1,0],[0,1]]));
// @lc code=end
