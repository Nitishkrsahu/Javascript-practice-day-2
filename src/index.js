// # 50 Tricky JavaScript Variable Questions with Explanations

// ## 1. Basic Variable Declaration
// javascript
// let city = "Mumbai";
// console.log(city);

// *Explanation*: Simple variable declaration and logging. Output will be "Mumbai".

// ## 2. Re-declaration with let
// javascript
// let country = "India";
// let country = "Bharat";
// console.log(country);

// *Explanation*: let doesn't allow re-declaration. This will throw a SyntaxError.

// ## 3. Re-declaration with var
// javascript
// var language = "Hindi";
// var language = "Sanskrit";
// console.log(language);

// *Explanation*: var allows re-declaration. Output will be "Sanskrit".

// ## 4. Const Reassignment
// javascript
// const PI = 3.14;
// PI = 3.14159;
// console.log(PI);

// *Explanation*: Can't reassign const variables. Throws TypeError.

// ## 5. Hoisting with var
// javascript
// console.log(animal);
// var animal = "Tiger";

// *Explanation*: var is hoisted (declaration moved to top) but not initialization. Output: undefined.

// ## 6. Hoisting with let
// javascript
// let bird = "Peacock";
// console.log(bird);


// *Explanation*: let is hoisted but in TDZ (Temporal Dead Zone). Throws ReferenceError.

// ## 7. Type Coercion
// javascript
// let num = "5" + 2;
// console.log(num);

// *Explanation*: + with string concatenates. Output: "52" (string).

// ## 8. Type Coercion 2
// javascript
// let result = "5" - 2;
// console.log(result);

// *Explanation*: - operator converts to numbers. Output: 3 (number).

// ## 9. Null vs Undefined
// javascript
// let a;
// console.log(a, typeof a);

// *Explanation*: Declared but not initialized. Output: undefined "undefined".

// ## 10. Null Type
// javascript
// let b = null;
// console.log(b, typeof b);

// *Explanation*: null is an object (historical bug). Output: null "object".

// ## 11. Boolean Conversion
// javascript
// console.log(Boolean(""));
// console.log(Boolean("Namaste"));

// *Explanation*: Empty string is falsy, non-empty is truthy. Output: false true.

// ## 12. Variable Scope
// javascript
// var x = 10;
// function test() {
//   var x = 20;
// }
// test();
// console.log(x);

// *Explanation*: Function scope for var. Outer x unchanged. Output: 10.

// ## 13. Block Scope with let
// javascript
// let y = 1;
// {
//   let y = 2;
// }
// console.log(y);

// *Explanation*: let has block scope. Outer y unchanged. Output: 1.

// ## 14. Block Scope with var
// javascript
// var z = 1;
// {
//   var z = 2;
// }
// console.log(z);

// *Explanation*: var ignores block scope. Output: 2.

// ## 15. Variable Shadowing
// javascript
// let fruit = "Mango";
// function printFruit() {
//   let fruit = "Apple";
//   console.log(fruit);
// }
// printFruit();
// console.log(fruit);

// *Explanation*: Inner fruit shadows outer one. Output: "Apple" "Mango".

// ## 16. Global Variable
// javascript
// function setGlobal() {
//   globalVar = "I'm global";
// }
// setGlobal();
// console.log(globalVar);

// *Explanation*: Assignment without declaration creates global variable. Output: "I'm global".

// ## 17. NaN Behavior
// javascript
// let calc = "Hello" - 5;
// console.log(calc, typeof calc);

// *Explanation*: Invalid math operation returns NaN (number type). Output: NaN "number".

// ## 18. let in Loop
// javascript
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }

// *Explanation*: let creates new binding each iteration. Output: 0 1 2 (after delay).

// ## 19. var in Loop
// javascript
// for (var j = 0; j < 3; j++) {
//   setTimeout(() => console.log(j), 100);
// }

// *Explanation*: var shares same binding. Output: 3 3 3 (after delay).

// ## 20. Const in Loop
// javascript
// for (const k = 0; k < 3; k++) {
//   console.log(k);
// }

// *Explanation*: Can't reassign const. Throws TypeError on k++.

// ## 21. String Indexing
// javascript
// let word = "JavaScript";
// word[0] = "j";
// console.log(word);

// *Explanation*: Strings are immutable. Output: "JavaScript" (unchanged).

// ## 22. Object Reference
// javascript
// const person = { name: "Amit" };
// person.name = "Rahul";
// console.log(person);

// *Explanation*: Const prevents reassignment, not property changes. Output: {name: "Rahul"}.

// ## 23. Array Reference
// javascript
// const nums = [1, 2, 3];
// nums.push(4);
// console.log(nums);

// *Explanation*: Same as objects - can modify contents. Output: [1,2,3,4].

// ## 24. Reassigning Const Object
// javascript
// const student = { name: "Priya" };
// student = { name: "Neha" };
// console.log(student);

// *Explanation*: Can't reassign const variable. Throws TypeError.

// ## 25. typeof Array
// javascript
// console.log(typeof [1, 2, 3]);

// *Explanation*: Arrays are objects. Output: "object".

// ## 26. typeof Function
// javascript
// console.log(typeof function() {});

// *Explanation*: Functions are callable objects. Output: "function".

// ## 27. typeof NaN
// javascript
// console.log(typeof NaN);

// *Explanation*: NaN is number type. Output: "number".

// ## 28. typeof null
// javascript
// console.log(typeof null);

// *Explanation*: Historical bug. Output: "object".

// ## 29. typeof undefined
// javascript
// console.log(typeof undefined);

// *Explanation*: Undefined is its own type. Output: "undefined".

// ## 30. let vs var in Function
// javascript
// function check() {
//   if (true) {
//     var a = 5;
//     let b = 10;
//   }
//   console.log(a);
//   console.log(b);
// }
// check();

// *Explanation*: var is function-scoped, let is block-scoped. Output: 5 then ReferenceError for b.

// ## 31. Multiple Declaration
// javascript
// var x = y = 10;
// console.log(x, y);

// *Explanation*: y becomes global variable. Output: 10 10.

// ## 32. Comma Operator
// javascript
// let a = (1, 2, 3);
// console.log(a);

// *Explanation*: Comma operator returns last expression. Output: 3.

// ## 33. Variable Names
// javascript
// let ₹ = "Rupee";
// let १ = 1; // Hindi digit
// console.log(₹, १);

// *Explanation*: JavaScript allows Unicode in variable names. Output: "Rupee" 1.

// ## 34. let in Different Scopes
// javascript
// let name = "Global";
// {
//   let name = "Block";
//   console.log(name);
// }
// console.log(name);

// *Explanation*: Block-scoped let creates separate variable. Output: "Block" "Global".

// ## 35. var Hoisting
// javascript
// console.log(a);
// var a = 10;
// function test() {
//   console.log(a);
//   var a = 20;
// }
// test();

// *Explanation*: Both a declarations are hoisted. Output: undefined undefined.

// ## 36. let Temporal Dead Zone
// javascript
// {
//   console.log(value);
//   let value = "TDZ";
// }

// *Explanation*: Can't access let before declaration. Throws ReferenceError.

// ## 37. const Initialization
// javascript
// const age;
// age = 25;
// console.log(age);

// **Explanation : const must be initialized during declaration. Throws SyntaxError.

// ## 38. Object.freeze
// javascript
// const obj = Object.freeze({a: 1});
// obj.a = 2;
// console.log(obj.a);

// *Explanation*: Object.freeze makes object immutable. Output: 1 (unchanged).

// ## 39. String to Number
// javascript
// let num = +"123";
// console.log(num, typeof num);

// *Explanation*: Unary + converts to number. Output: 123 "number".

// ## 40. Boolean to Number
// javascript
// console.log(true + false);

// *Explanation*: Booleans convert to numbers (1 + 0). Output: 1.

// ## 41. null to Number
// javascript
// console.log(null + 5);

// *Explanation*: null converts to 0 in numeric context. Output: 5.

// ## 42. undefined to Number
// javascript
// console.log(undefined + 5);

// *Explanation*: undefined becomes NaN in math. Output: NaN.

// ## 43. Array to String
// javascript
// console.log([1,2,3] + [4,5,6]);

// *Explanation*: Arrays convert to strings then concatenate. Output: "1,2,34,5,6".

// ## 44. Object to Primitive
// javascript
// console.log({} + []);

// *Explanation*: Both convert to primitive (object->[object Object], array->""). Output: "[object Object]".

// ## 45. Function Hoisting
// javascript
// sayHello();
// function sayHello() {
//   console.log("Namaste!");
// }

// *Explanation*: Function declarations are hoisted. Output: "Namaste!".

// ## 46. Function Expression
// javascript
// greet();
// var greet = function() {
//   console.log("Hello");
// };

// *Explanation*: Only var declaration is hoisted, not assignment. Throws TypeError.

// ## 47. let Function Expression
// javascript
// welcome();
// let welcome = function() {
//   console.log("Swagatam");
// };

// *Explanation*: let is in TDZ until initialization. Throws ReferenceError.

// ## 48. Multiple var
// javascript
// var a = 1;
// var a;
// console.log(a);

// *Explanation*: var can be re-declared, keeps value. Output: 1.

// ## 49. typeof let
// javascript
// console.log(typeof let);

// *Explanation*: let is a keyword, not an expression. Throws SyntaxError.

// // ## 50. Variable Name with Special Characters
// // javascript
// let _name = "A";
// let $name = "B";
// console.log(_name, $name);

// function f1()
// {
//    var x;         // declaring
//    x = 10;        // assignment
//    if(x==10)
//    {
//       var y = 20;  // initialization
//       y = 30;      // assigning
//       var y = 40;  // shadowing
//    }
//    console.log(x,y);
// }
// f1();


// "use strict";
// function f1()
// {
//    x = 10;
//    document.write("x=" + x);
//    var x;     // hoisting
// }
// f1();


// "use strict";
// function f1()
// {
//    let x;     // declaring
//    x = 10;    // assignment
//    if(x==10)
//    {
//       let y = 20;     // initialization
//       y = 30;         // assignment
//       document.write("x=" + x  + "<br>y=" + y);
//    }
   
// }
// f1();


// "use strict";
// let x = 10;
// var y = 20;
// const z = 30;
// function f1(){
//     window.a = 50;
//     console.log(x, y, z, a);
// }
// function f2(){
//     console.log(x, y, z, a);
// }
// f1();
// f2();

// var x; var y; z = 10;
// console.log("x=" + x + "\ny=" + y + "\nz=" + z);

// var [x,y,z] = [10, 20, 30];
// console.log("x=" + x + "\ny=" + y + "\nz=" + z);

// "use strict";
// var x=y=z=10;
// console.log("x=" + x + "\ny=" + y + "\nz=" + z);


// "use strict";
// var y,z;
// var x=y=z=10;
// console.log("x=" + x + "\ny=" + y + "\nz=" + z);

// "use strict";
// var x=10, y=20, z=40;
// console.log("x=" + x + "\ny=" + y + "\nz=" + z);

