# Introducing JavaScript objects

## JavaScript object basics

### Object basics

[myPen](https://codepen.io/pen/?editors=0011)

- **properties**: data items
- **methods**: functions
- **object literal**: we've literally written out the object contents as we've come to create it.

### Bracket notation

```js
person.age
person.name.first
```

```js
person['age']
person['name']['first']
```

One useful aspect of bracket notation is that it can be used to set not only member values _dynamically_, but _member names_ too.

Adding a property to an object using the method above isn't possible with _dot notation_, which _can only accept a literal member name, not a variable value_ pointing to a name.('.'只能接受对象成员的字面量，'[]'可以接受变量作为参数)

```js
let myDataName = nameInput.value;
let myDataValue = nameValue.value;

person[myDataName] = myDataValue;
```

### Setting object members

你可以在_对象外_直接新建属性或方法

```js
const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};

//为object增加属性和方法
person['eyes'] = 'hazel';
person.farewell = function() { alert("Bye everybody!"); }
```

### You've been using objects all along

#### document object model（DOM)

For each webpage loaded, an instance of Document is created, called document, which represents the entire page's structure, content, and other features such as its URL.

Note that built in objects and APIs _don't always_ create object instances automatically.

> As an example, the Notifications API — which allows modern browsers to fire system notifications — requires you to instantiate a new object instance using the constructor for each notification you want to fire.

## Object-oriented JavaScript for beginners

### Object-oriented programming — the basics

- 实例化：the object instance is instantiated from the class.
- 继承
- 多态(polymorphism): The fancy word for the ability of multiple object types to implement the same functionality is polymorphism. 一个接口，多种方法，如C++中，多态是在不同继承关系的类对象，去调用同一函数，产生了不同的行为。

### Constructors and object instances

[myPen-oojs](https://codepen.io/pen/?editors=1000)

JavaScript uses special functions called **constructor functions** to _define and initialize objects_ and their features.

 _The constructor function is JavaScript's version of a class._

A constructor function name usually starts with **a capital letter**

the **new** keyword is used to tell the browser we want to create a new object instance.

```js
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}

let person1 = new Person('Bob');
let person2 = new Person('Sarah');
```

```js
//After the new objects have been created, the person1 and person2 variables contain the following objects:
{
  name: 'Bob',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}

{
  name: 'Sarah',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}
```

### Other ways to create object instances

#### The `Object()` constructor

you can use the `Object()` constructor to create a new object. Yes, even generic objects have a constructor, which _generates an empty object_.

```js
let person1 = new Object();

person1.name = 'Chris';
person1['age'] = 38;
person1.greeting = function() {
  alert('Hi! I\'m ' + this.name + '.');
};
```

```js
let person1 = new Object({
  name: 'Chris',
  age: 38,
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
});
```

#### Using the `create()` method

JavaScript has a built-in method called `create()` that allows you to _create object instances without first creating constructors_, especially if they are creating only a few instances of an object. 

With it, _you can create a new object, using an existing object as the prototype of the newly created object._

## Object prototypes

### A prototype-based language?

**Prototypes** are the mechanism by which _JavaScript objects inherit features from one another_.

**prototype chain** : An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a prototype chain, and explains why different objects have properties and methods defined on other objects available to them.

### Understanding prototype objects

_valueOf()_ returns the value of the object it is called on.

the methods and properties _are not copied_ from one object to another in the **prototype chain**. They _are accessed by walking up the chain_ as described above.

The prototype chain is _traversed only while retrieving properties_. If properties are set or deleted directly on the object, the prototype chain is not traversed.

Since ECMAScript 2015, you can access an object's prototype object indirectly via `Object.getPrototypeOf(obj)`. 相当于`obj.__proto__``obj.[[Prototype]]`

#### [__proto__  prototype constructor](https://blog.csdn.net/cc18868876837/article/details/81211729)

![prototype-chain](./Assets/prototype-chain.png)

- __proto__和constructor属性是对象所独有的；
- prototype属性是函数所独有的，因为函数也是一种对象，所以函数也拥有__proto__和constructor属性。
- __proto__属性的作用就是当访问一个对象的属性时，如果该对象内部不存在这个属性，那么就会去它的__proto__属性所指向的那个对象（父对象）里找，一直找，直到__proto__属性的终点null，再往上找就相当于在null上取值，会报错。通过__proto__属性将对象连接起来的这条链路即我们所谓的原型链。
- prototype属性的作用就是让该函数所实例化的对象们都可以找到公用的属性和方法，即f1.__proto__ === Foo.prototype
- constructor属性的含义就是指向该对象的构造函数，所有函数（此时看成对象了）最终的构造函数都指向Function

prototype is a property containing an object on which you define members that you want to be inherited.

### Revisiting create()

The `Object.create()` method creates a new object, using an existing object as the prototype of the newly created object.

```js
let person2 = Object.create(person1);
person2.__proto__ === person1 //true
```

### The constructor property

Every _constructor function_ has a prototype property whose value is an object containing a **constructor property**. This constructor property _points to the original constructor function_.

A clever trick is that you can put parentheses onto the end of the constructor property (containing any required parameters) to create another object instance from that constructor.

```js
let person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);
```

`instanceof` _运算符_用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

```js
//语法
object instanceof constructor

```

### Modifying prototypes

[myPen-oojs3](https://codepen.io/pen/?editors=0010)

修改 constructor 的 prototype, 由这个 constructor 产生的所有 object 的 prototype 都会改变。

The JavaScript **delete** operator _removes a property from an object_; if no more references to the same property are held, it is eventually released automatically.

```js
//语法
delete expression
```

a fairly common pattern for more object definitions is to _define the properties inside the constructor, and the methods on the prototype_

```js
// Constructor with property definitions

function Test(a, b, c, d) {
  // property definitions
}

// First method definition

Test.prototype.x = function() { ... };

// Second method definition

Test.prototype.y = function() { ... };

// etc.
```