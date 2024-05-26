var age: number = 32; // number variable
var name1: string = "John";// string variable
var isUpdated: boolean = true;// Boolean variable

function display1(id:number, name:string)
{
    console.log("Id = " + id + ", Name = " + name);
}
function display(id:number, name:string):string
{
    return ("Id = " + id + ", Name = " + name);
}

function display2(id:number, name:string) : void
{
    console.log("Id = " + id + ", Name = " + name);
}

let employeejs = {
    name : "string",
    roll : 1
};

var employee : { 
    id: number; 
    name: string; 
}; 

employee : employee = { 
  id: 100, 
  name : "John"
}