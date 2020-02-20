"use strict"


let e1={name:'suja'}
let e2={name:'dhivya'}

let tnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(`${this.name} teaching javascript..`)
        let learn = function () {
            console.log(`${this.name} learning javascript from ${'tnrName'}`)
        }
        console.log(`teaching ends`)
        return learn;
    }
}
let learnFunc = tnr.doTeach();
learnFunc.call(e1)
learnFunc.call(e2)
