

let products = [
    { id: 1, name: 'item-1', price: 100.00 },
    { id: 2, name: 'item-2', price: 200.00 },
    { id: 3, name: 'item-3', price: 300.00 },
    { id: 4, name: 'item-4', price: 400.00 },
    { id: 5, name: 'item-5', price: 500.00 }
]

// mutable
// products.unshift({ id: 6, name: 'item-6', price: 600 })
// products.push({ id: 6, name: 'item-6', price: 600 })

// immutable
// let newProducts = products.concat({ id: 3, name: 'item-3', price: 300 })


// products.splice(0, 2) // mutable
// products.splice(0, 1, { id: 0, name: 'ITEM-1', price: 100 }) // mutable
// let newProducts=products.slice(0,2) // immutable


//---------------------------------------------------------
// filter

// let result = products.filter(product => product.price > 300)

//---------------------------------------------------------
// map
// let result = products.map(product => product.price - 100)
//---------------------------------------------------------

// let result = products.findIndex(product => product.price === 300)

//---------------------------------------------------------
// let p = products[3]
// let result = products.indexOf(p)
//---------------------------------------------------------


// let result = 0;
// for (let i = 0; i < products.length; i++) {
//     result += products[i].price
// }
// console.log(result)


// let result = products.reduce((total, next) => total + next.price, 0)

//---------------------------------------------------------


// let result=products.every(product => product.price >= 100)

// let result = products.some(product => product.price >= 400)

//---------------------------------------------------------


// let letters = ['A', 'B', 'C']
// let result=letters.includes('B')

//---------------------------------------------------------

// let letters = ['A', 'B', 'C']
// let str = letters.join("-")

//---------------------------------------------------------

// let letters = ['A', 'B', 'C']

//-----------------------------------------------------------





