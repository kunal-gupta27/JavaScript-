// create promises 

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    //DB calls, crptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

// then ka sidha connection hain resolve kai sath
promiseOne.then(function(){
    console.log("Promise consumed");
    
})

// **************** OR ***************
// Promise Two
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

// Making Promise Three
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email:"chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);   //output-> { username: 'Chai', email: 'chai@example.com' }
    
})

//Making Fourth Promise

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Kunal", password:"1234"})
        }else{
            reject('ERROR: Something went Wrong')
        }
    }, 1000)
})


//callback hell kaise avoid kiya jaata -> discussing here
// const username = promiseFour.then((user)=>{
//     console.log(user);
//     return user.username    //data nikalne kai liye aesa kkaam nhi kr sakte hain
    
// })

// console.log(username);


promiseFour.then((user)=>{
    console.log(user);
    return user.username    
    
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() => {
    console.log("the promise is either resolved or promised");
    
})

//Making promise five

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true  //false pr error show nhi karega
        if(!error){
            resolve({username:"javascripts", password:"1234"})
        }else{
            reject('ERROR: js went Wrong')
        }
    }, 1000)
});

// promiseFive.then()   //isme main isko kisi aur tareke sai kr rha hu

//async kai sath humko try catch use krna hota hain
async function consumePromiseFive(){
    // const response = await promiseFive
    // console.log(response);
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromiseFive()


//*********************************** */

// async function getAllUsers(){
    
//     try {
//         const response = await fetch('https://api.github.com/users/kunal-gupta27')
//         // console.log(response);
        
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()


fetch('https://api.github.com/users/kunal-gupta27')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})

.catch((error) => console.log(error));








