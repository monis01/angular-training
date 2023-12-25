// Spread Operator
/**
    1. The spread operator is used for expanding elements of an iterable (like an array or object) into places 
        where multiple elements or properties are expected

    2. It was introduced with ES6 (ECMAScript 2015).
 */





// Arrays :

//  1. Combining Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

// 2. Copying Arrays: (creates shallow copy of an array)
// const original = [1, 2, 3];
// const copy = [...original];

//  3. Expanding Strings:
// const str = "hello";
// const chars = [...str];


// Function Arguments:
function add(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  console.log(add(...numbers))


// Objects

// 1. Copying Object
// const obj1 = { a: 1, b: 2 };
// const copiedObj = { ...obj1 }

// 2. Merging  Objects
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const mergedObj = { ...obj1, ...obj2 };

// 3. Overriding Properties
const obj1 = { a: 1, b: 2, c: 3 };
const objWithOverride = { ...obj1, b: 99 };

// Collecting Function Arguments:
// This is useful in function definitions for variadic functions (functions that accept an indefinite number of arguments).

// function collectArgs(...args) {
//     console.log(args);
//   }
  
// collectArgs(1, 2, 3, 4)

// Destructuring
// Using the spread operator, you can destructure and collect the rest of the properties into a new variable.
// const person = { name: 'Alice', age: 25, country: 'Wonderland' };
// const { name, ...rest } = person;
// console.log(name);  
// console.log(rest);

// 2.
const person = {
    userName: 'John',
    age: 30,
    role: 'developer',
    country: 'USA'
  };
  
  const { userName, country, ...otherDetails } = person;
  
  console.log(userName); 
  console.log(country); 
  console.log(otherDetails); 
  
//  3. Combining Arrays with Spread in Destructuring:
// const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];
// const [firstFruit, secondFruit, ...restFruits] = fruits;
// console.log(firstFruit, secondFruit); 
// console.log(restFruits);

// 4. Merging and Overriding Properties with Spread:
const defaultSettings = {
    theme: 'light',
    layout: 'grid',
    fontSize: 16
  };
  
  const customSettings = {
    theme: 'dark',
    fontSize: 18
  };
  
//   const settings = { ...defaultSettings, ...customSettings };
  
//   console.log(settings); 

  

/**
    Some Cases : 
    1. Shallow-Copy: The spread operator performs a shallow copy, meaning that nested objects or arrays will still be referenced, 
       not duplicated. For deep cloning, you'll need a different method.

    2. Order Matters: When merging objects, the order matters as properties from latter objects will overwrite properties 
       in former objects if they share the same key.
       
    3. Objects Only: When using the spread operator with objects, only the object's own enumerable properties will be spread. 
       This means that inherited properties, symbols, and non-enumerable properties won't be included.(will be covered in inheritance topic)
*/