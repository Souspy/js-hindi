
//{}--- called as scope

//The scope that we write in the code environment is different from the console promt that we get by inspecting any google page..


var c=300
let a=100
if(true){
    let a=10; // Iside the loop you should write let/const before the variable otherwise it will treat itslef as globally.
    const b=20
    var c=30
    //console.log("Inner : ",a)
}
//console.log(a)
//console.log(b)
//console.log(c)  // var should also not come outside the block thats why we should not use var becsuse if anyone decleare something globally that might be changed because of var...
//console.log("Outer : ",a)

// *********Closure***********

// function one(){
//     const username= "Papay"
//     function two(){
//         const website="Github"
//         console.log(username)
        
//     }
    //console.log(website)
//    two()
//}
//one()

if(true){
    const username="Papay"
    if(username==="Papay"){
        const website= " Github"
        //console.log(username+website)  // only this will give o/p because it is decleared inside perfect scope.
    }
    //console.log(website)
}
//console.log(username)

//--------------interesting-----------------

addone(5)   // we can use function here before declearing in this method of function declearing
function addone(num){
    return num+1
}

//addTwo(4)  we can't use function here before declearing in this method of function declearing it will give error we have to decleare it atlast.
const addTwo=function(num){ // it is also a function but it can also called as expression.
    return num+2
}
addTwo(4)
