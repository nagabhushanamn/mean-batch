
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
// Function Parameter(s)
//-----------------------------------------------------


// function func(a, b, c, d, e) {
//     console.log(arguments[0])
//     console.log(arguments[1])
//     console.log(arguments[2])
//     console.log(arguments[3])
//     console.log(arguments[4])
// }
// func(10, 20, 30, 40, 50)

// e.g

// function sum() {
//     let idx = 0,
//         result = 0,
//         len = arguments.length
//     while (idx < len) {
//         result += arguments[idx]
//         idx++
//     }
//     return result
// }


//-----------------------------------------------------
// Function with default Parameter(s)  ( ES6 )
//-----------------------------------------------------

// function func(a = 10, b = 20) {
//     // if (!a) a = 10
//     // if (!b) b = 20
//     // a = a || 10
//     // b = b || 20
//     console.log(a)
//     console.log(b)
// }
// func(100)



//-----------------------------------------------------
// Function with rest Parameter  ( ES6 )
//-----------------------------------------------------


// function func(a, b, ...remaining) {
//     console.log(a)
//     console.log(b)
//     console.log(remaining)

//     console.dir(arguments)
// }
// func(100, 200, 300, 400, 500, 600, 700)


//------------------------------------------------------
// FP principles
//------------------------------------------------------

/**
 *  #1 : function is value/object 
 *       i.e we can assign to variable
 *      
 *      function as first-class citizen
 */

// function greet() {
//     console.log("hello..")
// }
// let sayHello = greet
// sayHello();

//------------------------------------------------------

/**
 * 
 *  #2 : parameter of function can be other function
 *       
 */

// function greet(f) {
//     console.log(">>>>>>>>>>>>>>>>>>")
//     if (f) f()
//     else
//         console.log("greetings")
//     console.log("<<<<<<<<<<<<<<<<<<")
// }

// greet();

// let tn = function () {
//     console.log("vanakkam")
// }
// // tn();
// greet(tn)


// e.g

// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
// let asc = function (x, y) { return x - y }
// let dsc = function (x, y) { return y - x }
// nums.sort(dsc);
// console.log(nums)


//------------------------------------------------------

//------------------------------------------------------

/**
 * 
 *  #3 : return value of function can be other function
 *       
 */

function teach() {
    console.log("teaching javascript...")
    let learn = function () {
        console.log("learning javascript...")
        console.log("learning ends")
    }
    //learn();
    console.log("teaching ends")
    return learn
}

let learnFunc=teach();
learnFunc();
learnFunc();


//------------------------------------------------------