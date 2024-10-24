// syntax 1
function sum(x: number, y: number) /*: number*/ {
    return x + y;
}

console.log(sum(12, 13));
// console.log( sum( 12, 'hello' ) ); // erorr

// same syntax as above
// const add1 = function( x : number, y : number ) {

// }

// ----------------

// syntax 2
// arrow function syntax for provifing data type of a function
// This syntax is the ONLY way you can give the type for a function that is acepted as an argument in another function
type BinaryFunction = (a: number, b: number) => number;

// const add1: (a: number, b: number) => number = function (x, y) {

const add1: BinaryFunction = function (x, y) {
    return x + y;
};

const add2: BinaryFunction = (x, y) => x + y;
