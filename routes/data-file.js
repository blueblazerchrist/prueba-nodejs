const { Router } = require("express");
const { dataFile } = require("../controllers/data-file");

const router = Router()

router.post('/', dataFile);


module.exports = router
