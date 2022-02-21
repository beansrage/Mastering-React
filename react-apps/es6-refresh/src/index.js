
// // A person object with 3 members (1 property, 2 methods)
// const person = {
//   name: 'bean',
//   walk: function() {},
//   talk() {}
// }

// // person.talk(); //Dot notation
// // person['name'] = 'Dong' // Bracket notation is only used when the property/method is unknown beforehand

// person.talk()
// //If known
// person.name = '';

// const targetMember = 'name';
// person[targetMember.value] = 'Dong''

//Bind this

// const person = {
//   name: "Beans",
//   walk() {
//     console.log(this); // 
//   }
// };

// person.walk();

// // const walk = person.walk(); Does not work
// const walk = person.walk.bind(person); //Using the bind method will return a new instance of the walk function 
// walk();



// Arrow functions 

// const square = number =>number * number;
// console.log(square(12))


// const jobs = [
//   { id: 1, isActive: true },
//   { id: 2, isActive: true },
//   { id: 3, isActive: false },
// ]

// // Predicate function
// // const activeJobs = jobs.filter(function(job) { return job.isActive; })

// // es6 arrows
// const activeJobs = jobs.filter(job => job.isActive);


// ------------------- // 
//7. Arrow Functions and this
// ------------------- // // ------------------- // // ------------------- // // ------------------- // // ------------------- // 

// // This is a callback function
// const person = {
//   talk() {
//     setTimeout(function() {   // STANDALONE function
//       console.log('this', this);
//     }, 1000); // setTimeout will execute the function, After the amount of time provided
//   }
// };

// person.talk(); // Returns window


// // - OLD days pattern (Using Arrow functions this is no longer needed)

// const person = {
//   talk() {
//     var self = this;
//     setTimeout(function() {   // STANDALONE function
//       console.log('self', self);
//     }, 1000); // setTimeout will execute the function, After the amount of time provided
//   }
// };

// person.talk();



// // - Arrow functions dont re-bind this keyword. If call back function is changed from to ES6. It will inherit this keyword.

// const person = {
//   talk() {
//     var self = this;
//     setTimeout(() => {   // STANDALONE function
//       console.log('this', this);
//     }, 1000); // setTimeout will execute the function, After the amount of time provided
//   }
// };
// ------------------- // // ------------------- // // ------------------- // // ------------------- // // ------------------- // 
// ------------------- // // ------------------- // // ------------------- // // ------------------- // // ------------------- // 


// ------------------- // 
//8. Array.map
// ------------------- // // ------------------- // // ------------------- // // ------------------- // // ------------------- // 

// To render a list of items, use .map()

// const colors = ['red', 'green', 'blue']
// const items = colors.map(function(color) {
//   return '<li>' + color + '</li>'
// });

// // Con-cat
// const colors = ['red', 'green', 'blue']
// const items = colors.map(color => '<li>' + color + '</li>');

// //ES6 Template Literal
// const colors = ['red', 'green', 'blue']
// const items = colors.map(color => `<li>${color}</li>`);
// console.log(items)

// ------------------- // 
//9. Object Destructuring 
// ------------------- // // ------------------- // // ------------------- // // ------------------- // // ------------------- // 

// const address = {
//   street: '',
//   city: '',
//   country:''
// };

//Redundant

// const street=address,street
// const city = address.city;
// const country = address.country;

// Destructed

// const { street, city, country} = address;

// Alias

// const { street: st } = address; 


// ------------------- // 
//10. Spread Operator 
// ------------------- // // ------------------- // // ------------------- // // ------------------- // // ------------------- // 

// const first = [1,2,3];
// const second = [4,5,6];


// // const combined = first.concat(second); //OLD WAY
// // const combined = [...first, ...second]; // Spread operator
// // const combined = [...first, , 'beans', ...second, 'x']; // Spread operator W/ Element 

// const clone = [...first]  //Clone W/spread operator
// console.log(first);
// console.log(clone);



// const first = { name: 'Bean'};  //Spread operator W/ Object
// const second = { job: 'Software Engineer'};

// const combined = {...first, ...second, location: 'VideoDromma'};
// console.log(combined)

  // //Result
  // Object { name: "Bean", job: "Software Engineer", location: "VideoDromma" }
  //   job: "Software Engineer"
  //   location: "VideoDromma"
  //   name: "Bean"


// Use Spring Operator to clone Object.
// const clone = {...first};
// console.log(clone);


// ------------------- // 
//11. Classes
// ------------------- // // ------------------- // // ------------------- // // ------------------- // // ------------------- // 

//Class: Object with atleast 1 method. a 'blueprint' to create objects of the same

// const person = {
//   name: 'Bean',
//   walk() {
//     console.log("walk")
//   }
// };

// const person = {
//   name: 'Bean',
//   walk() {       // Multiple invocations of same walk method
//     console.log("walk")
//   }
// };

// class Person {          //Post-scal naming convention
//   constructor(name){    //Special method, but the name is reserved a special keyword. Can take parameters
//     this.name = name; 
//   } 
  
//   walk() {
//     console.log("walk")
//   }
// }

// //If you have a class, to create an object using that class or "blueprint". Must use new operator
// const person = new Person('Bean')
// // person.walk/name is available 




// ------------------- // // ------------------- // //12. Inheritance  ------------------- // // ------------------- // // ------------------- // 
/*
 class Person {          //Post-scal naming convention
   constructor(name){    //Special method, but the name is reserved a special keyword. Can take parameters
     this.name = name; 
   } 
  
   walk() {
     console.log("walk")
   }
 }

 class Teacher extends Person{
   constructor(name, degree){      // If constructor is in child class. The Constructor of the parent class is to be called.
     super(name);                  // super() references parent class. initialize name property
     this.degree = degree          // initialize degree property
   }

   teach() {
     console.log("teach")
   }
 }

 const teacher = new Teacher('Bean', 'SE');

*/


// ------------------- // // ------------------- // //13. Modules ------------------- // // ------------------- // // ------------------- // 

/* 
- Write code in multiple files
- Default is set to private

person.js

 class Person {          //Post-scal naming convention
   constructor(name){    //Special method, but the name is reserved a special keyword. Can take parameters
     this.name = name; 
   } 
  
   walk() {
     console.log("walk")
   }
 }

teacher.js:

 class Teacher extends Person{
   constructor(name, degree){      // If constructor is in child class. The Constructor of the parent class is to be called.
     super(name);                  // super() references parent class. initialize name property
     this.degree = degree          // initialize degree property
   }

   teach() {
     console.log("teach")
   }
 }
import { Teacher } from './Modules/teacher';

const teacher = new Teacher('Bean', 'SE');
teacher.teach();

*/


// ------------------- // // ------------------- // //13. Named and default exports. ------------------- // // ------------------- // // ------------------- // 
/*

*/