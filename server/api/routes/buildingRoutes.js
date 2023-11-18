const express = require("express");
const router = express.Router();
const buildingController = require("../controllers/buildingController");

// biulding routes
router.post("/", buildingController.createBuilding);
router.get("/", buildingController.getAllBuildings);
router.get("/:buildingId", buildingController.getBuildingById);
router.put("/:buildingId", buildingController.updateBuildingById);
router.delete("/:buildingId", buildingController.deleteBuildingById);

// building relations routes

//get all users in a specific building
router.get("/:buildingId/users", buildingController.getBuildingByIdWithUsers);

//check if user exist in a specific building
router.get("/:buildingId/users/:userId/access", buildingController.accessPermission);

module.exports = router;
