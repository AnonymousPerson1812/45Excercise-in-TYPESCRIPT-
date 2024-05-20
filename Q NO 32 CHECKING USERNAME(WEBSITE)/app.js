//Creating a Array current users.
var currentusersName = ["MUNTAHA", "SUMAIR", "SUMBUL", "FAIZAN", "ABDULLAH"];
//Creating a Array New users.
var newusersName = ["areeba", "rabia", "sumbul", "ali", "abdullah"];
//Loop through new users to check for usernames ability.
newusersName.forEach(function (new_one_user) {
    //Making a condition for username already exist and have in our condition variable.
    var ourcondition = currentusersName.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //Print different messages using if else statement.
    if (ourcondition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is avaliable"));
    }
});
