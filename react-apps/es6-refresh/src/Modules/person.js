export class Person {          //Post-scal naming convention
    constructor(name){    //Special method, but the name is reserved a special keyword. Can take parameters
      this.name = name; 
    } 
    
    walk() {
      console.log("walk")
    }
}