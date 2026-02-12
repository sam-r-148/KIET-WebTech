const person = {
    // name : "Abhishek",
    address : "Pune",
    age : 13,
    phone : 123456
}

// de-structuring of object

const {phone,name = "Sam"} = person;

const {name : x,age : y} = person

console.log(name, phone)
console.log(x,y)
    
// console.log(y);
// console.log(age);

console.log(person)