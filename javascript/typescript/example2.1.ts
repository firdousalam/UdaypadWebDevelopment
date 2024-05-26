export {}; // In order to prevent functions to be in global scope, you can add export {}; on top (or just export this function):
function sum(a:number,b:number):number{
    return a+b;
}

console.log(sum(1,20));