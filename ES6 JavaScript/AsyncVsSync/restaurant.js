// Ordering Food in a Restaurant
/*
function orderFood(food) {
    console.log("Ordering " + food);
    setTimeout(function(){
        console.log(food + " is ready")
    },2000)
}

orderFood("Pizza")
orderFood("Burger")
orderFood("Pasta")

*/

// ===============================================================


/*

function orderFood(callback){
    console.log("Ordering Food")
    setTimeout(function(){
        console.log("Food is Ready")
        callback();
    },2000)
}

function eatFood(){
    console.log("Eating Food")
}

orderFood(eatFood)

*/

// ================================================================

function orderFood(){
    return new Promise(function(resolve, reject){
        console.log("Ordering Food")
        setTimeout(function(){
            console.log("Food is Ready")
            resolve("Food is ready to be eaten");
        },2000)
    })
}

function eatFood(){
    console.log("Eating Food")
}

orderFood().then(eatFood)