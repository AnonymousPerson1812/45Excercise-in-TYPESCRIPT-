//Define a function with a rest parameter that accept items arguments representing our sandwitch.
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a sandwich with the following items.\n");
    items.forEach(function (singleitem) { return console.log("-" + singleitem); });
    //Print the message.
    console.log("\n Now enjoy sandwich\n");
}
//Call the function 3lines with 3different numbers od arguments.
make_sandwich("Chiken", "Cheese", "Mayo", "Egg");
make_sandwich("Bread", "Butter");
make_sandwich("Bread", "Butter", "Lectus", "Chiken", "Cheese", "Mayo", "Egg");
