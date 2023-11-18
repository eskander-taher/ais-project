const buildingService = require("../services/buildingService");

async function createBuilding(req, res) {
  try {
    const buildingData = req.body;
    const newBuilding = await buildingService.create(buildingData);
    res.status(201).json(newBuilding);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getAllBuildings(req, res) {
  try {
    const allBuildings = await buildingService.getAll();
    res.status(200).json(allBuildings);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getBuildingById(req, res) {
  try {
    const buildingId = parseInt(req.params.buildingId);
    const building = await buildingService.getById(buildingId);
    if (building) {
      res.json(building);
    } else {
      res.status(404).json({ error: "Building not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

async function updateBuildingById(req, res) {
  try {
    const buildingId = parseInt(req.params.buildingId);
    const updatedBuildingData = req.body;
    const updatedBuilding = await buildingService.updateById(
      buildingId,
      updatedBuildingData
    );
    if (updatedBuilding) {
      res.json(updatedBuilding);
    } else {
      res.status(404).json({ error: "Building not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

async function deleteBuildingById(req, res) {
  try {
    const buildingId = parseInt(req.params.buildingId);
    const deletedBuilding = await buildingService.deleteById(buildingId);
    if (deletedBuilding) {
      res.json({ message: "Building deleted successfully" });
    } else {
      res.status(404).json({ error: "Building not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getBuildingByIdWithUsers(req, res) {
  try {
    const buildingId = parseInt(req.params.buildingId);
    const building = await buildingService.includeRelation(buildingId, "users");
    res.status(200).json(building);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function accessPermission(req, res) {
  const buildingId = parseInt(req.params.buildingId);
  const userId = parseInt(req.params.userId);

  try {
    // Check if the building with the given ID exists
    const building = await buildingService.includeRelation(buildingId, "users");

    // Check if the user with the given ID exists in the building
    const userExists = building.users.some((user) => user.id === userId);

    if (userExists) {
      return res.status(200).json({
        message: `User with ID ${userId} exists in Building ${buildingId}.`,
        data: {
          userHasPermission: true,
          userId,
          buildingId,
        },
      });
    } else {
      return res.status(404).json({
        message: `User with ID ${userId} does not exist in Building ${buildingId}.`,
        data: {
          userHasPermission: false,
          userId,
          buildingId,
        },
      });
    }
  } catch (error) {
    console.error("Error checking user existence in building:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  createBuilding,
  getAllBuildings,
  getBuildingById,
  updateBuildingById,
  deleteBuildingById,
  accessPermission,
  getBuildingByIdWithUsers,
};
