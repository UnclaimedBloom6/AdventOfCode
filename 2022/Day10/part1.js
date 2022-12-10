const fs = require("fs")

let data = fs.readFileSync("2022/Day10/input.txt", "utf-8")
let lines = data.replace(/\r/g, "").split("\n")

let x = 1
let cycles = 0
let total = 0

const cycleshit = () => {
    cycles++
    if ((cycles+20)%40 == 0) total += x*cycles
}

lines.forEach(line => {
    if (line == "noop") return cycleshit()
    for (let i = 0; i < 2; i++) cycleshit()
    x += parseInt(line.slice(4))
})

console.log(total)