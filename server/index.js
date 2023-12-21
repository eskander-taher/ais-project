const dotenv = require("dotenv").config();
const createApp = require("./createApp");


const PORT = process.env.PORT | 5000;

const server = createApp();

const simulateUserAccess = require("./utils/simulateUserAccess")

server.listen(PORT, () => {
	console.log(`Running on port http://localhost:${PORT}`);
	simulateUserAccess();
});
