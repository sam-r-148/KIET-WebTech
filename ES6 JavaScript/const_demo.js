// const :
// 1. Block scoped 
// 2. Not HOISTED like var
// 3. No redeclarration within same scope 
// 4 . value cannot be reassigned. must be initialized while declaring



/*

const pi = 3.14;
console.log(pi);

// pi = 3.14159;   // TypeError: Assignment to constant variable

// Redeclaration in different scopes
// ==================================

{
    const x = 50;
    console.log(x);
}
{
    const x = 20;
    console.log(x);
}

// with function scope
// ===========================
function demoFun(){
    const funVar = 30;
    console.log(funVar);
}

demoFun();

// console.log(funVar);


*/

const arr = [1,2,3,4,5,"hello"];
console.log(arr);

arr.push(11);
console.log(arr);

// arr = [6,8,5,7,3,"hello"];   // TypeError: Assignment to constant variable

// console.log(arr);
