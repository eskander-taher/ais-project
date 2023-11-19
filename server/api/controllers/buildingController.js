const createHandlers = require("../../utils/createHandlers");

const BuildingService = require("../services/BuildingService");
const buildingService = new BuildingService();

const buildingController = createHandlers(buildingService);

module.exports = buildingController;
