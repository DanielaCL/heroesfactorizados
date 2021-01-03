const express = require('express');
const router = express.Router();

//RUTAS
const main = require('../controllers/mainController');

router.get('/', main.index);

module.exports = router;