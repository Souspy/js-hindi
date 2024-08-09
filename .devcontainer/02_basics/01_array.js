const myArr=[0, 1, 2, 3, 4, 5]
const heroes=["Batman","Shaktiman","flash"]
const myArr2=(1,2,3,4,5)
//console.log(myArr[3])

//myArr.push(6) // push at the end
//console.log(myArr)
//myArr.pop() // pop the last element

//myArr.unshift(9) // shift all the element at right ans add 9 at 0 th pos..
//myArr.shift() // just remove the first element and shift entire array to left

//console.log(myArr.includes(9)) // result in boolean type true or false
//console.log(myArr.indexOf(8))  // if not present then give -1 o/p.

// const newArr=myArr.join() 
// console.log(myArr)
// console.log(newArr)
// console.log(typeof(newArr))

// slice and splice
console.log("A", myArr)
const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B", myArr)

const myn2=myArr.splice(1,3) // splice manipulate original array and take last element into the array but slice does'nt change the original array.
console.log(myn2)
console.log("C",myArr)