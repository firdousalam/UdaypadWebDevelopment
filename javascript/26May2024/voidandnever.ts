function vd(): void{
    console.log("test")
}

function throwError(errorMsg: string): never { 
    throw new Error(errorMsg); 
} 

throwError("through error");