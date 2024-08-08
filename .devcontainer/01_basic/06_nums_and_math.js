// const score=600
// console.log(score)
// console.log(typeof(score))

const balance=new Number(200.5656646465) // It will define new object of number type
// console.log(balance)
// console.log(typeof(balance))

//console.log(balance.toString().length); // It will convert the numer to string where we can use string methods.
//console.log(balance.toFixed(2))   // Take upto n decimal place
//console.log(balance.toPrecision(4)) // By using precision we need precise value upto n digit in there if round off is required that also will be present.

const another=1000000
//console.log(another.toLocaleString()); // it will give us representation of zeros
//console.log(another.toLocaleString('en-IN'));  // It will give in india format

// ++++++++++++++++++ Maths +++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
//console.log(Math.ceil(4.1)); // It will always takes the higher value if slight more thannthat number.
//console.log(Math.floor(4.6)); // It will always take the less value 
console.log(Math.min(2,6,5,3)); 
console.log(Math.max(2,4,5,6,7));
console.log(Math.random())  // Value will be between 0 and 1
console.log((Math.random()*10)+1);
const min=10
const max=20
console.log(Math.floor((Math.floorrandom()*(max-min+1))+min))