

var myFunctions = []
//--------------------------------------
function getF(i) {
    var func = function () {
        console.log(i)
    }
    return func
}
for (var i = 0; i < 2; i++) {
    myFunctions.push(getF(i))
}
//--------------------------------------
myFunctions[0]() // 0
myFunctions[1]() // 1     