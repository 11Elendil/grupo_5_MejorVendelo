const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

router.get("/", mainController.index);
router.get("/productCart", mainController.productCart);

//SEARCH PRODUCT
router.get('/search', mainController.search);


module.exports = router;