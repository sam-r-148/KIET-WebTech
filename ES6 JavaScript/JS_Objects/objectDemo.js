// An object is a collection of key-value pairs used to represent real-world entities

const user ={
    name : "Abhishek",
    role : "Trainer",
    experience : 13 
}

const person = {
    name :"Sam",
    address: {
        city : "Pune",
        state : "Maharashtra"
    }
}

console.log(person["name"])
console.log(person.address)
console.log(person.address.city)


const obj ={
    key1 :"value1",
    key2:"value2",
    key1:"value3" // overlapped key
}

console.log(obj.key1)

// console.log(user)

const book={
    title: "The Sun Also Rises",
}

let newbook = book;

console.log(newbook.title);
newbook.title = "The Sun";
console.log(book.title);

