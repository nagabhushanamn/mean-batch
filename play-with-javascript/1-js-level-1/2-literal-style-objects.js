


//----------------------------------------------
// a. Object
//----------------------------------------------

// var config = new Object()
// config.url="http://"
// config.httpMethod="GET"


// or   ( literal style object )

var config = {
    url: "http://",
    'http-method': 'GET'
}


//----------------------------------------------
// b. Array / List
//----------------------------------------------


var arr = new Array() // 
arr.push("item-1")
arr[1] = "item-2"
arr[2] = "item-3"

// or   ( literal style object )


var newArr = [
    "item-1",
    "item-2",
    "item-3"
]



//----------------------------------------------
// c. Regular Expression
//----------------------------------------------

// var re = new RegExp("\\d{10}")

// or ( literal style )

var newRe=/^\d{10}$/

var inp = "1234567890"

if (newRe.test(inp))
    console.log("valid input")
else
    console.log("invalid input")

