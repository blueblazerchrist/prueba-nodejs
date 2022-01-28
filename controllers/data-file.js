const {response} = require("express");
const fs = require('fs');
const readline = require("readline");

const dataFile = async (req, res = response) => {

    let { fileName, separator, custom_columns} = req.body;
    const path = `./uploads/${ fileName }`;

    let lineReader = readline.createInterface({
        input: fs.createReadStream(path)
    });

    let firstLine = 0;
    const columns = [];
    let nameColumns = [];

    lineReader.on("line", line => {
        firstLine++
        if(firstLine === 1) {
            nameColumns = line.split(`${separator}`)
        }
        if(firstLine >= 2){
            const detailColumns = line.split(`${separator}`)
            const objColumns = Object.assign({}, ...nameColumns.map((e, i) => ({[e]: detailColumns[i]})))
            columns.push(objColumns);
        }
    }).on('close', () => {
        if(custom_columns.length === 0) {
            custom_columns = nameColumns
        }

        const columnsResponse = columns.map( (data) => {
            const obj = {};
            for (const column of custom_columns) {
                obj[column] = data[column]
            }
            return obj;
        })

        res.json({
            ok:true,
            msg: 'filter result',
            columns: columnsResponse,
        });
    });

}

module.exports = {
    dataFile
}
