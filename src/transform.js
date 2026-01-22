import fs from "node:fs"

const number = Number(process.argv[2])
const str = process.argv[3]
const list = process.argv[4]

if (![3, 5, 15].includes(number)) {
  throw new Error("Valid numbers to transform are 3, 5, 15")
}

if (!["fizz", "buzz", "fizzbuzz"].includes(str)) {
  throw new Error("Valid transformed strings are 'fizz', 'buzz', and 'fizzbuzz'")
}

if (!list || list.length === 0) {
  throw new Error("Please supply a non-zero length list to transform")
}

const values = list.split(',')

const output = values.map(value => value % number === 0 ? str : value).join(',')

fs.appendFileSync(process.env.GITHUB_OUTPUT, `message=${output}\n`)
