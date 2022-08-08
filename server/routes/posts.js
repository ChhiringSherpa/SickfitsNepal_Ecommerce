const express = require("express");
const postsController = require("../controllers/post.controller");
const checkAuthMiddleware = require("../middleware/check-auth");

const router = express.Router();

router.post("/", postsController.upload, postsController.save);
router.get("/", postsController.index);
router.get("/men", postsController.index3);

router.get("/women", postsController.index2);
router.get("/:id", postsController.show);
router.patch("/:id", postsController.upload, postsController.update);

router.delete("/:id", postsController.destroy);

module.exports = router;
