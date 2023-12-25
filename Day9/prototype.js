/**
    1. In JavaScript, a prototype is a mechanism that allows objects to inherit properties and methods from another object. 
    
    2. Every object in JavaScript has an internal property called [[Prototype]] that points to its prototype object. 
    
    3. This prototype chain continues until we reach an object with a null prototype, which is usually the built-in Object.prototype.

    Basics of Prototype:
    1. Function's prototype property : 
        1.1 Every function in JavaScript has a property named prototype

    2. Object's __proto__ property:
        2.1 Every object has a property named __proto__ that points to the object's prototype

*/
// e.g. 1

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// // Add a method to the prototype of Person
Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
};

// // Create a new instance
let john = new Person("John", 30);

// // Call the method on the instance - it's available because of the prototype inheritance
john.sayHello();
// // Here, the instance john does not have its own sayHello method. Instead, it accesses the sayHello method from the Person.prototype.