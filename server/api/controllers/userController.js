const createHandlers = require("../../utils/createHandlers");

const userService = require("../services/userService");

const userController = createHandlers(userService);

module.exports = userController;
