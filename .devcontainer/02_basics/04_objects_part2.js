//const tinderUser=new Object()  // this is a singleton object.
const tinderUser={} // we can decleare in any of two ways.. this is non singleton object.
tinderUser.id="123abc"
tinderUser.name="Smith"
tinderUser.isLoggedIn=false
//console.log(tinderUser)

const regularUser={
    email:"Smith@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ro",
            lastname:"Ko"
        }
    }
}
console.log(regularUser)
console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",2:"e"}
const obj2={3:"i",4:"o"}
const obj4={5:"u"}

//const obj3={obj1,obj2} // it will give array wala poblem to or k method dhundna padega
//const obj3=Object.assign({},obj1,obj2,obj4) // first {} act as target and rest are source..
const obj3={...obj1,...obj2,...obj4}
console.log(obj3)


const users=[
    {
        id:1,
        email:"abc"
    },
    {
        id:2,
        email:"bcd"
    }
]  // this type used when data came from database

console.log(users[1].email)
console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))  // convert every key values into array format..

console.log(tinderUser.hasOwnProperty('isLoggedin'))  // we can ask if this property is there or not...