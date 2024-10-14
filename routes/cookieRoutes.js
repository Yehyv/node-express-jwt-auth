const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const cookieController = require('../controllers/cookieController');
router.use(cookieParser());

router.get('/set-cookies',cookieController.set_cookie);


module.exports = router;

