export function getRowObjects(rows: any[]) {
    const rowObjects = []
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i]
        // first child is always td
        const rowObject = {}
        for (let j = 0; j < row.children.length; j++) {
            const child = row.children[j]
            const td = child.children[0]
            if (j === 0) {
                const text = td.data.trim()
                rowObject["EF ID"] = text
            }

            if (j === 1) {
                const ul = td.children[0]
                const li = ul.children[0]
                const text = li.data.trim()
                rowObject["IPCC 1996"] = text
            }

            if (j === 2) {
                const ul = td.children[0]
                const li = ul.children[0]
                const text = li.data.trim()
                rowObject["IPCC 2006"] = text
            }

            if (j === 3) {
                const ul = td.children[0]
                const li = ul.children[0]
                const text = li.data.trim()
                rowObject["Gas"] = text
            }

            if (j === 4) {
                const text = td.data.trim()
                rowObject["Fuel"] = text
            }

            if (j === 5) {
                const text = td.data.trim()
                rowObject["Type of parameter"] = text
            }

            if (j === 6) {
                const text = td.data.trim()
                rowObject["Description"] = text
            }

            if (j === 7) {
                const text = td.data.trim()
                rowObject["Technologies / Practices"] = text
            }

            if (j === 8) {
                const text = td.data.trim()
                rowObject["Parameters / Conditions"] = text
            }

            if (j === 9) {
                const text = td.data.trim()
                rowObject["Region / Regional Conditions"] = text
            }

            if (j === 10) {
                const text = td.data.trim()
                rowObject["Value"] = text
            }

            if (j === 11) {
                const text = td.data.trim()
                rowObject["Unit"] = text
            }
        }
        rowObjects.push(rowObject)
    }
    return rowObjects
}
