
/**
 * 
 * 
 *  what is function ?
 * 
 *   A function relates an input to an output.
 *   It is like a machine that has an input and an output.
 *   And the output is related somehow to the input.
 * 
 *  how to create function in javascript language ?
 * 
 *  2 ways
 * -----------
 * 
 *  way-1 : decleration
 * 
 *          ==> function-object created at scope creation-phase
 *          ==> always hoist with function-object
 * 
 *  way-2 : expression
 * 
 *          ==> function-object created at scope execution-phase
 *          
 * 
 */

// console.log("debug point..")

//---------------------------
// way-1 : decleration
//---------------------------

// console.log(add(12, 13))

// function add(n1, n2) {
//     let result = n1 + n2
//     return result
// }

// console.log(add(12, 13))


//---------------------------
// way-2 : expression
//---------------------------

// console.log(sum(12, 13)) // error

// let sum = function (n1, n2) {
//     let result = n1 + n2
//     return result
// }

// console.log(sum(12, 13))

//-----------------------------------------------------
// e.g
//-----------------------------------------------------

let userType = "Nil"
let action = null;
function login() {
    //....
    userType = "guest"
}
login();
if (userType === "admin") {
    action = function () {
        console.log("admin action")
    }
} else {
    action = function () {
        console.log("guest action")
    }
}
action()

//-----------------------------------------------------