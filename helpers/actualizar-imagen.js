const fs = require('fs');

const DatabaseFile = require('../models/database-file');

const registerFile = async (fileName) => {

    const databaseFile = await DatabaseFile({fileName});
    await databaseFile.save();
    return true;

}


module.exports = {
    registerFile,
}

