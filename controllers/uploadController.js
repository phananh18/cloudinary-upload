const cloudinary = require('../middlewares/cloudinary')

const uploadController =  (req,res) => {
    const localUrl = req.file.path;
    cloudinary.uploader.upload(localUrl)
    .then(r => console.log(r))
    .catch(e => console.log(e))
}

module.exports = uploadController;