
function teach(sub) {
    console.log("teaching " + sub)
    let notes = sub + "-notes";
    let learn = function () {
        console.log("learning with " + notes)
    }
    // learn()
    console.log("teaching ends..")
    return learn;
}

let l=teach("javascript");
l()
l()