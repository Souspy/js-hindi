//singleton
//Object.create

//oject literals ...>declear a object
const mySym=Symbol("Key1")

const Jsuser={
    name: "Supu",
    "full-name":"Supu Mondal",
    [mySym]:"myKey1",  // It will not give erroe but symbol here not properly used as symbol that's why we have  to tke symbol differently.
    age: 22,
    email: "supu@123",
    city:"Bolpur",
    isLoggedin: false,
    lastLoggedinDays: ["Monday","Thrusday"]
}
//Methods to console object values
// console.log(Jsuser.email)  
// console.log(Jsuser["email"]) //most of the time we access using dot but sometime there have no option and we have to access by third bracket
// console.log(Jsuser["full-name"]) // it cant be accessed using dot...
// console.log(Jsuser[mySym])

Jsuser.email="Souspyy@234" // overwrite a value
//Object.freeze(Jsuser) // It will freeze all the values and can't be changed.
console.log(Jsuser)

Jsuser.greetings=function(){
    console.log("Helllo Js Users")
}
console.log(Jsuser.greetings())

Jsuser.greetingstwo=function(){
    console.log(`Helllo Js Users, ${this.name}`)
}
console.log(Jsuser.greetingstwo())
