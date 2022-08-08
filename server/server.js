const http = require("http");
const app = require("./app");
const port = 3001;
const morgan = require("morgan");
const { sequelize } = require("./models");
app.use(morgan("dev"));
const server = http.createServer(app);

server.listen({ port: 3001 }, async () => {
  console.log("Server running on port 3001");
  await sequelize.sync({ alter: true });
  console.log("Database running on port 3000");
});
