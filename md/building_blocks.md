# Building blocks

<!-- TOC -->

- [Building blocks](#building-blocks)
  - [Functions — reusable blocks of code](#functions--reusable-blocks-of-code)
    - [Anonymous functions](#anonymous-functions)
  - [Build your own function](#build-your-own-function)

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

The parentheses in this context are sometimes called the "_function invocation operator_". You only use them when you want to run the function immediately in the current scope. In the same respect, the code inside the anonymous function is not run immediately, as it is inside the function scope. [Calling the function](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Build_your_own_function)
If we want to specify parameters inside parentheses for the function we are calling, then we can't call it directly — we need to put it inside **an anonymous function** so that it isn't in the immediate scope and therefore isn't called immediately. Now it will not be called until the button is clicked.