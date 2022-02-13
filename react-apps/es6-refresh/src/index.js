
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


const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
]

// Predicate function
// const activeJobs = jobs.filter(function(job) { return job.isActive; })

// es6 arrows
const activeJobs = jobs.filter(job => job.isActive);
