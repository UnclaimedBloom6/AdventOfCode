// https://adventofcode.com/2022/day/2
// 14184
let score = require("fs").readFileSync("2022/Day2/input.txt","utf-8").split("\n").map(a=>a.replace(/[^\w]/g,"")).reduce((a,b)=>a+{"AX":3,"AY":4,"AZ":8,"BX":1,"BY":5,"BZ":9,"CX":2,"CY":6,"CZ":7}[b],0)
console.log(score)