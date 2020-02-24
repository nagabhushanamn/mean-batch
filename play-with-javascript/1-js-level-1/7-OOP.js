

/**
 * 
 *  what is object ?
 * 
 *  -> info/data/properties/attributes  ==> state
 *  -> func/method/work/                ==> behav
 *  -> loc/addr/reference               ==> indentify
 * 
 * 
 *  obj ==> sbi
 * 
 *   
 * 
 *  obj's template/blueprint ==> class
 * 
 * 
 * 
 *  class  ==> instance(s)
 * 
 */


/*
       state

           - name
           - age
       
       behav
       
           - sayName
           - sayAge

*/


//---------------------------------------
// class
//---------------------------------------

// way-1 : function

// function Person(name, age) {
//     this.name = name
//     this.age = age
// }
// Person.prototype.sayName = function () {
//     console.log(`im ${this.name}`)
// }
// Person.prototype.sayAge = function () {
//     console.log(`im ${this.age} yrs old`)
// }

// way-1 : class ( es6 )

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayName() {
        console.log("im " + this.name)
    }
    sayAge() {
        console.log("im " + this.age + " old")
    }
}

let p1 = new Person("Nag", 36)
let p2 = new Person("Indu", 31)

//----------------------------------------------
// OO concepts
//----------------------------------------------

// - Abstraction
// - Encapsulation
// - Inheritance
// - Polymorphism

//----------------------------------------------
