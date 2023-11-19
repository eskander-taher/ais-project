const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// access log routes
router.post("/", userController.createOne);
router.get("/", userController.getAll);
router.get("/:userId", userController.getOneById);
router.put("/:userId", userController.updateById);
router.delete("/:userId", userController.deleteById);

module.exports = router;
