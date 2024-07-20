const router = require("express").Router();
const authController = require("../Controllers/AuthController");

// Define the route for handling login requests
router.post("/api/login", authController.login);

module.exports = router;