const router = require("express").Router();
const articleRoutes = require("./articles.js");

// Saved Article Routes
router.use("/saved", articleRoutes);

module.exports = router;