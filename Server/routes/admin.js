var express = require('express');
var router = express.Router();
const adminController = require('../controller/admin-controller');
const Authentication = require('../middleware/authentication');
const multer =require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  
  const uploads = multer({ storage: storage })

  router.post ('/adminreg',uploads.single('image'),adminController.adminreg);
  router.post ('/signin',adminController.signin);

  module.exports = router;