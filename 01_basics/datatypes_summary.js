// Primitive datatypes

//7 types => String, Boolean, Number, Null, Undefined, Symbol, BigInt

const score = 33
const scorevalue = 33.3

const isLoggedIn = false
const outsidetemp = null
let useremail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 88997876786673445556n

//Referencec(Non Primitive)

//Arrays, Objects, Functions    // inka typeof => hamesha object hee aata hain

const heros = ["shaktiman", "nagraj", "doga"]


//objects
// let mydetails = {
//     myname : kunal,
//     myage : 20,
// }


const myFunction = function(){
    // console.log("Hello World");
    
}

// console.log(typeof myFunction)
// //




// =================================================

//stack(primitive )  or //Heap(non primitive)

let myyoutubename = "kartikgupta"
let anothername = myyoutubename

anothername = "chaiaurcode"

console.log(myyoutubename);
console.log(anothername);

let userOne = {
    email: "kartikgupta@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "kunal@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


