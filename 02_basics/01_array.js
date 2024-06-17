// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);
// console.log(myArr,myArr2,myHeors)

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr);

// console.log(myArr.includes(9));  // return true or false
// console.log(myArr.indexOf(3)); // return element at given index

// console.log(myArr);


const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);