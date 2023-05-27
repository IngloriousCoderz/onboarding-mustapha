// console.log(a, typeof a) // cannot access variable before declaration
let a;
console.log(a, typeof a);
a = null;
console.log(a, typeof a);
a = 2;
console.log(a, typeof a);
a = NaN;
console.log(a, typeof a);

// let a = 3; // cannot redeclare variable
let b = 3;

const c = 4;
// c = 5; // cannot reassign constant
// const d; // declaring a constant without value makes no sense

var d = 5; // NEVER use var
// hoisting

// block scoping
{
  var e = 6;
}
console.log(e);
