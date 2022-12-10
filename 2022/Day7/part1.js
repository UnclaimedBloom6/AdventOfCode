
// FUUUUUUUUUUUUUCK

// const fs = require("fs")

// let data = fs.readFileSync("2022/Day7/inputsmall.txt", "utf-8")

// let lines = data.replace(/\r/g, "").split("\n")

// let dirs = {}
// let curr = []
// const followDirs = () => {
//     let c = dirs
//     for (let level of curr) {
//         c = c[level]
//     }
//     return c
// }

// const getDirSize = (dir) => {
//     // console.log(JSON.stringify(dir, null, 4))
//     let values = Object.values(dir)
//     let sum = values.filter(a => typeof(a) == "number").reduce((a, b) => a+b)
//     if (sum > 100000) sum = 0
//     values.forEach(v => {
//         if (typeof(v) !== "object") return
//         let size = getDirSize(v)
//         if (size > 100000) return
//         sum += size
//         v = size
//         console.log(JSON.stringify(dir, null, 4))
//     })
//     return sum
// }

// for (let line of lines) {
//     if (line.startsWith("$ ")) {
//         let [cmd, ...args] = line.slice(2).split(" ")
//         if (cmd == "cd") {
//             let dir = args.join(" ")
//             if (dir == "/") curr = []
//             else if (dir == "..") curr.pop()
//             else curr.push(dir)
//         }
//     }
//     let match = line.match(/dir (.+)/)
//     if (match) {
//         let dir = match[1]
//         let c = followDirs()
//         c[dir] = {}
//     }
//     match = line.match(/(\d+) (.+)/)
//     if (match) {
//         let [_, size, file] = match
//         let c = followDirs()
//         c[file] = parseInt(size)
//     }
// }

// console.log(JSON.stringify(dirs, null, 4))
// console.log(`TOTAL SIZE: ${getDirSize(dirs)}`)
// console.log(JSON.stringify(dirs, null, 4))
// // console.log(all)
