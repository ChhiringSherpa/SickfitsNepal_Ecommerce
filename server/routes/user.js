const express = require("express");
const userController = require("../controllers/user.controller");
const checkAuthMiddleware = require("../middleware/check-auth");
const router = express.Router();

router.post("/sign-up", userController.signUp);
router.post("/login", userController.login);
router.get("/:id", checkAuthMiddleware.checkAuth, userController.showUser);

module.exports = router;
