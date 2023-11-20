const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
 
// user routes
router.post("/", userController.createOne);
router.get("/", userController.getAll);
router.get("/:id", userController.getOneById);
router.put("/:id", userController.updateById);
router.delete("/:id", userController.deleteById);

//user relations routes
router.put("/:userId/buildings/:buildingId", userController.connectEntities)

module.exports = router;
