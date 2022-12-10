const fs = require("fs")

let lines = fs.readFileSync("2022/Day9/input.txt", "utf-8").replace(/\r/g, "").split("\n")

let visited = new Set()
let head = [0, 0]
let tail = [0, 0]

const isTailClose = () => Math.max(Math.abs([head[0] - tail[0]]), Math.abs([head[1] - tail[1]])) <= 1

const move = (direction, distance) => {
    if (!distance) return
    let lastHeadPos = [...head]

    if (direction == "U") head[1]--
    else if (direction == "D") head[1]++
    else if (direction == "R") head[0]++
    else if (direction == "L") head[0]--
    
    if (!isTailClose()) tail = lastHeadPos
    visited.add(tail.join(","))

    move(direction, distance-1)
}

lines.forEach(line => move(...line.split(" ")))

console.log(`Total Positions: ${visited.size}`)