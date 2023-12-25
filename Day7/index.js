/**
 * synchronous code vs asynchronous code  
 * AJAX: XHR
 * Promise introduction, resolve reject, chaining of promises
 */

// 1.1 Synchronous Code:
/**
    1. Synchronous code executes line by line, one instruction at a time. 
    2. Each instruction must complete before the next one starts. 
    3. This can lead to blocking behavior, where the program waits for one task to finish before moving on to the next. 
    4. Synchronous code is easier to reason about, but it can lead to unresponsiveness, in tasks that take time to complete.
 */


    // [Code snippet 1]
    // console.log("Start");
    // const fullName = "James"
    // console.log(`Hello ${fullName}`);
    // console.log("What is ur age ??")
    // const age = 30
    // console.log(age)
    // console.log("What is your profession ?")
    // let profession = "Developer";
    // console.log(profession);
    // console.log("End");



   // [Code snippet 2]
//    console.log("Start");
//    console.log("Loop 1 : ");
//    for(let i = 0; i < 10; i++){
//     console.log(i)
//    }
//    console.log("Loop 2 : ");
//    for(let i = 0; i < 10000000000; i++){
//     console.log(i);
//    }
//    console.log("End")




// 1.2 Asynchronous code :
/**
   1. Asynchronous code doesn't block the execution flow. 
   2. It allows tasks to be executed independently, allowing the program to continue with other tasks without waiting for the completion of the asynchronous task. 
   3. This is especially useful for tasks that involve waiting, like fetching data from a server or reading files. 
   4. Asynchronous code is more complex to handle due to callbacks, promises, or async/await, but it's crucial for creating responsive applications.
*/

    // [Code snippet 1] using setTimeout  

    // console.log("Start");
    // setTimeout(() => {
    //     console.log("Timeout finished");
    // }, 2000);
    // console.log("End");



    // [Code snippet 2 ] using Promises
    // console.log("Start");

    // const fetchData = () => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve("Data fetched");
    //         }, 2000);
    //     });
    // };

    // fetchData().then((data) => {
    //     console.log(data);
    // });

    // console.log("End");


// 2. AJAX: XHR


    // // Create a new XMLHttpRequest object
    // var xhr = new XMLHttpRequest();
    // debugger
    // // Configure the request
    // xhr.open('GET', 'https://cataas.com/cat', true);
    // debugger
    // // Set up a callback function to handle the response
    // xhr.onload = function(response) {
    //     debugger
    //     if (xhr.status >= 200 && xhr.status < 300) {
    //         // Request was successful
    //         console.log('Response:', xhr.responseText);
    //     } else {
    //         // Request was not successful
    //         console.error('Request failed with status:', xhr.status);
    //     }
    // };
    // debugger
    //  // Set up a callback function to handle errors that might occur during the request process.
    // xhr.onerror = function(err) {
    //     debugger
    //     console.error('Request error');
    // };

    //    debugger

    // // Send the request
    // xhr.send();

    







    // Set headers in XHR Request
    
    // var xhr = new XMLHttpRequest();
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

    // // Set custom headers using setRequestHeader
    // xhr.setRequestHeader('Authorization', 'Bearer your-access-token');
    // xhr.setRequestHeader('Custom-Header', 'custom-value');

    // xhr.onload = function() {
    //     if (xhr.status >= 200 && xhr.status < 300) {
    //         console.log('Response:', xhr.responseText);
    //     } else {
    //         console.error('Request failed with status:', xhr.status);
    //     }
    // };

    // xhr.onerror = function() {
    //     console.error('Request error');
    // };

    // xhr.send();




    //  GET, POST, PUT, DELETE
    // Function to handle XMLHttpRequest

    
    // function makeRequest(method, url, data) {
    //     // console.log(this)
    //     var xhr = new XMLHttpRequest();
    //     xhr.open(method, url, true);

    //     // Set headers if needed
    //     xhr.setRequestHeader('Content-Type', 'application/json'); // Example header

    //     xhr.onload = function() {
    //         // console.log(this)
    //         if (xhr.status >= 200 && xhr.status < 300) {
    //             console.log('Response:', xhr.responseText);
    //         } else {
    //             console.error('Request failed with status:', xhr.status);
    //         }
    //     };

    //     xhr.onerror = function() {
    //         console.error('Request error');
    //     };

    //     xhr.send(data ? JSON.stringify(data) : null);
    // }

    // GET request
    // makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts/1');

    // // POST request
    // makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
    //     name: "John"
    // });

    // // PUT request
    // makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
    //     id: 250
    // });

    // // DELETE request
    // makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');



//  3. Promises in JS
/**
    1. Promises provide a more structured way to handle asynchronous operations. 
    2. They represent a value that may be available now, or in the future, or never. 
    3. Promises have three states: pending, fulfilled, or rejected. 
    4. Promises help in avoiding callback hell and make asynchronous code more readable and maintainable. 
    5. However, they still require chaining .then() calls for multiple asynchronous operations.
*/

// document.getElementById("btn").addEventListener("click", () => {
//      // Create a new XMLHttpRequest object
//     var xhr = new XMLHttpRequest();
//     // Configure the request
//     xhr.open('GET', 'https://cataas.com/cat', true);
//     // Set up a callback function to handle the response
//     xhr.onload = function(response) {

//         if (xhr.status >= 200 && xhr.status < 300) {
//             // Request was successful
//             console.log('Response:', xhr.responseText);

//             // Make another enable

//             document.getElementById("newBtn").addEventListener("click", () =>{
//                 // 
//                 document.getElementById("submit").addEventListener("click", () => {
//                     // 
//                 })
//             })
//         } else {
//             // Request was not successful
//             console.error('Request failed with status:', xhr.status);
//         }
//     }
//      // Set up a callback function to handle errors that might occur during the request process.
//     xhr.onerror = function(err) {

//         console.error('Request error');
//     };



//     // Send the request
//     xhr.send();
// })





    // Simple Promise example error and success
    function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const data = "Data fetched";
                resolve(data);
            }, 2000);
        });
    }

    console.log("Start");

 fetchData().then((data) => {
    console.log(data);
    console.log("End");
})
.catch((error) => {
    console.error(error);
});
/**
    //  Promise Chaining
*/

/**
 
*/
// "1. button click ---> API --> response --> btn enable ---> click --> form --->submit --> API"

// document.getElementById("btn").addEventListener("click", () => {
    
// })







// const enableBtn = () => {
//     return new Promise((resolve, reject) => {
//         // enable btn
//         // bind click listener
//         resolve(true)
//     })
// }








const form1Click = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({data: "Object 1" })
        }, 2000)
    })
}

const form2Click = (data) =>{
    debugger
    return new Promise((resolve, reject) => {
        debugger
        setTimeout(()=>{
            debugger
            resolve({data: "object 2"})
        }, 3000)
    })
}

const form3Click = (data) => {
    debugger
    return new Promise((resolve, reject) => {
        debugger
        setTimeout(()=>{
            debugger
            resolve({data: "object 3"})
        }, 3000)
    })
}

form1Click().then(form2Click).then(form3Click).then((data3) => { console.log(data3);})

    



