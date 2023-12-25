// different ways of creating object in JS

// 1. Using Object Literals:
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log('Hello!');
    }
};

// 2. Using the Object Constructor:
const person1 = new Object();
person.name = 'John';
person.age = 30;
person.greet = function() {
    console.log('Hello!');
};

// 3. Using a Constructor Function:
function Person3(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log('Hello!');
    };
}

const john = new Person3('John', 30);

// 4. Using the create method of the Object:
const personPrototype = {
    greet: function() {
        console.log('Hello!');
    }
};

const jane = Object.create(personPrototype);
jane.name = 'Jane';
jane.age = 25;

// 5. Using Factory Functions:
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log('Hello!');
        }
    };
}

// const robert = createPerson('Robert', 28);

//  function Square(side){
//     return {
//         sideA: side,
//         sideb: side,
//         area : () =>{

//         }
//     }
//  }