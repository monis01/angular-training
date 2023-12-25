// Function currying

/**
 * 1. Currying is a process in [functional programming] where we transform a function with multiple arguments 
 *    into a series of functions that each take a single argument. 
 * 
 * 2. Curried functions are a way to partially apply functions, making them more versatile for various use cases
 */

//  Basic example

// Normal function taking 3 arguments 
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(1, 2, 3));  

// Currying function
function currySum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}
console.log(currySum(1)(2)(3));  

// Use case examples

// One of the use case for currying can be when you want to create a series of utility functions based on a core function.

// By using a curried function, you can generate multiple utility functions based on a core functionality.
function add(a) {
    return function(b) {
        return a + b;
    }
}

const addOne = add(1);
const addTwo = add(2);
const addThree = add(3);

console.log(addOne(5));     
console.log(addTwo(5));     
console.log(addThree(5));   

// Note : it can also make code harder to read for those unfamiliar with the concept. It's a trade-off between flexibility and clarity.

//  [Use cases like] : 

//  [Generic Filters]
const products = [
    { id: 1, category: 'electronics', name: 'Phone' },
    { id: 2, category: 'groceries', name: 'Apple' },
    { id: 3, category: 'electronics', name: 'Laptop' }
];

function filterBy(property) {
    return function(value) {
        return function(product) {
            return product[property] === value;
        }
    }
}

const isElectronic = filterBy('category')('electronics');
const isGrocery = filterBy('category')('groceries');
const isApply = filterBy('name')('Apple');

const electronicProducts = products.filter(isElectronic);
console.log(electronicProducts);


//  [Database Queries]
const queryBy = tableName => columnName => value => {
    return `SELECT * FROM ${tableName} WHERE ${columnName} = '${value}'`;
};

function queryBy(tableName) {
    return function(columnName) {
        return function(value) {
            return `SELECT * FROM ${tableName} WHERE ${columnName} = '${value}'`;
        }
    }
}

const queryUsers = queryBy('users');
const queryUsersByEmail = queryUsers('email');
console.log(queryUsersByEmail('example@email.com'));

// Using Arrow functions : 
const currySum1 = a => b => c => a + b + c;
console.log(currySum1(1)(2)(3));

function currySum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

/**
 * 1. Partial Application: Currying allows you to partially apply a function. This means you can fix a number of arguments, 
 *    producing a more specific function. This can lead to cleaner and more modular code.
 
 * 2. Functional Programming: Currying is a core concept in functional programming. When working in a functional style, you often 
 *    chain operations, and having functions that take and return other functions can be very handy.
 
 * 3. Higher-order functions: Currying makes it easier to create higher-order functions (functions that operate on other functions). 
 *    This can be useful when creating utility functions, decorators, or other abstractions
 
 * 4. Function Reusability: By breaking down functions into smaller, unary functions (functions that accept only one argument), 
 *    you increase the potential for reusability. You can reuse a curried function at every level of its application
 
 * 5. Laziness: Currying can be utilized in scenarios where you want to defer computation. 
 *    You can set up certain parts of a function's logic without executing everything.
 * 
 * [HOWEVER]
 * 1. Not Always Appropriate: Just because you can use currying doesn't mean you should. If it complicates the code without clear benefits, 
 *    it might be best to stick with traditional functions
 
 * 2. Overhead: There's a slight overhead to calling multiple curried functions compared to a single multi-argument function. 
 *    In performance-critical paths, this overhead might be significant.
 
 * 3. Learning Curve: For developers unfamiliar with currying, it can be a challenging concept to grasp and 
 *    can make the code harder to read
*/