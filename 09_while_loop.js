const prompt = require("prompt-sync")({ sigint: true})
let n = prompt("Enter the value of your ex")
n = Number.parseInt(n)

// while loop
// let i = 0
// while(i<n){
//     console.log(i)
//    i++;
// }
let i = 0
do{
    console.log(i)
    i++; 
}while(i<n)