/**
 * https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/
 */

//散列表类
class HashTable {
  //创建散列表构造函数及初始化
  constructor() {
    this.table = new Array(127); //存储键值对
    this.size = 0; //hash表长度
  }

  //hash函数，这里将key的ASCII码和作为index
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length; //index在[0, 127]
  }

  set(key, value) {
    const index = this._hash(key);
    //解决冲突 => 数组嵌套,将拥有相同index的值放到一个数组中
    if (this.table[index]) { 
      //若该key存在,更新value
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i] = value;
          return;
        }
      }
      //若该key不存在,新建一个键值对
      this.table[index].push([key, value]);
    } else {
      //若无冲突，创建该index的数组并存储键值对
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  get(key) {
    const index = this._hash(key);
    //找到key存储的位置，并返回对应的value
    if (this.table[index]) { 
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this._hash(key);
    //查找对应的key值，并将该键值对删除
    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  display() {
    //遍历table数组和二级数组，显示哈希表的所有键值对
    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[${key}: ${value}]`
      );
      console.log(`${index}: ${chainedValues}`);
    });
  }
}

//test
const ht = new HashTable();

ht.set("France", 111);
ht.set("Spain", 150);
ht.set("ǻ", 192);
console.log(ht.get("Spain")); //150

ht.display();
// 83: [ France: 111 ]
// 126: [ Spain: 150 ],[ ǻ: 192 ]

console.log(ht.size); // 3
ht.remove("Spain");
ht.display();
// 83: [ France: 111 ]
// 126: [ ǻ: 192 ]