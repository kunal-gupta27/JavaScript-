// Array

//declaration
const myarr = [1,2,3,4,5]    // element can be different in same array
//like 
// const myarr = [1,2,3,"kunal",true]

const myHero = ["thor","hulk","shaktiman"]

const myArr2 = new Array(1,2,3,4)
 // shift method => unshift vaala element delete krne kai liye or first element 

console.log(myarr.includes(8))  // gives boolean answer
console.log(myarr.indexOf(3));  // element ka index jannai kai liye

const newArr = myarr.join()  // join() => change arrray elem. into string
console.log(myarr);
console.log(newArr);   //it gives string element
console.log(typeof newArr);


//+++++++++ Slice or splice Methods ++++++++++

console.log("A ",myarr);
const myn1 = myarr.slice(1,3)
console.log(myn1);


console.log("B ",myarr);
const myn2 = myarr.splice(1,3)

console.log("C ",myarr);

console.log(myn2);










