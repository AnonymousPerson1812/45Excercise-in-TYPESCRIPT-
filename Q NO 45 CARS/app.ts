//Define a function to creat a car object with optional options.
function creat_car(manufacturer,model,...Options){
//Inilize a car object with manufacturer and model.
let car={
    manufacturer:manufacturer,
    model:model,
};
//Add additional options to the car object.
Options.forEach(option=>{
    let[key,value]=option.split(":");
    car[key.trim()]=value.trim()
})
return car};


//Call the function to creat a car object.
let my_car=creat_car("Toyota","Corrolla","color:Black","Sunroof:True","Year:2024")
//Print the varaible to ensure all the information is stored correctly in the car object.
console.log(my_car)