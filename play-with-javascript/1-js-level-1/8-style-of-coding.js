


let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//----------------------------------------
// imperative style  cosing
//----------------------------------------
/**
 *  i.e soliving any problem by step by step
 * 
 *  complexities of imperative style
 * 
 *   ==> What ( intention ) + How  ( implementation ) mixed
 * 
 */
//----------------------------------------

//#1 all evens
let evenNums = []
for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (num % 2 === 0)
        evenNums.push(num)
}
console.log(evenNums)

//#2 all odds
let oddNums = []
for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (num % 2 !== 0)
        oddNums.push(num)
}
console.log(oddNums)

//#3 all evens > 4
let evenNumsGreatherThanFour = []
for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (num % 2 === 0 && num > 4)
        evenNumsGreatherThanFour.push(num)
}
console.log(evenNumsGreatherThanFour)



//----------------------------------------
// declrative style  coding / Functional Programming
/**
 * 
 *  What ( intention )  | How ( implementation ) 
 */
//----------------------------------------



function filter(f) {
    let out = []
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (f(num))
            out.push(num)
    }
    return out
}


//#1 all evens
let evenArr = filter(num => num % 2 === 0)
let oddArr = filter(num => num % 2 !== 0)
let evenNumsGreatherThanFourArr = filter(num => num % 2 !== 0 && num > 4)




//----------------------------------------



let numsGreaterThanFive  = nums.filter(num => num > 5)