let fruits: string[] = ['Apple', 'Orange', 'Banana'];
//2. Using a generic array type, Array<elementType>.
let fruits1: Array<string> = ['Apple', 'Orange', 'Banana'];
console.log(fruits,"array case 1");
console.log(fruits1,"array case 2");
console.log(fruits.length)
console.log(fruits1[1]);
let roll: number[] = [1,2,3,4,5];

let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
// or 
let values1: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 