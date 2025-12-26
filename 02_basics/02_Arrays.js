const marvel_heros = ["thor","hulk","Ironman"]
const dc_heros = ["flash","superman","batman"]

// marvel_heros.push(dc_heros) // yain jo behave karega add krdeta dc heroes ek element ki tarha in marvel heros
// push jo hain vo eisting array pr he push krta hain

// console.log(marvel_heros); 
// console.log(marvel_heros[3][0]);  // it is not a best method to write the code 

// const all_heros = marvel_heros.concat(dc_heros)   // concat jo hain return krta hain new array
// console.log(all_heros);

//++++++ Most efficient +++++++

//Spread operator using
// const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

// ****** Rarely Situation ************

const another_array = [1, 2, 3, [4, 5, 6], 7, 8, [9, 1, 2, [3, 4]]]

const real_another_array = another_array.flat(Infinity)  //using flat for subarray ko ek hee array mai lana
console.log(real_another_array);

console.log(Array.isArray("Priyanshu"));  // boolean answer 

console.log(Array.from("Priyanshu")) // converting this into array 


console.log(Array.from({namme : "tarun"}))  // interesting thing mostly use 
// array ko kisi key sai hee element ko inoitialize krna hian



// new method too intialize the array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

//isArray , from,  of    =>  more study about








