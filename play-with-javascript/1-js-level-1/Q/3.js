

var myFunctions = []

//--------------------------------------
for(var i=0;i<2;i++){

    var func=function(){
        console.log(i)
    }
    myFunctions.push(func)

}
//--------------------------------------
myFunctions[0]() // 0
myFunctions[1]() // 1     