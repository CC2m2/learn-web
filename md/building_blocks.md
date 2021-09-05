# [Building blocks](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks)

<!-- TOC -->

- [[Building blocks](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks)](#building-blockshttpsdevelopermozillaorgen-usdocslearnjavascriptbuilding_blocks)
  - [Functions — reusable blocks of code](#functions--reusable-blocks-of-code)
    - [Anonymous functions](#anonymous-functions)
  - [Build your own function](#build-your-own-function)
  - [Introduction to events](#introduction-to-events)
    - [event handler](#event-handler)
    - [Ways of using web events](#ways-of-using-web-events)
      - [event](#event)
      - [Adding and removing event handlers](#adding-and-removing-event-handlers)
    - [Other event concepts](#other-event-concepts)
      - [Event objects](#event-objects)
      - [Preventing default behavior](#preventing-default-behavior)
      - [Event bubbling and capture](#event-bubbling-and-capture)
      - [Fixing the problem with `stopPropagation()`](#fixing-the-problem-with-stoppropagation)
      - [Event delegation](#event-delegation)

<!-- /TOC -->

## Functions — reusable blocks of code

### Anonymous functions

You will mainly use anonymous functions to just run a load of code in response to an event firing — like a button being clicked — using an event handler.

> You can assign an anonymous function to be the value of a variable, for example:
> 
> ```js
> const myGreeting = function() {
>   alert('hello');
> }
> ```
> 
> This form of creating a function is also known as _function expression_. Unlike function declaration, function expressions are not hoisted.
> This function could now be invoked using:
> 
> ```js
> myGreeting();
> ```
> 
> This effectively gives the function a name; you can also assign the function to be the value of multiple variables, for example:
> 
> ```js
> let anotherGreeting = myGreeting;
> ```
> 
> This function could now be invoked using either of:
> 
> ```js
> myGreeting();
> anotherGreeting();
> ```

## Build your own function

[myPen-Build your own function](https://codepen.io/cc2m2/pen/bGRePVB)

The parentheses in this context are sometimes called the "_function invocation operator_". You only use them when you want to run the function immediately in the current scope. In the same respect, _the code inside the anonymous function is not run immediately_, as it is inside the function scope. [Calling the function](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Build_your_own_function)
If we want to specify parameters inside parentheses for the function we are calling, then we can't call it directly — we need to put it inside **an anonymous function** so that it isn't in the immediate scope and therefore isn't called immediately. Now it will not be called until the button is clicked.

## Introduction to events

### event handler

Each available event has an **event handler**, which is _a block of code_ (usually a JavaScript function that you as a programmer create) that runs when the event fires. When such a block of code is defined to run in response to an event, we say we are **registering an event handler**.
Event handlers are sometimes called **event listeners** — they are pretty much interchangeable for our purposes, although strictly speaking, they work together. _The listener listens out for the event happening, and the handler is the code that is run in response to it happening._

### Ways of using web events

```JS
const btn = document.querySelector('button');

btn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
```

```JS
const btn = document.querySelector('button');

function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;

//当有多个button时
btns.forEach(function(btn) {
  btn.onclick = bgChange;
});

//相当于
for (let i = 0; i < buttons.length; i++) {
  btn[i].onclick = bgChange;
}
```

#### event

[myPen-random color eventhandlerproperty
](https://codepen.io/cc2m2/pen/NWgRepM?editors=0010)

- `btn.onfocus`
  - get focus
- `btn.onblur`
  - lose focus

These are often used to display information about _filling in form fields_ when they are focused, or _displaying an error message_ if a form field is filled with an incorrect value.

- `btn.ondblclick`

- `window.onkeydown`
- `window.onkeyup`

It doesn't work if you try to register this event handler on the button itself — we've had to register it on the window object, which represents the entire browser window.

- `btn.onmouseover`
- `btn.onmouseout`

#### Adding and removing event handlers

The modern mechanism for adding event handlers is the `addEventListener()``removeEventListener()` method.

```js
const btn = document.querySelector('button');

function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener('click', bgChange);

//or
btn.addEventListener('click', function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
});
```

```js
btn.removeEventListener('click', bgChange);
```

The main advantages of addEventListener() are that:

- You can remove event-handler code if needed, using `removeEventListener()`.
- You can add multiple listeners of the same type to elements, if required.

### Other event concepts

#### Event objects

it is automatically passed to event handlers to provide extra features and information.

```js
function bgChange(e) {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  e.target.style.backgroundColor = rndCol; //e.target — which is the button itself. 
  console.log(e);
}

btn.addEventListener('click', bgChange);
```

The target property of the event object is always a reference to the element the event occurred upon.

e.target is incredibly useful when you want to _set the same event handler on multiple elements and do something to all of them_ when an event occurs on them. [eg](https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html)

```js
const divs = document.querySelectorAll('div');

for (let i = 0; i < divs.length; i++) {
  divs[i].onclick = function(e) {
    e.target.style.backgroundColor = bgChange();
  }
}
```

#### Preventing default behavior

Sometimes, you'll come across a situation where you want to prevent an event from doing what it does by default. eg: a custom registration form.`preventDefault()` [eg](https://mdn.github.io/learning-area/javascript/building-blocks/events/preventdefault-validation.html)

```js
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('p');

form.onsubmit = function(e) {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
}
```

#### Event bubbling and capture

Event bubbling and capture are two mechanisms that _describe what happens when two handlers of the same event type are activated on one element_.(一个事件触发两个handler，具体见[mdn](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)) [eg](https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box.html)

In modern browsers, by default, all event handlers are registered for the _bubbling phase_. So in our current example, when you select the video, the event bubbles from the < video> element outwards to the < html> element.

#### Fixing the problem with `stopPropagation()`

The standard Event object has a function available on it called `stopPropagation()` which, when invoked on a handler's event object, makes it so that _first handler is run but the event doesn't bubble any further up the chain_, so no more handlers will be run. [eg](https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html)

#### Event delegation

Bubbling also allows us to take advantage of event delegation — this concept relies on the fact that _if you want some code to run when you select any one of a large number of child elements, you can set the event listener on their parent and have events that happen on them bubble up to their parent rather than having to set the event listener on every child individually._ Remember, bubbling involves checking the element the event is fired on for an event handler first, then moving up to the element's parent, etc.

A good example is a series of list items — if you want each one to pop up a message when selected, you can set the click event listener on the parent < ul>, and events will bubble from the list items to the < ul>.