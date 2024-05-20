//Creating a Array.
let numbers=[1,2,3,4,5,6,7,8,9,10];
//Using for.Loop.
for(let onenumber of numbers)
    {
    let ordinalending :string
    if(onenumber === 1){
        ordinalending = "st";
    }
     else if (onenumber===2){
        ordinalending ="nd";
    }
     else if (onenumber===3){
        ordinalending = "rd";
    }
    else {
        ordinalending = "th";
    }
    
    console.log(`${onenumber}${ordinalending}`);
}