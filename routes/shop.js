
const express = require("express");

const router = express.Router();

const generalController = require("../controllers/general");

router.get("/", generalController.renderhp);

router.get("/about-us", generalController.renderaus);

router.get("/shop", generalController.rendershop);

router.post("/shop", generalController.addProducts);

router.get("/cart", generalController.renderCart);

module.exports = router;

