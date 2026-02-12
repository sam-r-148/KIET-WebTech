// Object follows shallow copy process

let a = 10
let b = a
b = 5 // this will not change the value of a

console.log(a) 

let x = [1,2,3,4]

let y = x;

y[0] = 19 // this will change x[0] = 0 as well

console.log(x)

