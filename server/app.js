const express = require("express");
const cors = require("cors");

function createApp() {
  // Express app setup: Enable CORS, parse requests
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Resources routes
  app.use("/api/users", require("./api/routes/userRoutes"));
  app.use("/api/buildings", require("./api/routes/buildingRoutes"));
  app.use("/api/accesslogs", require("./api/routes/buildingRoutes"));

  return app;
}

module.exports = createApp;
