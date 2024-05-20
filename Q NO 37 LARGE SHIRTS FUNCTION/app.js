//Making a Function.
function make_shirt(size, print_message) {
    if (size === void 0) { size = "Large"; }
    if (print_message === void 0) { print_message = "I love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(print_message, " print on shirt."));
}
//Calling a function with by default values.
make_shirt();
//Calling a function now with medium size and default values.
make_shirt("Medium");
//Calling a function now with small and also different print message.
make_shirt("Small", "I LOVE JAVASCRIPT");
