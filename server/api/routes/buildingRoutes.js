const express = require("express");
const router = express.Router();
const buildingController = require("../controllers/buildingController");

// access log routes
router.post("/", buildingController.createOne);
router.get("/", buildingController.getAll);
router.get("/:userId", buildingController.getOneById);
router.put("/:userId", buildingController.updateById);
router.delete("/:userId", buildingController.deleteById);

module.exports = router;
