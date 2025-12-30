// let a = 10;
// const b = 20;
// var c = 30;
let a = 300;     // bahar vaaala global scope hain

if(true){
    let a = 10;
    const b = 20;     // if kain andhr vaala block scope hain
    var c = 30;      
}
console.log(a);
// console.log(b);
console.log(c);
