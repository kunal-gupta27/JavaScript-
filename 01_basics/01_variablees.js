const accountId = 14455   //we does not change the assign value
let accountEmail = "kunal@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2  this is not allowed in const keyword

accountEmail = "vandu@gmail.com"
accountPassword = "21212121"
accountCity = "Bengluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope & functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

