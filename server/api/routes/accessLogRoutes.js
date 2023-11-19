const express = require("express");
const router = express.Router();
const accessLogController = require("../controllers/accessLogController");

// access log routes
router.post("/", accessLogController.createOne);
router.get("/", accessLogController.getAll);
router.get("/:id", accessLogController.getOneById);
router.put("/:id", accessLogController.updateById);
router.delete("/:id", accessLogController.deleteById);

module.exports = router;
