const buildingService = require("../services/buildingService");

async function createOne(req, res) {
	try {
		const data = req.body;
		const result = await buildingService.createOne(data);
		res.status(201).json({
			success: true,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		});
	}
}
 
async function getAll(req, res) {
	try {
		const result = await buildingService.getAll();
		res.status(200).json({
			success: true,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		});
	}
}

async function getOneById(req, res) {
	try {
		const id = parseInt(req.params.id, 10);
		const result = await buildingService.getOneById(id);
		if (!result) {
			res.status(404).json({
				success: false,
				message: "Not found",
			});
		} else {
			res.status(200).json({
				success: true,
				data: result,
			});
		}
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		});
	}
}

async function updateById(req, res) {
	try {
		const id = parseInt(req.params.id, 10);
		const updatedData = req.body;
		const result = await buildingService.updateById(id, updatedData);
		res.status(200).json({
			success: true,
			data: result,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: false,
			error: error.message,
		});
	}
}

async function deleteById(req, res) {
	try {
		const id = parseInt(req.params.id, 10);
		await buildingService.deleteById(id);
		res.status(204).end();
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		});
	}
}

async function populate(req, res) {
	try {
		const buildingId = parseInt(req.params.buildingId, 10);
		const result = await buildingService.populate(buildingId);

		res.status(200).json({
			success: true,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		});
	}
}

async function connectEntities(req, res) {
	try {
		const userId = parseInt(req.params.userId, 10);
		const buildingId = parseInt(req.params.buildingId, 10);

		const result = await buildingService.connectEntities(userId, buildingId);
		res.status(200).json({
			success: true,
			data: result,
		});
	} catch (error) {

		res.status(500).json({
			success: false,
			error: error.message,
		});
	}
}

async function removeRelation(req, res) {
	try {
		const userId = parseInt(req.params.userId, 10);
		const buildingId = parseInt(req.params.buildingId, 10);

		const result = await buildingService.removeRelation(userId, buildingId);
		res.status(200).json({
			success: true,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		});
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
