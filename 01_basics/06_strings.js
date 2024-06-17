const name = "Ronak"
const repoCount = 5

//console.log(name + repoCount + " value") // not a good practice.

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('gamer');

//console.log(typeof gameName); // object

console.log(gameName[2]);
console.log(gameName)

console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));


const another = gameName.slice(1,3);
console.log(another);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-')); // return an array