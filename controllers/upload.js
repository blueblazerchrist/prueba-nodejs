const { response } = require("express");
const { v4: uuidv4 } = require('uuid');
const { registerFile } = require("../helpers/actualizar-imagen");

const fileUpload = (req, res = response) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            msg: 'No files were uploaded.'
        });
    }

    const file = req.files.fileName;
    const splitFileName = file.name.split('.');
    const fileExtension = splitFileName[splitFileName.length -1];

    const validExtensions =  ['csv'];
    if(!validExtensions.includes(fileExtension)) {
        return res.status(400).json({
            ok: false,
            msg: 'It is not a permitted extension'
        });
    }

    const fileName = `${ uuidv4() }.${ fileExtension }`;

    const path = `./uploads/${fileName}`;

    file.mv(path, (err) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                msg: JSON.stringify(err),
            });
        }

        registerFile(fileName);

        res.json({
            ok: true,
            msg: 'file uploaded',
            fileName
        });

    });

}

module.exports = {
    fileUpload,
}

