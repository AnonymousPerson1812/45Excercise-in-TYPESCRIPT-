//Creating a Array.
var UserNames = ["ALI", "MUFTUFA", "SUMAIR", "ADMIN", "AHMED"];
//Using foreach loop of array.
UserNames.forEach(function (oneuser) {
    if (oneuser === "ADMIN") {
        console.log("Hello ".concat(oneuser, ", would you like to see a status report?"));
    }
    else
        (console.log("Hello ".concat(oneuser, ", thank you for logging in again.")));
});
