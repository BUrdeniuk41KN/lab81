const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('TestDB.json'); // Путь к вашему файлу данных
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3005;

server.use(middlewares);
server.use(router);

module.exports = server;r;