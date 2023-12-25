// Event Delegation

/**
 *  [WHAT]
 *  1. Event delegation is a technique in JavaScript for efficiently handling events on a large number of elements
 * 
 *  2. Instead of adding event listeners to each individual element, event delegation involves adding a single event listener 
 *     to a common parent element
 * 
 *  3. Thanks to the event bubbling mechanism in the DOM, an event triggered on a child will propagate up through its ancestors. 
 *     By putting a single listener on the parent, we can capture and act on events originating from the children.
 */

/**
 *  [WHY]
 *  Here's why event delegation can be beneficial:
 *  1. Performance: Instead of attaching potentially hundreds or thousands of individual event listeners to elements, you attach just one to a common parent. 
 *     This can greatly reduce memory usage and improve performance
 * 
 *  2. Dynamic Elements: If elements are added to or removed from the DOM dynamically, you don't have to worry about attaching or detaching event listeners from them. 
 *     The parent's listener will take care of events from these elements as long as the parent remains in the DOM.
 */

// [Without event delegation]

const items = document.querySelectorAll('#fruitList li');
items.forEach(item => {
    item.addEventListener('click', function() {
        alert('You clicked on ' + this.textContent);
    }, true);
});

// Event Delegation
// const fruitList = document.querySelector('#fruitList');
// fruitList.addEventListener('click', function(event) {
//     if (event.target.className.toLowerCase() === "fruits") {
//         alert('You clicked on ' + event.target.textContent);// nutritional value
//     }
//     event.stopPropagation();
// });

// const basketList = document.querySelector('#basket');
// basketList.addEventListener('click', function(event) {
//     console.log(event);;
// });

/**
 * 1. The event object has a property called [target] which refers to the actual element that was clicked. 
 *    By inspecting this property, you can determine which element was clicked and respond accordingly.
 * 
 * 2. Event delegation relies on the fact that most DOM events bubble up through the DOM tree, 
 *    allowing you to set up a listener on an ancestor of the elements you're interested in.
 */

// const list = document.getElementById('myList');

// // Capturing phase for the ul
// list.addEventListener('click', function(event) {
//     console.log('Event captured on UL');
// }, true); // Note the true here, which indicates capturing phase

// // For demonstration, let's also listen during the bubbling phase
// list.addEventListener('click', function(event) {
//     console.log('Event bubbled up to UL');
// }, false); // False or omitting this argument indicates bubbling phase

// Add a listener to an li element during the capturing phase
// list.querySelector('li').addEventListener('click', function(event) {
//     console.log('Event captured on LI');
// }, true);
