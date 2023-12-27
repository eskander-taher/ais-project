const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function findUser(id) {
	try {
		return await prisma.user.findUnique({
			where: {
				id,
			},
		});
	} catch (error) {
		throw error;
	}
}

async function findBuilding(id) {
	try {
		return await prisma.building.findUnique({
			where: {
				id,
			},
		});
	} catch (error) {
		throw error;
	}
}

async function populate(userId) {
	try {
		return await prisma.user.findUnique({
			where: {
				id: userId,
			},
			include: {
				buildings: { include: { building: true } },
			},
		});
	} catch (error) {
		throw error;
	}
}

async function createAccessLog(data) {
	try {
		return await prisma.accessLog.create({
			data,
			include:{
				user: true,
				building: true
			}
		});
	} catch (error) {
		throw error;
	}
}

async function getAll() {
	try {
		return await prisma.accessLog.findMany({
			take: -10,
			include: {
				user: true,
				building: true,
			},
		});
	} catch (error) {
		throw error;
	}
}

module.exports = { getAll, findUser, findBuilding, populate, createAccessLog };
