const userService = require("../services/userService");

async function createOne(req, res) {
	try {
		const data = req.body;
		const result = await userService.createOne(data);
		res.status(201).json({
			success: true,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Internal Server Error",
			error: error,
		});
	}
}

async function getAll(req, res) {
	try {
		const result = await userService.getAll();
		res.status(200).json({
			success: true,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Internal Server Error",
			error: error,
		});
	}
}

async function getOneById(req, res) {
	try {
		const id = parseInt(req.params.id, 10);
		const result = await userService.getOneById(id);
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
			message: "Internal Server Error",
			error: error,
		});
	}
}

async function updateById(req, res) {
	try {
		const id = parseInt(req.params.id, 10);
		const updatedData = req.body;
		const result = await userService.updateById(id, updatedData);
		res.status(200).json({
			success: true,
			data: result,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: false,
			message: "Internal Server Error",
			error: error,
		});
	}
}

async function deleteById(req, res) {
	try {
		const id = parseInt(req.params.id, 10);
		await userService.deleteById(id);
		res.status(204).end();
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Internal Server Error",
			error: error,
		});
	}
}

async function connectEntities(req, res) {
	try {
		const userId = parseInt(req.params.userId, 10);
		const buildingId = parseInt(req.params.buildingId, 10);

		const result = await userService.connectEntities(userId, "buildings", buildingId);
		res.status(200).json({
			success: true,
			data: result,
		});
	} catch (error) {
		console.log(error)
		res.status(500).json({
			success: false,
			message: "Internal Server Error",
			error: error,
		});
	}
}

async function removeRelation(req, res) {
	try {
		const parentId = parseInt(req.params.parentId, 10);
		const childId = parseInt(req.params.childId, 10);
		const childEntity = req.params.childEntity;

		const result = await userService.removeRelation(parentId, childEntity, childId);
		res.status(200).json({
			success: true,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Internal Server Error",
			error: error,
		});
	}
}

async function populate(req, res) {
	try {
		const parentId = parseInt(req.params.parentId, 10);
		const childEntity = req.params.childEntity;

		const result = await userService.populate(parentId, childEntity);
		res.status(200).json({
			success: true,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Internal Server Error",
			error: error,
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
