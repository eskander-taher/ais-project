const createApp = require("./app");

const server = createApp();

server.listen(5000, () => console.log("running"));
