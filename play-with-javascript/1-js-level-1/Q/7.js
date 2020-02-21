"use strict"


// function f1() {
//     console.log(this)
// }

// // f1();

// let o1 = {
//     name: 'One',
//     f1: f1
// }
// o1.f1()


// let o2 = { name: "Two" }
// f1.call(o2)
// f1.apply(o2)
// f1.bind(o2)()


//-------------------------------------------


// let tnr = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching")
//         let self = this;
//         let learn = function () {
//             console.log(this.name + " learning " + self.name)
//         }
//         //learn();
//         let e = { name: 'dhivya' }
//         // e.learn = learn
//         // e.learn();
//         learn.call(e)
//     }
// }

// tnr.doTeach();




//-------------------------------------------
