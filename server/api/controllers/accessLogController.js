const createHandlers = require("../../utils/createHandlers");

const accessLogService = require("../services/accessLogService");

const accessLogController = createHandlers(accessLogService);

module.exports = accessLogController;
