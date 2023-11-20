const express = require("express");
const router = express.Router();
const buildingController = require("../controllers/buildingController");

// building log routes
router.post("/", buildingController.createOne);
router.get("/", buildingController.getAll);
router.get("/:id", buildingController.getOneById);
router.put("/:id", buildingController.updateById);
router.delete("/:id", buildingController.deleteById);

//relations 

//get users of building
router.get("/:buildingId/users", buildingController.populate)

//add user to building
router.post("/:buildingId/users/:userId", buildingController.connectEntities)

//remove user from building
router.delete("/:buildingId/users/:userId", buildingController.removeRelation)

module.exports = router;
