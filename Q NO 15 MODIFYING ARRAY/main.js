var GuestsList = ["Anoosha", "Basil", "Iqra", "Fatima"];
var dontcome = GuestsList[0];
console.log(dontcome, "nhi ahh sakti");
GuestsList.splice(3, 3, "Barira");
GuestsList.forEach(function (guest) { return console.log("Hello ".concat(guest, " ,would you like to dinner with me?")); });
