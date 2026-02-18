// A promise is an object that represents the future results if an asynchronous operation
// It's like saying "I promise to give you a result --> either PASS or FAIL"

let promise = new Promise(function(resolve, reject){
    let success = true;
    if(success){
        resolve("Promise Resolved")
    }else{
        reject("Promise Rejected")
    }
})

promise.then(function(result){
    console.log(result)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("Promise is Settled")
})

