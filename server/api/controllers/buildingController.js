const createHandlers = require("../../utils/createHandlers");

const buildingService = require("../services/buildingService");

const buildingController = createHandlers(buildingService);

module.exports = buildingController;
