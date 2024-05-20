//Creating a Array current users.
let currentusersName=["MUNTAHA","SUMAIR","SUMBUL","FAIZAN","ABDULLAH"];
//Creating a Array New users.
let newusersName=["areeba","rabia","sumbul","ali","abdullah"];
//Loop through new users to check for usernames ability.
newusersName.forEach(new_one_user =>{
//Making a condition for username already exist and have in our condition variable.
let ourcondition=currentusersName.some(current_one_user=>current_one_user.toLowerCase() === new_one_user.toLowerCase());
//Print different messages using if else statement.
if(ourcondition){
    console.log(`Sorry ${new_one_user} is already taken!`);
}
else{
    console.log(`This username ${new_one_user} is avaliable.`)
}
})