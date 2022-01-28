const { model, Schema } = require('mongoose');

const DatabaseFileSchema = Schema({
    fileName: {
        type: String,
        require: true
    }
})


module.exports = model('DatabaseFile', DatabaseFileSchema);
