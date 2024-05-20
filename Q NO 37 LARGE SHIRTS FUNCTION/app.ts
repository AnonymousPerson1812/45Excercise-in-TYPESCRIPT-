//Making a Function.
function make_shirt(size:string="Large",print_message:string="I love TypeScript"){
    console.log(`Creating a ${size} shirt with the ${print_message} print on shirt.`)
}
//Calling a function with by default values.
make_shirt()
//Calling a function now with medium size and default values.
make_shirt("Medium")
//Calling a function now with small and also different print message.
make_shirt("Small","I LOVE JAVASCRIPT")