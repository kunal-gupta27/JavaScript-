// dates  
// kai liye mdn pr jana hain

let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());   //yai too method kai according dates thi
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

//but we can pass the date 

//   let mynewdate = new Date(2023,0,23,5,25,24)
// let mynewdate = new Date("2023-01-24")  //format=> yy-mm-dd
let mynewdate = new Date("01-23-2023")    //format=> mm-dd-yy
console.log(mynewdate.toLocaleString());
console.log(mynewdate.toDateString());


//++++++++++++++++++++++++++++ TimeStamp +++++++++++++++++++++++++++++++++++++++++

let mytimeStamp = Date.now()
console.log(mytimeStamp)
console.log(mynewdate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth()+1)
console.log(newDate.getFullYear())


//string interpolation means=> backtig=> `  `

newDate.toLocaleString('default',{
    weekday: "long",
    day: "numeric"
})                                      //we have write this in this method


