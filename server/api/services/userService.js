const BaseService = require("./_BaseService"); // Adjust the path based on your project structure

class UserService extends BaseService {
	constructor() {
		super("user");
	}
}

module.exports = UserService;
