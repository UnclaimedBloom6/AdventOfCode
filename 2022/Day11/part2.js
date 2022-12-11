
const fs = require("fs")
let lines = fs.readFileSync("2022/Day11/input.txt", "utf-8").replace(/\r/g, "").split("\n")
let monkeys = []

for (let i = 0; i < lines.length; i+=7) {
    let info = lines.slice(i+1, i+6)

    let op = info[1].slice(23)
    let num = parseInt(op.split(" ")[1])
    let operation = a => a + (isNaN(num) ? a : num)
    if (op[0] == "*") operation = a => a * (isNaN(num) ? a : num)

    monkeys.push({
        "heldItems": info[0].slice(18).split(" ").map(a => parseInt(a)),
        "operation": operation,
        "test": parseInt(info[2].slice(21)),
        "true": parseInt(info[3].slice(29)),
        "false": parseInt(info[4].slice(30)),
        "itemsInspected": 0
    })
}

let div = monkeys.reduce((a, b) => a*b.test, 1)
for (let i = 0; i < 10000; i++) {
    for (let monkey of monkeys) {
        let newItems = monkey.heldItems.map(a => monkey.operation(a)%div)
        monkey.heldItems = []
        monkey.itemsInspected += newItems.length
        newItems.forEach(item => {
            if (item%monkey.test) return monkeys[monkey.false].heldItems.push(item)
            monkeys[monkey.true].heldItems.push(item)
        })
    }
}

let top2 = monkeys.map(a => a.itemsInspected).sort((a, b) => b-a)
console.log(top2[0] * top2[1])