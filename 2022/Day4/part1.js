// https://adventofcode.com/2022/day/4
// 528
let total = require("fs").readFileSync("2022/Day4/input.txt","utf-8").replace(/\r/g,"").split("\n").map(a=>a.split(",").map(b=>b.split("-").map(c=>parseInt(c)))).reduce((a,[g1,g2,r1=Array.from(new Array(1+g1[1]-g1[0]).keys()).map(a=>a+g1[0]),r2=Array.from(new Array(1+g2[1]-g2[0]).keys()).map(a=>a+g2[0])])=>r1.every(a=>r2.includes(a))||r2.every(a=>r1.includes(a))?a+1:a,0)
console.log(total)