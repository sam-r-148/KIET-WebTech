// Outer class
class Person {
  constructor(name, age, address) {
    this.address = address; // nested object
    this.name = name;
    this.age = age;
  }
}


// Inner class
class Address {
  constructor(city, state) {
    this.city = city;
    this.state = state;
  }
}

let person = new Person("John", 25, new Address("Pune", "Maharashtra"));

// console.log(person);
// console.log(person.address);
// console.log(person.address.city);
