//Define a function with a rest parameter that accept items arguments representing our sandwitch.
function make_sandwich(...items:string[]){
    console.log("\n Making a sandwich with the following items.\n")
    items.forEach(singleitem=>console.log("-"+singleitem))
    //Print the message.
    console.log("\n Now enjoy sandwich.\n")
}
//Call the function 3lines with 3different numbers od arguments.
make_sandwich("Chiken","Cheese","Mayo","Egg")
make_sandwich("Bread","Butter")
make_sandwich("Bread","Butter","Lectus","Chiken","Cheese","Mayo","Egg")