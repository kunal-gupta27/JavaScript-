// for of loop

//Array apecific loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello World"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

// Maps has unique val

const  map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);  //maps jo hain unique value kai liye jaane jaate hain
// means-> koi bhi duplicates value nhi hogi
//jis order main humne element ko enter kiya vo vaise he raheti hain


for (const [key, value] of map) {
    console.log(key, ':-', value);    
}

// in object 

const myObj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);    // here myObj variable is not iterable
// }





