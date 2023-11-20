const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

function simulateAccessRequest() {
	const success = Math.random() < 0.5; // 50% chance of success
	const accessStatus = success ? "GRANTED" : "DENIED";
	const accessType = Math.random() < 0.5 ? "IN" : "OUT"; // 50% chance of IN, 50% chance of OUT
	const userId = Math.floor(Math.random() * 10) + 1; // Random user ID between 1 and 10
	const buildingId = Math.floor(Math.random() * 10) + 1; // Random building ID between 1 and 10

	const data = {
		accessStatus,
		accessType,
		accessTime,
		userId,
		buildingId,
	};

	return {
		success,
		data,
	};
}

function getRandomElement(arr) {
	if (arr.length === 0) {
		return undefined; 
	}

	const randomIndex = Math.floor(Math.random() * arr.length);

	return arr[randomIndex];
}
