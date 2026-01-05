// if

// const isUserLoggedIn = true;
// const temperatur = 41;

// if(temperatur===41){  // condition-> true
//     console.log("less than 50");
    
// }else{
//     console.log("temperature is greater than 50");
// }

// console.log("temperature is greater than 50");

// const score = 200;

// if(score>100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
    
// }

//  console.log(`user power: ${power}`);  //isko yaha nhi likhna yai error dega  for not defined the elemrnt

// const balance = 1000
// if (balance>500) console.log("test");  // we can write like this //method-> implicit method

// if (balance>500) console.log("test"), console.log("test2");  // it is the bad method to write like that

// if (balance<500) {
//     console.log("less than 500");
    
// } else if(balance<750){
//     console.log("less than 750");
    
// } else if(balance<900){
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");
    
// } 

const userLoggedIn = true
const debitCard = true;
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("allow to buy courses");
    
}
if (LoggedInFromGoogle || LoggedInFromEmail) {
    console.log("user logged in");
    
}

