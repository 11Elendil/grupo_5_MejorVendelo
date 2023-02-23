const express = require('express');
const router = express.Router();

const apiController = require("../controllers/apiController");



router.get('/users',apiController.search);


module.exports = router;