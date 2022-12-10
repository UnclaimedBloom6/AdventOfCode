
const fs = require("fs")

let data = fs.readFileSync("2022/Day8/input.txt", "utf-8").replace(/\r/g, "")

let lines = data.split("\n")
// console.log(lines.join("\n"))
// console.log("")

const range = (min, max) => [...Array((max-min+1)||1).fill().keys()].map(a => a+min)

const getTreeScore = (row, col) => {
    if (!row||!col||row==lines.length-1||col==lines[0].length-1) return 0
    let n=e=s=w=0

    for (let y of range(0, row-1).reverse()) {
        n++
        if (lines[row][col] <= lines[y][col]) break
    }
    for (let y of range(row+1, lines.length-1)) {
        s++
        if (lines[row][col] <= lines[y][col]) break
    }
    for (let x of range(0, col-1).reverse()) {
        w++
        if (lines[row][col] <= lines[row][x]) break
    }
    for (let x of range(col+1, lines[row].length-1)) {
        e++
        if (lines[row][col] <= lines[row][x]) break
    }
    let total = n*e*s*w
    return total
}

let totals = []
for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
        totals.push(getTreeScore(i, j))
    }
}

console.log(`Max: ${Math.max(...totals)}`)