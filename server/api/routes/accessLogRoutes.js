const express = require("express");
const router = express.Router();
const accessLogController = require("../controllers/accessLogController");

// access log routes
router.post("/", accessLogController.createOne);
router.get("/", accessLogController.getAll);
router.get("/:userId", accessLogController.getOneById);
router.put("/:userId", accessLogController.updateById);
router.delete("/:userId", accessLogController.deleteById);

module.exports = router;
