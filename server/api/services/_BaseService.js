const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class BaseService {
	constructor(entityName) {
		this.entityName = entityName;
	}

	async createOne(data) {
		try {
			return await prisma[this.entityName].create({
				data,
			});
		} catch (error) {
			throw error;
		}
	}

	async getAll() {
		try {
			return await prisma[this.entityName].findMany();
		} catch (error) {
			throw error;
		}
	}

	async getOneById(id) {
		try {
			return await prisma[this.entityName].findUnique({
				where: {
					id,
				},
			});
		} catch (error) {
			throw error;
		}
	}

	async updateById(id, updatedData) {
		try {
			return await prisma[this.entityName].update({
				where: {
					id,
				},
				data: updatedData,
			});
		} catch (error) {
			throw error;
		}
	}

	async deleteById(id) {
		try {
			return await prisma[this.entityName].delete({
				where: {
					id,
				},
			});
		} catch (error) {
			throw error;
		}
	}

	async connectEntities(parentId, childEntity, childId) {
		try {
			return await prisma[this.entityName].update({
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

	async removeRelation(parentId, childEntity, childId) {
		try {
			return await prisma[this.entityName].update({
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

	async populate(parentId, childEntity) {
		try {
			return await prisma[this.entityName].findUnique({
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
}

module.exports = BaseService;
