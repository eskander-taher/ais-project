// Import Prisma client and models
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Define the seed data
async function main() {
  const users = [
    {
      id: 1,
      name: "Alice",
    },
    {
      id: 2,
      name: "Bob",
    },
  ];

  const buildings = [
    {
      id: 1,
      name: "Building A",
    },
    {
      id: 2,
      name: "Building B",
    },
  ];

  const accessLogs = [
    {
      id: 1,
      accessStatus: "Granted",
      accessType: "Entry",
      userId: 1,
      buildingId: 1,
    },
    {
      id: 2,
      accessStatus: "Denied",
      accessType: "Entry",
      userId: 2,
      buildingId: 2,
    },
  ];

  // Create users, buildings, and access logs
  for (const userData of users) {
    await prisma.user.create({
      data: userData,
    });
  }

  for (const buildingData of buildings) {
    await prisma.building.create({
      data: buildingData,
    });
  }

  for (const accessLogData of accessLogs) {
    await prisma.accessLog.create({
      data: accessLogData,
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
