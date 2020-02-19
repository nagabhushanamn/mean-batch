

/**
 * 
 *  scope / execution context
 * ---------------------------
 * 
 *  memory / stack-frame with args & local variables,
 *  to execute set of instructions
 * 
 *  phases
 *  ---------
 * 
 *   1. creation  / push
 * 
 *      -> all variables dclared with 'var' keyword,
 *         always get hoisted with default value ( undfined )
 * 
 *   2. execution / pop
 *  
 * 
 *  imp-note :
 * 
 *  by default, 
 *  a javascript runtime has one default/global scope 
 * 
 * 
 *  every function call creates new scope, 
 *  which is child of in which scope that function has declared.
 * 
 */


console.log("start.....")

//-----------------------------------
// var v=12
// console.log(v)
//-----------------------------------

//-----------------------------------
// Quiz-1
//-----------------------------------

// var v = 12;
// function f1() {
//     console.log(v)
//     var v = 13;
// }
// f1() // f1-scope  <--- global-scope

//-----------------------------------
// Quiz-2
//-----------------------------------

// var v = 12  // global-scope
// function f1() {
//     function f2() {
//         console.log(v)
//     }
//     // f2(); // f2-scope <- f1-scope
//     //var v = 13
//     f2(); // f2-scope <- f1-scope
// }
// f1(); // f1-scope  <- global-scope



//-----------------------------------
// Quiz-3
//-----------------------------------

// var v = 12
// var v = 13

// console.log(v)


//-----------------------------------
// Quiz-4
//-----------------------------------

// var v=12
// if(true){
//     var v=13  // no block-scope
// }
// console.log(v)

//-----------------------------------------------
// Limitation 'var' keyword
//-----------------------------------------------

/**
 * 
 * => variable always get hoist
 * => can re-declare same variable within scope
 * => no-block scope to variable
 * 
 *  soln :
 * 
 *      => using 'let' & 'const' kyewords ( ES6 )
 * 
 * 
 */

//-----------------------------------------------

// console.log(v) // Error
// let v = 12;

//-----------------------------------------------

// let v = 12
// let v = 13 // syntax error ,

//-----------------------------------------------

// var v = 12;
// if (true) {
//     let v = 13  // block scoped
// }
// console.log(v)

//-----------------------------------------------


const trainer = {
    name: 'Nag'
}

// trainer = null // error

trainer.name = "kishore"


const PI = 3.14

// //-----------------------------------------------
// summary
// //-----------------------------------------------

/**
 * 
 *  use 'let' keyword, for mutable reference variable
 *  use 'const' keyword, for immutable reference variable
 * 
 *  avoid 'var' keyword, for better & clean code
 * 
 */