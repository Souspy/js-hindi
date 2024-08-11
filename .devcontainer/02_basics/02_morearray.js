const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","Batman"]
//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes)
//console.log(marvel_heroes[3][1])
//all_heoes=marvel_heroes.concat(dc_heroes) //this will add two array and make a new one.
//console.log(all_heoes)

const all_new_heroes=[...marvel_heroes, ...dc_heroes] // It will work as like as concat method, will work as spread of glass
console.log(all_new_heroes)
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity) // It will give flat array till the maximum depth present irrespective of ourself give how much depth
console.log(real_another_array)

console.log(Array.isArray("Sou"))
console.log(Array.from("Souspy")) // convert anything into array
console.log(Array.from({name:"Souspy"})) // it will give empty because we dont specify anything

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)) // convert datatype into array