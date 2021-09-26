# Asynchronous JavaScript

## General asynchronous programming concepts

JavaScript is traditionally **single-threaded**.

## Introducing asynchronous JavaScript

### Async callbacks

Async callbacks are **functions** that are specified **as arguments** when calling a function which will start executing code in the background.(异步操作完成时调用的方法)

An example of an async callback is the second parameter of the `addEventListener()` method:

```js
btn.addEventListener('click', () => {
  alert('You clicked me!');

  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
});
```

the second parameter is a callback function that is invoked when the event is fired.

### Promises

 The promise is an **object** representing the completion or failure of the async operation. It represents an intermediate state, as it were.

```js
 fetch('products.json').then(function(response) { //Each .then() block returns another promise
  return response.json();
}).then(function(json) {
  let products = json;
  initialize(products);
}).catch(function(err) { // an error object is made available inside the catch()
  console.log('Fetch problem: ' + err.message);
});
```

You can chain multiple async operations together using multiple `.then()` operations, _passing the result of one into the next one as an input_. 

### The event queue

Async operations like promises are put into an event queue, which _runs after the main thread has finished processing_ so that they do not block subsequent JavaScript code from running.


## Cooperative asynchronous JavaScript: Timeouts and intervals

### Introduction

- `setTimeout()`
- `setInterval()`
- `requestAnimationFrame()`
  - Executes a specified block of code before the browser next repaints the display, allowing an animation to be run at a suitable framerate regardless of the environment it is being run in.

as any async code will execute only _after the main thread is available._ (In other words, _when the stack is empty_.)

### `setTimeout()`

If you specify a value of 0 (or omit the value), the function will run **as soon as possible** but not immediately.

> The specified amount of time (or the delay) is not the guaranteed time to execution, but rather **the minimum time to execution**. The callbacks you pass to these functions _cannot run until the stack on the main thread is empty_.

```js
let myGreeting = setTimeout(() => {
  alert('Hello, Mr. Universe!');
}, 2000);
```

The functions you specify don't have to be anonymous. You can give your function a name, and even define it somewhere else and pass a function reference to the `setTimeout()`.

```js
// With a named function
let myGreeting = setTimeout(function sayHi() {
  alert('Hello, Mr. Universe!');
}, 2000);

// With a function defined separately
function sayHi() {
  alert('Hello Mr. Universe!');
}

let myGreeting = setTimeout(sayHi, 2000);
```

`setTimeout()` returns an **identifier value** that can be used to refer to the timeout later, such as when you want to stop it.

#### Passing parameters to a `setTimeout()` function

Any parameters that you want to pass to the function being run inside the `setTimeout()` must be passed to it as additional parameters _at the end of the list_.

```js
function sayHi(who) {
  alert(`Hello ${who}!`);
}

let myGreeting = setTimeout(sayHi, 2000, 'Mr. Universe');
```

#### Clearing timeouts

 if a timeout has been created, you can cancel it before the specified time has elapsed by calling `clearTimeout()`, passing it the identifier of the `setTimeout()` call as a parameter. 

```js
function sayHi(who) {
  alert(`Hello ${who}!`);
}
let myGreeting = setTimeout(sayHi, 2000, 'Mr. Universe');

clearTimeout(myGreeting);
```

### `setInterval`

```js
function displayTime() {
   let date = new Date();
   let time = date.toLocaleTimeString();
   document.getElementById('demo').textContent = time;
}

const createClock = setInterval(displayTime, 1000);
```

#### Clearing intervals

```js
const myInterval = setInterval(myFunction, 2000);

clearInterval(myInterval);
```