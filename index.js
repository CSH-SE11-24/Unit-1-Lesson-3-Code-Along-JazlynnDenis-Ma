// Code Along Norms: 
// 1. Only be on Repl.it/classroom resources
// 2. Actively follow along and engage
// 3. Ask questions and flag if you get stuck
// 4. Take notes as needed!
let name = prompt("What's your name?");
//CONCATENATION
console.log("welcome to my game," + name);
//INTERPOLATION
// with a , sign, spaces added automatically
console.log("welcome to my game,", name);
console.log(`welcome to my game, ${name}`)

let role = prompt("Whats your role? (magician, fighter, peasent)")
console.log(`Okay,${name},your role is now ${role}.`)

//promp assumes prompt is a string, to change it to a number use parseInt/parseFloat
let powerLevel = prompt("What's your power level?")
  powerLevel = parseInt(powerLevel)
console.log(typeof powerLevel)

