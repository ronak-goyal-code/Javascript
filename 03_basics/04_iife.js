// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// chai() // error

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
