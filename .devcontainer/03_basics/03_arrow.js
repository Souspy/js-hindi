// Most global object inside browser is window object so we can capture all window events like  form submit,click...
const user={
    username:"Papay",
    price:999,
    welcomemessage: function(){
        console.log(`${this.username},welcome to website`) // 'this' makes current context.
        console.log(this)
    }
}
// user.welcomemessage()
// user.username="Sou" //value change because we don't use hard context we use current context.
// user.welcomemessage()
//console.log(this)  // As there have no global context it gives empty o/p

// function chai(){
//     console.log(this.username)  //not defined because it works in the objects we can't use inside a function.
// }
// chai()

//********* Arrow Function******* */

const chai= () => {  //just use arrow in place of function keyword
    let username="lyla"
   // console.log(this)
}
chai()

//  Basic Arrow Function(explicit return)

const addTwo= (num1,num2) =>{
    return num1+num2
}
console.log(addTwo(3,4))

// Implicit return...........

const addThree=(num1,num2,num3) => (num1+num2+num3) // if we wrap inside {} then we must write return keyword and if we wrap inside () we don't have to write return keyword
console.log(addThree(1,2,3))

