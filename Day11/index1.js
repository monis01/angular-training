// OOPS prior es6
/**
    1. Before ES6, JavaScript did not have the class keyword, but object-oriented programming was still possible using 
       prototype-based inheritance.
*/

// 1. Constructor Functions:
function Car(brand) {
    this.brand = brand;
    drive : ()=>{
        console.log(this.brand);
    }
}

Car.prototype.drive = function() {
    console.log(this.brand + ' is driving.');
};

var toyota = new Car('Toyota');
toyota.drive();

// 2. Prototype Inheritance 
/**
    1. Each object in JavaScript has a prototype, and when you create a new object, 
       it inherits properties and methods from its prototype.
    2. If a property or method is not found on the object itself, JavaScript looks for it on the object's prototype.
*/

// function Car(brand) {
//     this.brand = brand;
    
// }

// Car.prototype.drive = function() {
//     console.log(this.brand + ' is driving.');
// };

// function ElectricCar(brand) {
//     Car.call(this, brand); //
// }

// ElectricCar.prototype = Object.create(Car.prototype);
// ElectricCar.prototype.constructor = ElectricCar;

// ElectricCar.prototype.charge = function() {
//     console.log(this.brand + ' is charging.');
// };

// var tesla = new ElectricCar('Tesla');
// tesla.drive();    
// tesla.charge();   

// 3.  Encapsulation
/**
   1. In the context of OOP, encapsulation refers to the bundling of data and methods that operate on that data. 
   2. In JavaScript prior to ES6, there was no direct way to make properties and methods private. 
   3. However, one could leverage closures to achieve this
*/
function Person(name) {
    // 'name' is private because of the closure.
    this.getName = function() {
        return name;
    };
}

var john = new Person('John');
console.log(john.getName());   // Outputs: John
console.log(john.name);        // Outputs: undefined

// 4. Polymorphism
/**
    1. Polymorphism in OOP allows objects of different types to be treated as if they were objects of the same type.
    2.  In JavaScript, polymorphism is inherently supported because of its dynamic typing and prototype inheritance.
*/
function driveVehicle(vehicle) {
    vehicle.drive();
}

// driveVehicle(toyota);  
// driveVehicle(tesla);   
