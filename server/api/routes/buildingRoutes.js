const express = require("express");
const router = express.Router();
const buildingController = require("../controllers/buildingController");

// access log routes
router.post("/", buildingController.createOne);
router.get("/", buildingController.getAll);
router.get("/:id", buildingController.getOneById);
router.put("/:id", buildingController.updateById);
router.delete("/:id", buildingController.deleteById);

module.exports = router;
