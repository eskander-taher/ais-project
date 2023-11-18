const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// user routes
router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:userId", userController.getUserById);
router.put("/:userId", userController.updateUserById);
router.delete("/:userId", userController.deleteUserById);

//user relations routes

//add user to building
router.put(
  "/:userId/buildings/:buildingId",
  userController.addUserToBuiling
);

//remove user from building
router.delete("/:userId/buildings/:buildingId", (req, res) =>
  res.send(
    `TODO: remove user with id:${req.params.userId} from building with id:${req.params.buildingId}`
  )
);

//Get a list of buildings that a user has access to.
router.get("/:userId/buildings", (req, res) =>
  res.send(`TODO: get list of buildings of user with id:${req.params.userId}`)
);

module.exports = router;
