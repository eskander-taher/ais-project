const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const accessService = require("../api/services/accessService")

async function simulateUserAccess() {

	// Function to simulate user access
	async function simulateAccess() {
        try {
          // Generate random user and building IDs
          const userId = Math.floor(Math.random() * 100) + 1;
          const buildingId = Math.floor(Math.random() * 5) + 1;
      
          // Retrieve the user from Prisma
          const user = await accessService.populate(userId);
      
          // Check if the user has access to the building
          const hasPermission = user.buildings.some((userBuilding) => {
            return userBuilding.building.id === buildingId;
          });
      
          // Save access log based on permission
          const accessStatus = hasPermission ? 'GRANTED' : 'DENIED';
          const accessLog = await accessService.createAccessLog({
            userId,
            buildingId,
            accessStatus,
          });
      
        //   console.log(`Access ${accessStatus}:`, accessLog);
        } catch (error) {
          console.error(error.message);
        }
      }

	// Function to simulate access at random intervals
	function simulateAccessWithRandomInterval() {
		const randomInterval = Math.random() * (2000 - 500) + 500; // Random interval between 0.5 and 2 seconds
		// console.log(`Next access in ${randomInterval / 1000} seconds`);

		setTimeout(async () => {
			await simulateAccess();
			simulateAccessWithRandomInterval(); // Schedule the next access
		}, randomInterval);
	}

	// Start simulating access
	simulateAccessWithRandomInterval();
}

module.exports = simulateUserAccess;
