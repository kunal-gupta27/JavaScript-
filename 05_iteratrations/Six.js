// const coding=["js","ruby","java","py","cpp"]

// const values = coding.forEach((item)=> {
//     // console.log(item);
    
<<<<<<< HEAD
})
console.log(values);   //foreach loopvalue ko return nhi krta
=======
// })
// console.log(values);   //foreach loopvalue ko return nhi krta


const myNums = [1,2,3,4,5,6,7,8,9,10]

// filter operation  basics of filter
// const newNums = myNums.filter((num) => num > 5 )
// console.log(newNums);


// const newNums = myNums.filter((num) => {
//     return num > 4    //Scope kai andr condition dai rhe ho too return keyword use krna hoga
// } )
// console.log(newNums);

// const newNums = []
// myNums.forEach( (num) => {
//     if (num>4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books =[
    { tittle: 'Book One', genre: 'Fiction', publish: 1981,
        edition: 2004},
    { tittle: 'Book two', genre: 'Fiction', publish: 1981,
        edition: 2014},
    { tittle: 'Book three', genre: 'Math', publish: 1982,
        edition: 2044},
    { tittle: 'Book four', genre: 'History', publish: 1981,
        edition: 2004},
    { tittle: 'Book five', genre: 'Fiction', publish: 1981,
        edition: 2004},
    { tittle: 'Book six', genre: 'Fiction', publish: 1945,
        edition: 2074},
    { tittle: 'Book seven', genre: 'Fiction', publish: 2015,
        edition: 2004},
    { tittle: 'Book eight', genre: 'Fiction', publish: 1981,
        edition: 2004},
    { tittle: 'Book nine', genre: 'History', publish: 2002,
        edition: 2004},
    { tittle: 'Book ten', genre: 'Math', publish: 2005,
        edition: 2014},
    ];

// let userBooks = books.filter( (bk) => bk.genre === 'History' )

// console.log(userBooks);

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'
} )

console.log(userBooks);
    

>>>>>>> 6a9acdbcae2d979c0d8bfd66f3efc174ab598bfd


