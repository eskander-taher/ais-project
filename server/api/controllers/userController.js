const createHandlers = require("../../utils/createHandlers");

const UserService = require("../services/UserService");
const userService = new UserService();

const userController = createHandlers(userService);

module.exports = userController;
