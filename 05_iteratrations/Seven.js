//Using map function

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map((num) => num + 10 )

// jab hum scope open kr rhe hain tab humko return krna hain
// const newNums = myNumbers.map((num) => { return num + 10})
// console.log(newNums);


//how work Chaining

const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num +1)   //map mai condition lga sakte hai
                .filter((num) => num >= 40)   //value ko filter krna

console.log(newNums);


                


