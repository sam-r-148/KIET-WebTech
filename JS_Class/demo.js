class person{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    greet(){
        console.log("Hello " + this.name)
        console.log(this)

        let morning = () => {
            console.log("Good Morning",this.name)
            console.log(this)
        }

        morning()

        function night(){
            console.log("Good Night",this.name)
            console.log(this)
        }

        night.call(this)

    }
}

let p1 = new person("Abhishek",34)
// console.log(p1)

p1.greet()
// person.greet()

let p2 = new person("Samridh",20)
// console.log(p2)

// console.log(p1==p2)  // p1 and p2 are different objects


function test(){
    console.log("Inside test function, this refers to : ")
    console.log(this)

}

// test()

