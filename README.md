# Mod 2 Higher Order Functions Warm up

A higher order function is any function that returns a function or **expects a function as one of its parameters**.

We're going to focus on the part that is bolded in the line above.

We call functions that are passed as arguments to other functions, `callback functions`.

We'll use callback functions a lot during this module so let's get familiar w how they work. We'll examine a couple functions that are built into JS called `setTimeout` and `setInterval`. These functions take two arguments, the first being a callback function, and the second being an amount of milliseconds that will have to pass before the function in the first argument will fire.


### setTimeout()
- will fire the function in the first argument after the amount of time described in the second argument have passed. Only fires once.

```js
// Set timeout
setTimeout(() => {}, 1000)
```
*this is what it looks like, but since there is no logic in the function, it's not doing anything*


A better example is:
```js
setTimeout(() => {
    console.log('Get ready for Module 2!')
}, 2000)
```
*this setTimeout will log `Get ready for Module 2` to the console after **two** seconds have passed. Try it out in `index.js`*


### setInterval()
- works similarly to `setTimeout()` but will keep on executing in a loop until the setInterval has been cleared
```js
setInterval(() => {
    console.log('I fire every two seconds')
}, 2000)
```


We used these as examples bc they're both built into JS and take callback functions as arguments.

--- 

 ### "For loops are as dead as PHP"

At the end of next week, we'll introduce some native array higher order methods that will replace your need to write `for loops` (for the most part).

You'll dive deeper into this topic next week, you'll learn the *why* as to higher order functions and even learn how to create your own `higher order functions` but today we'll just get used to using a couple of the more common array methods.

### forEach()
forEach is a method on Arrays that iterates over the array and applies a callback to each element.

```js
const modules = ["Fundamentals", "FEWD", "React", "Full Stack Web Dev", "Data Structures & Algorithms", "Capstone Project"]
```
Suppose we have the array `modules` and we want to log each element to the console. We could use a regular `for loop` or a `for of loop` but a `forEach()` will work the same and we don't have to write the loop ourselves!

```js
modules.forEach((mod) => {
    console.log(mod)
})
```
*these are methods that we call on an `array`, similar to how we call `toFixed()` on a number, or `split()` on a string.*


### map()
Map takes a transformation function (callback) as an argument, applies it to each element in the source array, and returns the new transformed array.

forEach() and Map() also allow you to use the index of each element in the array by giving the callback function a second argument.

Since map() returns a new array, we'll use a variable to store what it `returns`

```js
const newModules = modules.map((mod, index) => {
    // Must return something to put into the new array `newModules`
    return `Module ${index + 1} ${module}`
})
```








