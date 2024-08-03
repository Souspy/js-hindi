// ***************  CONVERSIONS ********************
// let score="33abc"
// console.log(typeof score)

// let valueInNumber=Number(score)
// console.log(typeof(valueInNumber))  //when we have to take any value in number format just use Number().....
//console.log(typeof(score))
//console.log(valueInNumber) // it gives output as Nan(nit anumber)because abc can't be convert into number..
//console.log(score)
//"33"=>33
//"33abc"=>Nan
// true =>1; false =>0

let isLoggedIn=""
let booleanisLoggedIn=Boolean(isLoggedIn)
console.log(booleanisLoggedIn)

// 1=> true; 0 =>false
// " "=>false
// "Soum"=>true

// let somenumber=12
// let stringsome=String(somenumber)
// console.log(stringsome)
// console.log(typeof(stringsome))

// ################  OPERATIONS ################

let val=5
let negVal=-val
console.log(negVal)
console.log(3**3)

let str1="Hello"
let str2="Luci"
//let str3=str1 +str2
console.log(str1  +str2)
console.log("1"+2)
console.log("1"+"2")
console.log("1"+2+2) // if string is in first tab sabhiko string mana jayega and if string is in last then first do the given operation then do the string operation 
console.log((1+2)+"2")
console.log(+true)
console.log(+"")

let gameCounter=100
gameCounter++
console.log(gameCounter)