const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createOne(data) {
	try {
		return await prisma.user.create({
			data,
		});
	} catch (error) {
		throw error;
	}
}

async function getAll() {
	try {
		return await prisma.user.findMany();
	} catch (error) {
		throw error;
	}
}

async function getOneById(id) {
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

async function updateById(id, updatedData) {
	try {
		return await prisma.user.update({
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
		return await prisma.user.delete({
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
					buildingId
				},
			},
		});
	} catch (error) {
		throw error;
	}
}

// async function populate(userId, childEntity) {
// 	try {
// 		return await prisma.user.findUnique({
// 			where: {
// 				id: userId,
// 			},
// 			include: {
// 				[childEntity]: true,
// 			},
// 		});
// 	} catch (error) {
// 		throw error;
// 	}
// }

module.exports = {
	createOne,
	getAll,
	getOneById,
	updateById,
	deleteById,
	connectEntities,
	removeRelation,
	// populate,
};
