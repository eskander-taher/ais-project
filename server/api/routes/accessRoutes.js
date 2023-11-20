const express = require("express");
const router = express.Router();
const accessController = require("../controllers/accessController");

// user routes
router.get("/", accessController.getAllAcessLogs);
router.post("/:userId/:buildingId", accessController.giveAccess);

module.exports = router;
