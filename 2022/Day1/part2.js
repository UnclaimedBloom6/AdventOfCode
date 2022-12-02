// https://adventofcode.com/2022/day/1
// 212117
let top3 = require("fs").readFileSync("2022/Day1/input.txt","utf-8").split("\n").map(a=>a.replace(/\r/g,"")).reduce((a,b)=>b==""?[...a,0]:[...a.slice(0,a.length-1),a[a.length-1]+parseInt(b)],[0]).sort((a,b)=>b-a).slice(0,3).reduce((a,b)=>a+b)
console.log(top3)