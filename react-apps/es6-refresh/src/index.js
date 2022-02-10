
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


const person = {
  name: "Beans",
  walk() {
    console.log(this);
  }
};