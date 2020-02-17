

// why we need constructor ?


/*
    
how to create object ?

    2 steps :
        step-1 : dynamicall allocate memory             ==> 'new' keyword
        step-2 : initialize that memory with data/info  ==> 'constructor'
        
    var ref=new Constructor()
*/
class Employee {
    constructor(id, name, age) {
        this.id = id
        this.name = name
        this.age = age
        console.log("Employee instance constructed..")
    }
}

var e1 = new Employee(111, "Nag", 36)
console.log(e1.id)
console.log(e1.name)
console.log(e1.age)
