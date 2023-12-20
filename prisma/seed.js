// Import Prisma client and models
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Define the seed data
async function main() {
  // Generate data for 100 users
  const users = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `User${index + 1}`,
  }));

  // Generate data for 5 buildings
  const buildings = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    name: `Building${index + 1}`,
  }));

  const accessLogs = [
    {
      id: 1,
      accessStatus: "GRANTED",
      userId: 1,
      buildingId: 1,
    },
    {
      id: 2,
      accessStatus: "DENIED",
      userId: 2,
      buildingId: 2,
    },
    // Add more access logs as needed
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

  // Create userInBuilding relations for the first 100 users and 5 buildings
  for (let userId = 1; userId <= 100; userId++) {
    for (let buildingId = 1; buildingId <= 5; buildingId++) {
      // const randomNumber = Math.random();
      // if (randomNumber < 0.5) {
      //   continue;
      // }
      await prisma.userInBuilding.create({
        data: {
          userId,
          buildingId,
        },
      });
    }
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
