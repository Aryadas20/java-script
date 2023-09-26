let arr = [45, 23, 21]
/* array map method
let a = arr.map((value, index, array) => {
  console.log(value, index, array)
  return value + 1
})
console.log(a)


array filter method
let arr2 = [14, 22, 32, 0, 3, 5, 6, 7, 8, 9]
let a2 = arr2.filter((a) => {
  return a > 10
})
console.log(a2)

Array reduce method*/
let arr3 = [14, 32, 0, 5, 6, 8]
const reduce_func = (h1, h2) => {
  return h1 * h2
}
let a3 = arr3.reduce(reduce_func)
//   (h1, h2) => {
//   return h1 * h2
// }

console.log(a3)