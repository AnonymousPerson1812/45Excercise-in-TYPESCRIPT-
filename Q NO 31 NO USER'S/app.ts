//Creating a Array.
let usersNames=["MAHAD","ESHAL","MUNTAHA","ANOOSHA"];
//Remove all array from one array now our array is empty.
usersNames=[];
//If statement for checking lenght of our array is empty.
if(usersNames.length===0){
    console.log(`Your array is empty we need to find some users`);
}
else{
//Using forEach Loop of Array.
    usersNames.forEach(oneuser=>{
        if(oneuser==="MUNTAHA"){
            console.log(`Hello ${oneuser} , would you like to see a status report?`)
        }
        else{
            console.log(`Hello ${oneuser} , thank you for logging in again.`);

        }

})
}
//Remove all array from one array now our array is empty.
//usersNames=[];
