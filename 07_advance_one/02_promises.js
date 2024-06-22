// The promise object represents the eventual completion or failure of an asynchronous operation and its resulting value.
// 3 states -> pending fulfilled rejected

const promiseOne = new Promise(function(resolve,reject){
    // Do an asyn task;
    // DB calls, cryptography, network calls
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve();
    },1000)
}).then(function(){
    console.log('async2 resolved');
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@examole.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:'ronak',password:'1234'});
        }
        else{
            reject("ERROR : 404");
        }
    },1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:'ram',password:'1234'});
        }
        else{
            reject("ERROR : not found");
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})