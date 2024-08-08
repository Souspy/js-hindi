let myDate=new Date();
//console.log(myDate); // this will give a format which is nearly impossible to undestand so we have to convert it into readable format.
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof(myDate))

let myCreatedDateformat=new Date(2024, 6, 4) // Month start from 0 to 11..
//console.log(myCreatedDateformat.toDateString())
//console.log(myCreatedDateformat.toLocaleString())
let anotherDatteFormat= new Date("04-01-24")
console.log(anotherDatteFormat.toLocaleString())

let myTimeStamp= Date.now()
//console.log(myTimeStamp) // Ye timestamp hum poll create karneke time use karenge jab hhumko prize dena padega ki kaun sabse aage submit kiya...
//console.log(myCreatedDateformat.getTime())

console.log(Date.now()); // It will give present time in milisecond
console.log(Math.Date.now()/1000)  // To avoid decimal we use math.floor
