// let a = 10;
// const b = 20;
// var c = 30;
let a = 300;     // bahar vaaala global scope hain

if(true){
    let a = 10;
    const b = 20;     // if kain andhr vaala block scope hain
    var c = 30;      
}
// console.log(a);
// // console.log(b);
// console.log(c);

//Nested Scope

function one(){
    const username = "tarun"
    function two(){
        const website = "youtube"
        console.log(username);
     }
    //  console.log(website);  //it gives you a eror yai jo hain block scope kai andr hain

     two()
}

one()

if(true){
    const username="tarun"
    if(username=="tarun"){
        const website=" youtube"
        // console.log(username+website);
        
    }
    // console.log(website);  //yai block scope kai chakkr main error dega
    
}
// console.log(username);  //yai bhi block scope kai chakkr main error dega

//*************************** Interesting ********************************* */

console.log(addone(5))
function addone(num){
    return num+1              ///function can be written like this
}
// addone(5)


console.log(addTwo())
const addTwo = function(num){   //declaration kai sath variable sai hold karaya hain
     return num+2       
}
// addTwo()     //variable hold kr rakha isliye error dega