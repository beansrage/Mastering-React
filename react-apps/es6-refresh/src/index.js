
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

//ES6 Template Literal
const colors = ['red', 'green', 'blue']
const items = colors.map(color => `<li>${color}</li>`);
console.log(items)