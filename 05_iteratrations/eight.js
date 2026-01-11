// Learning reduce keyword

const myNums = [1,2,3]


//using function

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)


//using arrow function
const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)

// console.log(myTotal);


//some example
const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "py Course",
        price: 3999
    },
    {
        itemName: "wev dev Course",
        price: 5999
    },
    {
        itemName: "data Course",
        price: 12999
    },
]

const shooping = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(shooping);



