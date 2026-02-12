// Rest Operator : It is used to collect multiple arguments into an array

function sum(...nums){ // Values of arr is collected into nums
    for(let i of nums){
        sum += i;
    }
    return sum;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(sum(...arr));

