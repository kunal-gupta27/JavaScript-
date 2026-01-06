const userEmail = []

if(userEmail){
    console.log("got user email")
}else {
    console.log("Dont have user email");
    
}

//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, Nan(Not a number)


//truthy values

//true, "0"->this is also truthy, 'false', " ", [], {}, function(){}->also truthy //empty function


if (userEmail.length ===  0) {
    console.log("Array is empty");
    
}

const emptyObj = {}

if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty");
    
}

//Operator->  Nullish Coalescing Operator (??): null undefined pr hee baat hungi

let val1;
// val1=5?? 10
// val1 = null ?? 10   val-> 10
// val1 = undefined ?? 15  // val-> 15

val1 = null ?? 10 ?? 15  // ?? iske bd hamesha first value assign hoti hain



console.log(val1);


//ternary operator

condition? true : false

const iceTeaPrice = 100

iceTeaPrice<=80? console.log("less than 80") : console.log("more than 80");

