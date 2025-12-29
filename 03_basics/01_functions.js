//here we learn about the functions in javascript

function myName(){
    console.log("k");
    console.log("u");
    console.log("n");
    console.log("a");
    console.log("l");
    
}

// myName()   // myName=> it is a reference  &  () => Execution

// function addTwoNumbers(number1, number2){  // number1 and number2 are the parameters in this
//     console.log(number1+number2);
    
// }
// addTwoNumbers(2, "4") 
// addTwoNumbers(2, "a")  
addTwoNumbers(2, 4)  // but in this these call arguments


function addTwoNumbers(number1, number2){  
    
    // let result = number1+number2
    // // console.log("tarun");  //yaha run ho jayega
    // return result   // in js=> return k baad kuch bhi likho vo run nhi hoga
    //like this
    // console.log("tarun");  // it does not reun
    return number1+number2
    
    
}

const result = addTwoNumbers(4, 5)
// console.log("Result: ", result);


function userLoggedIn(username){
    if(username === undefined){  //if(!username)  //isko hum aese bhi likh sakte hain
       console.log("Please enter the username");
       return
    }
     return `${username} just logged In`
}

// console.log(userLoggedIn("Priyanshu"));
console.log(userLoggedIn(""));  // just loggedin output
console.log(userLoggedIn()); // undefined just loggedin


