// import FormData from "form-data"
// import fetch from "node-fetch"
import * as $ from "cheerio"
import * as fetch from "node-fetch"
import * as FormData from "form-data"
import { getRowObjects } from "./util"
import * as fs from "fs"

const url = "https://www.ipcc-nggip.iges.or.jp/EFDB/find_ef.php"

async function main() {
    // increase offset in steps of 20 until rows are empty
    let rowObjects = []
    for (let i = 0; i < 100000; i += 20) {
        // get html
        console.log("getting rows from " + i)
        const formData = new FormData()
        formData.append("offset", `${i}`)
        const res = await fetch.default(url, { method: "POST", body: formData })
        const html = await res.text()

        // get rows
        const rawRowsAlt1 = $("#spnOutput > .list > tbody > .alt1", html).toArray()
        // first element is header
        rawRowsAlt1.splice(0, 1)
        const rawRowsAlt2 = $("#spnOutput > .list > tbody > .alt2", html).toArray()
        const rows = [...rawRowsAlt1, ...rawRowsAlt2]
        if (rows.length === 0) {
            // got all rows (or something went wrong 😊 )
            break
        }

        // construct row objects
        const result = getRowObjects(rows)
        rowObjects = [...rowObjects, ...result]
    }
    console.log(rowObjects.length)
    fs.writeFileSync("db.json", JSON.stringify(rowObjects))
}

main()
