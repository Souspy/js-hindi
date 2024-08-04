let name="Lucifer"
repocount=59
console.log(`Hello my name is ${name} and my repo count is ${repocount}`)
const gameName=new String('Hilarious-oc-in')
console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('s')); //Go through string methods in js mdn

const newString=gameName.substring(1,4); // Yaha pe negative value nhi chalta babua uske lie slice lagana parega..
console.log(newString)

const anotherString=gameName.slice(-7,4)
console.log(anotherString)

const newStringone="    Sou   "
console.log(newStringone)
console.log(newStringone.trim())  // It simply remove starting and ending spaces.
console.log(newStringone.trimStart()) // for removing strating paces..
console.log(newStringone.trimEnd()); // for removing end spaces..

const url="https://Souspy.com/sou%20Mondal"
console.log(url.replace('%20','-'))

console.log(url.includes('spp'))

console.log(gameName.split('-')) //split bases on - ... divided into 3 array
