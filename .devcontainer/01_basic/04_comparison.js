console.log(Number(2>4));
console.log("2">5);  // Automaticaly js convert string to number at the time of comparison

console.log(null>0);
console.log(null==0);
console.log(null>=0);
// ** The reason that an equility check == and comparisons > < >= <= work differently. Comparison convert null to a number, treating it as 0. that's why null>=0 is true and null>0 is false.

console.log(undefined==0); //avoid using null and undefined check uses. 
console.log(undefined>0);
console.log(undefined<0);

// === strict check.. It not only check the value but also check the datatype.

console.log("2"==2);
console.log("2"===2);
console.log(2=="2");
