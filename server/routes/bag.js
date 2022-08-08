const express = require("express");
const bagController = require("../controllers/bag.controller");
const checkAuthMiddleware = require("../middleware/check-auth");
const router = express.Router();
const postsController = require("../controllers/post.controller");

router.post("/addtobag", bagController.save);
router.get("/", bagController.show);
router.delete("/:id", bagController.destroy);
router.post("/update", bagController.update);

module.exports = router;
