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

//get users of a building
router.get("/:buildingId/users", buildingController.populate)

module.exports = router;
