//Making a variables.
let banana="banana"
let banana2="banana"
//STEPS 01:Test for equality and inequality with strings.
//equality.
console.log("Is banana is equal to banana2?");
console.log(banana==banana2);
//Inequality.
console.log("\nIs banana is not equal to banana2?");
console.log(banana!=banana2);
//Making a variable2.
let upperCase="APPLE";
//STEPS 02:Tests using lowercase function.
//Equality.
console.log("\nIs apple is equal to apple after converting to lowercase?");
console.log(upperCase.toLowerCase()=="apple");
//Inequality.
console.log("\nIs apple is not equal to apple after converting to lowercase?");
console.log(upperCase.toLowerCase()!="apple");
//Making a numerical variables3.
let ten=10;
let eighteen=18;
//STEPS 03:Numerical Tests.
//Equality.
console.log("\nIs ten is not equal to eighteen?");
console.log(ten!= 18);
//Inequality.
console.log("\nIs ten is equal to eighteen?");
console.log(ten== eighteen);
//Greater than.
console.log("\nIs eighteen is greater than ten?");
console.log(18>10);
//Less than.
console.log("\nIs ten is smaller than eighteen?");
console.log(eighteen<ten);
//Greater than equal to.
console.log("\nIs eighteen is greater than or equal to ten?");
console.log(eighteen>=ten);
//Less than equal to.
console.log("\nIs eighteen is lees than or equal to ten?");
console.log(eighteen<=ten);
//STEPS 04:Tests using "and(&)" & "or(||)" Operators.
//Using && (and) operator.
//Equality.
console.log("\nEighteen is equal to ten and Eighteen is greater than ten?");
console.log(eighteen==ten && eighteen>ten);
//In equality.
console.log("\nIs eighteen is not equal to ten and ten is less than eighteen?");
console.log(eighteen!=ten && ten < eighteen);
//Using || (or) operator.
//Equality.
console.log("\nIs eighteen is greater than ten and ten is equal to ten?");
console.log(eighteen>ten || ten ==ten);
//In equality.
console.log("\nIs eighteen is not equal to eighteen and ten is equal to eighteen?");
console.log(eighteen!=eighteen || ten ==eighteen);
//STEPS 05.Create a Array.
let fruitsName=["Apple","Banana","Grapes","Orange"];
//Test wheater an item is include in Array.
console.log("\nOrange is include in my fruit Array?");
console.log(fruitsName.includes("Banana"));
//STEPS 06.Not include.
console.log("\nGrapes is not include in my fruit Array");
console.log(fruitsName.includes("Grapes"));