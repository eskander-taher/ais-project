const userService = require("../services/userService");

async function createUser(req, res) {
  try {
    const userData = req.body;
    const newUser = await userService.create(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getAllUsers(req, res) {
  try {
    const allUsers = await userService.getAll();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getUserById(req, res) {
  try {
    const userId = parseInt(req.params.userId);
    const user = await userService.getById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

async function updateUserById(req, res) {
  try {
    const userId = parseInt(req.params.userId);
    const updatedUserData = req.body;
    const updatedUser = await userService.updateById(userId, updatedUserData);
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

async function deleteUserById(req, res) {
  try {
    const userId = parseInt(req.params.userId);
    const deletedUser = await userService.deleteById(userId);
    if (deletedUser) {
      res.json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

// user relations
async function addUserToBuiling(req, res) {
  try {
    const userId = parseInt(req.params.userId);
    const buildingId = parseInt(req.params.buildingId);
    const updatedUser = await userService.addToBuilding(userId, buildingId);
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  addUserToBuiling,
};
