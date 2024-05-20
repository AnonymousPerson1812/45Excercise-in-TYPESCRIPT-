//Define a function a print each magicain name from an array.
function show_magicains(magicain) {
    magicain.forEach(function (name) { return console.log(name); });
}
//Define an array containing magicians name.
var magicain_names = ["Harry poter", "Hamza", "Usman"];
//Call the function to print each megicain name.
show_magicains(magicain_names);
