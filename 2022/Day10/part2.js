const fs = require("fs")

let data = fs.readFileSync("2022/Day10/input.txt", "utf-8")
let lines = data.replace(/\r/g, "").split("\n")

let x = 1
let cycles = 0
let str = ""

const cycleshit = () => {
    str += Math.abs(cycles%40-x) <= 1 ? "█ " : ". "
    cycles++
    if (cycles !== 40) return
    str += "\n"
    cycles = 0
}

lines.forEach(line => {
    if (line == "noop") return cycleshit()
    for (let i = 0; i < 2; i++) cycleshit()
    x += parseInt(line.slice(4))
})

console.log(str)