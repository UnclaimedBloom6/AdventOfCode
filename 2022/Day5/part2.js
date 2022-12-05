// https://adventofcode.com/2022/day/5
// DCVTCVPCL
let part2 = Object.keys(stack=(lines=require("fs").readFileSync("2022/Day5/input.txt","utf-8").split("\n")).slice(0,8).reduce((a,b)=>([...Array(9).keys()].map(i=>a[i+1]=[...(a[i+1]??[]),b[1+i*4]?.trim()||null].filter(a=>!!a)),a),{})).reduce((a,b,i)=>(i==0?lines.slice(10).forEach(l=>[[_,amt,from,to]=l.match(/move (\d+) from (\d+) to (\d+)/),stack[to]=[...stack[from].splice(0,parseInt(amt)),...stack[to]]]):0,a+stack[b][0]),"")
console.log(part2)