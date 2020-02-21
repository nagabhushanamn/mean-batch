"use strict"

// let getPrice = function () {
//     return 100 + 200
// }

// or

// let getPrice = () => {
//     return 100 + 200
// }

// ---------------------------------------------------


// let getPrice = (count) => {
//     return count * (100 + 200)
// }

// or


// let getPrice = count => {
//     return count * (100 + 200)
// }

// ---------------------------------------------------


// let getPrice = (count, tax) => {
//     return count * (100 + 200) + tax
// }

// or


// let getPrice = (count, tax) => count * (100 + 200) + tax


// ---------------------------------------------------


// let getPrice = (count, tax) => {
//     let cost = count * (100 + 200)
//     let total = cost + tax
//     return total
// }

// ---------------------------------------------------
// why / where we need arrow function in javascript lang ?
// ---------------------------------------------------

// #use-1 : for compact function argument

// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
// nums.sort(function (x, y) { return x - y })
// nums.sort((x, y) => { return x - y })
// nums.sort((x, y) => x - y)
// console.log(nums)

//--------------------
// Quiz
//--------------------

// let tnr = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching..")
//         let askQues = (q) => {
//             console.log(this.name + " answering " + q)
//         }
//         console.log("teaching ends")
//         return askQues
//     }
// }

// let askQues = tnr.doTeach();
// askQues("Q1")

// let newTnr = { name: 'Abdul' }
// askQues.call(newTnr, "Q2") // this bind is void

// #use-1: to capture 'this' i.e arrow-function always boud to creator
/*
    we cannot bind arrow function statically / dynamically to any other object
*/


// ---------------------------------------------------

// Normal Function vs Arrow Function

// console.log(this)

// let normalFunc = function () {
//     console.log(this)
// }
// normalFunc();

// let arrowFunc = () => {
//     console.log(this)
// }

// arrowFunc();

// let tnr = {
//     name: 'Nag',
//     normalFunc: normalFunc,
//     arrowFunc: arrowFunc
// }

// tnr.normalFunc()
// tnr.arrowFunc()


// let emp = { name: 'Emp' }
// normalFunc.call(emp)
// arrowFunc.call(emp)

//--------------------------------------------------
// Q1

// let inv1 = {
//     num: 123,
//     process: function () {
//         console.log(`INV-${this.num} processed`)
//     }
// }

// inv1.process();





// let inv1 = {
//     num: 123,
//     process: () => {
//         console.log(`INV-${this.num} processed`)
//     }
// }

// inv1.process();



// let inv1 = {
//     num: 123,
//     process: function () {
//         console.log(`INV-${this.num} processed partially`)
//         // let self=this;
//         // let complete = function () {
//         //     console.log(`INV-${self.num} processed completly`)
//         // }

//         let complete = () => {
//             console.log(`INV-${this.num} processed completly`)
//         }

//         return complete;
//     }
// }

// let complete = inv1.process();
// complete();



// Q

function getArrow() {
    console.log(this)
    let arrow = () => {
        console.log(this)
    }
    return arrow
}

// let arrow = getArrow();
// arrow();


// let po = { name: 'po' }
// let arrow = getArrow.call(po);
// arrow()

let kid = { name: 'Ria' }
let arrow = getArrow.call(kid)
arrow()