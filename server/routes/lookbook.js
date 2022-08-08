const express = require("express");
const lookbooksController = require("../controllers/lookbook.controller");

const router = express.Router();

router.post("/", lookbooksController.upload, lookbooksController.save);
router.get("/", lookbooksController.show);

module.exports = router;
