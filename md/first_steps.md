# First steps
<!-- TOC -->

- [First steps](#first-steps)
  - [What is javascript](#what-is-javascript)
    - [Script loading strategies](#script-loading-strategies)
      - [Internal script](#internal-script)
      - [External script](#external-script)
    - [async and defer](#async-and-defer)
  - [Variables](#variables)
    - [Differences between var and let](#differences-between-var-and-let)
      - [var](#var)
    - [Variable types](#variable-types)
    - [Constants in javascript](#constants-in-javascript)
  - [Basic math in JavaScript — numbers and operators](#basic-math-in-javascript--numbers-and-operators)
    - [Converting to number data types](#converting-to-number-data-types)
      - [Number()](#number)
    - [Arithmetic operators](#arithmetic-operators)
      - [/](#)
      - [**](#-1)
    - [Comparison operators](#comparison-operators)
      - [== / != and === / !===](#---and---)
        - [== / !=](#--)
        - [=== / !==](#---1)
  - [Handling text — strings in JavaScript](#handling-text--strings-in-javascript)
    - [Escaping characters in a string](#escaping-characters-in-a-string)
    - [Numbers vs. strings](#numbers-vs-strings)
    - [Template literals](#template-literals)
      - [Multi-line strings](#multi-line-strings)
      - [Expression interpolation](#expression-interpolation)
      - [Nesting templates](#nesting-templates)
      - [Tagged templates](#tagged-templates)
      - [Raw strings](#raw-strings)
  - [Useful string methods](#useful-string-methods)
  - [Arrays](#arrays)
    - [Some useful array methods](#some-useful-array-methods)
  - [Adding and removing array items](#adding-and-removing-array-items)

<!-- /TOC -->
## What is javascript

### Script loading strategies

 If you are using JavaScript to manipulate elements on the page (or more accurately, the Document Object Model), your code won't work if the JavaScript is loaded and parsed before the HTML you are trying to do something to.

#### Internal script

```js
document.addEventListener("DOMContentLoaded", function() {
  ...
});

```

This is an event listener, which listens for the browser's "DOMContentLoaded" event, which signifies that the HTML body is completely loaded and parsed. The JavaScript inside this block will not run until after that event is fired, therefore the error is avoided (you'll learn about events later in the course).

#### External script

```js
<script src="script.js" defer></script>
```

the **defer** attribute, which tells the browser to continue downloading the HTML content once the < script> tag element has been reached.
In this case both the script and the HTML will load simultaneously and the code will work.

### async and defer

![async and defer](./assets/async-defer.jpg)

To summarize:

1. async and defer both instruct the browser to download the script(s) **in a separate thread**, while the rest of the page (the DOM, etc.) is downloading, so the page loading is not blocked during the fetch process.
2. scripts with an async attribute will execute **as soon the download is done**. This blocks the page and does **not guarantee any specific execution order**.
3. scripts with a defer attribute will load **in the order** they are in and will **only execute once everything has finished loading**.
4. If your scripts should be run immediately and they **don't have any dependencies**, then use async.
5. If your scripts need to wait for parsing and depend on other scripts and/or the **DOM** being in place, load them using defer and put their corresponding < script> elements in the order you want the browser to execute them.

## Variables

### Differences between var and let

#### var

- **hoisting**
  - var declarations, wherever they occur, are **processed before any code is executed**.
  - The scope of a variable declared with var is its current execution context and closures thereof(闭包)
  - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting>
- can _declare_ the same variable as many times as you like
  
```js
  var myName = 'Chris';
  var myName = 'Bob';
```

There is no reason to use var, unless you need to support old versions of Internet Explorer with your code (it doesn't support let until version 11; the modern Microsoft Edge browser supports let just fine).

### Variable types

- Number
- String
- Boolean
- Array
- Object
- Symbol

### Constants in javascript

 In modern JavaScript, we have the keyword **const**, which lets us store values that can never be changed. You _can't give a const a new value_.

## Basic math in JavaScript — numbers and operators

### Converting to number data types

#### Number()

passing the string value into _the Number()_ constructor to return a number version of the same value.

### Arithmetic operators

#### /

Division(普通除法). Divides the left number by the right.
> `50 / 8 = 1.25`

#### **

Exponent(指数). Raises a base number to the exponent power, that is, the base number multiplied by itself, exponent times. It was first Introduced in EcmaScript 2016.
> `5 ** 2` (returns 25, which is the same as `5 * 5`or `Math.pow(5, 2)`).

### Comparison operators

#### == / != and === / !===

##### == / !=

The former versions test whether the **values** are the same but _not whether the values' datatypes are the same_.

##### === / !==

The strict versions test the equality of _both the **values** and their **datatypes**_.

## Handling text — strings in JavaScript

### Escaping characters in a string

In JavaScript, we do this by _putting a **backslash** just before the character_. [Escape sequences](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_sequences)

> wrong: `let bigmouth = 'I've got no right to take my place...';`
> correct: `let bigmouth = 'I\'ve got no right to take my place...';
bigmouth;`

### Numbers vs. strings

- The **Number** object converts anything passed to it into a number, if it can. `Number()`

```js
let myString = '123';
let myNum = Number(myString);
typeof myNum;
```

- Conversely, every number has a method called `toString()` that converts it to the equivalent string.

```js
let myNum2 = 123;
let myString2 = myNum2.toString();
typeof myString2;
```

### [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

#### Multi-line strings

Any newline characters inserted in the source are part of the template literal.

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

#### Expression interpolation

Now, with template literals, you are able to make use of the syntactic sugar, making substitutions like this more readable:

```js
let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."

```

#### Nesting templates

Within a backticked template, it is simple to allow inner backticks by using them inside a placeholder `${ }` within the template.(没看懂)

#### Tagged templates

```js
let person = 'Mike';
let age = 28;

function myTag(strings, personExp, ageExp) {
  let str0 = strings[0]; // "That " 含空格
  let str1 = strings[1]; // " is a "
  let str2 = strings[2]; // "."

  let ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let output = myTag`That ${ person } is a ${ age }.`;

console.log(output);
// That Mike is a youngster.

```

#### Raw strings

The special raw property, available on the first argument to the tag function, allows you to access the raw strings as they were entered, _without processing escape sequences_.

```js
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// logs "string text line 1 \n string text line 2" ,
// including the two characters '\' and 'n'

```

In addition, the `String.raw()` method exists to create raw strings—just like the default template function and string concatenation would create.

```js
let str = String.raw`Hi\n${2+3}!`;
// "Hi\\n5!"
//_两个 \\ 是因为  \n 被当作两个字符处理了，但是在字符串里面，\ 这个字符需要转义成 \\_

str.length;
// 6

Array.from(str).join(',');
// "H,i,\\,n,5,!"

```

## Useful string methods

string object instance.

- `.length`

- `indexOf()` substring
  - If the substring is found inside the main string, it returns a number representing the index position of the substring — which character number of the main string the substring starts at. If the substring is not found inside the main string, it returns a value of -1.

- `.slice()`
  - When you know where a substring starts inside a string, and you know at which character you want it to end, slice() can be used to extract it.
  - Also, if you know that you want to extract all of the remaining characters in a string after a certain character, you don't have to include the second parameter! Instead, you only need to include the character position from where you want to extract the remaining characters in a string.

- `toLowerCase()` `toUpperCase()`

- `replace()`
  - It takes two parameters — the string you want to replace, and the string you want to replace it with.

## Arrays

We can also mix data types in a single array.

```js
let sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ['tree', 795, [0, 1, 2]];
```

### Some useful array methods

- `split()` this is a **string** methods

```js
let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
myArray; //"Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle"
```

- `join()`

```js
let myNewString = myArray.join(',');
myNewString; //"Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"
```

- `toString()`
  - With `join()` you can specify different separators, whereas `toString()` always uses a comma.

```js
let dogNames = ['Rocket','Flash','Bella','Slugger'];
dogNames.toString(); // Rocket,Flash,Bella,Slugger
```

## Adding and removing array items

- `push()`
- `pop()`
- `unshift()`
  - push in the beginning of the array.
- `shift()`
  - pop in the beginning of the array.