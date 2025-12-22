const name = "kunal"
const numvalue = 50

// console.log(name + numvalue + " value");   // it is not a good format too write the code

//SO we use here string interpolation
console.log(`Hello my name is ${name} and my repo count ${numvalue}`);

//String declaration

const gamename = new String('super-game-natural')

console.log(gamename[0]);  //accessing the element

console.log(gamename.__proto__); // all details abouts the string

console.log(gamename.length);  // give string length

console.log(gamename.toUpperCase());  // make all the character in capital

console.log(gamename.charAt(2)); // which position whos character

console.log(gamename.indexOf('p')); // give the position of character

const newString = gamename.substring(0, 4)  //we can not put negative value also
console.log(newString);

const anotherString = gamename.slice(-8, 4) //we can put negative value in slice
console.log(anotherString);

const newStringOne = "   kunal   "

console.log(newStringOne)
console.log(newStringOne.trim())  // trim work to remove empty spaces in string

const url = "https://vandan//gupta20gmail.com"

console.log(url.replace('20', '-'))

console.log(url.includes('gupta'))


//string convert to array using split function in js

console.log(gamename.split())

