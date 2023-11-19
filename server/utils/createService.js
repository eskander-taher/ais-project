const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

function createService(entityName) {
	async function createOne(data) {
		try {
			return await prisma[entityName].create({
				data,
			});
		} catch (error) {
			throw error;
		}
	}

	async function getAll() {
		try {
			return await prisma[entityName].findMany();
		} catch (error) {
			throw error;
		}
	}

	async function getOneById(id) {
		try {
			return await prisma[entityName].findUnique({
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
			return await prisma[entityName].update({
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
			return await prisma[entityName].delete({
				where: {
					id,
				},
			});
		} catch (error) {
			throw error;
		}
	}

	async function connectEntities(parentId, childEntity, childId) {
		try {
			return await prisma[entityName].update({
				where: { id: parentId },
				data: {
					[childEntity]: {
						connect: { id: childId },
					},
				},
			});
		} catch (error) {
			throw error;
		}
	}

	async function removeRelation(parentId, childEntity, childId) {
		try {
			return await prisma[entityName].update({
				where: { id: parentId },
				data: {
					[childEntity]: {
						disconnect: { id: childId },
					},
				},
			});
		} catch (error) {
			throw error;
		}
	}

	async function populate(parentId, childEntity) {
		try {
			return await prisma[entityName].findUnique({
				where: {
					id: parentId,
				},
				include: {
					[childEntity]: true,
				},
			});
		} catch (error) {
			throw error;
		}
	}
	return {
		createOne,
		getAll,
		getOneById,
		updateById,
		deleteById,
		connectEntities,
		removeRelation,
		populate,
	};
}

module.exports = createService;
