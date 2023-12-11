const express = require("express");
const cors = require("cors");
const swagger = require("./docs/swagger");
const path = require("path")

function createApp() {
	// Express app setup: Enable CORS, parse requests
	const app = express();
	app.use(cors());
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(express.static(path.join(__dirname, '../client/build')))

	// Resources routes
	app.use("/users", require("./api/routes/userRoutes"));
	app.use("/buildings", require("./api/routes/buildingRoutes"));
	app.use("/access", require("./api/routes/accessRoutes"));

	swagger(app);
	return app;
}

module.exports = createApp; 
