# Asynchronous JavaScript

## General asynchronous programming concepts

JavaScript is traditionally **single-threaded**.

## Introducing asynchronous JavaScript

### Async callbacks

Async callbacks are **functions** that are specified **as arguments** when calling a function which will start executing code in the background.(异步操作完成时调用的方法)

An example of an async callback is the second parameter of the `addEventListener()` method (as we saw in action above):

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
