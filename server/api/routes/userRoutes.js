const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
 
// user routes
router.post("/", userController.createOne);
router.get("/", userController.getAll);
router.get("/:id", userController.getOneById);
router.put("/:id", userController.updateById);
router.delete("/:id", userController.deleteById);

//relations 

//get buildings of user
router.get("/:userId/buildings", userController.populate)

//add user to building
router.post("/:userId/buildings/:buildingId", userController.connectEntities)

//remove user from building
router.delete("/:userId/buildings/:buildingId", userController.removeRelation)


module.exports = router;
