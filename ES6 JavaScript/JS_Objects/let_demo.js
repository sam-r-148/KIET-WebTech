// let :
// 1. No redeclarration within same scope 
// 2. Block scoped 
// 3. Not HOISTED like var


let myLet = 10;
console.log(myLet);
// let myLet = 20;   // SyntaxError: Identifier 'myLet' has already been declared


// Redeclaration in different scopes
// ==================================

{
    let x = 50;
    console.log(x);

}
{
    let x = 20;
    console.log(x);
}


// Redeclaration in Nested block scope : Variable shadowing : Scope is diffeent of both variables

{
    let x = 80;
    console.log(x);
    {
        let x = 100;
        let y = 200;
        console.log(x);
        console.log(y);
    }
}

// Redeclaration in Nested Block scope with If statement

{
    let x = 50;
    console.log(x);
    if(true){
        let x = 20;
        console.log(x);
    }
    console.log(x);
}

