const {fileUpload} = require("../controllers/upload");
const {Router} = require("express");
const expressFileUpload = require("express-fileupload");

const router = Router()

router.use(expressFileUpload());

router.post('/', fileUpload);


module.exports = router
