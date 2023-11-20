const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createOne(data) {
	try {
		return await prisma.building.create({
			data,
		});
	} catch (error) {
		throw error;
	}
}

async function getAll() {
	try {
		return await prisma.building.findMany();
	} catch (error) {
		throw error;
	}
}

async function getOneById(id) {
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

async function updateById(id, updatedData) {
	try {
		return await prisma.building.update({
			where: {
				id,
			},
			data: updatedData,
		});
	} catch (error) {
		throw error;
	}
}

async function deleteById(id) {
	try {
		return await prisma.building.delete({
			where: {
				id,
			},
		});
	} catch (error) {
		throw error;
	}
}

async function connectEntities(userId, buildingId) {
	try {
		return await prisma.userInBuilding.create({
			data: {
				userId,
				buildingId,
			},
		});
	} catch (error) {
		throw error;
	}
}

async function removeRelation(userId, buildingId) {
	try {
		return await prisma.userInBuilding.delete({
			where: {
				userId_buildingId: {
					userId,
					buildingId,
				},
			},
		});
	} catch (error) {
		throw error;
	}
}

async function populate(buildingId) {
	try {
		return await prisma.building.findUnique({
			where: {
				id: buildingId,
			},
			include: {
				users: { include: { user: true } },
			},
		});
	} catch (error) {
		throw error;
	}
}

module.exports = {
	createOne,
	getAll,
	getOneById,
	updateById,
	deleteById,
	connectEntities,
	removeRelation,
	populate,
};
