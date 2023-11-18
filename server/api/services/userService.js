const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function create(userData) {
  try {
    return await prisma.user.create({
      data: userData,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

async function getAll() {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    console.error("Error getting all users:", error);
    throw error;
  }
}

async function getById(userId) {
  try {
    return await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  } catch (error) {
    console.error(`Error getting user with ID ${userId}:`, error);
    throw error;
  }
}

async function updateById(userId, updatedUserData) {
  try {
    return await prisma.user.update({
      where: {
        id: userId,
      },
      data: updatedUserData,
    });
  } catch (error) {
    console.error(`Error updating user with ID ${userId}:`, error);
    throw error;
  }
}

async function deleteById(userId) {
  console.log(typeof userId)
  try {
    return await prisma.user.delete({
      where: {
        id: userId,
      },
    });
  } catch (error) {
    console.error(`Error deleting user with ID ${userId}:`, error);
    throw error;
  }
}

async function addToBuilding(userId, buildingId) {
  try {
    return await prisma.user.update({
      where: { id: userId },
      data: {
        buildings: {
          connect: { id: buildingId },
        },
      },
    });
  } catch (error) {
    console.error(
      `Error granting access to building ${buildingId} for building ${buildingId}:`,
      error
    );
    throw error;
  }
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
  addToBuilding,
};
