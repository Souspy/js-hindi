
function sayMyName(){
    console.log("S")
    console.log("O")
    console.log("U")
    console.log("M")
    console.log("E")
    console.log("N")
}
//sayMyName // it is just reference but not giving any output for grtting output we must give () after the function name.
//sayMyName() // jab paranthesis() laga dia function ke defination ke baad matlab ye ab uran bharneke lie tayar hai. ye hai iska reference..

// function addTwoNumber(num1,num2){
//     console.log(num1+num2)
// }
function addTwoNumber(num1,num2){
    //let result=(num1+num2)
    //return result
    return num1+num2;
    console.log("Underdog") // after return any line will not be executed.
}
//addTwoNumber(3,"4") // js take both as string if we give one as string
const result=addTwoNumber(3,7)
//console.log("Result:" , result)

function loginUsermessage(username="Sam"){
    if(!username){
        console.log("Please enter a username")
        return ;
    }
    return `${username} just logged in`  //using dolar sign we can write variable name
}

//console.log(loginUsermessage("Ajay"))  // if we doesnt give any value it will automaticaly show undefined


function calculateCartPrice(val1,val2,...num1){  // ... rest operator >> means takes all the numbers and move theminto an array..
    return num1
}
//console.log(calculateCartPrice(200,400,500,2000,5000,6000)) // first two value goes into val1 and val2 rest goes to num1 array

const user={
    username: 'Som',
    price:299
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObject(user)  // it is not necessary to pass function after making it differently.. we can create it laterwords..
handleObject({
    username: "Vesak",
    price:399
})

const myNewArray=[200,100,400,500]
function returnsecondvalue(getArray){
    return getArray[1]
}
console.log(returnsecondvalue(myNewArray))