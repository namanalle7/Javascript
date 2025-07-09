const accountId = 12345
let accountEmail = "naman@google.com"
var accountPassword = 67890
accountCity = "Jaipur"
let accountState;

// accountId = 2  not allowed
accountEmail = "alle@google.com"
accountPassword = 88888
accountCity = "Mumbai"

console.table([accountEmail,accountId,accountPassword,accountCity, accountState]);

/* 
Prefer not to use var because of issues in block and functional scope
*/ 
