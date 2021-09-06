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