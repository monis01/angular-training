// RXJS [1]

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

    const subscription1 = myObservable.subscribe(event => console.log(event));


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

// https://academind.com/tutorials/callbacks-vs-promises-vs-rxjs-vs-async-awaits
// https://www.learnrxjs.io/learn-rxjs/concepts/rxjs-primer
// https://blog.angular-university.io/functional-reactive-programming-for-angular-2-developers-rxjs-and-observables/

// *************************************************************************************************************************************************************

// Change Detection [1]

/**
    Out of the box, Angular provides two different change detection strategies: Default and OnPush. 
    Each strategy has its own advantages, but sometimes it is easy to miss a nifty optimization opportunity if you stick to the default strategy.

    Data flow being at the center of almost all things.

*/

/**
  1. When you change any of your models, Angular detects the changes and immediately updates the views and this is the change detection
  2. The purpose of this mechanism is to make sure the underlying views are always in sync with their corresponding models

  A model in Angular can change as a result of any of the following scenarios:

    DOM events (click, hover over, etc.)

    AJAX requests

    Timers (setTimer(), setInterval())

    1. All Angular apps are made up of a hierarchical tree of components. At runtime, Angular creates a separate change detector class for every component in the tree, 
       which then eventually forms a hierarchy of change detectors similar to the hierarchy tree of components.
    
    2. Whenever change detection is triggered, Angular walks down this tree of change detectors to determine if any of them have reported changes

    3. The change detection cycle is always performed once for every detected change and starts from the root change detector and goes all the way down in a sequential fashion

    4. This sequential design choice is nice because it updates the model in a predictable way since we know component data can only come from its parent.

    5. The change detectors provide a way to keep track of the component’s previous and current states as well as its structure in order to report changes to Angular
       If Angular gets the report from a change detector, it instructs the corresponding component to re-render and update the DOM accordingly.
    
*/

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

// RXJS[2]

/**
 * [Operators]
 * 1. Operators offer a way to manipulate values from a source, returning an observable of the transformed values
 * 
 * 2. Many of the RxJS operators will look familiar if you are used to JavaScripts Array methods. For instance, 
 *    if you want to transform emitted values from an observable source, you can use map:
    
    import { of } from 'rxjs';
    import { map } from 'rxjs/operators';
    
    // 'of' allows you to deliver values in a sequence. In this case, it will emit 1,2,3,4,5 in order.
    const dataSource = of(1, 2, 3, 4, 5);
    // subscribe to our source observable
    const subscription = dataSource
    .pipe(
        // add 1 to each emitted value
        map(value => value + 1)
    )
    // log: 2, 3, 4, 5, 6
    .subscribe(value => console.log(value));

    Or if you want to filter for specific values, you can use filter:

    // subscribe to our source observable
    const subscription = dataSource
    .pipe(
        // only accept values 2 or greater
        filter(value => value >= 2)
    )
    // log: 2, 3, 4, 5
    .subscribe(value => console.log(value));

    if there is a problem you need to solve, it's more than likely there is an operator for that. 
    And while the sheer number of operators can be overwhelming as you begin your RxJS journey, 
    you can narrow it down to a small handful (and we will) to start being effective. Over time, 
    you will come to appreciate the flexibility of the operator library when obscure scenarios inevitably arrive.

    Pipe :
    The pipe function is the assembly line from your observable data source through your operators
    source data can pass through a pipe-line of operators where you can manipulate, filter, and transform the data to fit your use case

    More read on this :  https://www.learnrxjs.io/learn-rxjs/concepts/rxjs-primer#operators-can-be-grouped-into-common-categories

    Subject : 
    A Subject is a special type of Observable which shares a single execution path among observers.

    You can think of this as a single speaker talking at a microphone in a room full of people. 
    Their message (the subject) is being delivered to many (multicast) people (the observers) at once. 
    This is the basis of multicasting. Typical observables would be comparable to a 1 on 1 conversation.

    There are 4 variants of subjects:

    Subject - No initial value or replay behavior.

    BehaviorSubject - Requires an initial value and emits its current value (last emitted item) to new subscribers.


    AsyncSubject - Emits latest value to observers upon completion.

    
    ReplaySubject - Emits specified number of last emitted values (a replay) to new subscribers.


    BehaviorSubject:

    Requires an initial value and emits the current value to new subscribers
    This specialized subject is ideal when you want to maintain and provide a "current value" to subscribers. 
    Think of it as a scoreboard in a basketball game. Even if you join watching in the middle of the game, 
    you'll still see the current score. Similarly, when a new observer subscribes to a BehaviorSubject, 
    it immediately receives the current value (or the last value that was emitted).


    // RxJS v6+
    import { BehaviorSubject } from 'rxjs';

    const subject = new BehaviorSubject(123);

    // two new subscribers will get initial value => output: 123, 123
    subject.subscribe(console.log);
    subject.subscribe(console.log);

    // two subscribers will get new value => output: 456, 456
    subject.next(456);

    // new subscriber will get latest value (456) => output: 456
    subject.subscribe(console.log);

    // all three subscribers will get new value => output: 789, 789, 789
    subject.next(789);

    // output: 123, 123, 456, 456, 456, 789, 789, 789
 * 
 * 
 */

/**
    Interfaces vs types

    interface X {
        a: number
        b: string
    }

    type X = {
        a: number
        b: string
    };

 */

/**
    ng-template, ng-container, ng-content

    ng-template: 

    ng-template defines a template block that can be used to render content dynamically. 
    It provides a way to define an HTML code that can be reused multiple times within an Angular component.

    <ng-template #myTemplate>
        <div *ngIf="hasBalance">
          <p>Your amount is 5000€.</p>
        </div>
        <div *ngIf="!hasBalance">
            <p>Sorry, no balance.</p>
        </div>
    </ng-template>

    Also, we can use this template block in multiple places within our component in a ng-container element:
    <ng-container *ngTemplateOutlet="myTemplate"></ng-container>

    ng-container:
    ng-container help to group elements without adding additional nodes to the DOM. 
    It is often used with structural directives like *ngIf, *ngFor, and *ngSwitch.

    e.g. : 
    <div *ngIf="hasBalance">
        <p>Your amount is 5000€.</p>
    </div>
    <div *ngIf="!hasBalance">
        <p>Sorry, no balance.</p>
    </div>
     
    than
    
    <div *ngIf="activeSession">
        <div *ngIf="hasBalance">
             <p>Your amount is 5000€.</p>
        </div>
        <div *ngIf="!hasBalance">
            <p>Sorry, no balance.</p>
        </div>
    </div>

    <ng-container *ngIf="activeSession">
        <div *ngIf="hasBalance">
            <p>Your amount is 5000€.</p>
        </div>
        <div *ngIf="!hasBalance">
            <p>Sorry, no balance.</p>
        </div>
    </ng-container>

    ng-content:
    ng-content is an easy way to dynamically render content passed in from the parent component. 
    It allows a parent component to inject content into a child component's template.

 */

/**
 * view child, view children

    On a high level ViewChild and ViewChildren both are property decorators.
    With this decorators we can -
    1️⃣ Access an element present in the same template (html) of the component
    2️⃣ Access the child component

    The Syntax :
    @ViewChild(selector, {read: readValue, static: staticValue})
    propertyName

    1. @ViewChild can be used to get the reference of the DOM element rendered inside an Angular component. 
    We can use the reference of the DOM element to manipulate element properties

    2. The reference to a @ViewChild variable is assigned once the View has been initialized. 
    Angular provides a life-cycle Hook called ngAfterViewInit, which is called once the View has been initialized. 

    3. Once the View is initialized and rendered, the @ViewChild can then access the element using the template reference. 
    It provides us with access to the element/directive

    4. Using this DOM reference, we can access and modify DOM properties like manipulating style,
     innerText, value, and other properties related to an element referred
    
    5. We are directly accessing the DOM, so we are tightly coupled with the browser. 
    So we may not be able to use these references using server-side rendering, and it also may pose security threats.

    view-children:
    1. Working with @ViewChildren is similar to @ViewChild, but the difference between the two is
     @ViewChildren provides a list of element references rather than returning a single reference
    
    2.it is used to reference multiple elements. We can then iterate the list of the element referenced by the variable.

    Reference: https://plainenglish.io/blog/angular-viewchild-and-viewchildren


    [Angular was developed to run on all platforms like browser, webworker, universal, pwa]
    [Accessing directly DOM is not recommended because of the platform dependence ]

    Reference: https://dev.to/imsabodetocode/dom-manipulations-in-angular-1dh1
 * 
 */


/**
 * ng-deep
    
1. Angular applications are styled with standard CSS. That means you can apply everything you know about CSS stylesheets, selectors, rules, 
and media queries directly to Angular applications.Additionally, Angular can bundle component styles with components, enabling a more 
modular design than regular stylesheets.

2. For every Angular component you write, you can define not only an HTML template, but also the CSS styles that go with that template, specifying any selectors, 
rules, and media queries that you need.

3. You should consider the styles of a component to be private implementation details for that component. When consuming a common component, 
you should not override the component's styles. 
While Angular's default style encapsulation prevents component styles from affecting other components, global styles affect all components 
on the page. This includes ::ng-deep, which promotes a component style to a global style.

*/

/**
    Host Binding and Host listener

    @HostBinding and @HostListener are two decorators in Angular that can be really useful in custom directives. 
    @HostBinding lets you set properties on the element or component that hosts the directive, 
    and @HostListener lets you listen for events on the host element or component.

    import { Directive, HostBinding, HostListener } from '@angular/core';

    @Directive({
        selector: '[appRainbow]'
    })
    export class RainbowDirective {

    possibleColors = [
        'darksalmon',
        'hotpink',
        'lightskyblue',
        'goldenrod',
        'peachpuff',
        'mediumspringgreen',
        'cornflowerblue',
        'blanchedalmond',
        'lightslategrey'
    ];

    @HostBinding('style.color') color!: string;
    @HostBinding('style.border-color') borderColor!: string;

    @HostListener('keydown') newColor() {
        const colorPick = Math.floor(Math.random() * this.possibleColors.length);
        this.color = this.borderColor = this.possibleColors[colorPick];
    }
    }
    // <input type="text" appRainbow />

    You can also bind to any class, property, or attribute of the host.

Here are a few more examples of possible bindings:

@HostBinding('class.active')
@HostBinding('disabled')
@HostBinding('attr.role')

The @HostListener with the 'keydown' argument listens for the keydown event on the host. 
We define a function attached to this decorator that changes the value of color and borderColor, 
and our changes get reflected on the host automatically.
*/

/**
 Guards : 

 The Angular router’s navigation guards allow to grant or remove access to certain parts of the navigation. 
 Another route guard, the CanDeactivate guard, even allows you to prevent a user from accidentally leaving a 
 component with unsaved changes.

 Here are the 4 types of routing guards available:

CanActivate: Controls if a route can be activated.

CanActivateChild: Controls if children of a route can be activated.

CanLoad: Controls if a route can even be loaded. This becomes useful for feature modules that are lazy-loaded. 
They won’t even load if the guard returns false.

CanDeactivate: Controls if the user can leave a route. Note that this guard doesn’t prevent the user from closing the browser tab 
or navigating to a different address. It only prevents actions from within the application itself.

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard.component';
import { CanActivateRouteGuard } from './can-activate-route.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard',
    component: DashboardComponent,
    canActivate: [CanActivateRouteGuard]
  }
];

// CanActivateRouteGuard
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot 
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {
  constructor(private auth: AuthService) {}
}

1. we implement the CanActivate interface by declaring a canActivate method. 
The method optionally has access to the ActivatedRouteSnapshot and the RouterStateSnapshot, 
in cases where you would need information about the current route.

2.  the canActivate returns a boolean depending on if the user is authenticated or not, 
but it could have also returned an observable or a promise that resolve to a boolean.

3. In order to use them, route guards should be provided like services.

[Notice how we provide an array of guards in the route definition. This means that we could specify multiple guards for a single route, 
and they’ll be evaluated in the order in which they are specified.]

[Implementing CanLoad and CanActivateChild is accomplished in a similar manner.]

canDeactivate: https://codecraft.tv/courses/angular/routing/router-guards/#_candeactivate
*/

/**
 angular hooks:
 
 Reference: https://codecraft.tv/courses/angular/components/lifecycle-hooks/
 
*/

/**
 [standalone components] : 
 
 A standalone component is a type of component that doesn’t belong to any specific Angular module. 
 Before Angular version 14, when you created a component, you typically had to include it in the declaration array of a module; 
 otherwise, Angular would throw an error during compilation. However, starting from Angular version 14, 
 you can create standalone components that are not tied to any specific module. In addition to components, 
 you can also create standalone directives and pipes

 ng g c component_name  --standalone
*/

/**
 3rd party library integration : https://valor-software.com/ngx-bootstrap/#/ 
*/

/**
  tsconfig.json
*/

/**
 angular build size :  https://chitaranjanbiswal93.medium.com/understanding-vendor-js-polyfill-js-style-css-main-js-and-runtime-js-in-an-angular-application-d060e4fce2fa 
*/


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




































































// ****************************************************************************************************************************************************** //
/**
  Window vs document

window is the main JavaScript object root, aka the global object in a browser, and it can also be treated as the root of the document object model. You can access it as window.

Well, the window is the first thing that gets loaded into the browser. This window object has the majority of the properties like length, innerWidth, innerHeight, name

window.document or just document is the main object of the potentially visible (or better yet: rendered) document object model/DOM

The document object is your html will be loaded into the browser. The document actually gets loaded inside the window object and has properties available to it like title, URL, cookie, etc.

angular hooks







window, document
Browser call stack
browser debugging
interfaces/types
forms (template driven) 

*/