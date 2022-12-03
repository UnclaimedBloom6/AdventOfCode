// https://adventofcode.com/2022/day/3
// 2633
let total = require("fs").readFileSync("Day3/input.txt","utf-8").split("\n").map(a=>a.replace(/[^\w]/g,"")).reduce((a,b,i)=>(i%3?a[a.length-1].push(b):a.push([b]),a),[]).map(a=>[...new Set(a.map(b=>[...b].filter(c=>a.every(d=>d.includes(c)))).flat())]).flat().reduce((a,b)=>a+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(b)+1,0)
console.log(total)