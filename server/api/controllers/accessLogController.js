const AccessLogService = require("../services/AccessLogService");
const accessLog = new AccessLogService();

async function createOne(req, res) {
	try {
		const data = req.body;
		const result = await accessLog.createOne(data);
		res.status(201).json(result);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
}

async function getAll(req, res) {
	try {
		const result = await accessLog.getAll();
		res.status(200).json(result);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
}

async function getOneById(req, res) {
	try {
		const { id } = req.params;
		const result = await accessLog.getOneById(id);
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
		const result = await accessLog.updateById(id, updatedData);
		res.status(200).json(result);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
}

async function deleteById(req, res) {
	try {
		const { id } = req.params;
		const result = await accessLog.deleteById(id);
		res.status(204).end();
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
}

async function connectEntities(req, res) {
	try {
		const { parentId, childEntity, childId } = req.params;
		const result = await accessLog.connectEntities(parentId, childEntity, childId);
		res.status(200).json(result);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
}

async function removeRelation(req, res) {
	try {
		const { parentId, childEntity, childId } = req.params;
		const result = await accessLog.removeRelation(parentId, childEntity, childId);
		res.status(200).json(result);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
}

async function populate(req, res) {
	try {
		const { parentId, childEntity } = req.params;
		const result = await accessLog.populate(parentId, childEntity);
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
