const score=600
console.log(score)
console.log(typeof(score))

const balance=new Number(200.5656646465) // It will define new object of number type
console.log(balance)
console.log(typeof(balance))

console.log(balance.toString().length); // It will convert the numer to string where we can use string methods.
console.log(balance.toFixed(2))   // Take upto n decimal place
console.log(balance.toPrecision(4)) // By using precision we need precise value upto n digit in there if round off is required that also will be present.

const another=1000000
console.log(another.toLocaleString()); // it will give us representation of zeros
console.log(another.toLocaleString('en-IN'));  // It will give in india format

// ++++++++++++++++++ Maths +++++++++++++++++++++
