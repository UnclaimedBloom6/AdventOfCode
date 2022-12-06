// https://adventofcode.com/2022/day/6
// 1848
let part1 = [...require("fs").readFileSync("2022/Day6/input.txt", "utf-8")].reduce((a,b,i)=>typeof(a)=="number"?a:a.length==4?i:a.includes(b)?[...a.slice(a.indexOf(b)+1),b]:[...a,b],[])
console.log(part1)