var Personal_Name = "Kamran Tessori";
console.log(Personal_Name.toLowerCase());
console.log(Personal_Name.toUpperCase());
console.log(Personal_Name.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
