"use strict"


let e1 = { name: 'suja' }
let e2 = { name: 'dhivya' }

let tnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(`${this.name} teaching javascript..`)
        let self=this
        let learn = function () {
            console.log(`${this.name} learning javascript from ${self.name}`)
        }
        console.log(`teaching ends`)
        return learn;
    }
}
let learnFunc = tnr.doTeach();
learnFunc.call(e1)
learnFunc.call(e2)
let newTnr = { name: 'Abdullah' }
learnFunc = tnr.doTeach.call(newTnr)
learnFunc.call(e1)
learnFunc.call(e2)