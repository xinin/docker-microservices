const express = require('express');
const controller = require('./hello.controller');

const router = express.Router();

router.get('/', controller.hello);
router.get('/hello', controller.hellohello);

module.exports = router;
