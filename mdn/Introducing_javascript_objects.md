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
