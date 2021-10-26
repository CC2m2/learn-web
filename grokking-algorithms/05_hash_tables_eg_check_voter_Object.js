/**
 * 原理：
 * 使用Object的“键值对”来实现散列表
 * 通过访问属性来进行映射（随机访问）
 */

voted = {}; //创建散列表

function check_vote(name) {
  if (voted[name]) { //查找该值在散列表中是否存在
    console.log("kick them out!");
  } else { //将该值加入到散列表中，关键码作为key来实现随机访问
    voted[name] = true;
    console.log("let them vote!");
  }
}

//test
check_vote("tom"); //let them vote!
check_vote("mike"); //let them vote!
check_vote("tom"); //kick them out!