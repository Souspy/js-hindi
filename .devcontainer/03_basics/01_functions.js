
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

console.log(loginUsermessage("Ajay"))  // if we doesnt give any value it will automaticaly show undefined


