const express=require('express')
const {upload,resize} = require('../middlewares/uploadMiddleware')
const uploadController = require('../controllers/uploadController')
const router = express.Router();

router.post('/upload',upload.single('img'),resize,uploadController);

module.exports = router;