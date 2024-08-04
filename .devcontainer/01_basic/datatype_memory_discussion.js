//Js is dynamically type.

//Primitive datatype- 7 types:> String, Number, Bolean, Null, undefined, Symbol, BigInt

// Let's Try some number value
const score=100;
const scorevalue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;  // automatically gives undefined value

// Let's try some symbol....
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id);
console.log(anotherId);
console.log(id===anotherId);

// Reference type(Non premitive datatypes):> Array, Objects, Function. The return of non primitive dtatypes are genarally function and return of function is object function.

// arayss...
const heroes=["Batman","Iron Man","Deadpoll"];

// Objects.....
let myobj={
    name: "Devil",
    age: 22,
}

//Function....
const myFunction= function(){
    console.log("Hello World")
}
console.log(typeof(myFunction))


///..........MEMORY...........
//Stack(Primitive),  Heap(Non Primitive)
let myYoutube= "Souspy"
let anotherName= myYoutube
anotherName="Devil"
console.log(anotherName)
console.log(myYoutube)

let userone={
    email: "devil@gmail.com",
    upi:"User@ybl"
}
let usertwo=userone // it will get reference from direct one not copy form
usertwo.email="Sou.com"
console.log(userone.email)
console.log(usertwo.email)
