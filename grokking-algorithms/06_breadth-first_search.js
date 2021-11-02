//创建无向图，用散列表来表示点到邻近节点的边
const graph = {};
graph["you"] = ["alice", "tom", "claire"];
graph["tom"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

/**
 * Determine whether a person is a seller
 * @param {string} name Friend's name
 * @returns {boolean} Result of checking
 */
function personIsSeller(name) {
  return name[name.length - 1] === "m";
}

/**
 * Find a mango seller
 * @param {string} name Friend's name
 * @returns {boolean} Search results
 */

function search(name, graph) {
  let search_queue = []; //用队列来存储查找序列
  search_queue = search_queue.concat(graph[name]); //初始化查找队列(用concat不用push是为了数组扁平化)
  const searched = []; //标记已经查找过的节点
  while (search_queue.length) { //查找队列不为空
    let person = search_queue.shift(); //队头出队，作为本次查找节点
    if (searched.indexOf(person) === -1) { //如果该节点没有查找过
      if (personIsSeller(person)) { //进行查找
        console.log(person + " is a mango seller!");
        return true;
      } else { //若该节点不满足条件，则将该节点的邻近节点(下一层节点)加入查找队列
        search_queue = search_queue.concat(graph[person]);
        searched.push(person); //将该节点标记为已查找
      }      
    }
  }
  return false;
}

//test
search("you", graph);