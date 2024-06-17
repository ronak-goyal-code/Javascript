const accountId = 13445
let accountEmail = "ronak@gmail.com"
var accountPassword = "123345"
accountCity = "Jaipur"
let accountState;

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

//accountId = 78 // Not allowed

accountEmail = "goyal@gmail.com"
accountPassword = "134"
accountCity = "Delhi"

console.table([accountId,accountEmail,accountPassword,accountCity])

console.log(accountId);
console.log(accountEmail);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// no need of semi colon it depends on you.