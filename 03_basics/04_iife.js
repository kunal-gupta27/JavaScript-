//Immediately Invoked Function Expression

(function chai(){
    //named iife hain
    console.log(`DB CONNECTED`);   
    
})();
// chai()

// ()=> isme pahle hum apna function likh rhe hain
// ()=>Execute kr rhe hain

//Global Scope kai pollution sain problem hoti hain kayi baar jo bhi global scope main variable or any function ko hatane kai liye iife ka use krte hain

((name)=>{
    //Simple iife hian
    console.log(`BD CONNECTED TWO ${name}`)
})('Kunal')