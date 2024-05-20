let GuestsList=["Anoosha","Basil","Iqra","Fatima"];
let dontcome=GuestsList[0];
console.log(dontcome,"nhi ahh sakti");
GuestsList.splice(0,1,"Barira");
GuestsList.forEach(guest => console.log(`Hello ${guest} ,would you like to dinner with me?`));

