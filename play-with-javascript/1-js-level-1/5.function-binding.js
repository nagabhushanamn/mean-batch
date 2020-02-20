"use strict"


/**
 * 
 * 
 * function binding
 * ------------------
 * 
 *  ==> function with any object
 * 
 * 
 * types
 * -----
 * 
 *  => static 
 *  => dynamic 
 * 
 */


//---------------------------------------------
// static function binding
//---------------------------------------------

// function sayNameForAll() {
//     // let name="local"
//     console.log("im " + this.name)
// }
// // sayNameForAll(); // Error

// let p1 = {
//     name: 'Nag',
//     sayName: sayNameForAll  // static function binding
// }
// p1.sayName();


//---------------------------------------------
// dynamic function binding
//---------------------------------------------

//-------------------
// cts
//-------------------
function doTeach(sub, duration, location) {
    console.log(`${this.name} teaching ${sub} in ${location} for ${duration} days`)
}

// doTeach("mean", 75, "ASV"); // Error

//-------------------
// vendor
//-------------------
let tnr = { name: 'Nag' }
let newTnr = { name: 'kishore' }

Object.preventExtensions(tnr)

// way-1 :
// doTeach.call(tnr, "mean", 75, "ASV")

// way-2 :
// doTeach.apply(tnr, ["mean", 75, "ASV"])

// way-3  ( lazy invocation )
// let newF = doTeach.bind(tnr, "MEAN")
// newF(75, 'chennai');
// newF(5, 'bengalore');

//--------------------------------------------------------
// summary
//--------------------------------------------------------

function func() {
    console.log(this)
}

func()

let o1 = { name: "ONE" }
o1.func = func;
o1.func();

let o2 = { name: 'TWO' }
func.call(o2)

//---------------------------------------------------------