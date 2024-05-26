interface Employee { 
    name: string; 
    code: number; 
} 

let employeeInt = <Employee> { }; 
employeeInt.name = "John"; // OK
employeeInt.code = 123; // OK


interface IEmployee {
    empCode: number;
    empName: string;
    empDept?:string;
}

let empObj1:IEmployee = {   // OK
    empCode:1,
    empName:"Steve"
}

let empObj2:IEmployee = {    // OK
    empCode:1,
    empName:"Bill",
    empDept:"IT"
}