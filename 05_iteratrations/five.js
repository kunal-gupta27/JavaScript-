//for each loop

const coding=["js","ruby","java","py","cpp"]

// coding.forEach(function (item){   //for each bol rha hain callback function do means function ka name nhi hoga
//    console.log(item);
// })



//using Arrow function

coding.forEach((val)=>{
    // console.log(val);
    
})

//function kai sath bhi hum, kr sakte hain
// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})