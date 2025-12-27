//Singleton 

//Object Literals

//create Symbol

const mySym = Symbol("myKey")

const jsUser = {
    name : "Tarun",
    "Full Name": "Tarun Gupta",
    [mySym]: "myKey1",    // Symbol main hamesha square bracket ko use krte hain
    age: 20,
    email: "tarungupta@gmail.com",
    location: "Kanpur",
    isLoggedIn: false,
    lastLoggedIn: ["Monday","Saturday"]
}

// Object ki key ko access dot(.) notation sai krte hain
console.log(jsUser.email)   // yai method theek hain pr not usable most

console.log(jsUser["Full Name"]) // it is the best method to print the any obj attributess


//Important for interview basis ++++

console.log(jsUser[mySym]);  //symbol ko aese he printkarate hain   

//Object ko private or freeze kaise kare???

jsUser.email = "shivamgupta@gmail.com"   //yaha too change ho gyi hain
Object.freeze(jsUser)
jsUser.email = "priyanshu@gmail.com"    // freeze kai baad update ki too change nahi ho rhi hain

console.log(jsUser);

//function

jsUser.greetings= function(){
    console.log("hello js users");
}

jsUser.greetingsTwo= function(){
    console.log(`hello js users, ${this.name}`); //Acces the object attributes using String Interpolation
}

console.log(jsUser.greetings());  //Simple one

console.log(jsUser.greetingsTwo()); 



