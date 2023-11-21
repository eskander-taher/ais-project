const yaml = require("js-yaml");
const path = require("path");
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");

function swagger(app) {
	const filename = path.join(__dirname, "swagger.yml");
	const contents = fs.readFileSync(filename, "utf8");
	const data = yaml.load(contents);
	app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(data));
}

module.exports = swagger;
