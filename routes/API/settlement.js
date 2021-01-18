const router = require("express").Router()
const settlementsController = require("../../controllers/settlementsController")
//begginning code to commit files

//Router API for rendering all data to the webpage 
router
  .route("/")
  //getting all town data and then listing it
  .get(settlementsController.findAll)

  //creating a new settlemnet in the database
  .post(settlementsController.create);

// Matches with "/api/settlements/:id"
router
  .route("/:id")
  //finding a specific town by its ID
  .get(settlementsController.findById)

  //updating a specific settlement
  .put(settlementsController.update)
  
  //If required will only be allowed for admin access
  .delete(settlementsController.remove);

module.exports = router;