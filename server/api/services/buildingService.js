const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function create(buildingData) {
  try {
    return await prisma.building.create({
      data: buildingData,
    });
  } catch (error) {
    console.error("Error creating building:", error);
    throw error;
  }
}

async function getAll() {
  try {
    return await prisma.building.findMany();
  } catch (error) {
    console.error("Error getting all buildings:", error);
    throw error;
  }
}

async function getById(buildingId) {
  try {
    return await prisma.building.findUnique({
      where: {
        id: buildingId,
      },
    });
  } catch (error) {
    console.error(`Error getting building with ID ${buildingId}:`, error);
    throw error;
  }
}

async function updateById(buildingId, updatedBuildingData) {
  try {
    return await prisma.building.update({
      where: {
        id: buildingId,
      },
      data: updatedBuildingData,
    });
  } catch (error) {
    console.error(`Error updating building with ID ${buildingId}:`, error);
    throw error;
  }
}

async function deleteById(buildingId) {
  try {
    return await prisma.building.delete({
      where: {
        id: buildingId,
      },
    });
  } catch (error) {
    console.error(`Error deleting building with ID ${buildingId}:`, error);
    throw error;
  }
}

async function includeRelation(buildingId, relationName) {
  try {
    const building = await prisma.building.findUnique({
      where: { id: buildingId },
      include: { [relationName]: true },
    });

    if (!building) {
      throw new Error(`Building with ID ${buildingId} not found`);
    }

    return building;
  } catch (error) {
    console.error(`Error getting building and including relation:`, error);
    throw error;
  }
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
  includeRelation,
};
