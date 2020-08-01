const express = require('express');

const getFileController = require('../controllers/getFile.controller');
const newLineController = require('../controllers/newLine.controller');

const router = express.Router();

router.route('/getFile').post(getFileController.get);
router.route('/newLine').post(newLineController.post);

module.exports = router;
