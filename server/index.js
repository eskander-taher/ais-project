const dotenv = require("dotenv").config();
const createApp = require("./createApp");

const PORT = process.env.PORT | 5000;

const server = createApp();

server.listen(PORT, () => console.log(`Running on port http://144.126.192.45:${PORT}`));
