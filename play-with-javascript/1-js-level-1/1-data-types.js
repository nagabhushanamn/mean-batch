"use strict"

console.log("-data-types-")

//-----------------------------------------------
/*
    data types
    ------------
    1. simple / primitive    ===> values
    2. complex / reference   ===> objects

*/

//-----------------------------------------------
// 1. simple / primitive    ===> values
//-----------------------------------------------

//-----------------------------------------------
// a. undefined
//-----------------------------------------------

var v;

//-----------------------------------------------
// b. string
//-----------------------------------------------

var name = "Nag"
var company = 'cognizant'
var dynamicString1 = "Mr. " + name + " , working in " + company
// string interpolation
var dynamicString2 = `Mr. ${name} , working in ${company}`

var multiLineString1 = "line-1 \n" +
    "line-2 \n"
var multiLineString2 = `
line-1
line-2
`

var arithExp = `the sum of 1 & 2 is ${1 + 2}`


//-----------------------------------------------
// c. Number
//-----------------------------------------------
var count = 12
var cost = 12.12


//-----------------------------------------------
// d. boolean
//-----------------------------------------------

var isFound = true // false

/*

    imp-note :
    falsy-values   ==> false,undefined,null,"",0,NAN

*/


//-----------------------------------------------
// 2. complex / reference   ===> objects
//-----------------------------------------------

/*

function Person(name, age) {
    // state
    this.name = name
    this.age = age
}
Person.prototype.sayName = function () {
    console.log(`im ${this.name}`)
}
Person.prototype.sayAge = function () {
    console.log(`im ${this.age} yrs old`)
}
*/



// in 2015, ES6 ==> class syntax

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayName() {
        console.log("im " + this.name);
    }
    sayAge() {
        console.log("im " + this.age + " yrs old")
    }
}

// instances / object

var p1 = new Person("Nag", 36)
var p2 = new Person("Riya", 4)



//------------------------------------------------------------------
// New concepts
//------------------------------------------------------------------

// imp-note : by default, all javascript objects are extensible
// Object.preventExtensions(p1)
// p1.skill = "teaching"

// imp-note : by default, all javascript objects are configurable
// Object.seal(p1)
// p1.skill = "teaching"
// delete p1.age

// imp-note : by default, all javascript object's prop are modifiable
// Object.freeze(p1)
// p1.skill = "teaching"
// delete p1.age
// p1.age = -1


//------------------------------------------------------------------
// How to access javascript object's properties ?
//------------------------------------------------------------------

/*
    2 ways 

    way-1 : '.'   , => if property dosent include 'space' or '-' symbol
    way-2 : '[]'   

*/

console.log(p1.name)
console.log(p1['name'])

p1['home-address'] = "chennai"
console.log(p1['home-address'])

//------------------------------------------------------------------

