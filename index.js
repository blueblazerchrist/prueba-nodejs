const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors')

const app = express();

app.use(cors())

app.use(express.json());

dbConnection();

app.use(express.static('public'));


app.use('/api/import-files', require('./routes/import-files'));
app.use('/api/read-file', require('./routes/read-file'));
app.use('/api/data-file', require('./routes/data-file'));


app.listen(process.env.PORT, () => {
    console.log('The server running on the port '+ process.env.PORT);
})
