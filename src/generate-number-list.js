import fs from "node:fs"

const places = Number(process.argv[2])

if (!Number.isFinite(places) || places < 1) {
  throw new Error("Please supply non-zero length for list")
}

const output = Array.from({ length: places }, (_, i) => i + 1).join(',')

fs.appendFileSync(process.env.GITHUB_OUTPUT, `message=${output}\n`)
