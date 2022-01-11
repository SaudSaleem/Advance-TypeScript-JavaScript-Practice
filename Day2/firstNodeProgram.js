let Sequelize = require('sequelize')
var http = require('http');

http.createServer(async function (req, res) {
  console.log('hello my first node program')  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello SAUD');
  // Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('saud_db', 'saudsaleem', '12345678', {
  host: 'localhost',
  dialect: 'postgres'
});
 // const sequelize = new Sequelize('postgres://user:saudsaleem:12345678/my-first-db') // Example for postgres
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}).listen(8080);