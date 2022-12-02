// https://adventofcode.com/2022/day/2
// 13675
let score = require("fs").readFileSync("2022/Day2/input.txt","utf-8").split("\n").map(a=>a.replace(/[^\w]/g,"")).reduce((a,b)=>a+{"AX":4,"AY":8,"AZ":3,"BX":1,"BY":5,"BZ":9,"CX":7,"CY":2,"CZ":6}[b],0)
console.log(score)