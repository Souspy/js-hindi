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

function chai(){
    console.log(this)
}
chai()