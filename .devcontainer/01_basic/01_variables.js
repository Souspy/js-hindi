const accountId=12345;
let account_Email="abc@gmail.com"
var accountPassword="123"
accountCity="Mysore"
let accountState;

//Prefer not to use var because of block scope and functional scope problem.

console.table([accountId,accountPassword,accountState,account_Email,accountCity])