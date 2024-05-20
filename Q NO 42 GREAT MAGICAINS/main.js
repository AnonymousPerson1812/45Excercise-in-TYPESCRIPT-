//Define a function to show magicains names.
function show_magicains(magicain) {
    magicain.forEach(function (name) { return console.log(name); });
}
//Function to make magicains great through.map() it will modify array.
function make_great(magicain) {
    return magicain.map(function (name) { return "The Great ".concat(name); });
}
//Define an array of magicains names.
var magicain_names = ["Harray Poter", "Hmaza", "Usman"];
//Call make great function to modify magicain names.
var great_magicain = make_great(magicain_names);
//Call show magicains that show modified list of magicains.
show_magicains(great_magicain);
