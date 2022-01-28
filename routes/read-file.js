const { Router } = require("express");
const { readFile } = require("../controllers/read-file");

const router = Router()

router.post('/', readFile);


module.exports = router
