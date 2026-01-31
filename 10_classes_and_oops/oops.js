// Object literals

const user = {
    username: 'kunal',
    loginCount: 8,
    signIn: true,            // this function is object literal

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);   //context detail deta hain
        
        
    }

}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);   // in global context it gives us empty paranthesis


// learning constructor

// const promiseOne = new Promise()  // new keyword-> naya context banane kai liye hota hain

// const date = new Date()


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;


    return this;   //by default hota hain return
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("chaiaurCode", 11, false)

// console.log(userOne.isLoggedIn);
// console.log(userOne);
// console.log(userTwo);

//when we use a new keywords its create a empty object which we called instances
//new keyword call the constructor function
//this keyword can be injected in object



//in this code we talk about constructor
// greetings
function Viral(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this;
    
}

const user1 = new Viral('shivam', 12, true);

console.log(user1.constructor);









