const express = require("express");
const router = express.Router();
const accessLogController = require("../controllers/accessLogController");
 
// user routes
router.post("/", accessLogController.createOne);
router.get("/", accessLogController.getAll);
router.get("/:id", accessLogController.getOneById);
router.put("/:id", accessLogController.updateById);
router.delete("/:id", accessLogController.deleteById);

//user relations routes

//get buildings of user
router.get("/:userId/buildings", accessLogController.populate)

//add user to building
router.post("/:userId/buildings/:buildingId", accessLogController.connectEntities)

//remove user from building
router.delete("/:userId/buildings/:buildingId", accessLogController.removeRelation)




module.exports = router;
