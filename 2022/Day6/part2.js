// https://adventofcode.com/2022/day/6
// 2308
let part2 = [...require("fs").readFileSync("2022/Day6/input.txt", "utf-8")].reduce((a,b,i)=>typeof(a)=="number"?a:a.length==14?i:a.includes(b)?[...a.slice(a.indexOf(b)+1),b]:[...a,b],[])
console.log(part2)