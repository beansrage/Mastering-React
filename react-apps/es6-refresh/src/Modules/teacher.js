import { Person } from './person';

export function promote() {}

export default class Teacher extends Person{
    constructor(name, degree){      // If constructor is in child class. The Constructor of the parent class is to be called.
      super(name);                  // super() references parent class. initialize name property
      this.degree = degree          // initialize degree property
    }
  
    teach() {
      console.log("teach")
    }
  }