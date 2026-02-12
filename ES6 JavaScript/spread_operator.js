let arr1 = [1,2,3,4,5];
let arr2 = [-1,...arr1,6,7]; // Spread operator : this created a deep copy of arr1 into arr2

arr2[1] = 47;
arr2.push(8);
arr2.unshift(9);

// console.log(arr1); // Changing arr2 will not affect arr1, arr1 remains same
// console.log(arr2);

// ==================================================

let obj1 = {a:1,b:2,c:3};
let obj2 = {...obj1,d:4,e:5}; // Spread operator : this created a deep copy of obj1 into obj2

obj2.a = 10;

// console.log(obj1); // Changing obj2 will not affect obj1, obj1 remains same
// console.log(obj2);

// =====================================================
/*
if its primitive value, it will be copies by value
if its object, it will be copies by reference

In this case arr4 is the new array, but the object inside it is the same
as the one in arr3, Therefore when we change the object in arr4,
it will also change the object in arr3

*/

let arr3 = [1,2,{name : "David"}]
let arr4 = [...arr3]

arr4[1] = 3
console.log(arr3) 
console.log(arr4)

arr4[2].name = "John"
console.log(arr3) 
console.log(arr4)

// ===================================================