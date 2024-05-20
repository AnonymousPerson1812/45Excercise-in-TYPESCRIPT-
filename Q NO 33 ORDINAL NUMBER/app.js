//Creating a Array.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Using for.Loop.
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var onenumber = numbers_1[_i];
    var ordinalending = void 0;
    if (onenumber === 1) {
        ordinalending = "st";
    }
    else if (onenumber === 2) {
        ordinalending = "nd";
    }
    else if (onenumber === 3) {
        ordinalending = "rd";
    }
    else {
        ordinalending = "th";
    }
    console.log("".concat(onenumber).concat(ordinalending));
}
