// OOPS in JS (es6)

/**
 * 1.Object-Oriented Programming (OOP) is a programming paradigm that is based on the concept of "objects", 
 *   which represent data and code that manipulates that data. 
 * 
 * 2. JavaScript is primarily prototype-based, but it has incorporated many OOP features over the years.
 */

/**
 * // [class creation]
 * 1. Classes and Objects: JavaScript introduced the [class] syntax in ES6 (ECMAScript 2015) 

    class Car {
        constructor(brand) {
            this.brand = brand;
        }

        drive() {
            console.log(`${this.brand} is driving!`);
        }
    }
    const myCar = new Car('Toyota');
    myCar.drive();
 */

/**
 // [Inheritance] JavaScript allows classes to inherit from other classes using the extends keyword.
    class ElectricCar extends Car {
        charge() {
            console.log(`${this.brand} is charging!`);
        }
    }

    const myTesla = new ElectricCar('Tesla');
    myTesla.drive();    
    myTesla.charge(); 
*/

/**
  // [Encapsulation]: It is the bundling of data with the methods that operate on that data. 
      In JavaScript, you can use private fields to encapsulate data.
    
    class Person {
       #name;  // private field

        constructor(name) {
            this.#name = name;
        }

        greet() {
            console.log(`Hello, my name is ${this.#name}!`);
        }
    }
 */

/**
    // [polymorphism] It allows objects of different classes to be treated as objects of a common super class. 
        In JavaScript, polymorphism is supported through inheritance and the ability of a subclass to override methods 
        from the superclass.
    
    class Animal {
        speak() {
            console.log('Some generic animal sound');
        }
    }

    class Dog extends Animal {
        speak() {
            console.log('Woof!');
        }
    }

    let pet = new Dog();
    pet.speak();  
*/