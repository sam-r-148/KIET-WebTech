// callback

function greet() {
  console.log("Hello ");
}

function processUserInput(callback) {
  callback();
  console.log("Inside function");
}

// processUserInput(greet);

// ================================================================

// Async Callback

console.log("Start")

setTimeout(function(){
    console.log("Inside Timeout")
    
},2000)

console.log("End")





