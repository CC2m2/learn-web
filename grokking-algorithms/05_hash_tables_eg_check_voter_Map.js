/**
 * 使用Map()类型
 */

const voted = new Map(); //创建散列表

voted.set("tom", true);
voted.set("mike", true);

console.log(voted.get("tom"));
console.log(voted.size);