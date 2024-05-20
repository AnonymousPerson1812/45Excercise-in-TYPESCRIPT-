//Making a Array of Countries and print its original order.
let countriestovisit:string[]=["China","Japan","Argentina","Brazil"];
console.log("Original Order:",countriestovisit);
//Print the Array in Alphabatical order without modifying the actual array list.
console.log("Alphabatical Order:",[...countriestovisit]);
//Show that the Array is still in its original order.
console.log("Still in Original Order:",countriestovisit);
//Print the Array in Reserve order without modifying the actual Array list.
console.log("Reverse Order:",[...countriestovisit].reverse());
//Show that the Array is still in its Original order.
console.log("Still in Original Order:",countriestovisit);
//We have changed the Original Array order Now.
console.log("Original Array Reversed:",countriestovisit.reverse());
//Print the Array to show that it's back to its Original order.
console.log("Back to Original Order:",countriestovisit.reverse());
//Print the Array to show that its order has been changed in Alphabatical order now.
console.log("Sorted in Alphabatical Order:",countriestovisit.sort());
//We have changed again the Original order Now in Reverse order again.
console.log("Original Array Reversed Again:",countriestovisit.reverse());