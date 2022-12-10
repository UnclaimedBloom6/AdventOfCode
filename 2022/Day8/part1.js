
const fs = require("fs")

let data = fs.readFileSync("2022/Day8/input.txt", "utf-8").replace(/\r/g, "")

let lines = data.split("\n")
// console.log(lines.join("\n"))
// console.log("")

const range = (min, max) => [...Array((max-min+1)||1).fill().keys()].map(a => a+min)

let total = 0
for (let i = 0; i < lines.length; i++) {
    if (i == 0 || i == lines.length-1) {
        total += lines[i].length
        continue
    }
    for (let j = 0; j < lines[i].length; j++) {
        if (j == 0 || j == lines[i].length-1) {
            total++
            continue
        }
        if (range(0, j-1).every(a => lines[i][a] < lines[i][j])) total++
        else if (range(j+1, lines[i].length-1).every(a => lines[i][a] < lines[i][j])) total++
        else if (range(0, i-1).every(a => lines[a][j] < lines[i][j])) total++
        else if (range(i+1, lines.length-1).every(a => lines[a][j] < lines[i][j])) total++
    }
}

console.log(`Total: ${total}`)