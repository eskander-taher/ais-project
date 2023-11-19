const createHandlers = require("../../utils/createHandlers");

const AccessLogService = require("../services/AccessLogService");
const accessService = new AccessLogService();

const accessController = createHandlers(accessService);

module.exports = accessController;
