// program to add first n natural numbers
const prompt = require("prompt-sync")({ sigint: true})
let sum = 0
let n  = prompt("Enter the value of n")
n = Number.parseInt(n)
for(let i =0; i<n; i++){
    sum += (i + 1)
}
// console.log(`Sum of first ${n} natural number is ${sum}`)



// let obj = {

//     harry: 90,
//     shubh: 45,
//     shivika: 56,
//     ritika: 23
// }

// for (let a in obj){
//     console.log("Marks of " + a +  " are " + obj[a])
// }

// for (let b of "harry"){
//     console.log(b)
// }

console.log("Sum of first " + n + " natural number is " + sum)
// console.log(i)