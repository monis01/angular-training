/**
 [Browser Internals]

1. HTML parsing and DOM construction
    1.1  When a browser fetches an HTML document, it starts parsing the HTML content and constructing the Document Object Model (DOM).
    1.2  The DOM is a tree-like representation of the content of the page.
         HTML
       /     \
    Head     Body
              /    
            Div
           /   |    \ (footer)
    header   div.container

2. Encountering Scripts:
   2.1 During HTML parsing, when the browser encounters a <script> tag:
   2.2 If the script is external and has the async attribute, it will be fetched and executed asynchronously 
       without blocking the DOM construction.
   2.3 If the script is external and has the defer attribute, the fetching starts immediately, but the execution 
       will wait until the DOM is fully constructed.
   2.4 If the script doesn't have either async or defer attributes, HTML parsing will be paused, the script will be fetched 
       (if it's external), and then it will be executed. After the execution, the HTML parsing will resume.

3. JavaScript Execution Context:
   3.1 For the execution of JavaScript, the browser an  execution context.
   3.2 The primary execution context is the global context. Every time a function is invoked,
       a new execution context is pushed onto the execution stack.

4. JavaScript Engine:
   4.1 Every major browser has its JavaScript engine: Chrome uses the V8 engine, Firefox uses SpiderMonkey, Safari uses JavaScriptCore (also known as Nitro),
       Edge (before the switch to Chromium) used Chakra.
   4.2 These engines read and execute your JavaScript code. Modern JS engines don't interpret JS code directly – 
       they first compile it to machine code and then execute it, which makes the execution faster.

5. Event Loop and Callback Queue:
   5.1 JavaScript runs in a single-threaded environment, meaning only one thing can happen at a time
   5.2 However, browsers provide web APIs like setTimeout, fetch, etc., which allow for asynchronous operations.
   5.3 When such an asynchronous operation is called, it's handed off to the browser to be processed in the background
   5.4 Once the browser finishes processing, it pushes the corresponding callback function to the callback queue.
   5.5 The event loop constantly checks the execution stack. If it's empty and there are callbacks waiting in the queue, 
       it pops a callback off the queue and pushes it onto the execution stack to be run
    
    +---------------------+
    |     Web APIs        |
    +---------------------+
            |
            v
    +---------------------+
    |  Callback Queue     |
    +---------------------+
            |
            v
    +---------------------+     +---------------------+
    |    Event Loop       |<--->|  Execution Stack    |
    +---------------------+     +---------------------+

6. Rendering:
   6.1 While JavaScript execution can block the main thread, browsers try to render the page at 60 frames per second (fps)
   6.2 If a frame takes longer than 16ms (1 second divided by 60), users will experience lag
   6.3 Therefore, it's crucial to ensure that JavaScript runs efficiently and doesn't block the main thread for extended periods

// Code Sample

console.log("Start");

setTimeout(function() {
    console.log("Timeout callback");
}, 1000);

console.log("End");

For the code above:

1. "Start" is logged immediately.
2. The setTimeout callback is handed off to the Web APIs to wait for 1 second.
3. "End" is logged.
4. After 1 second, the setTimeout callback is pushed to the callback queue.
5. The event loop notices that the execution stack is clear, so it pushes the setTimeout callback onto the stack.
6. "Timeout callback" is logged.


 */