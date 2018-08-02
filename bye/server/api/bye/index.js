

const express = require('express');
const controller = require('./bye.controller');

const router = express.Router();

router.get('/', controller.bye);
router.get('/bye', controller.byebye);

module.exports = router;
