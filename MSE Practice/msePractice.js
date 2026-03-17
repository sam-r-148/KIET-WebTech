/*
JavaScript - integrated language
           - lightweight
           - interpreted
           - single-threaded
           - asynchronous
           - dynamic language
           - weakly typed
           - prototype-based
           - multi-paradigm programming language
           - event-driven programming language
           
History:-
    Macha     --->     Live script     --->     JavaScript
(Brenden eich)

It is commonly used to create dynamic and interactive apps.
It is open and cross platform language (Platform Independent)
*/

/* 
VARIABLES IN JAVASCRIPT
var   - function scoped, can be re-declared & updated
let   - block scoped, cannot be re-declared
const - block scoped, cannot be re-declared or reassigned
*/
// Example 1
var a = 10;
let b = 20;
const c = 30;

console.log(a, b, c);

/*
Temporal Dead Zone (TDZ)
- The time between variable declaration and initialization
- Applies to let and const
*/

// console.log(x); // TDZ Error
let x = 5;

/* 
DATA TYPES
   Primitive:
   - String, Number, Boolean, Undefined, Null, Symbol, BigInt

   Non-Primitive:
   - Object, Array, Function
*/
// Example 2
let str = "Hello";
let num = 100;
let isTrue = true;
let undef;
let empty = null;

console.log(typeof str, typeof num, typeof isTrue);

/* 
OPERATORS
   Arithmetic  : + - * / %
   Comparison  : == === != !== > <
   Logical     : && || !
   Ternary     : condition ? value1 : value2
*/
// Example 3
let p = 10, q = 5;
console.log(p + q);
console.log(p === q ? "Equal" : "Not Equal");

/* 
CONTROL STATEMENTS
*/
// Example 4
let age1 = 18;
if (age1 >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible");
}

/*
Loops
*/
// Example 5
for (let i = 1; i <= 3; i++) {
    console.log(i);
}

/* 
ARRAYS (BASICS)
*/
// Example 6
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]);
fruits.push("Orange");
console.log(fruits);

/* 
OBJECTS (BASICS)
*/
// Example 7
const student = {
    name: "Srijan",
    branch: "CSE"
};

console.log(student.name);
student.city = "Gorakhpur";

/* 
HOISTING (BASIC UNDERSTANDING)
   - var declarations are hoisted
   - let and const are hoisted but not initialized
   - Function declarations are fully hoisted
   */
// Example 8
hoistedFunction();

function hoistedFunction() {
    console.log("Function is hoisted");
}

/* 
THIS KEYWORD (INTRODUCTION)
*/
// Example 9
const obj = {
    value: 10,
    show: function () {
        console.log(this.value);
    }
};
obj.show();

/* 
CALLBACK FUNCTIONS
*/
// Example 10
function calculate(a, b, operation) {
    return operation(a, b);
}

function multiply(x, y) {
    return x * y;
}

console.log(calculate(5, 4, multiply));

/* 
Functions - Reusable block of code designed to perform specific tasks
          - Function Declaration
          - Named Function    
          - Anonymous Function
          - Arrow Function
          */
// Example 11
const sum = function () {
    return 2 + 3;
}
console.log(sum()); // Output: 5

/* 
Named Function - Name is compulsory for them to run
               - Can be called before or after its declaration due to hoisting
               - Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their
                 containing scope during the compilation phase. This allows functions to be called before they are defined in 
                 the code. 
                 */
// Example 12
function greet2(name) {
    return `Hello, ${name}!`;
}
console.log(greet2("Charlie")); // Output: Hello, Charlie!

/*
Anonymous Function - It is a function that does not have a name
                   - Usually assigned to a variable
                   - Since it has no name we cannot call it directly
                   - However we can call it using the variable name
                   */
// Example 13
const greet = function () {
    return "Hello World";
}
console.log(greet()); // Output: Hello World

/*
Arrow Function - A shorter syntax for writing functions
               - Does not have its own 'this' context
               - Replace the function keyword with a variable keyword const
               - Add equals sign and after the function name and before the paraeter list
               - Use arrow symbol '=>' after parameter list
               - Supports implicit return for single expression functions (no need for curly braces or return statement)
               */
// Example 14
const greet1 = (name) => {
    return `Hello, ${name}!`;
}
console.log(greet1("Alice")); // Output: Hello, Alice!
// Example 15
const products = (a, b, c) => {
    return a * b * c;
};
console.log(products(2, 3, 4)); // Output: 24
// Example 16
const swap = (a, b) => {
    return [b, a];
};
console.log(swap(5, 10)); // Output: [10, 5]

/*
Template Literals - A way to embed expressions within string literals
                  - Use backticks (`) instead of single or double quotes
                  - Embed expressions using ${expression} syntax
                  - Helps variables and expressions to be included directly within strings
                  */
// Example 17
const name1 = "Bob";
const greeting = `Hello, ${name1}!`;
console.log(greeting); // Output: Hello, Bob!
// Example 18
const name2 = "Charlie";
const Balance = 30;
const message = `Hello, ${name2}! Your balance is $${Balance}.`;
console.log(message); // Output: Hello, Charlie! Your balance is $30.

/* 
Spread Operator - Allows you to spread the elements of an array or the properties of an object into another array or object
                - For arrays, it can be used to create a new array by combining existing arrays or adding new elements
                - For objects, it can be used to create a new object by combining existing objects or adding new properties
                */
// Example 19
const oriarr = [1, 2, 3];
const arr2 = [4, 5, 6];
const cloarr = [...oriarr];
console.log(cloarr); // Output: [1, 2, 3]
const merarr = [...oriarr, ...arr2];
console.log(merarr); // Output: [1, 2, 3, 4, 5, 6]
// Example 20
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6
// Example 21
const arr1 = [30, 45];
console.log(multiply(...arr1)); // Output: 1350

/*
Rest Parameter - Allows a function to accept an indefinite number of arguments as an array
*/
// Example 22
function print(...numbers) {
    console.log(numbers);
}
print(1, 2, 3); // Output: [1, 2, 3]
// Example 23
function sum1(...nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum1(1, 2, 3, 4, 5)); // Output: 15

/*
Spread operator in objects
*/
// Example 24
const obj1 = { name: "Srijan", age: 20 };
const cloneObj = { ...obj1 };
console.log(cloneObj);
// Example 25
const obj2 = { city: "Gorakhpur", country: "India" };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

/*
Destructuring Assignment - A syntax that allows you to unpack values from arrays or properties from objects into distinct variables
*/
// Example 26
const arr = [1, 2, 3];
const [a1, a2, a3] = arr;
console.log(a1, a2, a3); // Output: 1 2 3
// Example 27
const person = { name: "Srijan", age: 20 };
const { name, age } = person;
console.log(name, age); // Output: Srijan 20

/*
Closures - A closure is a function that has access to its own scope, the outer function's scope, and the global scope
         - It allows a function to access variables from an enclosing scope even after the outer function has finished executing
         - Closures are created whenever a function is defined inside another function and the inner function references
           variables from the outer function
         - They are commonly used for data privacy and to create functions with persistent state
         */
// Example 28
function outerFunction() {
    const name = "Firefox";
    function innerFunction() {
        console.log(name);
    }
    return innerFunction;
}
const myfun = outerFunction();
myfun(); // Output: Firefox


/*
Default Parameters - Allows you to set default values for function parameters
*/
// Example 29
function greet3(name = "Guest") {
    return `Hello, ${name}!`;
} 
console.log(greet3()); // Output: Hello, Guest!
console.log(greet3("Alice")); // Output: Hello, Alice!

/*
Modules - A way to organize code into reusable pieces
        - Exporting and importing functionality between files
        - Helps in maintaining a clean and modular codebase
        - In JavaScript, modules can be created using the ES6 module syntax (export and import)
        */
// Example 30    
/* 
In math.js:
    export function add(x, y) {
        return x + y;
    }
In main.js:
    import { add } from './math.js';
    console.log(add(2, 3)); // Output: 5
*/

/*
Javascript is by default synchronous and singlen threaded in nature but it can handle asynchronous operations using callbacks, promises, and async/await.
Asynchronous operations allow JavaScript to perform tasks without blocking the main thread, enabling a smoother user experience.
Javascript comes with runtime environments like Node.js and browsers that provide APIs for handling asynchronous operations, such as setTimeout, fetch, and XMLHttpRequest.
*/

/*
Callstack - A data structure that keeps track of function calls in a program. It operates in a last-in-first-out (LIFO) manner,  
            meaning the most recently called function is the first one to be executed.
*/

/*
Asynchronous Programming - Code is executed sequentially, one line at a time. Each operation must complete before the next one begins.
                         - Asynchronous programming allows certain operations to be executed without blocking the main thread, enabling other 
                           tasks to run concurrently.
                         - Common asynchronous operations include network requests, file I/O, and timers.
                         - JavaScript provides mechanisms like callbacks, promises, and async/await to handle asynchronous code effectively.
*/

/*
Promises - An object representing the eventual completion or failure of an asynchronous operation and its resulting value.
         - A promise can be in one of three states: pending, fulfilled, or rejected.
         - Promises provide a cleaner and more manageable way to handle asynchronous operations compared to callbacks, avoiding issues like 
           callback hell.
         - Promises can be chained together using .then() for handling success and .catch() for handling errors.
*/

/*
Async/Await - A syntactic sugar built on top of promises that allows you to write asynchronous code in a more synchronous and readable manner.
              - The async keyword is used to declare an asynchronous function, which returns a promise.
              - The await keyword is used to pause the execution of an async function until a promise is resolved, allowing you to write code that looks synchronous.
              - Async/await helps in improving code readability and maintainability when dealing with asynchronous operations.
*/

