// const prompt = require("prompt-sync")({ sigint: true});
let a = prompt("Hey whats your age?")
a = Number.parseInt(a);
if(a<0){
    js-alert("This is an invalid age");
}

else if(a<9){
    js-alert("You are a kid and ypu cannot even think of driving")  
}
else if(a<18 && a>=9){
    js-alert("You are a kid and you can even think of driving after 18")  
}
else{
    js-alert("You are above 18 and you can drive now")  
}  

console.log("  You can", (a<8? "not drive": "drive"))
