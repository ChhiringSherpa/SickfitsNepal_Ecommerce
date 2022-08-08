const express = require("express");
const wishlistController = require("../controllers/wishlist.controller");
const checkAuthMiddleware = require("../middleware/check-auth");
const router = express.Router();
const postsController = require("../controllers/post.controller");

router.post("/addtowishlist", wishlistController.save);

router.get("/", wishlistController.show);
router.delete("/:id", wishlistController.destroy);

module.exports = router;
