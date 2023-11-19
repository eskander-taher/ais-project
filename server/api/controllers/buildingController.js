const BuildingService = require("../services/BuildingService");
const buildingService = new BuildingService();

async function createOne(req, res) {
	try {
		const data = req.body;
		const result = await buildingService.createOne(data);
		res.status(201).json(result);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
}

async function getAll(req, res) {
	try {
		const result = await buildingService.getAll();
		res.status(200).json(result);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
}

async function getOneById(req, res) {
	try {
		const { id } = req.params;
		const result = await buildingService.getOneById(id);
		if (!result) {
			res.status(404).json({ error: "Not Found" });
		} else {
			res.status(200).json(result);
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
}

async function updateById(req, res) {
	try {
		const { id } = req.params;
		const updatedData = req.body;
		const result = await buildingService.updateById(id, updatedData);
		res.status(200).json(result);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
}

async function deleteById(req, res) {
	try {
		const { id } = req.params;
		const result = await buildingService.deleteById(id);
		res.status(204).end();
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
}

async function connectEntities(req, res) {
	try {
		const { parentId, childEntity, childId } = req.params;
		const result = await buildingService.connectEntities(parentId, childEntity, childId);
		res.status(200).json(result);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
}

async function removeRelation(req, res) {
	try {
		const { parentId, childEntity, childId } = req.params;
		const result = await buildingService.removeRelation(parentId, childEntity, childId);
		res.status(200).json(result);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
}

async function populate(req, res) {
	try {
		const { parentId, childEntity } = req.params;
		const result = await buildingService.populate(parentId, childEntity);
		res.status(200).json(result);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
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
