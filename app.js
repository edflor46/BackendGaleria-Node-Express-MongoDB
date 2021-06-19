/*=========REQUIRE==========*/
require('dotenv').config();
const Server = require('./models/server.model');

/*=========RUN SERVER==========*/
const server = new Server();
server.listen();
