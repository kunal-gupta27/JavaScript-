// const tinderUser = new Object()   //this is singleton obj.

const tinderUser = {}  // non singleton hain yai

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);


//Object ko hum nested bna sakte hain in js
const regularUser = {
    email: "tarun@gmail.com",
    fullname: {                              
        userfullname: {
            firstname: "Kunal",
            lastname: "Gupta"
        }
    }  
}

//Object ko access bhi kr sakte hain
console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//assign in one obj
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}  //latex use 

console.log(obj4);


//Array kai andar object kitne bhi ho sakte hain

const users = [
    {
        id: 1,
        email: "k@gmail.com"
    },
     {
        id: 1,
        email: "k@gmail.com"
    },
     {
        id: 1,
        email: "k@gmail.com"
    },
     {
        id: 1,
        email: "k@gmail.com"
    },

]

users[1].email

console.log(tinderUser)

console.log(Object.keys(tinderUser));    //object ko array mai lekr aa jata hahin  or // yai only key print karega
console.log(Object.values(tinderUser));  // yai key ki value print karega

console.log(Object.entries(tinderUser));   // entries => array kai andar array banega

console.log(tinderUser.hasOwnProperty('isLogged'));  // gives boolean answer




