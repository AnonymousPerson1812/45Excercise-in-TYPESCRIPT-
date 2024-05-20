//Creating a great list Array.
var guestlist = ["Arham", "Iqra", "Bilal", "Muntaha"];
//Making varaible for those guest who can't come.
var dontcome = guestlist[0];
//Print the name of guest who can't come.
console.log(dontcome, "nahi ahh sakty hn");
//Add or Remove Values from guest list Array.
guestlist.splice(0, 1, "Kamran");
//Message print for bigger table.
console.log("Good News!We have found a bigger table for dinner");
//Adding a new guest at starting index of Array.
guestlist.unshift("Sumair");
//Adding a new guest at ending index of Array.
guestlist.push("zain");
//Adding a new guest at middle index of Array.
var middleindex = (guestlist.length / 2);
//Get a middle index of our guest list Array (odd number round about values ky liye e.g 2.3 ).
var middleIndex = Math.floor(guestlist.length / 2);
//Adding a new guest to middle index of Array.
guestlist.splice(middleIndex, 0, "rani");
//Print message of updated list.
console.log("Updated list of our guests");
//Sending a invitation message to our guest one by one with their names.
guestlist.forEach(function (oneguest) { return console.log("Hello ".concat(oneguest, ", would you like to dinner with me.")); });
//Inform the only 2 guests can be invite for dinner.
console.log("Unfortunatly , the new dinner table won't arrive on time , so i can only invite two guest t dinner with me.");
// Using While loop to remove guest from the array until only to names remain.
while (guestlist.length > 2) {
    var removeguest = guestlist.pop();
    console.log("Sorry ".concat(removeguest, ", I can't invite you to dinner"));
}
;
//Printing a invitation to the last two guests on the list.
console.log("Invitation last two guests");
//
guestlist.forEach(function (lasttwo) { return console.log("Luckily ".concat(lasttwo, " , you are still invited to dinner")); });
//Removing last two guests from the list.
guestlist.pop();
guestlist.pop();
//Print Empthy List.
console.log("Empthy List:", guestlist);
