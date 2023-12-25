/**
 * async-await
 * import-export
*/

/**
 * async-await
*/
// [What]
// 1. Modern syntax for handling asynchronous code in a way that resembles synchronous code flow
// 2.  It's built on top of promises and provides a more intuitive and less nested way of handling asynchronous operations.




// Syntax


// [e.g.1]

// function fetchFromServer(url){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({ame: "AJay"})
//         }, 1000 *5 )
//     })
// }

//   function fetchData() {
//     return new Promise(async (resolve, reject) => {
//         try {
//             console.log("abc1")
//             const response =   await fetchFromServer('https://api.example.com/data').then( (response) => {resolve(response)})
           
//             return response;
//           } catch (error) {
//             console.error('Error:', error);
//           }
//     })
 
// }
// console.log("Flow 1")
// const finalResult = fetchData().then((res) => {console.log("Flow 2", res)
// })

// addToCart().then(cnt=> cnt++)
// userPreferenceUpdate().then( pref => localStorage.setItem())


// validUser().then(res=> validFunds(res)).then(res => callForPayment(res)).then(res => sendNotification(res))



// async function userPayments(){
//     try {
//         const userResponse =  await validUser();
//         const fundsResponse = await validFunds(userResponse);
//         const paymentResponse  = await callForPayment(fundsResponse);
//         const notifyResponse = await sendNotification(paymentResponse);
//         console.log(notifyResponse)
//         // return {}
    
//     }catch(ex){
//         console.log(ex);
//     }
// }

// userPayments()

// try {
//     const userResponse =  await validUser();
//     const fundsResponse = await validFunds(userResponse);
//     const paymentResponse  = await callForPayment(fundsResponse);
//     const notifyResponse = await sendNotification(paymentResponse);
//     console.log(notifyResponse)
//     // return {}

// }catch(ex){
//     console.log(ex);
// }









// [e.g. 2]
    // function getUserData(){
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve({name: "Ajay"});
    //         }, 1000 * 3)
    //     })
    // }

    // async function fetchData(){
    //     const data  = await getUserData();
    //     console.log("Data");
    //     return data;
    // }

    // function bar(){
    //     console.log("This is bar");
    // }
    // fetchData()
    // bar()

/**
    1. Readability: Async/await syntax provides a more linear and synchronous-looking code structure, 
       which can be easier to understand, especially for developers who are new to asynchronous programming.
    2. Error Handling: Error handling with async/await is more straightforward and centralized 
       using standard try-catch blocks.
    3. Sequencing: It allows you to write asynchronous code that appears to execute sequentially, 
       improving code readability and maintainability.
    4. Nested Operations: It simplifies the handling of nested asynchronous operations

 
In essence, async/await provides a more human-readable and approachable way to work with asynchronous operations,
making code easier to write, read, and maintain.

*/




/**
    [Imports and Exports JS]
    1. Export and import statements are used to create and use modules.
    2. Modules allow you to organize your code into separate files and reuse functionality 
       across different parts of your application.
*/
// You can export functions, variables, classes, or objects from a module using the export keyword.

//  e.g. 1
// math.js
// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;

// // // You can also export variables
// export const pi = 3.14159;


















// To use the functionality from an exported module, you need to import it in another file.
// app.js

// import { add, subtract, pi } from './math';

// console.log(add(5, 3));       
// console.log(subtract(10, 5)); 
// console.log(pi);

// e.g. 2
// Import all exports from math.js
// import * as mathModule from './math';

// e.g. 3
// default exports (only on default per module)
// mathUtils.js
export default function square(x) {
    return x * x;
}

// app.js, With a default export, you can import and use the function with any name you prefer:
// import mySquareFunction from './mathUtils';
// console.log(mySquareFunction(5)); 


// e.g. 4
// Combining Named and Default Exports
// math.js
export function multiply(a, b) {
    return a * b;
}
  
  export default function divide(a, b) {
    return a / b;
}

// app.js
import divide, { multiply } from './operations';

// console.log(multiply(4, 6)); 
// console.log(divide(10, 2)); 


//  [why]
// default exports provide more flexibility, clarity, and consistency when importing from modules. 
// They allow for cleaner and more intuitive code when working with different parts of a module in various files 
//    and contexts.