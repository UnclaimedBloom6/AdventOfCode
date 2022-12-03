// https://adventofcode.com/2022/day/3
// 7785
let total = require("fs").readFileSync("Day3/input.txt","utf-8").split("\n").map(a=>a.replace(/[^\w]/g,"")).map(a=>a.match(new RegExp(`^(\\w{${a.length/2}})(\\w+)$`))).reduce((a,[l,h1,h2])=>[...a,...[...new Set([...l].filter(c=>h1.includes(c)&&h2.includes(c)))]],[]).reduce((a,b)=>a+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(b)+1,0)
console.log(total)