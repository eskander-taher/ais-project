const accessService = require("../services/accessService");

async function giveAccess(req, res) {
	try {
		const userId = parseInt(req.params.userId, 10);
		const buildingId = parseInt(req.params.buildingId, 10);

		const user = await accessService.populate(userId);
		const building = await accessService.findBuilding(buildingId);

		if (!user) {
			throw new Error("User does not exit");
		}

		if (!building) {
			throw new Error("Building does not exit");
		}

		const hasPermision = user.buildings.some((building) => {
			return building.building.id == buildingId;
		});

		const accessLog = await accessService.createAccessLog({
			userId,
			buildingId,
			accessStatus: hasPermision ? "GRANTED" : "DENIED",
		});

		res.status(201).json({
			success: hasPermision,
			data: accessLog,
		});
	} catch (error) {
		res.json({ success: false, message: error.message });
	}
}

async function getAllAcessLogs(req, res) {
	try {
		const result = await accessService.getAll();
		res.status(200).json({
			success: true,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
}

module.exports = { giveAccess, getAllAcessLogs };
