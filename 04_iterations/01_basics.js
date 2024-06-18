// for


for(let i=0; i<10; i++){
    if(i==5){
        // console.log("best Number");
    }
    // console.log(i);
}

// for of

const arr = [1,20,3,4,5];

for (const ele of arr) { // here ele is element of arr not index
    //console.log(ele);
}

const name = new String("ronak");

for (const ch of name) {
    //console.log(ch);
}

// map

const map = new Map();

map.set("In" , "India");
map.set("USA","America")
map.set("In" , "India");
map.set("USA","America");

//console.log(map);

for (const [key,value] of map) {
    //console.log(`${key} => ${value}`);
}

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key,value] of myObject) {
//     console.log(`${key} => ${value}`);
// } // error


// for in

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key}:${myObject[key]}`);
}

for (const key in arr) {
    //console.log(arr[key]); // here key is index
}

for(const key in name){
    // console.log(name[key]);
}

for(const key in map){
    console.log(key); // not working
}

