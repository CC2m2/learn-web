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

### Things to keep in mind about `setTimeout()` and `setInterval()`

#### Recursive timeouts

```js
let i = 1;

setTimeout(function run() {
  console.log(i);
  i++;
  setTimeout(run, 100);
}, 100);
```

```js
let i = 1;

setInterval(function run() {
  console.log(i);
  i++;
}, 100);
```

#### How do recursive `setTimeout()` and `setInterval()` differ?

- Recursive `setTimeout()` guarantees the given delay between the code execution completion and the next call.
- The example using `setInterval()` does things somewhat differently. The interval you chose _includes the time taken to execute the code you want to run in_.
  - Let's say that the code takes 40 milliseconds to run — the interval then ends up being only 60 milliseconds.
- When using `setTimeout()` recursively, each iteration can calculate a different delay before running the next iteration. _In other words, the value of the second parameter can specify a different time in milliseconds to wait before running the code again._

When your code _has the potential to take longer to run than the time interval you’ve assigned_, it’s better to use recursive `setTimeout()` — this will keep the time interval constant between executions regardless of how long the code takes to execute, and you won't get errors.

#### Immediate timeouts

Using 0 as the value for `setTimeout()` schedules the execution of the specified callback function as soon as possible but only _after the main code thread has been run_.

```js
setTimeout(function() {
  alert('World');
}, 0);

alert('Hello');

//Hello
//World
```

This can be useful in cases where you want to set a block of code to run as soon as all of the main thread has finished running — put it on the async event loop, so it will run straight afterwards.

### `requestAnimationFrame()`

`requestAnimationFrame()` is a specialized **enqueueing function** created for running animations efficiently in the browser. It runs a specified block of code _before the browser next repaints the display_, _allowing the execution to be paired with the device's display frame rate_.

The method takes as an argument a callback to be invoked before the repaint.

```js
function draw() {
   // Drawing code goes here
   requestAnimationFrame(draw); // this instructs the browser to call the function again on the next display repaint. 
}

draw();
```

#### How fast does your animation run?

Since most screens have a refresh rate of 60Hz, the fastest frame rate you can aim for is **60 frames per second (FPS)** when working with web browsers. In all cases, `requestAnimationFrame()` will always _do the best it can_ with what it has available.

If you have a monitor with a 60Hz refresh rate and you want to achieve 60 FPS you have about **16.7 milliseconds (1000 / 60)** to execute your animation code to render each frame.

```js
function draw() {
   // Drawing code goes here
}

setInterval(draw, 17);
```

#### Including a timestamp

The actual callback passed to the `requestAnimationFrame()` function can be given a parameter, too: a timestamp value, that _represents the time since the `requestAnimationFrame()` started running_. regardless of how fast or slow your device might be.

```js
let startTime = null;

function draw(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

   currentTime = timestamp - startTime;

   // Do something based on current time

   requestAnimationFrame(draw);
}

draw();
```