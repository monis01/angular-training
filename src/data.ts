// RXJS

/**
    RxJS is an acronym that stands for Reactive Extension for JavaScript. 
    It is a JavaScript library that is used to work with Reactive programming that deals with 
    asynchronous data calls, callbacks and event-based programs. 
    RxJS can be used with other JavaScript libraries such as Angular, ReactJS, Vue. js, Node
*/

/**
    Frontend programming is inherently asynchronous because of nature of apps runs in a browser (events)

    A new asynchronous programming concept - the stream i.e. A stream is a sequence of values in time(its as simple as that)

    for example the following stream of numeric values, where each value is issued every one second: i.e. 0, 1, 2, 3 ,4 

    let i = 0;
    setInterval(()=>{
        console.log(i++);
    }, 1000)

    Another example of a stream is a sequence of mouse click events, with the x and y mouse coordinates of the mouse click
    (100,200), (110, 300), (400, 50) ...

    document.addEventListener("mousemove", (val)=>{
        console.log(val.x, val.y)
    })

    Everything that happens in the browser can be seen as a stream e.g. : 

    1. the sequence of browser events that are triggered when the user interacts with the page,
    2. data arriving from the server
    3. timeouts getting triggered
*/

/**
  In order for the notion of stream to be useful to build a program, we need a way to create streams, 
  subscribe to them, react to new values, and combine streams together to build new ones.

  RXJS is an implementation of Observables for Javascript.

  What is an Observable?
  An observable represents a stream, or source of data that can arrive over time. 
  You can create an observable from nearly anything, but the most common use case in RxJS is from events.

  This can be anything from mouse moves, button clicks, input into a text field, or even route changes

  The easiest way to create an observable is through the built in creation functions.
  For example, we can use the fromEvent helper function to create an observable of mouse click events:

  // import the fromEvent operator
    import { fromEvent } from 'rxjs';

// grab button reference
    const button = document.getElementById('myButton');

// create an observable of button clicks
    const myObservable = fromEvent(button, 'click');

At this point we have an observable but it's not doing anything. 
This is because observables are cold, or do not activate a producer (like wiring up an event listener), until there is a SUBSCRIPTION
  
*/

/**
    Subscription :

    Subscriptions are what set everything in motion. You can think of this like a faucet, you have a stream of water ready to be tapped (observable), 
    someone just needs to turn the handle. In the case of observables, that role belongs to the subscriber

    To create a subscription, you call the subscribe method, supplying a function (or object) - also known as an observer. 
    This is where you can decide how to react(-ive programming) to each event

    // import the fromEvent operator
    import { fromEvent } from 'rxjs';

    // grab button reference
    const button = document.getElementById('myButton');

    // create an observable of button clicks
    const myObservable = fromEvent(button, 'click');

    // for now, let's just log the event on each click
    const subscription = myObservable.subscribe(event => console.log(event));


    ALSO

    // instead of a function, we will pass an object with next, error, and complete methods
    const subscription = myObservable.subscribe({
    // on successful emissions
    next: event => console.log(event),
    // on errors
     error: error => console.log(error),
    // called once on completion
    complete: () => console.log('complete!')
    });
*/

/**
    It's important to note that each subscription will create a new execution context. 
    This means calling subscribe a second time will create a new event listener:

    // addEventListener called
    const subscription = myObservable.subscribe(event => console.log(event));

    // addEventListener called again!
    const secondSubscription = myObservable.subscribe(event => console.log(event));

    // clean up with unsubscribe
    subscription.unsubscribe();
    secondSubscription.unsubscribe();
*/

/**
    By default, a subscription creates a one on one, one-sided conversation between the observable and observer. This is also known as unicasting
*/
