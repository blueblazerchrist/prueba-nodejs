const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("db Online");
    } catch (e) {
        throw new Error("Error al iniciar la base de datos", e)
    }

}

module.exports = {
    dbConnection
}
