// nn bb ss u  primitives in js
let a = null;
let b = 345;
let c = true; // CAN ALSO BE FALSE
let d = BigInt("567") + BigInt("3")
let e = "arya"
let f = Symbol("I am a nice symbol")
let g = undefined

console.log(a, b, c, d, e, f, g)
console.log(typeof c)



// Non-primitives datatype obj   in js
const item = {
    "Harry": true,
    "Shubh": false,
    "Lovish": 67,
    "Rohan": undefined
}
console.log(item["Rohan"])