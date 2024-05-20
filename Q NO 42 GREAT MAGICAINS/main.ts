//Define a function to show magicains names.
function show_magicains(magicain:string[]){
    magicain.forEach(name=>console.log(name))
}
//Function to make magicains great through.map() it will modify array.
function make_great(magicain:string[]){
    return magicain.map(name=>`The Great ${name}.`)
}
//Define an array of magicains names.
let magicain_names=["Harray Poter", "Hmaza","Usman"]
//Call make great function to modify magicain names.
let great_magicain=make_great(magicain_names)
//Call show magicains that show modified list of magicains.
show_magicains(great_magicain)