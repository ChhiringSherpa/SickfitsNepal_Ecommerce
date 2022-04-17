const http = require("http");
const app = require("./app");
const port = 3001;
const morgan = require("morgan");
app.use(morgan("dev"));
const server = http.createServer(app);

server.listen(port);
