// [Bind Method]
/**
    1.  It allows you to create a new function with the 'this' keyword set to a specified value, effectively binding a context to a function

    2.  This can be particularly useful when you want to call a function with a specific object as its context, 
        especially in scenarios where the context might change, such as in event handlers or callbacks.

    3.  The bind method is a part of the Function.prototype (More on this later)
 */

//  syntax
// fun.bind(thisArg[, arg1[, arg2[, ...]]])

// thisArg: The value to be passed as the this parameter to the target function.
// arg1, arg2, ...: Arguments to prepend to the arguments provided to the bound function when it's invoked.

// Example 1: Basic Usage
// const person = {
//     name: 'Alice',
//     greet: function() {
//       console.log(`Hello, my name is ${this.name}`);
//     }
//   };
  
// const bob = { name: 'Bob' };
  
// //   // Without bind
//   const greetAlice = person.greet;
//   greetAlice();  
  
// //   // With bind
//   const greetBob = person.greet.bind(bob);
//   greetBob();  


// 1. assign person.greet to greetAlice and invoke it, it doesn't have the context of the person object, so this.name is undefined. 
// 2. when we bind bob to person.greet and call greetBob, it uses the context of bob, so this.name outputs 'Bob'.
  

// Predefined Arguments
// function multiply(x, y) {
//     return x * y;
//   }
  
//   const double = multiply.bind(null, 2);
//   console.log(double(5)); 

// we bind the multiply function to always use 2 as its first argument, effectively creating a double function.

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// [Call Method]
/**
    In JavaScript, the call method is a way to invoke a function, explicitly setting what the function should reference as its this value,
    and providing any arguments to the function in a comma-separated manner.

    // function.call(thisArg, arg1, arg2, ...);
       thisArg: The value of this provided for the call to the function.
       arg1, arg2, ...: Arguments for the function.

    1. When a function is invoked in JavaScript, a context (or this value) is associated with the call. 
    2. This context can vary based on how the function is called (e.g., as a method, as a standalone function, via new, etc.). 
    3. The call method lets you control what the this value should be.
*/
// e.g. 1 :  Invoke a function with a specified this value:
// function greet() {
//     console.log(`Hello, ${this.name}`);
//   }
  
// const person = { name: "Alice" };
// greet.call(person);

// e.g. 2:  Borrowing methods from other objects:
// const animals = {
//     names: ["Leo", "Milo", "Kitty"],
//     printNames: function() {
//       this.names.forEach(function(name) {
//         console.log(name);
//       });
//     }
// };

// const cats = {
//     names: ["Whiskers", "Fluffy"]
// };
// animals.printNames.call(cats)

//  e.g. 3: Chaining Constructors for an Inheritance:
// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }

// function Toy(name, price) {
//     Product.call(this, name, price);
//     this.category = 'toy';
// }
// const toy = new Toy('robot', 40);
// console.log(toy)

// ---------------------------------------------------------------------------------------------------------------------------------------------------

/**
    [Apply method]

    1. The apply method in JavaScript is quite similar to the call method
    2. Both methods allow you to call a function with a specific this value. The primary difference lies in how they accept arguments.
 */

// syntax
// function.apply(thisArg, [argsArray]);

// thisArg: The value of this provided for the call to the function.
// argsArray: An array (or array-like object) that specifies the arguments with which the function should be called.

// e.g. 1
// Invoke a function with a specified this value:
// function greet() {
//     console.log(`Hello, ${this.name}`);
// }
  
// const person = { name: "Alice" };
// greet.apply(person); 

// e.g. 2: Borrowing methods from other objects:
// const animals = {
//     names: ["Leo", "Milo", "Kitty"],
//     printNames: function(greeting, punctuation) {
//       this.names.forEach(function(name) {
//         console.log(`${greeting}, ${name}${punctuation}`);
//       });
//     }
//   };
  
//   const cats = {
//     names: ["Whiskers", "Fluffy"]
//   };
  
//   // Borrowing the printNames method from the animals object
//   // Using apply
//   animals.printNames.apply(cats, ["Hey", "!"]); 

// e.g. 3: Chaining Constructors for an Inheritance:
// function Product(name, price) {
//     this.name = name;
//     this.price = price;
//   }
  
//   function Toy(...args) {
//     Product.apply(this, ...args);  // Notice how we use arguments object with apply
//     this.category = 'toy';
//   }
  
//   const toy = new Toy('robot', 40);
//   console.log(toy); 




// 1. Use call when you know the number of arguments.
// 2. Use apply when arguments are in an array or when you want to utilize the arguments object directly.

  

  
