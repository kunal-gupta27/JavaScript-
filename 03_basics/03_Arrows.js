const user = {
    username: "tarun",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);   //this keyword cuurent context ko refer krta hain
        // console.log(this);                       // yai humko name kaisath sath context bhi print karega
        
        
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);    //global scope main koi bhi context nhi hain

function one(){
    let username = "tarun"
    console.log(this.username);    //this keyword function main kaam nhi krte only work in object
    
}
one()


const one = function(){
    let username = "tarun"
    console.log(this.username);    // Yaha bhi same print hoga uper vaale function ki tarh
}
one()

// using Arrows function

const one = () => {     // here we create function using arrow
    let username="tadung"
    console.log(this);
    
}
one()

const addTwo = (num1, num2) => {
    return num1 + num2       //but in eplicit mai return likhna hota hain
// }   
console.log(addTwo(3,4))
//curly braces use kr rhe hain too humko return krna padega

const addTwo = (num1, num2) => num1 + num2     // here we use implicite return  //implicit means=> we don not required to write return
console.log(addTwo(4,3));


// this technique use in React.js
// const addTwo = (num1, num2) => (num1 + num2)    // isko aese bhi likh sakte hain

const addTwoo = (num1, num2) => ({username:"tarun"})  // object ko aese likha jata hain implicite main
console.log(addTwoo(3, 4));


