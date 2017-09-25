const router = require("express").Router();
const savedArticlesController = require("../../controllers/savedArticlesController.js");

// "/api/saved"
router.route("/")
  .get(savedArticlesController.findAll)
  .post(savedArticlesController.create);

// "/api/saved/:id"
router
  .route("/:id")
  .get(savedArticlesController.findById)
  .delete(savedArticlesController.remove);

module.exports = router;