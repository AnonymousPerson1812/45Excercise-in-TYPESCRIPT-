//Define a function to creat a car object with optional options.
function creat_car(manufacturer, model) {
    var Options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        Options[_i - 2] = arguments[_i];
    }
    //Inilize a car object with manufacturer and model.
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    //Add additional options to the car object.
    Options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
;
//Call the function to creat a car object.
var my_car = creat_car("Toyota", "Corrolla", "color:Black", "Sunroof:True", "Year:2024");
//Print the varaible to ensure all the information is stored correctly in the car object.
console.log(my_car);
