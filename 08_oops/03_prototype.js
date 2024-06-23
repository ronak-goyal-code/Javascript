let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log("hitesh is present in all objects");
}

Array.prototype.hey = function(){
    console.log("say hi to all");
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.hey()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

console.log(TASupport.__proto__.isAvailable);

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher);
console.log(TeachingSupport.makeVideo);
