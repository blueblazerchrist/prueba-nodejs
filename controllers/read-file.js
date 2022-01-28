const {response} = require("express");
const fs = require('fs');
const readline = require("readline");

const readFile = (req, res = response) => {

    const { fileName, separator } = req.body;
    const path = `./uploads/${ fileName }`;

    let lineReader = readline.createInterface({
        input: fs.createReadStream(path)
    });

    let firstLine = 0;
    let columns = '';
    lineReader.on("line", line => {
        firstLine++
        columns = line.split(`${separator}`);
        if(firstLine===1){
            lineReader.close();
        }
    });

    lineReader.on('close', function() {
        lineReader.close()
        lineReader.removeAllListeners()

        res.json({
            ok:true,
            msg: 'selecciona las columnas que deseas importar',
            columns,
        });
    });
}

module.exports = {
    readFile
}
