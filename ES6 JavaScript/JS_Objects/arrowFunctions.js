// function : A block of reusable code
function add(a,b){
    return a+b;
}
let sum = add(3,4);
console.log(sum);


// anonymous function expression
let add1 = function(a,b){
    return a+b;
}
console.log(add1(2,3));

// arrow function expression
let add2 = (a,b) => {
    return a+b;
}
console.log(add2(4,2));

// one line arrow function expression
let add3 = (a,b) => a+b
console.log(add3(6,8))
