const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach((lang) => console.log(lang))

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

// basic syntax of For Each :- array.forEach(function);

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    //console.log(item);
    //console.log(item.languageName);
} )

// const values = coding.forEach((item) => { 
//     return item;
// });

// console.log(values); // undefined

const arr = [];

myNums.forEach((num) => {
    if(num > 4){
        arr.push(num)
    }
})

//console.log(arr)

