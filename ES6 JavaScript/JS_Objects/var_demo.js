// var is function scoped , It is not block scoped

// HOISTING Example 
// =======================
console.log(myVar);
var myVar = 10;
console.log(myVar);


// var REDECLARATION 
// =======================

var myVar = 20;
console.log(myVar);

// function SCOPE example
// =======================

function demoFun(){
    var funVar = 30;
    console.log(funVar);
}

demoFun();

// console.log(funVar);  // ReferenceError: funVar is not defined







 